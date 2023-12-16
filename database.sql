CREATE SCHEMA test;
USE test;

CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT
	title VARCHAR(45) NOT NULL
	desc VARCHAR(225) NULL
	price INT NOT NULL
	cover VARCHAR(225) NULL
)

/*
-- Query: SELECT * FROM test.books
*/

/*
INSERT INTO `` (`id`,`title`,`desc`,`cover`,`price`) VALUES (2,'updated title','desc update','cover update',20);
INSERT INTO `` (`id`,`title`,`desc`,`cover`,`price`) VALUES (3,'title from backend','desc from back','cover from back',0);
INSERT INTO `` (`id`,`title`,`desc`,`cover`,`price`) VALUES (4,'title from client','desc from client','cover from client',0);
INSERT INTO `` (`id`,`title`,`desc`,`cover`,`price`) VALUES (5,'title react','desc react','cover react',10);
*/