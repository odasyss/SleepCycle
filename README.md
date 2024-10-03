# [Sleep Cycle Calculator](https://sleepcycle.onrender.com)

[Sleep Cycle Calculator](https://sleepcycle.onrender.com) is a web application designed to help you optimize your sleep by calculating the best times to go to bed or wake up based on sleep cycles.

[![screenshot](/static/sleepHome.PNG)](https://sleepcycle.onrender.com)

## Features

- **Digital Clock**: Displays the current time.
- **Sleep Calculation**: Calculate optimal sleep or wake times based on user input.
- **Sleep Now**: Provides optimal wake times if you were to go to sleep immediately.
- **Informational Section**: Explains how sleep cycles work and provides tips for better sleep.

## Technologies Used

- **Frontend**: HTML, CSS (TailwindCSS), JavaScript
- **Backend**: Python (Flask)
- **Database**: SQLAlchemy

## File Structure

- [`sleep_calculator.js`](\SleepCycle\static\js\sleep_calculator.js"): Contains the JavaScript logic for the sleep calculator.
- [`sleep_calculator.html`]("\SleepCycle\templates\sleep_calculator.html"): The main HTML file for the application.
- [`styles.css`]("\SleepCycle\static\css\styles.css"): Custom CSS styles for the application.
- [`database.py`]("\SleepCycle\database.py"): Handles database migrations using Flask and SQLAlchemy.

## How to Use

1. **Choose Calculation Option**: Select whether you want to calculate based on when you need to wake up or when you plan to go to bed.
2. **Enter Time**: Input the desired wake-up or go-to-bed time.
3. **Calculate**: Click the "Calculate" button to see your optimal sleep or wake times.
4. **Sleep Now**: Click the "Sleep Now" button to get optimal wake times if you were to go to sleep immediately.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/odasyss/SleepCycle.git
    ```
2. Navigate to the project directory:
    ```bash
    cd sleep-cycle-calculator
    ```
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the application:
    ```bash
    export FLASK_APP=main.py
    flask run
    ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [National Sleep Foundation](https://www.sleepfoundation.org/how-sleep-works/sleep-cycles-stages) for information on sleep cycles.
- [Sleep Stages](https://www.ncbi.nlm.nih.gov/books/NBK526132/#:~:text=This%20stage%20usually%20starts%2090,and%20penile%2Fclitoral%20tumescence%20occur) for information on stages of each cycle.

## Contact

For any questions or feedback, please contact [odasyss@gmail.com](mailto:odasyss@gmail.com).