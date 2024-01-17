from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import pymysql

application = Flask(__name__)
app = application

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:12345678@database-grosana.cqkhlca7jyyx.ap-southeast-1.rds.amazonaws.com/grosana_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.app_context().push()
db = SQLAlchemy(app)
# db.init_app(app)
migrate = Migrate(app, db)

# Refresh connection after 1 hour
SQLALCHEMY_POOL_RECYCLE = 3600
SQLALCHEMY_POOL_TIMEOUT = 20


# ---- Models ----
class Document(db.Model):
    __tablename__ = 'Document'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<User: {self.id}'


class Payment(db.Model):
    __tablename__ = 'Payment'

    id = db.Column(db.Integer, primary_key=True)
    payment_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<User: {self.id}'


class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    email = db.Column(db.String(20))
    password = db.Column(db.String(80))
    tier = db.Column(db.String(10))

    payment = db.relationship('Payment', backref='user', lazy=True)
    document = db.relationship('Document', backref='user', lazy=True)

    def __repr__(self):
        return f'User #{self.id}: {self.name}\n'
    

db.create_all()
