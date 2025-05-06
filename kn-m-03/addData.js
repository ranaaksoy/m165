const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db("meineDatenbank");

        // Users Collection
        const userId1 = new ObjectId();
        const userId2 = new ObjectId();
        const userId3 = new ObjectId();

        await db.collection("users").insertOne({
            _id: userId1,
            name: "Max Mustermann",
            email: "max@example.com",
            createdAt: new Date()
        });

        await db.collection("users").insertMany([
            { _id: userId2, name: "Lisa Müller", email: "lisa@example.com", createdAt: new Date() },
            { _id: userId3, name: "Karl Schmidt", email: "karl@example.com", createdAt: new Date() }
        ]);

        // Products Collection
        await db.collection("products").insertMany([
            { name: "Laptop", price: 1200, category: "Electronics" },
            { name: "Smartphone", price: 800, category: "Electronics" },
            { name: "Schreibtisch", price: 300, category: "Möbel" }
        ]);

        // Orders Collection
        const orderId1 = new ObjectId();
        const orderId2 = new ObjectId();

        await db.collection("orders").insertMany([
            { _id: orderId1, userId: userId1, product: "Laptop", amount: 1, orderDate: new Date("2024-04-01") },
            { _id: orderId2, userId: userId2, product: "Smartphone", amount: 2, orderDate: new Date("2024-03-15") }
        ]);

        console.log("Daten erfolgreich hinzugefügt!");
    } finally {
        await client.close();
    }
}

main().catch(console.error);