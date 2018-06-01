-- Page Controller: Karla
\c rosiehq

ALTER TABLE mentors ADD COLUMN photo_link varchar(255);
ALTER TABLE mentors ADD COLUMN rostr_id varchar(255);


UPDATE mentors SET photo_link = 'https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg';
UPDATE mentors SET rostr_id = 1;


SELECT * FROM mentors;
