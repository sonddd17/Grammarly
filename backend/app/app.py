from config import ApplcationConfig
from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import json
from datetime import datetime, timedelta, timezone
from flask_bcrypt import Bcrypt
from flask_cors import CORS 
from flask_session import Session
from models import db, Document, Payment, User
import pymysql

application = Flask(__name__)
app = application
app.config.from_object(ApplcationConfig)
app.secret_key = 'your_secret_key'
CORS(app, supports_credentials=True)
server_session = Session(app)

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

@app.route('/login', methods=["POST"])
def login_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
  
    user = User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"error": "Wrong email or passwords"}), 401
      
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": email
    })

@app.route("/signup", methods=["POST"])
def signup_user():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
   
    user_exists = User.query.filter_by(email=email).first() is not None
   
    if user_exists:
        return jsonify({"error": "Email already taken"}), 409
       
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
   
    return jsonify({
        "id": new_user.id,
        "name": new_user.name, # "name": "John Doe
        "email": new_user.email,
        "password": new_user.password,
        "tier" : new_user.tier
    })
    
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id", None)

    return "200"

@app.route("/myaccount/<userid>", methods=["GET"])
def myaccount(userid):
    stored_user_id = session.get("user_id", None)

    if not stored_user_id or stored_user_id != int(userid):
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(id=userid).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "password": user.password,  # Note: sending the password is not recommended
        "tier": user.tier
    })


# add CORS support for our frontend pages
cors = CORS(app, resources={r"": {"origins": ["https://localhost/", "http://localhost/*"]}})
if __name__ == "__main__":
    app.run(debug=True)

