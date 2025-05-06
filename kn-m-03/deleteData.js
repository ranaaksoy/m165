const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db("meineDatenbank");

        // Collections löschen
        await db.collection("users").drop();
        await db.collection("products").drop();
        await db.collection("orders").drop();
        console.log("Alle Collections wurden gelöscht.");

        // Einzelne Einträge löschen (deleteOne)
        await db.collection("users").deleteOne({ _id: new ObjectId("656d2f0b40b2c8a1b3a7e52e") }); // Beispiel _id

        // Mehrere Einträge löschen (deleteMany)
        await db.collection("products").deleteMany({
            $or: [{ name: "Laptop" }, { name: "Smartphone" }]
        });

        console.log("Daten erfolgreich gelöscht!");
    } finally {
        await client.close();
    }
}

main().catch(console.error);