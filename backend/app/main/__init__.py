from flask import Flask
from flask_bcrypt import Bcrypt
from flask_restplus import Api

from .util.Database import db
from .config import configs

from app.main.controller.UserController import UserList, User

flask_bcrypt = Bcrypt()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(configs[config_name])

    api = Api(doc='/doc')
    api.add_resource(UserList, '/api/users/')
    api.add_resource(User, '/api/users/<email>/')

    db.init_app(app)
    api.init_app(app)

    flask_bcrypt.init_app(app)

    return app
