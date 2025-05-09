CREATE
  (u1:User {user_id: 1, name: "Anna Meier", email: "anna@example.com"}),
  (u2:User {user_id: 2, name: "Ben Müller", email: "ben@example.com"}),
  (u3:User {user_id: 3, name: "Clara Schmidt", email: "clara@example.com"}),

  (c1:Category {category_id: 1, name: "Elektronik"}),
  (c2:Category {category_id: 2, name: "Bücher"}),
  (c3:Category {category_id: 3, name: "Haushalt"}),

  (p1:Product {product_id: 101, title: "Smartphone", price: 799}),
  (p2:Product {product_id: 102, title: "Kochbuch", price: 25}),
  (p3:Product {product_id: 103, title: "Wasserkocher", price: 49}),
  (p4:Product {product_id: 104, title: "Laptop", price: 1200}),
  (p5:Product {product_id: 105, title: "Roman", price: 15}),

  (o1:Order {order_id: 201, order_date: "2025-04-01", status: "versendet"}),
  (o2:Order {order_id: 202, order_date: "2025-04-03", status: "offen"}),
  (o3:Order {order_id: 203, order_date: "2025-04-05", status: "storniert"}),

  (u1)-[:BESTELLT]->(o1),
  (u2)-[:BESTELLT]->(o2),
  (u3)-[:BESTELLT]->(o3),

  (o1)-[:BEINHALTET]->(p1),
  (o1)-[:BEINHALTET]->(p2),
  (o2)-[:BEINHALTET]->(p3),
  (o3)-[:BEINHALTET]->(p5),

  (p1)-[:GEHÖRT_ZU]->(c1),
  (p2)-[:GEHÖRT_ZU]->(c2),
  (p3)-[:GEHÖRT_ZU]->(c3),
  (p4)-[:GEHÖRT_ZU]->(c1),
  (p5)-[:GEHÖRT_ZU]->(c2);