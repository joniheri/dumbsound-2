-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 18, 2021 at 03:57 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dumbsound`
--

-- --------------------------------------------------------

--
-- Table structure for table `Artists`
--

CREATE TABLE `Artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Artists`
--

INSERT INTO `Artists` (`id`, `name`, `old`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Post Melon', 30, 'Solois', 1987, '2021-08-12 09:57:01', '2021-08-12 10:18:07'),
(2, 'Keanu Recees', 30, 'Solois', 1998, '2021-08-12 09:59:36', '2021-08-12 09:59:36'),
(3, 'Eminem', 21, 'Band', 2001, '2021-08-12 10:25:54', '2021-08-12 10:28:06'),
(7, 'Ty Dolla $ign', 21, 'Band', 2000, '2021-08-14 07:22:37', '2021-08-14 07:22:37'),
(8, 'QG', 30, 'Solois', 2000, '2021-08-14 07:23:13', '2021-08-14 07:23:13'),
(9, '88Rising', 30, 'Solois', 2000, '2021-08-16 13:55:23', '2021-08-16 13:55:23'),
(10, 'Joji', 30, 'Solois', 2000, '2021-08-16 13:56:45', '2021-08-16 13:56:45'),
(12, 'Rich Bryan', 25, 'Solois', 2001, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(13, 'Nikki', 25, 'Solois', 2001, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(14, 'SZA', 25, 'Solois', 2001, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(15, 'Boyz II Men', 25, 'Solois', 2001, '2021-08-18 00:00:00', '2021-08-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `AuthorBooks`
--

CREATE TABLE `AuthorBooks` (
  `id` int(11) NOT NULL,
  `authorId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AuthorBooks`
--

INSERT INTO `AuthorBooks` (`id`, `authorId`, `bookId`, `createdAt`, `updatedAt`) VALUES
(5, 1, 7, '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(6, 1, 5, '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(7, 1, 6, '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(8, 2, 8, '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(9, 2, 7, '2021-08-13 00:00:00', '2021-08-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Authors`
--

CREATE TABLE `Authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Authors`
--

INSERT INTO `Authors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Jon H', '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(2, 'JC', '2021-08-13 00:00:00', '2021-08-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Books`
--

CREATE TABLE `Books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Books`
--

INSERT INTO `Books` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(5, 'Belajar Bahasa Pemrograman JavaScript Untuk Pemula', '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(6, 'Belajar Pemrograman Node.JS Untuk Pemula', '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(7, 'Belajar Bahasa Pemrograman PHP Untuk Pemula', '2021-08-13 00:00:00', '2021-08-13 00:00:00'),
(8, 'Belajar Pemrograman Laravel Untuk Pemula', '2021-08-13 00:00:00', '2021-08-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Music`
--

CREATE TABLE `Music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `artistId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Music`
--

INSERT INTO `Music` (`id`, `title`, `year`, `thumbnail`, `attache`, `artistId`, `createdAt`, `updatedAt`) VALUES
(1, 'Circle', 2019, 'Rectangle4.png', 'circle.mp3', 1, '2021-08-12 00:00:00', '2021-08-12 00:00:00'),
(2, 'Logic', 2019, 'Rectangle5.png', 'circle.mp3', 2, '2021-08-12 00:00:00', '2021-08-12 00:00:00'),
(3, 'Godzilla', 2020, 'Rectangle6.png', 'Contoh1.mp3', 3, '2021-08-13 19:39:29', '2021-08-13 19:39:29'),
(5, 'Never Ever', 2019, 'Rectangle7.png', 'Contoh2.mp3', 3, '2021-08-17 13:17:33', '2021-08-17 13:17:33'),
(6, 'Love U Beby', 2018, 'Rectangle8.png', 'contoh2.mp3', 1, '2021-08-17 13:57:12', '2021-08-17 13:57:12'),
(7, 'Tragic', 2019, 'Rectangle9.png', 'contoh2.mp3', 2, '2021-08-17 14:31:23', '2021-08-17 14:31:23'),
(8, 'Midsummer', 2018, 'Rectangle10.png', 'contoh2.mp3', 9, '2021-08-17 17:12:41', '2021-08-17 17:12:41'),
(9, 'Slow Dancing', 2018, 'Rectangle11.png', 'contoh1.mp3', 10, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(10, 'History', 2018, 'Rectangle12.png', 'contoh1.mp3', 12, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(11, 'I LIKE U', 2017, 'Rectangle13.png', 'contoh1.mp3', 13, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(12, 'Love Galore', 2017, 'Rectangle14.png', 'contoh1.mp3', 14, '2021-08-18 00:00:00', '2021-08-18 00:00:00'),
(13, 'End Of The Road', 1991, 'Rectangle15.png', 'contoh1.mp3', 15, '2021-08-18 00:00:00', '2021-08-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210810192207-create-user.js'),
('20210812092001-create-artist.js'),
('20210812092151-create-music.js'),
('20210813132225-create-book.js'),
('20210813132320-create-author.js'),
('20210813133029-create-author-book.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `fullname`, `gender`, `phone`, `address`, `level`, `createdAt`, `updatedAt`) VALUES
(18, 'jonheri@email.com', '$2b$10$/.K49RZlr/jo91iwU9BxeuBdePllObvwfmTlCaiWdAmkiSisZC7aO', 'Jon Cena', 'Male', '08784782734', 'USA', 'User', '2021-08-17 10:36:19', '2021-08-17 10:36:19'),
(19, 'jonheri001@email.com', '$2b$10$H4uC/egnCxlNYJmiDNFK..fBnhgbHrOX3lUyuL9WsI9TljK3fIydG', 'Jon Cena', 'Male', '08784782734', 'USA', 'User', '2021-08-17 10:40:13', '2021-08-17 10:40:13'),
(20, 'admin@email.com', '$2b$10$KVfT2v70TyiZF4sI677f9uZMZD8czLc5Fva5g3ROvvGNOHdmg4F3K', 'Admin', 'Male', '08784782734', 'USA', 'Super User', '2021-08-17 12:24:08', '2021-08-17 12:24:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Artists`
--
ALTER TABLE `Artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AuthorBooks`
--
ALTER TABLE `AuthorBooks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `authorId` (`authorId`),
  ADD KEY `bookId` (`bookId`);

--
-- Indexes for table `Authors`
--
ALTER TABLE `Authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Music`
--
ALTER TABLE `Music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Artists`
--
ALTER TABLE `Artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `AuthorBooks`
--
ALTER TABLE `AuthorBooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Authors`
--
ALTER TABLE `Authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Books`
--
ALTER TABLE `Books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Music`
--
ALTER TABLE `Music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AuthorBooks`
--
ALTER TABLE `AuthorBooks`
  ADD CONSTRAINT `AuthorBooks_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AuthorBooks_ibfk_2` FOREIGN KEY (`bookId`) REFERENCES `Books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Music`
--
ALTER TABLE `Music`
  ADD CONSTRAINT `Music_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `Artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
