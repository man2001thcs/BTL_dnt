-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 18, 2023 lúc 02:47 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `social`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_account` varchar(150) NOT NULL DEFAULT 'dochu8@gmail.com',
  `user_name` varchar(150) DEFAULT NULL,
  `comment_body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_num` int(11) DEFAULT NULL,
  `rank` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `post_id`, `user_id`, `user_account`, `user_name`, `comment_body`, `img_num`, `rank`, `created`, `modified`) VALUES
(24, 8, 1, 'dochu8@gmail.com', 'Chu Do', 'this one', 0, 1, '2022-12-10 16:22:54', '2022-12-10 16:22:54'),
(25, 7, 1, 'dochu8@gmail.com', 'Chu Do', 'haposai', 0, 1, '2022-12-18 15:00:22', '2022-12-18 15:00:22'),
(26, 7, 1, 'dochu8@gmail.com', 'Chu Do', 'jisan', 0, 1, '2022-12-18 16:24:46', '2022-12-18 16:24:46'),
(29, 14, 1, 'dochu8@gmail.com', 'Chu Don', '123', 0, 1, '2023-01-02 23:19:14', '2023-01-02 23:19:14'),
(30, 14, 1, 'dochu8@gmail.com', 'Chu Don', 'monster', 0, 1, '2023-01-02 23:20:16', '2023-01-02 23:20:16'),
(31, 14, 1, 'dochu8@gmail.com', 'Chu Don', 'dooom', 0, 1, '2023-01-02 23:23:51', '2023-01-02 23:23:51'),
(32, 14, 1, 'dochu8@gmail.com', 'Chu Don', 'dd', 0, 1, '2023-01-02 23:25:32', '2023-01-02 23:25:32'),
(33, 13, 1, 'dochu8@gmail.com', 'Chu Don', 'summer', 1, 1, '2023-01-02 23:37:15', '2023-01-02 23:37:15'),
(34, 13, 1, 'dochu8@gmail.com', 'Chu Don', 'everybody want to rule the world', 1, 1, '2023-01-03 21:52:42', '2023-01-03 21:52:42'),
(35, 13, 1, 'dochu8@gmail.com', 'Chu Don', 'bless', 1, 1, '2023-01-03 21:54:54', '2023-01-03 21:54:54'),
(36, 13, 1, 'dochu8@gmail.com', 'Chu Don', 'elden ring', 1, 1, '2023-01-03 22:13:42', '2023-01-03 22:13:42'),
(37, 14, 1, 'dochu8@gmail.com', 'Chu Don', 'yuck', 0, 1, '2023-01-18 23:03:30', '2023-01-18 23:03:30'),
(38, 40, 1, 'dochu8@gmail.com', 'Chu Don', 'u dont have to put on the red light', 1, 1, '2023-01-27 19:41:40', '2023-01-27 19:41:40'),
(39, 40, 1, 'dochu8@gmail.com', 'Chu Don', 'Roxanna', 1, 1, '2023-01-27 19:49:35', '2023-01-27 19:49:35'),
(40, 40, 1, 'dochu8@gmail.com', 'Chu Don', 'blue', 1, 1, '2023-01-27 19:50:54', '2023-01-27 19:50:54'),
(41, 40, 1, 'dochu8@gmail.com', 'Chu Don', 'death', 1, 1, '2023-01-27 19:51:40', '2023-01-27 19:51:40'),
(42, 40, 1, 'dochu8@gmail.com', 'Chu Don', '1123', 1, 1, '2023-01-27 19:52:41', '2023-01-27 19:52:41'),
(43, 38, 9, 'dochu15@gmail.com', 'CHu do', 'fuck you bro', 0, 1, '2023-02-02 21:06:21', '2023-02-02 21:06:21'),
(44, 38, 1, 'dochu8@gmail.com', 'Chu Don', 'ox', 1, 1, '2023-02-02 21:30:39', '2023-02-02 21:30:39'),
(45, 40, 9, 'dochu15@gmail.com', 'CHu do', '😜a', 0, 1, '2023-02-03 20:08:34', '2023-02-03 20:08:34'),
(46, 40, 9, 'dochu15@gmail.com', 'CHu do', ':supervillain', 0, 1, '2023-02-03 22:27:47', '2023-02-03 22:27:47'),
(47, 40, 9, 'dochu15@gmail.com', 'CHu do', '????', 0, 1, '2023-02-03 22:33:43', '2023-02-03 22:33:43'),
(48, 40, 9, 'dochu15@gmail.com', 'CHu do', ':)', 1, 1, '2023-02-03 23:19:05', '2023-02-03 23:19:05'),
(49, 40, 1, 'dochu8@gmail.com', 'Chu Do', 'abc deg', 0, 1, '2023-02-05 18:41:49', '2023-02-05 18:41:49');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `emotion_comment_list`
--

CREATE TABLE `emotion_comment_list` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `like_list` mediumtext DEFAULT NULL,
  `dislike_list` mediumtext DEFAULT NULL,
  `love_list` mediumtext DEFAULT NULL,
  `hate_list` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `emotion_comment_list`
--

INSERT INTO `emotion_comment_list` (`id`, `comment_id`, `like_list`, `dislike_list`, `love_list`, `hate_list`) VALUES
(5, 24, '', '', '1', ''),
(6, 25, '1', '', '', ''),
(7, 26, '', '', '', ''),
(8, 29, '', '', '1', ''),
(9, 30, '', '', '1', ''),
(10, 31, '1', '', '', ''),
(11, 32, '1', '', '', ''),
(12, 33, '', '', '', ''),
(13, 34, '', '', '', ''),
(14, 35, '', '', '', ''),
(15, 36, '', '', '', '1'),
(16, 37, '', '', '', ''),
(17, 38, '', '', '', ''),
(18, 39, '', '', '', ''),
(19, 40, '', '', '', ''),
(20, 41, '', '', '', ''),
(21, 42, '', '', '', ''),
(22, 43, '', '', '', ''),
(23, 44, '', '', '', ''),
(24, 45, '', '', '', ''),
(25, 46, '', '', '', ''),
(26, 47, '', '', '', ''),
(27, 48, '', '', '', '1;9'),
(28, 49, '', '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `emotion_post_list`
--

CREATE TABLE `emotion_post_list` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `like_list` mediumtext DEFAULT NULL,
  `dislike_list` mediumtext DEFAULT NULL,
  `love_list` mediumtext DEFAULT NULL,
  `hate_list` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `emotion_post_list`
--

INSERT INTO `emotion_post_list` (`id`, `post_id`, `like_list`, `dislike_list`, `love_list`, `hate_list`) VALUES
(1, 0, '1', '', '', ''),
(3, 3, '', '1', '', ''),
(6, 6, '', '1', '', ''),
(7, 7, '1', '', '', ''),
(8, 8, '', '', '', ''),
(9, 9, '', '', '', ''),
(10, 10, '', '', '', ''),
(11, 11, '', '', '', ''),
(12, 12, '', '', '', ''),
(13, 13, '1', '', '', ''),
(14, 14, '1', '', '', ''),
(15, 15, '', '', '', ''),
(16, 16, '', '', '', ''),
(17, 17, '', '', '', ''),
(18, 18, '', '', '', ''),
(19, 19, '', '', '', ''),
(20, 20, '', '', '', ''),
(21, 21, '', '', '', ''),
(22, 22, '', '', '', ''),
(23, 27, '', '', '', ''),
(24, 28, '1', '', '', ''),
(25, 29, '', '', '', ''),
(26, 30, '', '', '', ''),
(27, 31, '', '', '', ''),
(28, 32, '', '', '', ''),
(29, 33, '', '', '', ''),
(30, 34, '', '', '', ''),
(31, 35, '', '', '', ''),
(32, 36, '', '', '', ''),
(33, 37, '1;9', '', '', ''),
(34, 38, '', '', '9', ''),
(35, 39, '', '1;9', '', ''),
(36, 40, '', '', '', '9'),
(37, 41, '', '', '', '1;9'),
(38, 42, '', '', '', '9'),
(39, 43, '', '', '', '9'),
(40, 44, '', '', '', ''),
(41, 45, '10', '', '', ''),
(42, 46, '', '', '', ''),
(43, 47, '', '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `friend_relation`
--

CREATE TABLE `friend_relation` (
  `id` int(11) NOT NULL,
  `user_account_1` varchar(150) NOT NULL,
  `user_account_2` varchar(150) NOT NULL,
  `type` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `friend_relation`
--

INSERT INTO `friend_relation` (`id`, `user_account_1`, `user_account_2`, `type`, `created`, `modified`) VALUES
(1, 'dochu1@gmail.com', 'dochu8@gmail.com', 1, '2022-09-13 11:28:39', '2022-09-13 11:28:39'),
(2, 'dochu8@gmail.com', 'dochu1@gmail.com', 1, '2022-08-24 20:23:20', '2022-08-24 20:23:20'),
(3, 'dochu8@gmail.com', 'dochu2@gmail.com', 0, '2022-12-17 15:25:26', '2022-12-17 15:25:26'),
(4, 'dochu8@gmail.com', 'dochu3@gmail.com', 0, '2022-12-17 15:30:18', '2022-12-17 15:30:18'),
(5, 'dochu8@gmail.com', 'dochu4@gmail.com', 1, '2023-01-08 16:12:39', '2023-01-22 13:12:50'),
(7, 'dochu4@gmail.com', 'dochu8@gmail.com', 1, '2023-01-22 13:12:50', '2023-01-22 13:12:50'),
(8, 'dochu13@gmail.com', 'dochu8@gmail.com', 1, '2023-01-26 15:28:15', '2023-01-31 21:30:35'),
(9, 'dochu1@gmail.com', 'dochu13@gmail.com', 1, '2022-09-13 11:28:39', '2022-09-13 11:28:39'),
(10, 'dochu13@gmail.com', 'dochu1@gmail.com', 1, '2022-09-13 11:28:39', '2022-09-13 11:28:39'),
(11, 'dochu8@gmail.com', 'dochu13@gmail.com', 1, '2023-01-31 21:30:35', '2023-01-31 21:30:35'),
(24, 'dochu15@gmail.com', 'dochu4@gmail.com', 3, '2023-02-03 20:26:44', '2023-02-03 20:26:44'),
(27, 'dochu8@gmail.com', 'dochu15@gmail.com', 3, '2023-02-04 15:08:30', '2023-02-04 15:08:30'),
(28, 'dochu8@gmail.com', 'dochu16@gmail.com', 0, '2023-02-05 18:48:15', '2023-02-05 18:49:02'),
(29, 'dochu16@gmail.com', 'dochu8@gmail.com', 0, '2023-02-05 18:48:57', '2023-02-05 18:49:02'),
(30, 'dochu16@gmail.com', 'dochu1@gmail.com', 3, '2023-02-05 18:50:06', '2023-02-05 18:50:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `log_temp`
--

CREATE TABLE `log_temp` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `code_login` varchar(20) DEFAULT NULL,
  `log_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `log_temp`
--

INSERT INTO `log_temp` (`id`, `id_user`, `email`, `code_login`, `log_time`) VALUES
(273, 1, 'dochu8@gmail.com', 'uewytsdv', '2023-01-12 14:05:50'),
(274, 1, 'dochu8@gmail.com', 'rzugszcb', '2023-01-12 14:11:55'),
(275, 1, 'dochu8@gmail.com', 'ypsqncdj', '2023-01-12 14:36:05'),
(276, 1, 'dochu8@gmail.com', 'ktknimto', '2023-01-13 19:26:54'),
(277, 1, 'dochu8@gmail.com', 'gsbjqujh', '2023-01-13 20:04:29'),
(278, 1, 'dochu8@gmail.com', 'gxwpveqo', '2023-01-14 00:04:58'),
(279, 1, 'dochu8@gmail.com', 'abosktyb', '2023-01-14 22:09:25'),
(280, 1, 'dochu8@gmail.com', 'hwkbruqi', '2023-01-14 22:31:27'),
(281, 1, 'dochu8@gmail.com', 'nhfelxrg', '2023-01-15 20:36:01'),
(282, 1, 'dochu8@gmail.com', 'bhwjvacr', '2023-01-15 20:59:39'),
(283, 1, 'dochu8@gmail.com', 'qdecqaeu', '2023-01-15 21:13:30'),
(284, 1, 'dochu8@gmail.com', 'yulgbodj', '2023-01-15 21:17:38'),
(285, 1, 'dochu8@gmail.com', 'leoywacg', '2023-01-15 21:39:44'),
(286, 1, 'dochu8@gmail.com', 'khqttfmg', '2023-01-15 22:01:26'),
(287, 1, 'dochu8@gmail.com', 'yykcsvbt', '2023-01-15 23:28:37'),
(288, 1, 'dochu8@gmail.com', 'krhuyvwe', '2023-01-15 23:34:52'),
(289, 1, 'dochu8@gmail.com', 'gzerunkk', '2023-01-15 23:35:35'),
(290, 1, 'dochu8@gmail.com', 'evnhdiup', '2023-01-15 23:37:39'),
(291, 1, 'dochu8@gmail.com', 'hcgczlzl', '2023-01-15 23:38:01'),
(292, 1, 'dochu8@gmail.com', 'oxanfreg', '2023-01-15 23:47:56'),
(293, 1, 'dochu8@gmail.com', 'nmbbyfln', '2023-01-16 21:16:58'),
(294, 1, 'dochu8@gmail.com', 'sgvbjkek', '2023-01-16 23:20:17'),
(295, 1, 'dochu8@gmail.com', 'vmbqvgpe', '2023-01-17 22:47:24'),
(296, 1, 'dochu8@gmail.com', 'fxfuyewm', '2023-01-18 21:05:36'),
(297, 1, 'dochu8@gmail.com', 'qlqmphqc', '2023-01-18 21:19:17'),
(298, 1, 'dochu8@gmail.com', 'nitvwnfl', '2023-01-18 21:20:22'),
(299, 1, 'dochu8@gmail.com', 'gpxwueqw', '2023-01-18 21:22:27'),
(300, 1, 'dochu8@gmail.com', 'wkjkcvau', '2023-01-18 21:23:05'),
(301, 1, 'dochu8@gmail.com', 'nvxkeiry', '2023-01-18 21:23:22'),
(302, 1, 'dochu8@gmail.com', 'zxzssqnp', '2023-01-18 21:24:46'),
(303, 1, 'dochu8@gmail.com', 'uohwufgd', '2023-01-18 21:45:50'),
(304, 1, 'dochu8@gmail.com', 'babykggc', '2023-01-18 21:46:14'),
(305, 1, 'dochu8@gmail.com', 'nikqbdju', '2023-01-18 21:47:52'),
(306, 1, 'dochu8@gmail.com', 'hfejmfee', '2023-01-18 21:50:01'),
(307, 1, 'dochu8@gmail.com', 'kuaiixba', '2023-01-18 21:50:36'),
(308, 1, 'dochu8@gmail.com', 'tyantizz', '2023-01-18 21:51:46'),
(309, 1, 'dochu8@gmail.com', 'zbdcyyxw', '2023-01-18 21:55:55'),
(310, 1, 'dochu8@gmail.com', 'tfagqezu', '2023-01-18 22:13:44'),
(311, 1, 'dochu8@gmail.com', 'depcspli', '2023-01-18 22:17:09'),
(312, 1, 'dochu8@gmail.com', 'gzhdzhux', '2023-01-18 22:46:30'),
(313, 1, 'dochu8@gmail.com', 'iexrtoxj', '2023-01-18 22:54:00'),
(314, 1, 'dochu8@gmail.com', 'xunavbql', '2023-01-19 20:32:48'),
(315, 1, 'dochu8@gmail.com', 'beezknju', '2023-01-19 21:04:19'),
(316, 1, 'dochu8@gmail.com', 'ynqnxdwm', '2023-01-19 21:28:28'),
(317, 1, 'dochu8@gmail.com', 'hpgadfgm', '2023-01-19 21:43:33'),
(318, 1, 'dochu8@gmail.com', 'nrxrngtc', '2023-01-19 21:44:25'),
(319, 1, 'dochu8@gmail.com', 'aitbacgu', '2023-01-19 21:46:25'),
(320, 1, 'dochu8@gmail.com', 'wfnqpvli', '2023-01-19 21:47:29'),
(321, 4, 'dochu3@gmail.com', 'kzqwtshm', '2023-01-19 23:23:14'),
(322, 4, 'dochu3@gmail.com', 'tvwbcxwe', '2023-01-19 23:32:01'),
(323, 4, 'dochu3@gmail.com', 'rcccvdto', '2023-01-19 23:43:13'),
(324, 1, 'dochu8@gmail.com', 'xqcshtvm', '2023-01-21 12:03:54'),
(325, 5, 'dochu4@gmail.com', 'onoljvep', '2023-01-21 12:07:36'),
(326, 5, 'dochu4@gmail.com', 'bcptxosc', '2023-01-21 12:54:36'),
(327, 5, 'dochu4@gmail.com', 'isjtnpcp', '2023-01-21 13:20:31'),
(328, 5, 'dochu4@gmail.com', 'eaamrkqi', '2023-01-22 13:07:50'),
(329, 5, 'dochu4@gmail.com', 'malilyyx', '2023-01-22 13:19:18'),
(330, 1, 'dochu8@gmail.com', 'dalfntca', '2023-01-22 19:56:06'),
(331, 1, 'dochu8@gmail.com', 'kmpfiwez', '2023-01-22 19:59:25'),
(332, 1, 'dochu8@gmail.com', 'gdqumuyr', '2023-01-22 20:15:41'),
(333, 1, 'dochu8@gmail.com', 'yehegjrf', '2023-01-22 20:42:37'),
(334, 1, 'dochu8@gmail.com', 'rcnvwmkw', '2023-01-23 13:15:57'),
(335, 1, 'dochu8@gmail.com', 'tijlzpwh', '2023-01-25 20:43:34'),
(336, 1, 'dochu8@gmail.com', 'cjjeigfg', '2023-01-25 21:15:04'),
(337, 8, 'dochu13@gmail.com', 'qylecjud', '2023-01-26 15:22:33'),
(338, 8, 'dochu13@gmail.com', 'xmfygqgo', '2023-01-26 15:25:24'),
(339, 8, 'dochu13@gmail.com', 'uwzqtqey', '2023-01-26 15:25:59'),
(340, 1, 'dochu8@gmail.com', 'wiosyork', '2023-01-26 15:48:46'),
(341, 1, 'dochu8@gmail.com', 'tgitfexh', '2023-01-26 15:53:46'),
(342, 1, 'dochu8@gmail.com', 'vadmvhcc', '2023-01-26 15:59:17'),
(343, 1, 'dochu8@gmail.com', 'bbwmlnic', '2023-01-26 16:23:51'),
(344, 1, 'dochu8@gmail.com', 'yjpamzyc', '2023-01-26 16:24:23'),
(345, 1, 'dochu8@gmail.com', 'zbvvuuer', '2023-01-26 21:08:43'),
(346, 1, 'dochu8@gmail.com', 'xeyecuyh', '2023-01-27 13:25:32'),
(347, 1, 'dochu8@gmail.com', 'dpfpdbcn', '2023-01-27 13:44:11'),
(348, 1, 'dochu8@gmail.com', 'lugofnxn', '2023-01-27 13:52:33'),
(349, 1, 'dochu8@gmail.com', 'jeningrn', '2023-01-27 14:06:55'),
(350, 1, 'dochu8@gmail.com', 'ywgfvqlp', '2023-01-27 14:08:50'),
(351, 1, 'dochu8@gmail.com', 'rsmobuqi', '2023-01-27 14:20:12'),
(352, 1, 'dochu8@gmail.com', 'mftkgjvm', '2023-01-27 14:23:40'),
(353, 1, 'dochu8@gmail.com', 'caescpin', '2023-01-27 14:24:20'),
(354, 1, 'dochu8@gmail.com', 'uigijxrt', '2023-01-27 14:25:55'),
(355, 1, 'dochu8@gmail.com', 'lnqnhrur', '2023-01-27 19:17:57'),
(356, 1, 'dochu8@gmail.com', 'icgsianh', '2023-01-27 19:40:39'),
(357, 9, 'dochu15@gmail.com', 'lzggohun', '2023-01-29 16:23:46'),
(358, 1, 'dochu8@gmail.com', 'cbqbsuwq', '2023-01-30 20:01:35'),
(359, 1, 'dochu8@gmail.com', 'drpwdafp', '2023-01-30 20:04:25'),
(360, 1, 'dochu8@gmail.com', 'qlgwcqqi', '2023-01-30 20:12:23'),
(361, 1, 'dochu8@gmail.com', 'jkzrxogt', '2023-01-30 20:20:11'),
(362, 1, 'dochu8@gmail.com', 'rjpcnmby', '2023-01-30 20:22:38'),
(363, 1, 'dochu8@gmail.com', 'eudiwrtq', '2023-01-30 20:23:53'),
(364, 1, 'dochu8@gmail.com', 'qiektkci', '2023-01-30 20:27:37'),
(365, 1, 'dochu8@gmail.com', 'nejzhhvs', '2023-01-30 20:29:53'),
(366, 9, 'dochu15@gmail.com', 'lysqhrec', '2023-01-30 20:36:39'),
(367, 9, 'dochu15@gmail.com', 'axnpfnwm', '2023-01-30 20:38:52'),
(368, 9, 'dochu15@gmail.com', 'vrfzajee', '2023-01-30 20:42:11'),
(369, 9, 'dochu15@gmail.com', 'ojqtoudc', '2023-01-30 20:43:07'),
(370, 9, 'dochu15@gmail.com', 'vuidbqpp', '2023-01-30 20:44:45'),
(371, 9, 'dochu15@gmail.com', 'mckwmyxf', '2023-01-30 20:45:45'),
(372, 9, 'dochu15@gmail.com', 'raarpkqx', '2023-01-30 20:46:19'),
(373, 9, 'dochu15@gmail.com', 'xjjrfvxp', '2023-01-30 20:47:16'),
(374, 9, 'dochu15@gmail.com', 'baqxqbmd', '2023-01-30 20:47:55'),
(375, 9, 'dochu15@gmail.com', 'nhrlyxaj', '2023-01-30 20:49:17'),
(376, 9, 'dochu15@gmail.com', 'ozozionz', '2023-01-30 20:52:51'),
(377, 9, 'dochu15@gmail.com', 'urufouyj', '2023-01-30 20:54:03'),
(378, 9, 'dochu15@gmail.com', 'suifvupu', '2023-01-31 16:22:36'),
(379, 9, 'dochu15@gmail.com', 'zjqssiuc', '2023-01-31 16:23:14'),
(380, 1, 'dochu8@gmail.com', 'vtiutczb', '2023-01-31 16:54:16'),
(381, 9, 'dochu15@gmail.com', 'dbkrhszx', '2023-01-31 16:59:41'),
(382, 9, 'dochu15@gmail.com', 'onfzkxzt', '2023-01-31 17:22:43'),
(383, 9, 'dochu15@gmail.com', 'kpaimqok', '2023-01-31 17:23:52'),
(384, 9, 'dochu15@gmail.com', 'ouelnays', '2023-01-31 17:25:39'),
(385, 9, 'dochu15@gmail.com', 'nukmqadi', '2023-01-31 17:27:20'),
(386, 9, 'dochu15@gmail.com', 'dblqaxcr', '2023-01-31 17:28:31'),
(387, 1, 'dochu8@gmail.com', 'qsccmtkn', '2023-01-31 20:02:17'),
(388, 1, 'dochu8@gmail.com', 'jzofowan', '2023-01-31 20:12:14'),
(389, 9, 'dochu15@gmail.com', 'dxbfbydp', '2023-01-31 20:30:11'),
(390, 9, 'dochu15@gmail.com', 'yaxevvgj', '2023-01-31 20:30:32'),
(391, 9, 'dochu15@gmail.com', 'lhbzkzra', '2023-01-31 20:30:45'),
(392, 9, 'dochu15@gmail.com', 'qnswdhnu', '2023-01-31 20:41:36'),
(393, 9, 'dochu15@gmail.com', 'lwonguon', '2023-01-31 20:42:49'),
(394, 1, 'dochu8@gmail.com', 'qugflvoh', '2023-01-31 21:04:24'),
(395, 1, 'dochu8@gmail.com', 'uhtmvyxy', '2023-01-31 21:05:49'),
(396, 9, 'dochu15@gmail.com', 'mqlkhpyg', '2023-01-31 21:22:34'),
(397, 1, 'dochu8@gmail.com', 'tviisuxa', '2023-01-31 21:22:57'),
(398, 1, 'dochu8@gmail.com', 'aduhuigd', '2023-01-31 21:28:43'),
(399, 9, 'dochu15@gmail.com', 'hvdnqere', '2023-02-01 21:27:13'),
(400, 1, 'dochu8@gmail.com', 'qhbliofk', '2023-02-01 21:27:31'),
(401, 1, 'dochu8@gmail.com', 'iyejmboe', '2023-02-01 22:15:54'),
(402, 9, 'dochu15@gmail.com', 'ggnpmzhq', '2023-02-02 19:33:20'),
(403, 9, 'dochu15@gmail.com', 'joaiianv', '2023-02-02 19:38:09'),
(404, 9, 'dochu15@gmail.com', 'ibbdgbqq', '2023-02-02 19:43:22'),
(405, 9, 'dochu15@gmail.com', 'iqglipsk', '2023-02-02 19:44:11'),
(406, 1, 'dochu8@gmail.com', 'uzkzjnjy', '2023-02-02 21:06:36'),
(407, 1, 'dochu8@gmail.com', 'kthwpdrk', '2023-02-02 21:15:06'),
(408, 9, 'dochu15@gmail.com', 'wwkxokah', '2023-02-02 21:41:39'),
(409, 1, 'dochu8@gmail.com', 'akandsgl', '2023-02-02 21:42:02'),
(410, 9, 'dochu15@gmail.com', 'izgdpgbo', '2023-02-03 17:08:34'),
(411, 9, 'dochu15@gmail.com', 'ikiexhum', '2023-02-03 17:13:33'),
(412, 9, 'dochu15@gmail.com', 'skxeydip', '2023-02-03 17:40:15'),
(413, 1, 'dochu8@gmail.com', 'aylzgchi', '2023-02-03 17:40:37'),
(414, 9, 'dochu15@gmail.com', 'lhgnpckp', '2023-02-03 18:24:32'),
(415, 1, 'dochu8@gmail.com', 'xbbgfnfb', '2023-02-03 18:25:06'),
(416, 9, 'dochu15@gmail.com', 'nadhvbbh', '2023-02-03 19:09:18'),
(417, 9, 'dochu15@gmail.com', 'gjxjwpxf', '2023-02-03 19:10:47'),
(418, 9, 'dochu15@gmail.com', 'bmofbkid', '2023-02-03 21:03:35'),
(419, 9, 'dochu15@gmail.com', 'lootyntr', '2023-02-03 22:06:36'),
(420, 9, 'dochu15@gmail.com', 'casujost', '2023-02-03 22:09:04'),
(421, 9, 'dochu15@gmail.com', 'liloevdn', '2023-02-03 22:33:22'),
(422, 9, 'dochu15@gmail.com', 'vpchzkow', '2023-02-03 23:17:35'),
(423, 9, 'dochu15@gmail.com', 'zcjbhvmd', '2023-02-03 23:18:16'),
(424, 1, 'dochu8@gmail.com', 'mwgbcyda', '2023-02-04 10:15:12'),
(425, 9, 'dochu15@gmail.com', 'axnxfjod', '2023-02-04 12:39:42'),
(426, 9, 'dochu15@gmail.com', 'tewevdqn', '2023-02-04 12:40:11'),
(427, 9, 'dochu15@gmail.com', 'vcstvhhp', '2023-02-04 12:41:20'),
(428, 9, 'dochu15@gmail.com', 'ummydigj', '2023-02-04 12:44:38'),
(429, 9, 'dochu15@gmail.com', 'kjteegfc', '2023-02-04 14:04:21'),
(430, 1, 'dochu8@gmail.com', 'agdnuusn', '2023-02-04 15:08:14'),
(431, 9, 'dochu15@gmail.com', 'gjbbstbr', '2023-02-04 15:08:43'),
(432, 9, 'dochu15@gmail.com', 'tcebopsb', '2023-02-04 17:16:56'),
(433, 9, 'dochu15@gmail.com', 'qoxvuhyk', '2023-02-04 17:19:05'),
(434, 9, 'dochu15@gmail.com', 'zxfmesak', '2023-02-04 17:24:47'),
(435, 9, 'dochu15@gmail.com', 'uywmfylk', '2023-02-04 17:28:07'),
(436, 9, 'dochu15@gmail.com', 'gosoazea', '2023-02-04 17:28:28'),
(437, 9, 'dochu15@gmail.com', 'byjivmks', '2023-02-04 21:02:41'),
(438, 9, 'dochu15@gmail.com', 'wutnuxya', '2023-02-05 14:04:53'),
(439, 9, 'dochu15@gmail.com', 'oeyjjmco', '2023-02-05 14:12:15'),
(440, 9, 'dochu15@gmail.com', 'alwjvkmx', '2023-02-05 14:36:18'),
(441, 9, 'dochu15@gmail.com', 'ovnimria', '2023-02-05 14:36:47'),
(442, 9, 'dochu15@gmail.com', 'bccqlyqd', '2023-02-05 16:30:55'),
(443, 1, 'dochu8@gmail.com', 'iuxuhnmd', '2023-02-05 16:32:51'),
(444, 1, 'dochu8@gmail.com', 'ciddunuk', '2023-02-05 17:07:42'),
(445, 1, 'dochu8@gmail.com', 'mcbagswa', '2023-02-05 17:17:34'),
(446, 1, 'dochu8@gmail.com', 'gpfxxuvc', '2023-02-05 17:18:57'),
(447, 10, 'dochu16@gmail.com', 'xdjuiyob', '2023-02-05 17:21:00'),
(448, 9, 'dochu15@gmail.com', 'wmqxfyyd', '2023-02-05 17:36:55'),
(449, 9, 'dochu15@gmail.com', 'oqivvmzm', '2023-02-05 17:40:35'),
(450, 9, 'dochu15@gmail.com', 'jflkgnrv', '2023-02-05 17:41:34'),
(451, 9, 'dochu15@gmail.com', 'oiappqbx', '2023-02-05 17:42:46'),
(452, 9, 'dochu15@gmail.com', 'omzimqmf', '2023-02-05 17:44:47'),
(453, 9, 'dochu15@gmail.com', 'zaaokarh', '2023-02-05 17:45:10'),
(454, 9, 'dochu15@gmail.com', 'rpkprevi', '2023-02-05 17:45:27'),
(455, 9, 'dochu15@gmail.com', 'eedfamow', '2023-02-05 17:47:36'),
(456, 9, 'dochu15@gmail.com', 'zkvfmxgs', '2023-02-05 17:49:47'),
(457, 9, 'dochu15@gmail.com', 'nvurqkfc', '2023-02-05 18:20:21'),
(458, 9, 'dochu15@gmail.com', 'yezfjrti', '2023-02-05 18:22:03'),
(459, 9, 'dochu15@gmail.com', 'potuauyx', '2023-02-05 18:24:04'),
(460, 11, 'dochu17@gmail.com', 'cvqelzjh', '2023-02-05 18:38:18'),
(461, 1, 'dochu8@gmail.com', 'xiyjxxtw', '2023-02-05 18:38:51'),
(462, 10, 'dochu16@gmail.com', 'ksaqfdjg', '2023-02-05 18:48:38'),
(463, 1, 'dochu8@gmail.com', 'mlsltplo', '2023-02-05 18:51:08'),
(464, 1, 'dochu8@gmail.com', 'pthcrtrv', '2023-02-05 18:53:49'),
(465, 1, 'dochu8@gmail.com', 'ppfrfqlw', '2023-02-05 19:15:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `user_account_1` varchar(150) DEFAULT NULL,
  `user_account_2` varchar(150) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `showed` int(11) NOT NULL,
  `message` varchar(150) DEFAULT NULL,
  `created` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `notification`
--

INSERT INTO `notification` (`id`, `user_account_1`, `user_account_2`, `type`, `post_id`, `comment_id`, `showed`, `message`, `created`) VALUES
(15, 'dochu8@gmail.com', 'dochu1@gmail.com', 4, NULL, NULL, 0, 'Friend request accept', '2022-05-11 11:33:30'),
(16, 'dochu8@gmail.com', 'dochu1@gmail.com', 4, NULL, NULL, 0, 'Friend request accept', '2022-05-11 11:33:30'),
(17, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:24:12'),
(18, 'dochu8@gmail.com', 'dochu2@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2022-12-17 15:24:12'),
(19, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:24:47'),
(20, 'dochu8@gmail.com', 'dochu2@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2022-12-17 15:24:47'),
(21, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:25:26'),
(22, 'dochu8@gmail.com', 'dochu2@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2022-12-17 15:25:26'),
(23, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:25:50'),
(24, 'dochu8@gmail.com', 'dochu2@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2022-12-17 15:25:50'),
(25, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:26:45'),
(26, 'dochu8@gmail.com', 'dochu2@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2022-12-17 15:26:45'),
(27, 'dochu2@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2022-12-17 15:27:08'),
(50, 'dochu8@gmail.com', 'none', 0, 12, 0, 0, 'New Avatar is replaced', '2022-12-28 21:46:12'),
(51, 'dochu8@gmail.com', 'none', 8, 13, 0, 0, 'New Background is replaced', '2022-12-28 22:40:07'),
(52, 'dochu8@gmail.com', 'none', 8, 14, 0, 0, 'New Background is replaced', '2022-12-28 22:40:18'),
(53, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 21:18:30'),
(54, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 21:40:22'),
(55, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 21:43:24'),
(56, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 21:43:42'),
(57, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 21:43:45'),
(58, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-01 22:01:34'),
(67, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-08 14:04:52'),
(68, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, NULL, NULL, 0, 'Emotion', '2023-01-08 14:09:45'),
(69, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, 0, 0, 1, 'Emotion', '2023-01-08 14:32:14'),
(70, 'dochu4@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2023-01-08 16:12:39'),
(71, 'dochu8@gmail.com', 'dochu4@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2023-01-08 16:12:39'),
(72, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, 14, 0, 1, 'Emotion', '2023-01-11 21:53:20'),
(73, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, 14, 0, 1, 'Emotion', '2023-01-14 23:13:58'),
(75, 'dochu8@gmail.com', 'dochu8@gmail.com', 21, 14, 29, 1, 'Emotion', '2023-01-14 23:32:09'),
(76, 'dochu8@gmail.com', 'none', 0, 15, NULL, 0, 'New post', '2023-01-15 20:59:55'),
(77, 'dochu8@gmail.com', 'none', 0, 16, NULL, 0, 'New post', '2023-01-15 21:00:33'),
(78, 'dochu8@gmail.com', 'none', 0, 17, NULL, 0, 'New post', '2023-01-15 21:00:54'),
(79, 'dochu8@gmail.com', 'none', 0, 18, NULL, 0, 'New post', '2023-01-15 21:01:19'),
(80, 'dochu8@gmail.com', 'none', 0, 19, NULL, 0, 'New post', '2023-01-15 21:01:42'),
(81, 'dochu8@gmail.com', 'none', 0, 20, NULL, 0, 'New post', '2023-01-15 21:01:53'),
(82, 'dochu8@gmail.com', 'none', 0, 21, NULL, 0, 'New post', '2023-01-15 21:03:35'),
(83, 'dochu8@gmail.com', 'none', 0, 22, NULL, 0, 'New post', '2023-01-15 21:04:29'),
(84, 'dochu8@gmail.com', 'none', 0, 25, NULL, 0, 'New post', '2023-01-15 21:07:30'),
(85, 'dochu8@gmail.com', 'none', 0, 26, NULL, 0, 'New post', '2023-01-15 21:08:29'),
(86, 'dochu8@gmail.com', 'none', 0, 27, NULL, 0, 'New post', '2023-01-15 21:18:18'),
(87, 'dochu8@gmail.com', 'none', 0, 28, NULL, 0, 'New post', '2023-01-15 22:41:25'),
(88, 'dochu8@gmail.com', 'none', 0, 29, NULL, 0, 'New post', '2023-01-17 22:34:29'),
(89, 'dochu8@gmail.com', 'none', 0, 30, NULL, 0, 'New post', '2023-01-17 22:35:15'),
(90, 'dochu8@gmail.com', 'none', 0, 31, NULL, 0, 'New post', '2023-01-17 22:35:30'),
(91, 'dochu8@gmail.com', 'none', 0, 32, NULL, 0, 'New post', '2023-01-17 22:36:17'),
(92, 'dochu8@gmail.com', 'none', 0, 33, NULL, 0, 'New post', '2023-01-17 22:38:13'),
(93, 'dochu8@gmail.com', 'none', 0, 34, NULL, 0, 'New post', '2023-01-17 22:42:34'),
(94, 'dochu8@gmail.com', 'none', 0, 35, NULL, 0, 'New post', '2023-01-17 22:43:56'),
(95, 'dochu8@gmail.com', 'none', 0, 36, NULL, 0, 'New post', '2023-01-17 22:47:43'),
(96, 'dochu8@gmail.com', 'none', 0, 37, 0, 1, 'New post', '2023-01-17 22:48:55'),
(97, 'dochu8@gmail.com', 'none', 0, 38, 0, 1, 'New post', '2023-01-17 22:49:23'),
(98, 'dochu8@gmail.com', 'none', 1, 14, 37, 1, 'New comment', '2023-01-18 23:03:30'),
(99, 'dochu8@gmail.com', 'none', 7, 39, 0, 0, 'New Avatar is replaced', '2023-01-19 20:43:40'),
(100, 'dochu4@gmail.com', 'dochu8@gmail.com', 4, NULL, NULL, 0, 'Friend request accept', NULL),
(101, 'dochu4@gmail.com', 'dochu8@gmail.com', 5, 0, 0, 1, 'Friend request accept', '2023-01-22 13:12:50'),
(102, 'dochu4@gmail.com', 'none', 0, 40, 0, 1, 'New post', '2023-01-22 13:20:13'),
(103, 'dochu8@gmail.com', 'dochu13@gmail.com', 4, 0, 0, 1, 'New friend request receive', '2023-01-26 15:28:15'),
(104, 'dochu13@gmail.com', 'dochu8@gmail.com', 3, 0, 0, 1, 'New friend request send', '2023-01-26 15:28:15'),
(105, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, 37, NULL, 0, 'Emotion', '2023-01-27 13:36:54'),
(106, 'dochu8@gmail.com', 'dochu8@gmail.com', 11, 37, 0, 1, 'Emotion', '2023-01-27 13:38:09'),
(107, 'dochu8@gmail.com', 'none', 1, 40, 38, 1, 'New comment', '2023-01-27 19:41:40'),
(108, 'dochu8@gmail.com', 'none', 1, 40, 39, 1, 'New comment', '2023-01-27 19:49:35'),
(109, 'dochu8@gmail.com', 'none', 1, 40, 40, 1, 'New comment', '2023-01-27 19:50:54'),
(110, 'dochu8@gmail.com', 'none', 1, 40, 41, 1, 'New comment', '2023-01-27 19:51:40'),
(111, 'dochu8@gmail.com', 'none', 1, 40, 42, 1, 'New comment', '2023-01-27 19:52:41'),
(112, 'dochu8@gmail.com', 'dochu4@gmail.com', 14, 40, 0, 0, 'Emotion', '2023-02-05 18:39:16'),
(113, 'dochu15@gmail.com', 'dochu4@gmail.com', 11, 40, NULL, 0, 'Emotion', '2023-01-31 16:53:39'),
(114, 'dochu8@gmail.com', 'dochu4@gmail.com', 11, 40, NULL, 0, 'Emotion', '2023-01-31 16:55:15'),
(115, 'dochu15@gmail.com', 'dochu4@gmail.com', 11, 40, NULL, 0, 'Emotion', '2023-01-31 17:03:05'),
(116, 'dochu15@gmail.com', 'dochu4@gmail.com', 11, 40, NULL, 0, 'Emotion', '2023-01-31 17:03:30'),
(117, 'dochu15@gmail.com', 'dochu8@gmail.com', 11, 37, 0, 1, 'Emotion', '2023-01-31 20:00:29'),
(118, 'dochu8@gmail.com', 'dochu13@gmail.com', 5, NULL, NULL, 0, 'Friend request accept', '2023-01-31 21:30:35'),
(119, 'dochu15@gmail.com', 'dochu4@gmail.com', 14, 40, NULL, 0, 'Emotion', '2023-02-02 19:50:54'),
(120, 'dochu15@gmail.com', 'dochu8@gmail.com', 1, 38, 43, 1, 'New comment', '2023-02-02 21:06:21'),
(121, 'dochu8@gmail.com', 'dochu8@gmail.com', 1, 38, 44, 1, 'New comment', '2023-02-02 21:30:39'),
(122, 'dochu15@gmail.com', 'dochu8@gmail.com', 13, 38, 0, 1, 'Emotion', '2023-02-02 21:41:51'),
(128, 'dochu15@gmail.com', 'dochu4@gmail.com', 1, 40, 45, 0, 'New comment', '2023-02-03 20:08:34'),
(129, 'dochu15@gmail.com', 'dochu4@gmail.com', 1, 40, 46, 0, 'New comment', '2023-02-03 22:27:47'),
(130, 'dochu15@gmail.com', 'dochu4@gmail.com', 1, 40, 47, 0, 'New comment', '2023-02-03 22:33:43'),
(131, 'dochu15@gmail.com', 'dochu4@gmail.com', 1, 40, 48, 0, 'New comment', '2023-02-03 23:19:05'),
(132, 'dochu15@gmail.com', 'none', 0, 41, 0, 1, 'New post', '2023-02-03 23:54:44'),
(134, 'dochu8@gmail.com', 'dochu15@gmail.com', 24, 40, 48, 1, 'Emotion', '2023-02-04 11:10:31'),
(135, 'dochu15@gmail.com', 'none', 0, 42, NULL, 0, 'New post', '2023-02-04 15:04:29'),
(136, 'dochu15@gmail.com', 'none', 0, 43, NULL, 0, 'New post', '2023-02-04 15:04:50'),
(137, 'dochu8@gmail.com', 'dochu15@gmail.com', 4, 0, 0, 1, 'New friend request send', '2023-02-04 15:07:57'),
(138, 'dochu15@gmail.com', 'dochu8@gmail.com', 3, NULL, NULL, 0, 'New friend request receive', '2023-02-04 15:07:57'),
(139, 'dochu8@gmail.com', 'dochu15@gmail.com', 5, 0, 0, 1, 'Friend request accept', '2023-02-04 15:08:30'),
(140, 'dochu15@gmail.com', 'dochu8@gmail.com', 12, 39, 0, 1, 'Emotion', '2023-02-05 16:32:28'),
(141, 'dochu8@gmail.com', 'dochu15@gmail.com', 11, 42, NULL, 0, 'Emotion', '2023-02-05 18:40:47'),
(142, 'dochu8@gmail.com', 'dochu4@gmail.com', 1, 40, 49, 0, 'New comment', '2023-02-05 18:41:49'),
(143, 'dochu8@gmail.com', 'none', 0, 44, NULL, 0, 'New post', '2023-02-05 18:43:57'),
(144, 'dochu8@gmail.com', 'none', 0, 45, NULL, 0, 'New post', '2023-02-05 18:44:44'),
(145, 'dochu8@gmail.com', 'none', 0, 46, NULL, 0, 'New post', '2023-02-05 18:47:28'),
(146, 'dochu16@gmail.com', 'dochu8@gmail.com', 4, NULL, NULL, 0, 'New friend request send', '2023-02-05 18:48:15'),
(147, 'dochu8@gmail.com', 'dochu16@gmail.com', 3, 0, 0, 1, 'New friend request receive', '2023-02-05 18:48:15'),
(148, 'dochu16@gmail.com', 'dochu8@gmail.com', 6, NULL, NULL, 0, 'Friend request declined', '2023-02-05 18:48:57'),
(149, 'dochu16@gmail.com', 'dochu8@gmail.com', 6, NULL, NULL, 0, 'Friend request declined', '2023-02-05 18:49:02'),
(150, 'dochu16@gmail.com', 'dochu8@gmail.com', 6, NULL, NULL, 0, 'Friend request declined', '2023-02-05 18:49:02'),
(151, 'dochu16@gmail.com', 'dochu8@gmail.com', 11, 45, 0, 1, 'Emotion', '2023-02-05 18:50:57'),
(152, 'dochu8@gmail.com', 'none', 7, 47, 0, 0, 'New Avatar is replaced', '2023-02-05 19:02:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_account` varchar(150) NOT NULL DEFAULT 'dochu8@gmail.com',
  `user_name` varchar(150) DEFAULT NULL,
  `post_body` text DEFAULT NULL,
  `publicity_state` int(11) DEFAULT NULL,
  `share_id` int(11) DEFAULT NULL,
  `img_num` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `user_id`, `user_account`, `user_name`, `post_body`, `publicity_state`, `share_id`, `img_num`, `created`, `modified`) VALUES
(3, 1, 'dochu8@gmail.com', 'Đô Chu', 'this suck baby', 2, 0, 1, '2022-11-21 09:41:58', '2022-11-21 09:41:58'),
(6, 1, 'dochu8@gmail.com', 'Đô Chu', '123', 0, 0, 3, '2022-11-21 09:57:24', '2022-11-21 09:57:24'),
(7, 1, 'dochu8@gmail.com', 'Đô Chu', '123', 1, 0, 3, '2022-11-21 09:58:43', '2022-11-21 09:58:43'),
(8, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2022-12-28 21:28:04', '2022-12-28 21:28:04'),
(9, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2022-12-28 21:43:05', '2022-12-28 21:43:05'),
(10, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2022-12-28 21:44:01', '2022-12-28 21:44:01'),
(11, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2022-12-28 21:44:58', '2022-12-28 21:44:58'),
(12, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2022-12-28 21:46:12', '2022-12-28 21:46:12'),
(13, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật background của anh ấy', 1, -2, 1, '2022-12-28 22:40:07', '2022-12-28 22:40:07'),
(14, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật background của anh ấy', 1, -2, 1, '2022-12-28 22:40:18', '2022-12-28 22:40:18'),
(27, 1, 'dochu8@gmail.com', 'Chu Don', 'fuck u', 2, 14, 0, '2023-01-15 21:18:18', '2023-01-15 21:18:18'),
(28, 1, 'dochu8@gmail.com', 'Chu Don', 'fuck yeah', 2, 6, 0, '2023-01-15 22:41:25', '2023-01-15 22:41:25'),
(33, 1, 'dochu8@gmail.com', 'Chu Don', 'ok', 2, 0, 0, '2023-01-17 22:38:13', '2023-01-17 22:38:13'),
(34, 1, 'dochu8@gmail.com', 'Chu Don', 'fucker', 2, 0, 0, '2023-01-17 22:42:34', '2023-01-17 22:42:34'),
(35, 1, 'dochu8@gmail.com', 'Chu Don', 'abc', 2, 0, 1, '2023-01-17 22:43:56', '2023-01-17 22:43:56'),
(36, 1, 'dochu8@gmail.com', 'Chu Don', 'Aac', 2, 0, 0, '2023-01-17 22:47:43', '2023-01-17 22:47:43'),
(37, 1, 'dochu8@gmail.com', 'Chu Don', 'abc', 2, 0, 1, '2023-01-17 22:48:55', '2023-01-17 22:48:55'),
(38, 1, 'dochu8@gmail.com', 'Chu Don', 'abcbc', 2, 0, 2, '2023-01-17 22:49:23', '2023-01-17 22:49:23'),
(39, 1, 'dochu8@gmail.com', 'Chu Don', 'Chu Don vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2023-01-19 20:43:40', '2023-01-19 20:43:40'),
(40, 5, 'dochu4@gmail.com', 'chu do', 'Roxanne', 2, 0, 1, '2023-01-22 13:20:13', '2023-01-22 13:20:13'),
(41, 9, 'dochu15@gmail.com', 'CHu do', 'non', 2, 40, 0, '2023-02-03 23:54:44', '2023-02-03 23:54:44'),
(42, 9, 'dochu15@gmail.com', 'CHu do', 'shitty', 2, 0, 1, '2023-02-04 15:04:29', '2023-02-04 15:04:29'),
(43, 9, 'dochu15@gmail.com', 'CHu do', 'blur', 0, 0, 0, '2023-02-04 15:04:50', '2023-02-04 15:04:50'),
(44, 1, 'dochu8@gmail.com', 'Chu Do', '5/2/2023', 2, 0, 0, '2023-02-05 18:43:57', '2023-02-05 18:46:04'),
(45, 1, 'dochu8@gmail.com', 'Chu Do', '3 images', 2, 0, 3, '2023-02-05 18:44:44', '2023-02-05 18:44:44'),
(46, 1, 'dochu8@gmail.com', 'Chu Do', '4788', 0, 0, 0, '2023-02-05 18:47:28', '2023-02-05 18:47:28'),
(47, 1, 'dochu8@gmail.com', 'Trung Kien', 'Trung Kien vừa cập nhật ảnh đại diện của anh ấy', 1, -1, 1, '2023-02-05 19:02:35', '2023-02-05 19:02:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `search_history`
--

CREATE TABLE `search_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `search_body` text DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `showed` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `search_history`
--

INSERT INTO `search_history` (`id`, `user_id`, `search_body`, `type`, `showed`, `created`) VALUES
(1, 1, 'fuck you', 0, NULL, '2022-05-11 11:33:30'),
(2, 1, 'C', 1, 0, '2023-01-27 21:56:25'),
(6, 1, 'fuck', 1, 0, '2023-01-13 20:06:58'),
(39, 1, 'C', 2, 0, '2023-01-31 20:09:15'),
(40, 1, 'C', 2, 0, '2023-01-13 20:31:39'),
(41, 4, 'chu', 1, 0, '2023-01-21 11:53:37'),
(42, 4, 'chu', 2, 0, '2023-01-21 11:59:36'),
(43, 4, 'chu', 2, 0, '2023-01-21 11:41:30'),
(44, 4, 'C', 2, 0, '2023-01-21 12:00:22'),
(45, 4, 'C', 2, 0, '2023-01-21 11:41:48'),
(46, 4, 'C', 2, 0, '2023-01-21 11:43:58'),
(47, 4, 'C', 2, 0, '2023-01-21 11:48:02'),
(48, 4, 'C', 2, 0, '2023-01-21 11:52:07'),
(49, 4, 'Ch', 2, 0, '2023-01-21 11:52:55'),
(50, 4, 'Ch', 2, 0, '2023-01-21 11:52:55'),
(51, 4, 'chu', 2, 0, '2023-01-21 11:55:09'),
(52, 4, 'chu', 2, 0, '2023-01-21 11:55:44'),
(53, 4, 'chu', 2, 0, '2023-01-21 11:56:07'),
(54, 4, 'chu', 2, 0, '2023-01-21 11:56:09'),
(55, 4, 'chu', 2, 0, '2023-01-21 11:56:16'),
(56, 4, 'chu', 2, 0, '2023-01-21 11:56:17'),
(57, 4, 'chu', 2, 0, '2023-01-21 11:56:19'),
(58, 4, 'chu', 2, 0, '2023-01-21 11:57:01'),
(59, 4, 'chu', 2, 0, '2023-01-21 11:58:23'),
(60, 4, 'chu', 2, 0, '2023-01-21 11:58:34'),
(61, 4, 'chu', 2, 0, '2023-01-21 11:58:37'),
(62, 4, 'chun', 2, 0, '2023-01-21 11:59:51'),
(63, 5, 'C', 2, 0, '2023-01-21 12:15:42'),
(64, 1, 'Chu', 2, 0, '2023-01-26 21:21:28'),
(65, 9, 'C', 2, 0, '2023-02-03 17:10:34'),
(66, 9, 'C', 1, 0, '2023-02-05 14:34:37'),
(67, 1, 'D', 2, 0, '2023-02-03 18:23:09'),
(68, 9, 'fffff', 1, 0, '2023-02-05 14:34:46'),
(69, 9, 'Ffff', 1, 0, '2023-02-05 14:40:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `is_admin` tinyint(4) DEFAULT NULL,
  `new` int(11) DEFAULT 0,
  `birthday` datetime DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `fullname`, `address`, `phone_number`, `is_admin`, `new`, `birthday`, `gender`, `created`, `modified`) VALUES
(1, 'dochu8@gmail.com', '8cb2237d0679ca88db6464eac60da96345513964', 'Trung Kien', 'Long Bien, Ha Noi, Viet Nam', '0354324599', 0, 0, '1969-12-30 20:00:00', 0, '2022-05-11 11:33:30', '2022-09-11 09:16:03'),
(2, 'dochu1@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Nguyễn Đức Thắng', 'kep 12', '123', 0, 0, NULL, NULL, '2022-11-20 20:25:41', '2022-11-20 20:25:41'),
(3, 'dochu2@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Quang Hưng', 'kep 12', '123', 0, 0, NULL, NULL, '2022-11-20 20:25:41', '2022-11-20 20:25:41'),
(4, 'dochu3@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Roxanne', 'kep 12', '123', 0, 0, NULL, NULL, '2022-11-20 20:25:41', '2022-11-20 20:25:41'),
(5, 'dochu4@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'pyuss', 'kep 12', '123', 0, 0, NULL, NULL, '2022-11-20 20:25:41', '2022-11-20 20:25:41'),
(7, 'dochu12@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'do chu', 'kep 12', '12312312', 0, 1, '2001-08-21 23:15:30', NULL, '2023-01-26 01:19:40', '2023-01-26 01:19:40'),
(8, 'dochu13@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'Death', 'blue', '12312312', 0, 1, '1999-08-01 23:15:30', NULL, '2023-01-26 15:22:17', '2023-01-26 15:22:17'),
(9, 'dochu15@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'CHu do', 'Kep 12', '12312312', 0, 0, '1973-08-21 23:15:30', 1, '2023-01-29 16:22:39', '2023-01-29 16:22:39'),
(10, 'dochu16@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'DUC NGUYEN', 'hA NOI', '12312312', 0, 0, '1982-08-26 23:15:30', 1, '2023-02-05 17:20:49', '2023-02-05 17:20:49'),
(11, 'dochu17@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Do chu', 'Kep 12', '12312312', 0, 0, '2001-08-21 23:15:30', 1, '2023-02-05 18:37:52', '2023-02-05 18:37:52');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Chỉ mục cho bảng `emotion_comment_list`
--
ALTER TABLE `emotion_comment_list`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `emotion_post_list`
--
ALTER TABLE `emotion_post_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`id`);

--
-- Chỉ mục cho bảng `friend_relation`
--
ALTER TABLE `friend_relation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_user_1` (`user_account_1`);

--
-- Chỉ mục cho bảng `log_temp`
--
ALTER TABLE `log_temp`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_account_1` (`user_account_1`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `search_history`
--
ALTER TABLE `search_history`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `emotion_comment_list`
--
ALTER TABLE `emotion_comment_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `emotion_post_list`
--
ALTER TABLE `emotion_post_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT cho bảng `friend_relation`
--
ALTER TABLE `friend_relation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `log_temp`
--
ALTER TABLE `log_temp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=466;

--
-- AUTO_INCREMENT cho bảng `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT cho bảng `search_history`
--
ALTER TABLE `search_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
