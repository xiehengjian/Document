create database testDB;
use testDB;
create table s(
    sid CHAR(10),
    sname CHAR(10)
);

insert into s values('1','zhangsan');

create table t(
    tid CHAR(10),
    tname CHAR(10)
);
insert into t values('2','lisi');

CREATE USER test1 IDENTIFIED BY "123456";
CREATE USER test2;

GRANT SELECT
ON TABLE s
TO test1;

select * from testDB.s;
delete from testDB.s;

REVOKE INSERT
ON TABLE s
FROM test1;

GRANT ALL PRIVILEGES
ON TABLE t
TO test2;

insert into testDB.t(tid,tname) values(3,"wanger");
select * from testDB.t;

REVOKE ALL PRIVILEGES
ON TABLE t
FROM test2;

drop user test1,test2;
drop database testDB;