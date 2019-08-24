-- create schoolDatabase;
use schoolDatabase;
SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `begins` date NOT NULL,
  `ends` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  INDEX (`name`),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into class (name, begins, ends) values ('JavaScript', '2019-09-01', '2019-11-31');
insert into class (name, begins, ends) values ('Databases', '2019-12-01', '2020-01-31');
insert into class (name, begins, ends) values ('React', '2020-02-01', '2020-03-31');
insert into class (name, begins, ends) values ('NodeJs', '2020-04-01', '2020-05-31');
insert into student (name, email, phone, class_id) values ('Kristen', 'k.thomspon@gmail.com', '99111834', 1);
insert into student (name, email, phone, class_id) values ('James', 'jd45@gmail.com', '45769903', 2);
insert into student (name, email, phone, class_id) values ('Per', 'plysquam@gmail.com', '24344944', 3);
insert into student (name, email, phone, class_id) values ('Diane', 'ddiez@gmail.com', '58104545', 4);


-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished. 
ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished');


