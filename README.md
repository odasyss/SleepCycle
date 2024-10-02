# Sleep Cycle Calculator

The Sleep Cycle Calculator is a web application designed to help you optimize your sleep by calculating the best times to go to bed or wake up based on sleep cycles.

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

- [`sleep_calculator.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22wsl%24%22%2C%22path%22%3A%22%2FUbuntu%2Fhome%2Fodasys%2FCode%2FSleepCycle%2Fstatic%2Fjs%2Fsleep_calculator.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22f150fd99-4aa3-42e0-ba91-df8ea27f0376%22%5D "\\wsl$\Ubuntu\home\odasys\Code\SleepCycle\static\js\sleep_calculator.js"): Contains the JavaScript logic for the sleep calculator.
- [`sleep_calculator.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22wsl%24%22%2C%22path%22%3A%22%2FUbuntu%2Fhome%2Fodasys%2FCode%2FSleepCycle%2Ftemplates%2Fsleep_calculator.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22f150fd99-4aa3-42e0-ba91-df8ea27f0376%22%5D "\\wsl$\Ubuntu\home\odasys\Code\SleepCycle\templates\sleep_calculator.html"): The main HTML file for the application.
- [`styles.css`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22wsl%24%22%2C%22path%22%3A%22%2FUbuntu%2Fhome%2Fodasys%2FCode%2FSleepCycle%2Fstatic%2Fcss%2Fstyles.css%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22f150fd99-4aa3-42e0-ba91-df8ea27f0376%22%5D "\\wsl$\Ubuntu\home\odasys\Code\SleepCycle\static\css\styles.css"): Custom CSS styles for the application.
- [`database.py`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22wsl%24%22%2C%22path%22%3A%22%2FUbuntu%2Fhome%2Fodasys%2FCode%2FSleepCycle%2Fdatabase.py%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22f150fd99-4aa3-42e0-ba91-df8ea27f0376%22%5D "\\wsl$\Ubuntu\home\odasys\Code\SleepCycle\database.py"): Handles database migrations using Flask and SQLAlchemy.

## How to Use

1. **Choose Calculation Option**: Select whether you want to calculate based on when you need to wake up or when you plan to go to bed.
2. **Enter Time**: Input the desired wake-up or go-to-bed time.
3. **Calculate**: Click the "Calculate" button to see your optimal sleep or wake times.
4. **Sleep Now**: Click the "Sleep Now" button to get optimal wake times if you were to go to sleep immediately.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/sleep-cycle-calculator.git
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
    flask run
    ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [National Sleep Foundation](https://www.sleepfoundation.org/how-sleep-works/sleep-cycles-stages) for information on sleep cycles.

## Contact

For any questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).