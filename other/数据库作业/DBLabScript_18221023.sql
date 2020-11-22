create database MyIM;
use MyIM;
create table Users(
    U_ID Int not null  AUTO_INCREMENT,
    U_NickName    Varchar(20) not null,
    U_PassWord    Varchar(20) not null,
    U_Sex    INT,
    U_Birthday    Datetime ,
    U_Telephone    Varchar(30),
    U_Email    Varchar(50),
    U_HeadPortrait     Varchar(100),
    U_Age    Int ,
    constraint userkey primary key(U_ID)

)AUTO_INCREMENT 10000;
DESC Users;

create table Friends(
    F_FirendID    Int not null ,
    F_UserID    Int not null,
  	constraint friendkey PRIMARY KEY(F_FirendID,F_UserID)
);
DESC Friends;



create table User_Groups(
    UG_ID    Int  not null primary key AUTO_INCREMENT,  
    UG_Name    Varchar(30) not null,
    UG_CreateTime    Datetime not null,
    UG_AdminID    Int not null,
    UG_ICon    Varchar(30),
    FOREIGN KEY(UG_AdminID) references Users(U_ID)
)AUTO_INCREMENT 10000;
DESC User_Groups;

create table Session(
    S_ID Int not null primary key AUTO_INCREMENT,
    S_TypeID Int  not null,
    S_FinalMessageID INT  unique
);



create table Messages(
   M_ID    Int not null primary key AUTO_INCREMENT,
   M_PostMessages    Text not null,
   M_status    INT not null,
   M_Time    Datetime  not null,
   M_MessagesTypeID    Int not null,
   M_FromUserID     Int not null ,
   M_ToUserID     Int not null  ,
   M_SessionID  INT not null ,
   FOREIGN KEY(M_FromUserID) references Users(U_ID),
   FOREIGN KEY(M_ToUserID) references Users(U_ID),
   FOREIGN KEY(M_SessionID) references Session(S_ID)

);
DESC Messages;

ALTER TABLE Session ADD FOREIGN KEY(S_FinalMessageID) references Messages(M_ID);
DESC Session;

create unique index indexOfSession on Session(S_FinalMessageID);

CREATE VIEW Users_list
AS 
SELECT U_HeadPortrait,U_NickName,U_ID
FROM Users;

CREATE VIEW User_information(U_HeadPortrait,U_ID,U_NickName,U_Sex,U_Age,U_Telephone,U_Email)
AS
SELECT U_HeadPortrait,U_ID,U_NickName,U_Sex,now()-U_Birthday,U_Telephone,U_Email
FROM Users;

CREATE VIEW Chat_record(record,Session)
AS 
SELECT GROUP_CONCAT(M_PostMessages),M_SessionID from Messages
group by M_SessionID;