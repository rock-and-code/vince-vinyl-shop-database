
-- Customer Table
INSERT INTO Customer (name, email, phone) VALUES ('John Doe', 'john.doe@example.com', '+15555555555');
INSERT INTO Customer (name, email, phone) VALUES ('Jane Doe', 'jane.doe@example.com', '+15555555556');
INSERT INTO Customer (name, email, phone) VALUES ('Peter Parker', 'peter.parker@example.com', '+15555555557');

-- Seller Table
INSERT INTO Seller (name, phone, email) VALUES ('Amazon', '+15555555555', 'amazon@example.com');
INSERT INTO Seller (name, phone, email) VALUES ('Best Buy', '+15555555556', 'bestbuy@example.com');
INSERT INTO Seller (name, phone, email) VALUES ('Target', '+15555555557', 'target@example.com');

-- Genre Table
INSERT INTO Genre (name) VALUES ('Rock');
INSERT INTO Genre (name) VALUES ('Hard Rock');
INSERT INTO Genre (name) VALUES ('Pop');
INSERT INTO Genre (name) VALUES ('Alternative Rock');
INSERT INTO Genre (name) VALUES ('Electronic');

-- Album Table
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('Abbey Road', 1, 1969, 1);
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('Led Zeppelin IV', 2, 1971, 2);
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('Thriller', 3, 1982, 3);
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('Nevermind', 4, 1991, 2);
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('OK Computer', 5, 1997, 1);
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('In Rainbows', 5, 2007, 3);

-- Artist Table
INSERT INTO Artist (name) VALUES ('The Beatles');
INSERT INTO Artist (name) VALUES ('Led Zeppelin');
INSERT INTO Artist (name) VALUES ('Michael Jackson');
INSERT INTO Artist (name) VALUES ('Nirvana');
INSERT INTO Artist (name) VALUES ('Radiohead');
INSERT INTO Artist (name) VALUES ('Thom Yorke');

-- Request Table
INSERT INTO Request (customer_id, album_id, qty, date) VALUES (1, 1, 1, '2023-09-29');
INSERT INTO Request (customer_id, album_id, qty, date) VALUES (2, 2, 2, '2023-09-30');
INSERT INTO Request (customer_id, album_id, qty, date) VALUES (3, 3, 3, '2023-10-01');


-- Album_Artist Table
INSERT INTO Album_Artist (artist_id, album_id) VALUES (1, 1);
INSERT INTO Album_Artist (artist_id, album_id) VALUES (2, 2);
INSERT INTO Album_Artist (artist_id, album_id) VALUES (3, 3);
INSERT INTO Album_Artist (artist_id, album_id) VALUES (4, 4);
INSERT INTO Album_Artist (artist_id, album_id) VALUES (5, 5);
INSERT INTO Album_Artist (artist_id, album_id) VALUES (6, 6);

--Album Condition Table
INSERT INTO AlbumCondition (condition) VALUES ('Mint');
INSERT INTO AlbumCondition (condition) VALUES ('Good');
INSERT INTO AlbumCondition (condition) VALUES ('Fair');
INSERT INTO AlbumCondition (condition) VALUES ('Poor');


-- Price Table
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (10, 1, '2023-01-29', '2023-12-31');
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (10, 2, '2023-01-29', '2023-12-31');
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (15, 3, '2023-01-01', '2023-12-31');
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (15, 4, '2023-01-01', '2023-12-31');
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (20, 5, '2023-01-01', '2023-12-31');
INSERT INTO Price (price, album_id, start_date, end_date) VALUES (20, 6, '2023-01-01', '2023-12-31');

-- Cost Table
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (5, 1, '2023-01-29', '2023-12-31');
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (5, 2, '2023-01-29', '2023-12-31');
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (7.5, 3, '2023-01-01', '2023-12-31');
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (7.5, 4, '2023-01-01', '2023-12-31');
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (10, 5, '2023-01-01', '2023-12-31');
INSERT INTO Cost (cost, album_id, start_date, end_date) VALUES (10, 6, '2023-01-01', '2023-12-31');


-- PurchaseOrder Table
INSERT INTO PurchaseOrder (seller_id, date, status) VALUES (1, '2023-09-29', 0);
INSERT INTO PurchaseOrder (seller_id, date, status) VALUES (2, '2023-09-30', 0);
INSERT INTO PurchaseOrder (seller_id, date, status) VALUES (3, '2023-10-01', 0);

-- PurchaseOrderDetail Table
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (1, 1, 1);
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (1, 2, 2);
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (2, 3, 3);
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (2, 4, 4);
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (3, 5, 5);
INSERT INTO PurchaseOrderDetail (purchase_order_id, album_id, qty) VALUES (3, 6, 6);

--Stock Table
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (1, 1, 10);
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (2, 1, 5);
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (3, 2, 3);
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (4, 2, 2);
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (5, 1, 1);
INSERT INTO Stock (album_id, album_condition_id, qty_on_hand) VALUES (6, 3, 4);


-- SalesOrder Table
INSERT INTO SalesOrder (customer_id, date, status) VALUES (1, '2023-09-29', 1);
INSERT INTO SalesOrder (customer_id, date, status) VALUES (2, '2023-09-30', 1);
INSERT INTO SalesOrder (customer_id, date, status) VALUES (3, '2023-10-01', 1);

-- SalesOrderDetail Table
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (1, 1, 1);
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (1, 2, 2);
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (2, 3, 3);
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (2, 4, 4);
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (3, 5, 5);
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (3, 6, 6);

-- Invoice Table
INSERT INTO Invoice (customer_id, date, discount) VALUES (1, '2023-09-29', 0);
INSERT INTO Invoice (customer_id, date, discount) VALUES (2, '2023-09-30', 0);
INSERT INTO Invoice (customer_id, date, discount) VALUES (3, '2023-10-01', 0);

-- InvoiceDetail Table
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (1, 1, 1);
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (1, 2, 2);
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (2, 3, 3);
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (2, 4, 4);
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (3, 5, 5);
INSERT INTO InvoiceDetail (invoice_id, album_id, qty) VALUES (3, 6, 6);