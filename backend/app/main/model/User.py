from ..util.Database import db


class User(db.Model):
    """ User Model for storing user related details """
    __tablename__ = "users"
    _excluded_keys = ['_sa_instance_state', 'id', 'is_servant', 'is_child', 'is_verified', 'is_system_admin', 'is_family_admin', 'registered_on', 'car_id', 'family_id']

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    public_id = db.Column(db.String(500))
    name = db.Column(db.String(100))
    english_name = db.Column(db.String(100))
    mobile = db.Column(db.Integer)
    has_whatsapp = db.Column(db.Boolean)
    gender = db.Column(db.String(20))
    date_of_birth = db.Column(db.String(100))
    is_student = db.Column(db.Boolean)
    college = db.Column(db.String(100))
    university = db.Column(db.String(100))
    is_servant = db.Column(db.Boolean)
    email = db.Column(db.String(100))
    facebook_url = db.Column(db.String(500))
    image = db.Column(db.String(500))
    is_child = db.Column(db.Boolean)
    is_system_admin = db.Column(db.Boolean)
    is_family_admin = db.Column(db.Boolean)
    is_verified = db.Column(db.Boolean)
    registered_on = db.Column(db.DateTime)
    car_id = db.ForeignKey("cars.id")
    family_id = db.ForeignKey("families.id")

    def serialize(self):
        return dict(
            (key, value)
            for (key, value) in self.__dict__.items()
            if key not in self._excluded_keys
        )

    @classmethod
    def get_fields(self):
        return ["public_id", "name", "english_name", "mobile",
                "has_whatsapp", "gender", "date_of_birth", "is_student", "college",
                "university", "email", "facebook_url", "image"]
