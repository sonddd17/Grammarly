from dotenv import load_dotenv
import os
import redis
load_dotenv()

class ApplcationConfig:

    SECRET_KEY = os.environ['SECRET_KEY']
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://admin:12345678@database-grosana.cqkhlca7jyyx.ap-southeast-1.rds.amazonaws.com/grosana_db'

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")