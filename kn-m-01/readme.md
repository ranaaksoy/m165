## KN-M-01

# MongoDB Befehle und Erklärungen

## Tabellenübersicht

| Befehl                 | Erklärung |
|------------------------|-----------|
| `show dbs;`           | Zeigt alle vorhandenen Datenbanken an. |
| `show databases;`      | Alternative Schreibweise für `show dbs;`. |
| `use <Datenbank>;`    | Wechselt zur angegebenen Datenbank. |
| `show collections;`    | Zeigt alle Collections der aktuellen Datenbank an. |
| `show tables;`        | Alternative Schreibweise für `show collections;`. |
| `var test="hallo";`  | Erstellt eine JavaScript-Variable in der MongoDB-Shell. |
| `test;`               | Gibt den Inhalt der Variable `test` aus. |

![alt text](<Bildschirmfoto 2025-03-14 um 14.09.09.png>)


## Unterschied zwischen Collections und Tables
- **Collections**: Entsprechen Tabellen in relationalen Datenbanken, speichern jedoch JSON-Dokumente anstelle von Zeilen und Spalten.
- **Tables**: Begriff aus relationalen Datenbanken, in MongoDB aber durch Collections ersetzt.

## JSON datentyp erklärung

**Erklärung:**
•	MongoDB speichert das Datum standardmäßig als String, wenn es nicht speziell als ISODate() definiert wird.
•	Um ein echtes Datum direkt einzufügen, hätte man dies verwenden müssen:

{
  "geburtsdatum": { "$date": "1990-05-15T00:00:00.000Z" }
}

![alt text](<Bildschirmfoto 2025-03-14 um 14.00.37.png>)

![alt text](<Bildschirmfoto 2025-03-14 um 14.04.26.png>)