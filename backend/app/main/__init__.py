import os
from flask import Flask, make_response
from flask_bcrypt import Bcrypt
from flask_restplus import Api

from .util.Database import db
from .config import configs

from backend.app.main.controller.UserController import UserList, User

flask_bcrypt = Bcrypt()


def index(path=None):
    index_file = 'build/index.html'
    if not os.path.exists(index_file):
        return "Failed to render Angular app."
    return make_response(open('build/index.html').read())


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(configs[config_name])

    app.add_url_rule('/', 'index', index)
    app.add_url_rule('/<path:path>', 'index', index)

    api = Api(doc='/doc')
    api.add_resource(UserList, '/api/users/')
    api.add_resource(User, '/api/users/<email>/')

    db.init_app(app)
    api.init_app(app)

    flask_bcrypt.init_app(app)

    return app
