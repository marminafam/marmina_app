from flask import request
from flask_restplus import Resource

from ..service.UserService import get_all_users, create_new_user, get_user_by_email, get_user_form_fields


class UserList(Resource):
    def get(self):
        """List all the users in the system"""
        users = get_all_users()
        return users

    def post(self):
        """Creates a new user"""
        data = request.json
        return create_new_user(data=data)


class User(Resource):
    def get(self, email):
        """Get a specific user info given an email address"""
        user = get_user_by_email(email)
        if not user:
            return "User doesn\'t exist.", 404
        return user


class UserFormFields(Resource):
    def get(self):
        """Get the fields needed for creating the user profile form"""
        fields = get_user_form_fields()
        return fields
