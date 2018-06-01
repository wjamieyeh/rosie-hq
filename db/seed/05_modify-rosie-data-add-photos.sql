-- Page Controller: Angela
\c rosiehq

ALTER TABLE rosies ADD COLUMN photo_link varchar(255);
ALTER TABLE rosies ADD COLUMN rostr_id varchar(255);


UPDATE rosies SET photo_link = 'https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg';
UPDATE rosies SET rostr_id = 1;


SELECT * FROM rosies;
