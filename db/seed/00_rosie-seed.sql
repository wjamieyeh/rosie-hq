-- Page Controller: Angela
CREATE DATABASE rosiehq;

\c rosiehq

CREATE TABLE rosies(
  rosie_id serial primary key,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  active boolean not null,
  manager INTEGER NOT NULL,
  buddy INTEGER NOT NULL,
  mentor INTEGER NOT NULL
);


INSERT INTO rosies(first_name, last_name, active,manager, buddy, mentor)
VALUES
('Angela', 'Alexander', true, 1, 1,2),
('Jamie', 'XXX', true,1, 1,2),
('Jen', 'BBB', true,1, 1,2),
('Karla', 'JJJ', true,2, 2,34);

SELECT * FROM rosies;
