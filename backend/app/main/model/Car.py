from ..common.Database import db


class Car(db.Model):
    """ Car Model for storing car related details """
    __tablename__ = "cars"

    id = db.Column(db.Integer, autoincrement=True)
    type = db.Column(db.String(100))
    plate_number = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(100))
