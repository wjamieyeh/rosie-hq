-- Page Controller: Angela
\c rosiehq

ALTER TABLE rosies ADD COLUMN classOf integer;

UPDATE rosies SET classOf = 2019;

SELECT * FROM rosies;
