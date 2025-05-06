const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db("meineDatenbank");

        // Alle User ausgeben
        console.log("Alle User:");
        console.log(await db.collection("users").find().toArray());

        // Filtern mit einem DateTime-Feld
        console.log("Bestellungen nach dem 01.03.2024:");
        console.log(await db.collection("orders").find({ orderDate: { $gt: new Date("2024-03-01") } }).toArray());

        // ODER-Verknüpfung
        console.log("Produkte, die Elektronik oder Möbel sind:");
        console.log(await db.collection("products").find({
            $or: [{ category: "Electronics" }, { category: "Möbel" }]
        }).toArray());

        // UND-Verknüpfung
        console.log("Produkte unter 1000€ und aus der Kategorie Electronics:");
        console.log(await db.collection("products").find({
            price: { $lt: 1000 },
            category: "Electronics"
        }).toArray());

        // Regex-Suche
        console.log("Produkte mit 'Lap' im Namen:");
        console.log(await db.collection("products").find({ name: /Lap/i }).toArray());

        // Projektion mit _id
        console.log("Namen und Preise der Produkte mit _id:");
        console.log(await db.collection("products").find({}, { projection: { name: 1, price: 1 } }).toArray());

        // Projektion ohne _id
        console.log("Namen und Kategorien der Produkte ohne _id:");
        console.log(await db.collection("products").find({}, { projection: { _id: 0, name: 1, category: 1 } }).toArray());

    } finally {
        await client.close();
    }
}

main().catch(console.error);