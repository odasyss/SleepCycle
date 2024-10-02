import logging
from flask import render_template
from flask import current_app as app

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def register_routes(app):
    @app.route("/sleep-calculator")
    def sleep_calculator():
        return render_template("sleep_calculator.html", app_title=app.config['APP_TITLE'])