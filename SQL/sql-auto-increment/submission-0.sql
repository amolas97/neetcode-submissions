create sequence gov_id start with 1000 increment by 3;

create table gov_employee (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    gov_id INTEGER DEFAULT nextval('gov_id'),
    name TEXT
);

-- Do not modify below this line --
INSERT INTO gov_employee (name) 
  VALUES
      ('John Doe'),
      ('Jane Doe'),
      ('Jim Beam');

SELECT * FROM gov_employee;