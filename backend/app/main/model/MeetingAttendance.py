from ..common.Database import db


class MeetingAttendance(db.Model):
    """ Stores the attendnace of members in any meeting """
    __tablename__ = "meeting_attendance"

    id = db.Column(db.Integer, autoincrement=True)

    meeting_member_id = db.Column(
      db.Integer, db.ForeignKey('meeting_members.id'), nullable=False, primary_key=True)

    service_day_id = db.Column(
      db.Integer, db.ForeignKey('meetings_service_days.id'), nullable=False, primary_key=True)

    time = db.Column(db.DateTime)
    has_bible = db.Column(db.Boolean)
