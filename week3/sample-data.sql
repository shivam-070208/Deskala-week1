INSERT INTO Students VALUES
(1, 'Shivam Gupta', 'shivam.gupta@email.com', 'B.Tech Computer Science'),
(2, 'Aarav Sharma', 'aarav.sharma@email.com', 'B.Tech Computer Science'),
(3, 'Priya Verma', 'priya.verma@email.com', 'B.Tech Computer Science'),
(4, 'Rohan Mehta', 'rohan.mehta@email.com', 'B.Tech Computer Science'),
(5, 'Ananya Singh', 'ananya.singh@email.com', 'B.Tech Computer Science');



INSERT INTO Instructors VALUES
(101, 'Dr. Rajesh Kumar', 'Computer Science'),
(102, 'Prof. Neha Iyer', 'Computer Science'),
(103, 'Dr. Amitabh Rao', 'Information Technology');


INSERT INTO Courses VALUES
(201, 'Database Management Systems', 4, 101),
(202, 'Data Structures and Algorithms', 4, 102),
(203, 'Operating Systems', 3, 101),
(204, 'Computer Networks', 3, 103);


INSERT INTO Enrollments VALUES
(301, 1, 201, 'Spring'),
(302, 1, 202, 'Spring'),
(303, 2, 201, 'Spring'),
(304, 3, 202, 'Spring'),
(305, 4, 203, 'Fall'),
(306, 5, 204, 'Fall'),
(307, 2, 203, 'Fall'),
(308, 3, 201, 'Spring');


INSERT INTO Assessments VALUES
(401, 201, 'Assignment', 50),
(402, 201, 'Midterm Exam', 100),
(403, 202, 'Assignment', 40),
(404, 202, 'Final Exam', 100),
(405, 203, 'Midterm Exam', 100),
(406, 204, 'Final Exam', 100);


INSERT INTO Grades VALUES
(501, 301, 401, 45),
(502, 301, 402, 88),
(503, 302, 403, 35),
(504, 302, 404, 90),
(505, 303, 401, 40),
(506, 303, 402, 76),
(507, 304, 403, 38),
(508, 305, 405, 81),
(509, 306, 406, 85),
(510, 308, 401, 42);