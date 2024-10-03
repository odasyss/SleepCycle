from flask import Flask, render_template
from database import db, run_migrations

app = Flask(__name__, static_folder='static')

# Initialize database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
db.init_app(app)

# Run migrations
run_migrations(app)

app.config['APP_TITLE'] = 'Sleep Cycle Calculator'

@app.route("/")
def home_route():
    return render_template("sleep_calculator.html", app_title=app.config['APP_TITLE'])

if __name__ == "__main__":
    # app.run()
    app.run(host='0.0.0.0', port=8080)