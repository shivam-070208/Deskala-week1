create database if not exists WEEK3_SQL;
use WEEK3_SQL;

CREATE TABLE IF NOT EXISTS Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    program VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Instructors (
    instructor_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    credits INT NOT NULL,
    instructor_id INT,
    CHECK (credits > 0),
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

CREATE TABLE IF NOT EXISTS Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    semester ENUM('Spring', 'Summer', 'Fall') NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE IF NOT EXISTS Assessments (
    assessment_id INT PRIMARY KEY,
    course_id INT,
    type VARCHAR(50) NOT NULL,
    max_marks INT NOT NULL,
    CHECK (max_marks > 0),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE IF NOT EXISTS Grades (
    grade_id INT PRIMARY KEY,
    enrollment_id INT,
    assessment_id INT,
    marks_obtained INT NOT NULL CHECK (marks_obtained >= 0),
    FOREIGN KEY (enrollment_id) REFERENCES Enrollments(enrollment_id),
    FOREIGN KEY (assessment_id) REFERENCES Assessments(assessment_id)
);

DELIMITER //

CREATE TRIGGER validate_marks_insert
BEFORE INSERT ON Grades
FOR EACH ROW
BEGIN
    DECLARE maxScore INT;

    SELECT max_marks INTO maxScore
    FROM Assessments
    WHERE assessment_id = NEW.assessment_id;

    IF NEW.marks_obtained > maxScore THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Marks cannot exceed maximum marks for this assessment';
    END IF;
END //

DELIMITER ;


DELIMITER //
-- insert trigger
CREATE TRIGGER   validate_marks_update
BEFORE UPDATE ON Grades
FOR EACH ROW
BEGIN
    DECLARE maxScore INT;

    SELECT max_marks INTO maxScore
    FROM Assessments
    WHERE assessment_id = NEW.assessment_id;

    IF NEW.marks_obtained > maxScore THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Marks cannot exceed maximum marks for this assessment';
    END IF;
END //

DELIMITER ;