from ..common.Database import db


class MeetingMember(db.Model):
    """
    Stores the many-to-many relationship between the meeting and users,
    plus any extra info needed
    """
    __tablename__ = "meeting_members"

    id = db.Column(db.Integer, autoincrement=True)

    meeting_id = db.Column(
      db.Integer, db.ForeignKey('meetings.id'), nullable=False, primary_key=True)

    member_id = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)

    servant_id = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=True)

    is_servant = db.Column(db.Boolean)
    is_leader = db.Column(db.Boolean)
    has_edit = db.Column(db.Boolean)
