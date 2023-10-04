--1. Two or three simple SELECTs with various WHERE criteria:

-- Find all albums released in 1969.
SELECT * FROM Album WHERE year = 1969;

-- Find all albums with a year of 2000 or more.
SELECT * FROM Album WHERE year >= 2000;

-- Find all sales orders that have been placed by customer ID 1.
SELECT * FROM SalesOrder WHERE customer_id = 1;

--2. Two or three queries using aggregate functions:
-- Count the number of albums in the database.
SELECT COUNT(*) AS total_albums FROM Album;

-- Find the average price of all albums in the database.
SELECT AVG(Price.price) AS average_price FROM Album INNER JOIN Price ON Price.album_id = Album.id;

-- Find the average sales order total.
SELECT ROUND(AVG(total_sales),2) AS average_sales_order FROM (
	SELECT 
		ROUND(SUM(Price.price * sod.qty),2) AS total_sales
		FROM SalesOrderDetail sod
	INNER JOIN  SalesOrder ON sod.sales_order_id = SalesOrder.id
	INNER JOIN Price ON sod.album_id = Price.album_id AND SalesOrder.date >= price.start_date AND SalesOrder.date <= Price.end_date
	GROUP BY SalesOrder.customer_id
)  MYQUERY;


--3. At least two queries that use joins:

--Find the highest sales order amount
SELECT TOP 1
	ROUND(SUM(Price.price * sod.qty),2) AS total_sales
FROM SalesOrderDetail sod
INNER JOIN  SalesOrder ON sod.sales_order_id = SalesOrder.id
INNER JOIN Price ON sod.album_id = Price.album_id AND SalesOrder.date >= price.start_date AND SalesOrder.date <= Price.end_date
GROUP BY SalesOrder.customer_id
ORDER BY total_sales DESC;

-- Find the total sales for each customer.
SELECT 
	SalesOrder.customer_id AS customer_id,
	ROUND(SUM(Price.price * sod.qty),2) AS total_sales 
	FROM SalesOrderDetail sod
INNER JOIN  SalesOrder ON sod.sales_order_id = SalesOrder.id
INNER JOIN Price ON sod.album_id = Price.album_id AND SalesOrder.date >= price.start_date AND SalesOrder.date <= Price.end_date
GROUP BY SalesOrder.customer_id;

--4. Two or three INSERT statements:
-- Insert a new album into the database.
INSERT INTO Album (title, genre_id, year, seller_id) VALUES ('Dark Side of the Moon', 5, 1973, 3);

-- Insert a new sales order into the database.
INSERT INTO SalesOrder (customer_id, date, status) VALUES (3, '2023-09-30', 1);

-- Insert a new sales order line item into the database.
INSERT INTO SalesOrderDetail (sales_order_id, album_id, qty) VALUES (4, 7, 1);

--5. One or two UPDATEs and/or a DELETE:

-- Update the price of an album in the database.
UPDATE Price SET price = 15 WHERE id = 1;

-- Delete a sales order from the database.
DELETE FROM SalesOrder WHERE id = 4;