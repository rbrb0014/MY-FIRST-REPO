CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(20) NOT NULL,-- 사용자 아이디
    `user_pw` VARCHAR(20) NOT NULL,-- 사용자 비밀번호
    `user_nickname` VARCHAR(20) NOT NULL,-- 사용자 닉네임
    `profile_img_link` VARCHAR(70) NOT NULL,-- 프로필 사진 링크
    `profile_status_msg` INT NOT NULL,-- 프로필 상태 메시지
    `is_withdraw` TINYINT DEFAULT 0,-- 탈퇴 여부; 기본값은 0
    `enter_date` datetime NOT NULL,-- 가입 날짜
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) DEFAULT "new channel",-- 이름
    `created_user` INT NOT NULL,-- 채널을 생성한 사용자
    `link` VARCHAR(70) NOT NULL,-- 채널의 링크
    `max_num` INT NOT NULL,-- 최대 수용 인원
    `is_withdraw` TINYINT DEFAULT 0,-- 탈퇴 여부; 기본값은 0
    `creation_date` DATETIME NOT NULL,-- 채널 생성 날짜
    PRIMARY KEY (`id`),
    FOREIGN KEY (`created_user`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(100) NOT NULL,-- 채팅 내용
    `writer` INT NOT NULL,-- 채팅 작성자 id
    `channel` INT NOT NULL,-- 채팅 채널 id
    `creation_date` DATETIME NOT NULL,-- 채팅 생성 날짜
    PRIMARY KEY (`id`),
    FOREIGN KEY (`writer`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`channel`)
    REFERENCES `channels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocking_user` INT NOT NULL,-- 차단을 한 사람
    `blocked_user` INT NOT NULL,-- 차단을 당한 사람
    `blocked_date` DATETIME NOT NULL,-- 차단 날짜
    PRIMARY KEY (`id`),
    FOREIGN KEY (`blocking_user`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`blocked_user`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,-- 팔로우한 사람 (follower)
    `followee` INT NOT NULL,-- 팔로우되는 사람 (followee)
    `followed_date` DATETIME NOT NULL,-- 팔로우 날짜
    PRIMARY KEY (`id`),
    FOREIGN KEY (`follower`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`followee`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;