const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db("meineDatenbank");

        // updateOne() mit _id
        await db.collection("users").updateOne(
            { _id: new ObjectId("656d2f0b40b2c8a1b3a7e52e") },
            { $set: { email: "neueemail@example.com" } }
        );

        // updateMany() mit ODER
        await db.collection("products").updateMany(
            { $or: [{ category: "Electronics" }, { category: "Möbel" }] },
            { $set: { discount: true } }
        );

        // replaceOne()
        await db.collection("orders").replaceOne(
            { _id: new ObjectId("656d2f0b40b2c8a1b3a7e52f") },
            { userId: new ObjectId(), product: "Tablet", amount: 1, orderDate: new Date() }
        );

        console.log("Daten erfolgreich aktualisiert!");
    } finally {
        await client.close();
    }
}

main().catch(console.error);