from flask import Flask
from flask_bcrypt import Bcrypt

from .common.Database import db
from .config import configs

flask_bcrypt = Bcrypt()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(configs[config_name])
    db.init_app(app)
    flask_bcrypt.init_app(app)

    return app
