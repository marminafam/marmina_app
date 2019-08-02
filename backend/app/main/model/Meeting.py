from ..util.Database import db


class Meeting(db.Model):
    """ Meeting Model for storing meeting related details """
    __tablename__ = "meetings"

    id = db.Column(db.Integer, autoincrement=True)

    name = db.Column(db.String(100), primary_key=True)
    year = db.Column(db.Integer, primary_key=True)
    leader = db.ForeignKey('users.id')
