-- Page Controller: Karla
\c rosiehq

ALTER TABLE buddies ADD COLUMN photo_link varchar(255);
ALTER TABLE buddies ADD COLUMN rostr_id varchar(255);


UPDATE buddies SET photo_link = 'https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg';
UPDATE buddies SET rostr_id = 1;


SELECT * FROM buddies;
