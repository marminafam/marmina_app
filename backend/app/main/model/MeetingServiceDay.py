from ..util.Database import db


class MeetingServiceDay(db.Model):
    """
    Meeting Service Day Model for storing the meeting
    service days (calendar)
    """
    __tablename__ = "meetings_service_days"

    id = db.Column(db.Integer, autoincrement=True)

    meeting_id = db.Column(
      db.Integer, db.ForeignKey('meetings.id'), nullable=False, primary_key=True)

    speaker_id = db.Column(
      db.Integer, db.ForeignKey('users.id'), nullable=False)

    date = db.Column(db.DateTime, primary_key=True)
    notes_url = db.Column(db.String(1000))
    topic = db.Column(db.String(200))
    recording = db.Column(db.String(200))
    location = db.Column(db.String(200))
