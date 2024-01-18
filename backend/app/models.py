# models.py

from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

class Document(db.Model):
    __tablename__ = 'document'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Document: {self.id}>'


class Payment(db.Model):
    __tablename__ = 'payment'

    id = db.Column(db.Integer, primary_key=True)
    payment_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Payment: {self.id}>'


def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    name = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(20), unique=True)
    password = db.Column(db.String(80), nullable=False)
    tier = db.Column(db.String(10), default='free')

    payment = db.relationship('Payment', backref='user', lazy=True)
    document = db.relationship('Document', backref='user', lazy=True)

    def __repr__(self):
        return f'User #{self.id}: {self.name}\n'