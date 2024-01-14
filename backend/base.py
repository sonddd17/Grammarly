from flask import Flask

application = Flask(__name__)
app = application

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Iris Young",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body