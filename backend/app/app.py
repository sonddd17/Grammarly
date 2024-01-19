from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import json
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager 
from flask_bcrypt import Bcrypt
from flask_cors import CORS 
from models import db, Document, Payment, User
import pymysql

application = Flask(__name__)
app = application
CORS(app, supports_credentials=True)

app.config['JWT_SECRET_KEY'] = 'your_secret_key'
# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:12345678@database-grosana.cqkhlca7jyyx.ap-southeast-1.rds.amazonaws.com/grosana_db'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)
app.app_context().push()
# db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)

# Refresh connection after 1 hour
SQLALCHEMY_POOL_RECYCLE = 3600
SQLALCHEMY_POOL_TIMEOUT = 20

bcrypt = Bcrypt(app)

with app.app_context():
    db.create_all()

@app.route('/logintoken', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
  
    user = User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"error": "Wrong email or passwords"}), 401
      
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    access_token = create_access_token(identity=email)
  
    return jsonify({
        "email": email,
        "access_token": access_token
    })

@app.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
   
    user_exists = User.query.filter_by(email=email).first() is not None
   
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
       
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_password, tier='free')
    db.session.add(new_user)
    db.session.commit()
   
    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "password": new_user.password
    })

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response
    
@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route('/profile/<getemail>')
@jwt_required() 
def my_profile(getemail):
    print(getemail)
    if not getemail:
        return jsonify({"error": "Unauthorized Access"}), 401
       
    user = User.query.filter_by(email=getemail).first()
  
    response_body = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "tier" : user.tier
    }
  
    return response_body

# add CORS support for our frontend pages
cors = CORS(app, resources={r"": {"origins": ["https://localhost/", "http://localhost/*"]}})
if __name__ == "__main__":
    app.run(debug=True)

