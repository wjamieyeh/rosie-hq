-- Page Controller: Angela
\c rosiehq

CREATE TABLE buddies(
  buddy_id serial primary key,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  active boolean not null,
  title varchar(255) NOT NULL,
  rosies integer[]
);


INSERT INTO buddies(first_name, last_name, active,title, rosies)
VALUES
('Jim', 'Worchester', true, 'Associate Software Engineer', '{1,2,3,4,5}'),
('Bob', 'Welleslsy', true,'Associate Software Engineer', '{1}'),
('Ken', 'Newton', true,'Associate Software Engineer', '{1,2,4,5}'),
('Forrest', 'Dorchester', true,'Associate Software Engineer',  '{4,5}');

SELECT * FROM buddies;
