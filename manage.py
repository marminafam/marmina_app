import os
import unittest

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from flask import make_response

from backend.app.main import create_app, db
from backend.app.main.model import User, Car, Family, Meeting, MeetingMember, MeetingServiceDay, MeetingAttendance

app = create_app(os.getenv("MARMINA_ENV") or "dev")
app.app_context().push()

manager = Manager(app)
migrate = Migrate(app, db)

with app.app_context():
    if db.engine.url.drivername == 'sqlite':
        migrate.init_app(app, db, render_as_batch=True)
    else:
        migrate.init_app(app, db)

manager.add_command('db', MigrateCommand)

static_folder_root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "build")
app.static_folder = static_folder_root

app.static_url_path = "/static/"


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    index_file = 'build/index.html'
    if not os.path.exists(index_file):
        return "Failed to render Angular app."
    return make_response(open('build/index.html').read())


@manager.command
def run(port=5000):
    app.run(port=port)


@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


if __name__ == '__main__':
    manager.run()
