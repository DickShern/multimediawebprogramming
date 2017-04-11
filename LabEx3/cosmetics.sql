-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2017 at 03:19 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cosmetics`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(5) NOT NULL,
  `pic_url` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `seller_name` varchar(255) NOT NULL,
  `product_name` varchar(9999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `pic_url`, `category`, `seller_name`, `product_name`) VALUES
('1', 'Product Pictures/pic_001.jpg', 'New Limited Edition Online Only', 'Too Faced', 'Natural Love Ultimate Neutral Eye Shadow Palette'),
('2', 'Product Pictures/pic_002.jpg', 'New', 'Benefit Cosmetics', 'Work Kit, Girl! Work-Day Essentials Makeup Kit'),
('3', 'Product Pictures/pic_003.jpg', 'Exclusive New Limited Edition', 'CLEAN', 'Reserve Perfumer''s Layer Collection'),
('4', 'Product Pictures/pic_004.jpg', 'New Online Only', 'amika', 'text(ure) me'),
('5', 'Product Pictures/pic_005.jpg', 'NEW', 'COVER FX', 'Custom Enhancer Drops'),
('6', 'Product Pictures/pic_006.jpg', 'Exclusive New', 'SUPERGOOP!', 'Super Power Sunscreen Mousse Broad Spectrum SPF 50'),
('7', 'Product Pictures/pic_007.jpg', 'New', 'Lancôme', 'Teint Idole Ultra Wear Camouflage Concealer'),
('8', 'Product Pictures/pic_008.jpg', 'New Online only', 'Clarisonic', 'Smart Profile Face and Body Uplift Set');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD UNIQUE KEY `id` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
