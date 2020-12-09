-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2020 at 11:05 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitness`
--

-- --------------------------------------------------------

--
-- Table structure for table `createexercises`
--

CREATE TABLE `createexercises` (
  `id` int(11) NOT NULL,
  `exercise` varchar(255) NOT NULL,
  `muscle` varchar(255) NOT NULL,
  `type_of_exercise` varchar(255) NOT NULL,
  `equipment` tinyint(1) DEFAULT NULL,
  `exercise_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `createexperiencelevels`
--

CREATE TABLE `createexperiencelevels` (
  `id` int(11) NOT NULL,
  `xp_level` varchar(255) NOT NULL,
  `xp_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `createexperiencelevels`
--

INSERT INTO `createexperiencelevels` (`id`, `xp_level`, `xp_description`, `createdAt`, `updatedAt`) VALUES
(1, 'Neophyte', 'asdf', '2020-11-23 20:31:42', '2020-11-23 20:31:42');

-- --------------------------------------------------------

--
-- Table structure for table `createobjectives`
--

CREATE TABLE `createobjectives` (
  `id` int(11) NOT NULL,
  `objective` varchar(255) NOT NULL,
  `objective_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `createobjectives`
--

INSERT INTO `createobjectives` (`id`, `objective`, `objective_description`, `createdAt`, `updatedAt`) VALUES
(1, 'FST-7', 'asdf', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Loose Weight', 'asdf', '2020-11-23 20:32:05', '2020-11-23 20:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `createroles`
--

CREATE TABLE `createroles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `role_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `createstrategies`
--

CREATE TABLE `createstrategies` (
  `id` int(11) NOT NULL,
  `strategy` varchar(255) NOT NULL,
  `xp_level` varchar(255) NOT NULL,
  `objective` varchar(255) DEFAULT NULL,
  `strategy_description` text DEFAULT NULL,
  `strategy_map` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `createstrategies`
--

INSERT INTO `createstrategies` (`id`, `strategy`, `xp_level`, `objective`, `strategy_description`, `strategy_map`, `createdAt`, `updatedAt`) VALUES
(1, 'fst-7', '', NULL, NULL, '[{\"id\":1,\"sets\":1,\"reps\":4}]', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'GVT', 'Neophyte', 'Loose Weight', 'asdf', '[{\"id\":1,\"sets\":1,\"reps\":4}]', '2020-11-23 20:39:33', '2020-11-23 20:39:33');

-- --------------------------------------------------------

--
-- Table structure for table `experiencelevels`
--

CREATE TABLE `experiencelevels` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `xp_level` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experiencelevels`
--

INSERT INTO `experiencelevels` (`id`, `user_id`, `xp_level`, `createdAt`, `updatedAt`) VALUES
(1, '105097979934155160948', 'Neophyte', '2020-11-23 20:09:10', '2020-11-23 20:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `objectives`
--

CREATE TABLE `objectives` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `objective` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `objectives`
--

INSERT INTO `objectives` (`id`, `user_id`, `objective`, `createdAt`, `updatedAt`) VALUES
(1, '105097979934155160948', 'Weightloss', '2020-11-23 20:09:10', '2020-11-23 20:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `preferences`
--

CREATE TABLE `preferences` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `liked_excersice_id` int(11) DEFAULT NULL,
  `liked_workout_id` int(11) DEFAULT NULL,
  `liked_excercise_strategy_id` int(11) DEFAULT NULL,
  `disliked_excersic_id` int(11) DEFAULT NULL,
  `disliked_workout_id` int(11) DEFAULT NULL,
  `disliked_excercise_strategy_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `user_id`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '105097979934155160948', 'admin', '2020-11-23 20:09:10', '2020-11-23 20:09:10'),
(2, '105097979934155160948', 'member', '2020-11-23 20:32:40', '2020-11-23 20:32:40');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200822202612-create-user-stats.js'),
('20200822203039-create-roles.js'),
('20200822203545-create-preference.js'),
('20200822203701-create-objectives.js'),
('20200825014124-create-strategy.js'),
('20200825102957-create-user.js'),
('20200827210647-create-experience.js'),
('20200828045242-create-create-excersice.js'),
('20200828045506-create-create-experience-level.js'),
('20200828045838-create-create-objectives.js'),
('20200828050003-create-create-role.js'),
('20200828050135-create-create-strategy.js'),
('20200910110204-create-add-objective-column-to-create-strategies.js');

-- --------------------------------------------------------

--
-- Table structure for table `strategies`
--

CREATE TABLE `strategies` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `strategy` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `strategies`
--

INSERT INTO `strategies` (`id`, `user_id`, `strategy`, `createdAt`, `updatedAt`) VALUES
(1, '105097979934155160948', 'FST-7', '2020-11-23 20:09:10', '2020-11-23 20:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `facebook_id` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `set_up` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `google_id`, `facebook_id`, `email`, `password`, `name`, `set_up`, `createdAt`, `updatedAt`) VALUES
('105097979934155160948', '105097979934155160948', NULL, 'patrick.d.rizzardi@gmail.com', NULL, 'Patrick', 1, '2020-11-23 20:09:10', '2020-11-23 20:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `userstats`
--

CREATE TABLE `userstats` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `bmi` float DEFAULT NULL,
  `body_fat` float DEFAULT NULL,
  `fat_free_weight` float DEFAULT NULL,
  `subcutaneous_fat` float DEFAULT NULL,
  `visceral_fat` float DEFAULT NULL,
  `body_water` float DEFAULT NULL,
  `skeletal_muscle` float DEFAULT NULL,
  `muscle_mass` float DEFAULT NULL,
  `bone_mass` float DEFAULT NULL,
  `protein` float DEFAULT NULL,
  `bmr` float DEFAULT NULL,
  `metabolic_age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userstats`
--

INSERT INTO `userstats` (`id`, `user_id`, `weight`, `bmi`, `body_fat`, `fat_free_weight`, `subcutaneous_fat`, `visceral_fat`, `body_water`, `skeletal_muscle`, `muscle_mass`, `bone_mass`, `protein`, `bmr`, `metabolic_age`, `createdAt`, `updatedAt`) VALUES
(1, '105097979934155160948', 186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-11-23 20:09:10', '2020-11-23 20:09:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `createexercises`
--
ALTER TABLE `createexercises`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `createexperiencelevels`
--
ALTER TABLE `createexperiencelevels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `createobjectives`
--
ALTER TABLE `createobjectives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `createroles`
--
ALTER TABLE `createroles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `createstrategies`
--
ALTER TABLE `createstrategies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiencelevels`
--
ALTER TABLE `experiencelevels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `objectives`
--
ALTER TABLE `objectives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preferences`
--
ALTER TABLE `preferences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `strategies`
--
ALTER TABLE `strategies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userstats`
--
ALTER TABLE `userstats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `createexercises`
--
ALTER TABLE `createexercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `createexperiencelevels`
--
ALTER TABLE `createexperiencelevels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `createobjectives`
--
ALTER TABLE `createobjectives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `createroles`
--
ALTER TABLE `createroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `createstrategies`
--
ALTER TABLE `createstrategies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experiencelevels`
--
ALTER TABLE `experiencelevels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `objectives`
--
ALTER TABLE `objectives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `preferences`
--
ALTER TABLE `preferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `strategies`
--
ALTER TABLE `strategies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `userstats`
--
ALTER TABLE `userstats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
