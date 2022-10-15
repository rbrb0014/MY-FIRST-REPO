CREATE TABLE `courses` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `entered_year` INT NOT NULL,
    `department` INT NOT NULL,
    `student_id` INT NOT NULL,
    `call_number` INT NOT NULL,
    `accumulated_credits` INT DEFAULT 0,
    `average_rate` float DEFAULT 0.0,
    `is_in_school` TINYINT DEFAULT 1,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;