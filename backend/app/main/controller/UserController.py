from flask import request
from flask_restplus import Resource

from ..service.UserService import get_all_users, create_new_user


class UserList(Resource):
    def get(self):
        """List all the users in the system"""
        return get_all_users()

    def post(self):
        """Creates a new user"""
        data = request.json
        return create_new_user(data=data)
