create table tblGames (
  ID int primary key auto_increment,
  GameCode varchar(16) not null
);

create table tblGamePlayers (
  ID int primary key auto_increment,
  GameID int not null,
  TeamID int,
  PlayerName varchar(128),
  PlayerIndex int,
  HeroID int,
);


create table tblHeros (
  ID int primary key auto_increment,
  CategoryID int,
  Name varchar(128),
);
