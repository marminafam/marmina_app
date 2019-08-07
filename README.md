# MarMina Application

## Development Hints

### Frontend

#### Environment Setup

- Install node 10 & npm globally (depending on your OS).
- Install Angular-cli globally with npm.
  - `npm install -g @angular/cli`

#### Running the Frontend Application

   - `cd frontend`
   - `npm install`
    This will generate a `node_modules` directory with all project dependencies included.
   - `npm run serve`

Server should be running @ http://localhost:4200.

### Backend

#### Environment Setup

- Install python3 & pip (depending on your OS).
- Install the application requirements.
  - `pip3 install -r requirements.txt`

#### Creating a New Database Instance

Use "init" step to create the local sqlite database first, and then use the migrate & upgrade commands to apply any new model changes.

- `python3 manage.py db init`

#### Migrating the Database Changes

Use `migrate` then `upgrade` for your new changes in database model to take effect in the local sqlite database.

- `python3 manage.py db migrate --message "My awesome db change"`
- `python3 manage.py db upgrade`

#### Running the Application

- `python3 manage.py run`

The backend application will be running on http://localhost:5000.
