from flask import Flask

# NA.
# NOTE: AG3 - this is your fail safe and back up in case you can not navigate Ray.
app = Flask(__name__)
@app.route('/hello/', methods=['GET'])
def welcome():
    return "Hello World!"
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)