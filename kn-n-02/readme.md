## A) Daten hinzufügen (CREATE Statement)

**Datei-Inhalt:**

[Script](create_data.cypher)

## B) Daten abfragen

#### Erklärung: Alle Knoten und Kanten (inkl. OPTIONAL MATCH)

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]->(m)
RETURN n, r, m;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.03.16.png>)

**Erklärung:**

•	MATCH (n) findet alle Knoten.

•	OPTIONAL MATCH (n)-[r]->(m) versucht, alle ausgehenden Beziehungen zu finden – auch wenn es keine gibt.

•	So bekommt man auch isolierte Knoten, die keine Kanten haben.

#### Vier komplexe Szenarien

##### Bestellungen mit Elektronik-Produkten

**Erklärung:** Zeige alle Bestellungen, die Produkte aus der Kategorie “Elektronik” enthalten.

```cypher
MATCH (u:User)-[:BESTELLT]->(o:Order)-[:BEINHALTET]->(p:Product)-[:GEHÖRT_ZU]->(c:Category)
WHERE c.name = "Elektronik"
RETURN u.name, p.title;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.03.46.png>)

##### Nutzer mit offenen Bestellungen und Produkten über 100€

**Erklärung:** Zeige Benutzer, die offene Bestellungen mit Produkten über 100€ gemacht haben.

```cypher
MATCH (u:User)-[:BESTELLT]->(o:Order)-[:BEINHALTET]->(p:Product)
WHERE o.status = "offen" AND p.price > 100
RETURN u.name, o.order_id, p.title, p.price;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.05.02.png>)

##### Produkte ohne zugehörige Kategorie

**Erklärung:** Finde alle Produkte, die keiner Kategorie zugeordnet sind.

```cypher
MATCH (p:Product)
OPTIONAL MATCH (p)-[:GEHÖRT_ZU]->(c:Category)
WHERE c IS NULL
RETURN p.title;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.05.28.png>)

##### Kategorien mit mehr als einem Produkt

**Erklärung:** Zeige alle Kategorien, die mehr als ein Produkt enthalten.

```cypher 
MATCH (c:Category)<-[:GEHÖRT_ZU]-(p:Product)
WITH c, count(p) AS produktAnzahl
WHERE produktAnzahl > 1
RETURN c.name, produktAnzahl;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.05.45.png>) 

## C) Daten löschen (DETACH)

### Ohne DETACH:

```cypher 
MATCH (p:Product {product_id: 101})
DELETE p;
```

**Erwartung:** Fehler, weil Beziehungen vorhanden sind.

![alt text](<Bildschirmfoto 2025-05-09 um 18.06.51.png>)

### Mit DETACH:

```cypher 
MATCH (p:Product {product_id: 101})
DETACH DELETE p;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.07.13.png>)

**Erwartung:** Erfolgreich gelöscht inklusive aller Kanten.

## D) Daten verändern (UPDATE)

### Preis eines Produkts erhöhen

Erhöhe den Preis des Laptops um 10%.

```cypher 
MATCH (p:Product {title: "Laptop"})
SET p.price = p.price * 1.1
RETURN p.title, p.price;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.07.34.png>)

### Bestellstatus aktualisieren

Ändere Status von Bestellung 202 auf “versendet”.

```cypher
MATCH (o:Order {order_id: 202})
SET o.status = "versendet"
RETURN o;
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.07.56.png>) 

### Produkt einer anderen Kategorie zuordnen

Wechsle die Kategorie des Kochbuchs zu “Haushalt”.

```cypher
MATCH (p:Product {title: "Kochbuch"})-[r:GEHÖRT_ZU]->()
DELETE r
WITH p
MATCH (c:Category {name: "Haushalt"})
CREATE (p)-[:GEHÖRT_ZU]->(c);
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.12.47.png>)

## E) Zusätzliche Klauseln

### FOREACH – wiederholte Operation auf Liste

**Beispiel:** Setze bei mehreren Produkten ein Attribut „inStock“.

```cypher
MATCH (p:Product)
WITH collect(p) AS produkte
FOREACH (p IN produkte |
  SET p.inStock = true
);
```

![alt text](<Bildschirmfoto 2025-05-09 um 18.13.03.png>)

**Erklärung:** Iteriert über Produktliste und fügt Attribut hinzu.

### MERGE – Erstelle nur, wenn nicht vorhanden

**Beispiel:** Nutzer „David“ nur hinzufügen, wenn er noch nicht existiert.

```cypher
MERGE (u:User {email: "david@example.com"})
ON CREATE SET u.name = "David König", u.user_id = 4;
```
**Erklärung:** Vermeidet Duplikate, erstellt nur wenn noch nicht vorhanden.

![alt text](<Bildschirmfoto 2025-05-09 um 18.13.37.png>)


 

 
 
 
 
 
 

 
 
