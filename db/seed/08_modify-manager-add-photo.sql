-- Page Controller: Karla
\c rosiehq

ALTER TABLE managers ADD COLUMN photo_link varchar(255);
ALTER TABLE managers ADD COLUMN rostr_id varchar(255);


UPDATE managers SET photo_link = 'https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg';
UPDATE managers SET rostr_id = 1;


SELECT * FROM managers;
