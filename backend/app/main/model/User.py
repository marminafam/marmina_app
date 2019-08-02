from ..common.Database import db


class User(db.Model):
    """ User Model for storing user related details """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    english_name = db.Column(db.String(100))
    mobile = db.Column(db.Integer)
    whatsapp = db.Column(db.Boolean)
    gender = db.Column(db.String(20))
    date_of_birth = db.Column(db.String(100))
    student = db.Column(db.Boolean)
    college = db.Column(db.String(100))
    university = db.Column(db.String(100))
    servant = db.Column(db.Boolean)
    email = db.Column(db.String(100))
    image = db.Column(db.String(500))
    child = db.Column(db.Boolean)
    system_admin = db.Column(db.Boolean)
    family_admin = db.Column(db.Boolean)
    car_id = db.ForeignKey("cars.id")
    family_id = db.ForeignKey("families.id")
