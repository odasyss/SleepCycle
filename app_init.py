import os
import logging
from flask import Flask
from database import db, run_migrations
from flask_sqlalchemy import SQLAlchemy

def create_initialized_flask_app():
    app = Flask(__name__, static_folder='static')

    # Initialize database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
    db.init_app(app)

    # Run migrations
    run_migrations(app)

    app.config['APP_TITLE'] = 'Sleep Cycle Calculator'

    return app