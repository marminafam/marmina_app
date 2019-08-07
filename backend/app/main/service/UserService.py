import uuid

from app.main.model.User import User
from app.main.util.Database import save_and_commit

from app.main.util.Database import db


def create_new_user(data):
    if not data:
        return "You must provide data in the request body.", 500
    if 'email' not in data:
        return "You must provide an email address in the request body.", 500

    user = User.query.filter_by(email=data['email']).first()
    if user:
        return "User already exists.", 409

    new_user = User(
        public_id=str(uuid.uuid4()),
        **data
    )
    save_and_commit(db, new_user)
    return "User has been added successfully!", 201


def get_all_users():
    users = db.session.query(User).all()
    return list(map(lambda user: user.serialize(), users))


def get_user_by_id(public_id):
    user = db.session.query(User).filter_by(public_id=public_id).first()
    return user.serialize() if user else None


def get_user_by_email(user_email):
    user = db.session.query(User).filter_by(email=user_email).first()
    return user.serialize() if user else None


def get_user_form_fields():
    return User.get_fields()
