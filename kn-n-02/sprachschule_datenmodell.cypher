CREATE 
  (k1:Kurs {name: "Englisch A1", niveau: "Anfänger", dauer: 90}),
  (k2:Kurs {name: "Deutsch B2", niveau: "Fortgeschritten", dauer: 120}),
  (k3:Kurs {name: "Französisch A2", niveau: "Anfänger", dauer: 90}),
  (k4:Kurs {name: "Spanisch C1", niveau: "Experte", dauer: 120}),

  (l1:Lehrperson {name: "Frau Meier", fach: "Englisch"}),
  (l2:Lehrperson {name: "Herr Schmidt", fach: "Deutsch"}),
  (l3:Lehrperson {name: "Frau Dubois", fach: "Französisch"}),

  (s1:Schueler {name: "Ali", alter: 22}),
  (s2:Schueler {name: "Maria", alter: 19}),
  (s3:Schueler {name: "Jonas", alter: 25}),
  (s4:Schueler {name: "Lina", alter: 21}),
  (s5:Schueler {name: "Tom", alter: 23}),

  (r1:Raum {nummer: "101", gebaeude: "A"}),
  (r2:Raum {nummer: "202", gebaeude: "B"}),

  (l1)-[:UNTERRICHTET]->(k1),
  (l2)-[:UNTERRICHTET]->(k2),
  (l3)-[:UNTERRICHTET]->(k3),

  (s1)-[:BELEGT]->(k1),
  (s2)-[:BELEGT]->(k1),
  (s3)-[:BELEGT]->(k2),
  (s4)-[:BELEGT]->(k3),
  (s5)-[:BELEGT]->(k3),

  (k1)-[:FINDET_STATT_IN]->(r1),
  (k2)-[:FINDET_STATT_IN]->(r1),
  (k3)-[:FINDET_STATT_IN]->(r2),
  (k4)-[:FINDET_STATT_IN]->(r2)