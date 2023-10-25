from flask import Flask, request, jsonify
from flask_mail import Mail, Message

# Load environment variables from

app = Flask(__name__)


mail = Mail(app)

@app.route('/')
def index():
    return render_template('Personal Portfolio Website.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Validate email format
    if not is_valid_email(email):
        return jsonify({'error': 'Invalid email format'})

    # Email format is correct, continue with form submission

    # Sending the email using Flask-Mail
    msg = Message(f'{name} sent you a message', sender='notification@contact.form', recipients=['mmothiba4@gmail.com'])
    msg.body = f'Name: {name}\nEmail: {email}\nMessage: {message}'

    try:
        mail.send(msg)
        return jsonify({'success': 'Form submitted successfully'})
    except Exception as e:
        print(e)
        return jsonify({'error': 'Something went wrong.'})

def is_valid_email(email):
    # Email format regular expression
    email_pattern = r'^[\w\.-]+@[\w\.-]+$'

    if re.match(email_pattern, email):
        return True
    else:
        return False

if __name__ == '__main__':
    app.run(debug=True)