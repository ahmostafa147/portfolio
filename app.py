from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    try:
        # SMTP Configuration
        smtp_server = 'smtp.example.com'  # Update with your SMTP server address
        smtp_port = 587  # Update with your SMTP server port
        smtp_username = 'your-email@example.com'  # Update with your SMTP username
        smtp_password = 'your-password'  # Update with your SMTP password

        # Email Content
        subject = 'New message from your website'
        body = f'Name: {name}\nEmail: {email}\nMessage:\n{message}'

        # Send Email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(smtp_username, smtp_username, f'Subject: {subject}\n\n{body}')

        return 'Your message has been sent successfully.'
    except Exception as e:
        return f'Oops! Something went wrong. Please try again later.\nError: {e}'

if __name__ == '__main__':
    app.run(debug=True)
