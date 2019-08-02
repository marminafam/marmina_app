from ..util.Database import db


class Family(db.Model):
    """ Family Model for storing family related details """
    __tablename__ = "families"

    id = db.Column(db.Integer, autoincrement=True)

    father = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)

    mother = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)

    child = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=True, primary_key=True)
