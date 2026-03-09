from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["vendor_db"]
orders = db["orders"]

# Home test
@app.route("/")
def home():
    return jsonify({"message": "Backend running"})

# ADD ORDER API
@app.route("/add-order", methods=["POST"])
def add_order():
    data = request.json

    order = {
        "vendor": data["vendor"],
        "product": data["product"],
        "amount": data["amount"],
        "date": data["date"],
        "created_at": datetime.now()
    }

    orders.insert_one(order)
    return jsonify({"message": "Order saved successfully"})

# GET ORDERS API
@app.route("/get-orders", methods=["GET"])
def get_orders():
    all_orders = list(orders.find({}, {"_id": 0}))
    return jsonify(all_orders)

if __name__ == "__main__":
    print("Starting Flask server...")
    app.run(debug=True)
