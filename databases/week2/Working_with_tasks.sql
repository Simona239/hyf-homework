-- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID.
INSERT INTO task (title, description, created, updated, dueDate, statusID, userID) VALUES ('Buy plain tickets to Valencia', 'You know what to do', '2019-08-21', '2019-08-23','2019-09-01', 2, 1);

-- 2. Change the title of a task with these attributes: taskID, newTitle.
UPDATE task SET title = 'Write a poem' WHERE id = 22; 

-- 3. Change the task due date with these attributes: taskID, newDueDate.
UPDATE task SET due_date = '2019-08-29' WHERE id = 25;

-- 4. Change the task status with these attributes: taskID, newStatus. 
UPDATE task SET status_id = '1' WHERE id = 10;

-- 5. Mark a task as complete with this attribute: taskID. 
 UPDATE task SET status_id = '3' WHERE id = 10;

-- 6. Delete task with this attribute: taskID. 
DELETE FROM task WHERE id = 10;