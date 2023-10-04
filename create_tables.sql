
CREATE TABLE IF NOT EXISTS [Genre] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [name] VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS [Seller] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [name] NVARCHAR(255) NOT NULL,
    [phone] VARCHAR(255) NULL,
    [email] NVARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS [Customer] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [name] NVARCHAR(255) NOT NULL,
    [email] VARCHAR(255) NULL,
    [phone] VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS [Album] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [title] NVARCHAR(255) NOT NULL,
    [genre_id] INTEGER NOT NULL,
    [year] INTEGER NOT NULL,
    [seller_id] INTEGER NOT NULL,
    FOREIGN KEY(genre_id) 
    REFERENCES Genre(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(seller_id) 
    REFERENCES Seller(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [Invoice] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [customer_id] INTEGER NOT NULL,
    [date] DATE NOT NULL,
    [discount] FLOAT NULL,
    [tracking_number] VARCHAR(255),
    FOREIGN KEY(customer_id)
    REFERENCES Customer(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [InvoiceDetail] (
    [invoice_id] INTEGER NOT NULL,
    [album_id] INTEGER NOT NULL,
    [qty] INTEGER NULL,
    PRIMARY KEY(invoice_id, album_id),
    FOREIGN KEY(invoice_id)
    REFERENCES Invoice(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_id)
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [Price] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [album_id] INTEGER NOT NULL,
    [price] FLOAT NOT NULL,
    [start_date] DATE NOT NULL,
    [end_date] DATE NOT NULL,
    FOREIGN KEY(album_id)
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS [Request] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [customer_id] INTEGER NOT NULL,
    [album_id] INTEGER NOT NULL,
    [qty] INTEGER NOT NULL,
    [date] DATE NOT NULL,
    FOREIGN KEY(customer_id) 
    REFERENCES Customer(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_id)
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [SalesOrder] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [customer_id] INTEGER NOT NULL,  
    [date] DATE NOT NULL,
    [status] INTEGER NOT NULL,
    FOREIGN KEY(customer_id) 
    REFERENCES Customer(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [SalesOrderDetail] (
    [sales_order_id] INTEGER NOT NULL,
    [album_id] INTEGER NOT NULL,
    [qty] INTEGER NOT NULL,
    PRIMARY KEY(sales_order_id, album_id),
    FOREIGN KEY(sales_order_id) 
    REFERENCES SalesOrder(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_id) 
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [PurchaseOrder] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [seller_id] INTEGER NOT NULL,
    [date] DATE NOT NULL,
    [status] INTEGER NULL,
    FOREIGN KEY(seller_id) 
    REFERENCES Seller(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS [PurchaseOrderDetail] (
    [purchase_order_id] INTEGER NOT NULL,
    [album_id] INTEGER NOT NULL,
    [qty] INTEGER NOT NULL,
    PRIMARY KEY(purchase_order_id, album_id),
    FOREIGN KEY(purchase_order_id) 
    REFERENCES PurchaseOrder(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_id) 
    REFERENCES Album(id)
);

CREATE TABLE IF NOT EXISTS [Role] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [name] VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS [Employee] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [first_name] NVARCHAR(255) NOT NULL,
    [last_name] NVARCHAR(255) NOT NULL,
    [date_of_birth] DATE NOT NULL,
    [role_id] INTEGER NOT  NULL,
    FOREIGN KEY(role_id) 
    REFERENCES Role(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS [Cost] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [album_id] INTEGER NOT NULL,
    [cost] FLOAT NOT NULL,
    [start_date] DATE NOT NULL,
    [end_date] DATE NOT NULL,
    FOREIGN KEY(album_id)
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS [AlbumCondition] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [condition] VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS [Stock] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [album_id] INTEGER NOT NULL,
    [album_condition_id] INTEGER NOT NULL,
    [qty_on_hand] INTEGER NOT NULL,
    FOREIGN KEY(album_id) 
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_condition_id) 
    REFERENCES AlbumCondition(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);




CREATE TABLE IF NOT EXISTS [Artist] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [name] NVARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS [Album_Artist] (
    [artist_id] INTEGER NOT NULL,
    [album_id] INTEGER NOT NULL,
    PRIMARY KEY(artist_id, album_id),
    FOREIGN KEY(artist_id)
    REFERENCES Artist(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(album_id)
    REFERENCES Album(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

