CREATE USER "user1"@"localhost" IDENTIFIED BY "123456";
CREATE USER "user2"@"localhost" IDENTIFIED BY "123456";
CREATE USER "user3"@"localhost" IDENTIFIED BY "123456";
CREATE USER "user4"@"localhost" IDENTIFIED BY "123456";
CREATE USER "user5"@"localhost" IDENTIFIED BY "123456";

GRANT SELECT
ON TABLE Session
TO "user1"@"localhost";

GRANT INSERT
ON TABLE Session
TO "user2"@"localhost";

GRANT UPDATE
ON TABLE Session
TO "user3"@"localhost";

GRANT DELETE
ON TABLE Session
TO "user4"@"localhost";

GRANT  ALL PRIVILEGES
ON TABLE Session
TO "user5"@"localhost";

GRANT SELECT(S_TypeID)
ON TABLE Session
TO "user1"@"localhost";

GRANT INSERT(S_TypeID)
ON TABLE Session
TO "user2"@"localhost";

GRANT UPDATE(S_TypeID)
ON TABLE Session
TO "user3"@"localhost";

CREATE ROLE Myrole;
GRANT ALL PRIVILEGES
ON TABLE Session
TO Myrole;

GRANT Myrole
TO "user1"@"localhost";

SET DEFAULT ROLE ALL TO "user1"@"localhost";