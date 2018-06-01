-- Page Controller: Angela
\c rosiehq

CREATE TABLE managers(
  manager_id serial primary key,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  active boolean not null,
  title varchar(255) NOT NULL,
  rosies integer[]
);


INSERT INTO managers(first_name, last_name, active,title, rosies)
VALUES
('Jim', 'Worchester', true, 'Assistant to the Regional Manager', '{1,2,3,4,5}'),
('Bob', 'Welleslsy', true,'Data Ninja', '{1,2,3,4,5}'),
('Ken', 'Newton', true,'Backend Guru', '{1,2,3,4,5}'),
('Forrest', 'Dorchester', true,'CEO',  '{1,2,3,4,5}');

SELECT * FROM managers;
