SELECT s.student_id, s.name, s.email, c.title
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id
WHERE c.title = 'Database Management Systems';

SELECT c.title,
       ROUND(AVG(g.marks_obtained),2) AS average_marks
FROM Courses c
JOIN Enrollments e ON c.course_id = e.course_id
JOIN Grades g ON e.enrollment_id = g.enrollment_id
GROUP BY c.course_id, c.title;

SELECT DISTINCT s.name, g.marks_obtained
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Grades g ON e.enrollment_id = g.enrollment_id
WHERE g.marks_obtained > (
    SELECT AVG(marks_obtained) FROM Grades
);



SELECT s.name, SUM(g.marks_obtained) AS total_marks
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Grades g ON e.enrollment_id = g.enrollment_id
JOIN Courses c ON e.course_id = c.course_id
WHERE c.title = 'Database Management Systems'
GROUP BY s.student_id, s.name
ORDER BY total_marks DESC
LIMIT 3;


SELECT i.name AS instructor_name,
       COUNT(DISTINCT e.student_id) AS total_students
FROM Instructors i
JOIN Courses c ON i.instructor_id = c.instructor_id
LEFT JOIN Enrollments e ON c.course_id = e.course_id
GROUP BY i.instructor_id, i.name;

SELECT c.course_id, c.title
FROM Courses c
LEFT JOIN Enrollments e ON c.course_id = e.course_id
WHERE e.enrollment_id IS NULL;