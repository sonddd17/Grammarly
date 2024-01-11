from flask import Flask

application = Flask(__name__)

app = application

@app.route("/")
def MyGrammarly():
    return "Welcome, Iris!"


if __name__ == "__main__":
    app.run(debug=True)