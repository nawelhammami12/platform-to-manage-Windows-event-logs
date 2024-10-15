from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Autorise les requêtes CORS depuis tous les domaines

# Configuration de la connexion MongoDB
mongo_client = MongoClient(
    'mongodb://new_windows_user:new_user_password@localhost:27017/new_windows_logs?authSource=new_windows_logs&authMechanism=SCRAM-SHA-256')
db = mongo_client['new_windows_logs']
events_collection = db['Events-windows3']
whitelist_collection = db['ip_whitelist1111223']

@app.route('/', methods=['GET'])
def home():
    return "Bienvenue sur l'API de traitement des logs!"

@app.route('/api/logs', methods=['GET'])
def get_logs():
    try:
        # Récupérer les filtres de la requête
        ip_filter = request.args.get('ip')
        executable_filter = request.args.get('executable_status')

        # Préparer les filtres pour la requête MongoDB
        query = {}
        if ip_filter:
            query['ip_address'] = ip_filter
        if executable_filter:
            query['executable_status'] = executable_filter

        # Récupérer les documents de la collection
        logs = list(events_collection.find(query, {'_id': 0}))
        return jsonify(logs)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/whitelist', methods=['GET'])
def get_whitelist():
    try:
        # Récupérer les adresses IP de la whitelist
        whitelist = list(whitelist_collection.find({}, {'_id': 0}))
        return jsonify(whitelist)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

