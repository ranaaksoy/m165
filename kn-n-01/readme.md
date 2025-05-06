# KN-N-01

## A) Installation / Account erstellen
#### Screenshot der Remote Connection:

![alt text](<Bildschirmfoto 2025-05-05 um 11.59.03.png>)

## B) Logisches Modell für Neo4j
![alt text](<Bildschirmfoto 2025-05-05 um 12.21.41.png>)

## Erklärung

Das Diagramm zeigt ein Entity-Relationship-Modell (ER-Modell) für ein einfaches Bestellsystem mit den folgenden Komponenten:

### Entitäten (Tabellen):

**user:** Enthält Kundendaten mit den Attributen user_id (Primärschlüssel), name und email

**order:** Speichert Bestellungen mit den Attributen order_id (Primärschlüssel), order_date und status

**product:** Repräsentiert Produkte mit den Attributen product_id (Primärschlüssel), title und price

**category:** Produktkategorien mit den Attributen category_id (Primärschlüssel) und name


### Beziehungen:

**bestellt:** Ein User kann mehrere Bestellungen aufgeben.
Eine Verbindung zwischen order und product.

**gehört zu:** Ein Produkt gehört zu einer Kategorie