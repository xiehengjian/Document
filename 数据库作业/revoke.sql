REVOKE SELECT
ON TABLE Session
FROM "user1"@"localhost";

REVOKE INSERT
ON TABLE Session
FROM "user2"@"localhost";

REVOKE UPDATE
ON TABLE Session
FROM "user3"@"localhost";

REVOKE DELETE
ON TABLE Session
FROM "user4"@"localhost";

REVOKE  ALL PRIVILEGES
ON TABLE Session
FROM "user5"@"localhost";

REVOKE SELECT(S_TypeID)
ON TABLE Session
FROM "user1"@"localhost";

REVOKE INSERT(S_TypeID)
ON TABLE Session
FROM "user2"@"localhost";

REVOKE UPDATE(S_TypeID)
ON TABLE Session
FROM "user3"@"localhost";

REVOKE Myrole FROM "user1"@"localhost";