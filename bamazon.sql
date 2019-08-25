drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;


create table products (
	id int not null auto_increment,
    prodName varchar(60) not null,
    deptName varchar(30) not null,
    price decimal(10,2),
    quantity int not null,
    PRIMARY KEY (id)
);

INSERT INTO products (prodName, deptName, price, quantity)
VALUES ("Flesh Light", "Adult Toys", 34.99,  69),
("Lubricant", "Accessories", 5.49,  120),
("Betty White Doll", "Inflatables", 99.99,  13),
("Pink Handcuffs", "Adult Toys", 9.99,  20),
("Fake Boobs", "Adult Toys", 24.95,  62),
("Bob Ross Doll", "Inflatables", 99.99,  6),
("Star Wars Lingerie", "Costumes", 14.99,  78),
("Yoai Enciclopedia", "Video / Books", 19.99,  18),
("Economy Butt Plug", "Accessories", 2.99,  143),
("Star Wars: The Empire Strikes From the Back", "Video / Books", 34,  69);

SELECT * FROM products;