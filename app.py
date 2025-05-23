from flask import Flask, send_from_directory, jsonify
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder='Sign-Language-to-Text-Speech-master/dist/sign-translate/browser')

@app.route('/')
def serve_angular():
    try:
        # Redirect to the main translation interface
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        logger.error(f"Error serving index.html: {str(e)}")
        return jsonify({'error': 'Failed to serve index.html'}), 500

@app.route('/sign/<path:path>')
def serve_static(path):
    try:
        return send_from_directory(app.static_folder, path)
    except Exception as e:
        logger.error(f"Error serving static file {path}: {str(e)}")
        return jsonify({'error': f'File {path} not found'}), 404

@app.route('/sign/<path:path>')
def serve_static_fallback(path):
    try:
        return send_from_directory(app.static_folder, path)
    except Exception as e:
        logger.error(f"Error serving static file {path}: {str(e)}")
        return jsonify({'error': f'File {path} not found'}), 404

@app.route('/sign')
def sign_redirect():
    return redirect('/sign/')

@app.route('/health')
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    try:
        logger.info("Starting Flask backend server on port 5003")
        app.run(debug=True, port=5003)
    except Exception as e:
        logger.error(f"Failed to start Flask server: {str(e)}")
        raise