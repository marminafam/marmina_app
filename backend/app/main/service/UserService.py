import uuid

from app.main.model.User import User
from app.main.util.Database import save_and_commit


def create_new_user(data):
    user = User.query.filter_by(email=data['email']).first()

    if user:
        response = {'msg': 'User already exists.'}
        return response, 409

    new_user = User(
        public_id=str(uuid.uuid4()),
        **data
    )
    save_and_commit(db, new_user)
    response = {'msg': 'User has been added successfully!'}
    return response, 201


def get_all_users():
    return User.query.all()


def get_user(public_id):
    return User.query.filter_by(public_id=public_id).first()
