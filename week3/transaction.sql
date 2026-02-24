START TRANSACTION;

INSERT INTO Enrollments (enrollment_id, student_id, course_id, semester)
VALUES (309, 1, 201, 'Spring');

INSERT INTO Grades (grade_id, enrollment_id, assessment_id, marks_obtained)
VALUES (511, 309, 401, 0);

COMMIT;


START TRANSACTION;

INSERT INTO Enrollments (enrollment_id, student_id, course_id, semester)
VALUES (310, 1, 202, 'Fall');

INSERT INTO Grades (grade_id, enrollment_id, assessment_id, marks_obtained)
VALUES (512, 310, 403, 150);
-- this will give a err because it exceeds the max marks limit , to verify check is working properly
ROLLBACK;