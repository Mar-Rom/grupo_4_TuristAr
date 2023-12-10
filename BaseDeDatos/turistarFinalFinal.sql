-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2023 a las 06:39:18
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `turistar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorites`
--

CREATE TABLE `favorites` (
  `id_favorites` int(5) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_lodging` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images_lodging`
--

CREATE TABLE `images_lodging` (
  `id_image` int(5) NOT NULL,
  `id_lodging` int(5) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `images_lodging`
--

INSERT INTO `images_lodging` (`id_image`, `id_lodging`, `name`) VALUES
(1, 1, 'image-1702012698589.jpg'),
(2, 1, 'image-1702012698589.jpg'),
(3, 1, 'image-1702012698590.jpg'),
(4, 1, 'image-1702012698590.jpg'),
(5, 2, 'image-1702013878586.jpg'),
(6, 2, 'image-1702013878588.jpg'),
(7, 2, 'image-1702013878596.jpg'),
(8, 2, 'image-1702013878599.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `include`
--

CREATE TABLE `include` (
  `id_include` int(5) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `include_lodging`
--

CREATE TABLE `include_lodging` (
  `id` int(5) NOT NULL,
  `id_lodging` int(5) NOT NULL,
  `id_include` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lodging`
--

CREATE TABLE `lodging` (
  `id_lodging` int(5) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(280) NOT NULL,
  `price` bigint(7) NOT NULL,
  `persons` int(11) NOT NULL,
  `id_user` int(5) NOT NULL,
  `province` varchar(30) NOT NULL,
  `locality` varchar(30) NOT NULL,
  `street` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lodging`
--

INSERT INTO `lodging` (`id_lodging`, `name`, `description`, `price`, `persons`, `id_user`, `province`, `locality`, `street`) VALUES
(1, 'Casita Purmamarca', 'APROVECHÁ PREVIAJE CON NOSOTROS!!! Casita Purma es una casita nueva dentro del casco histórico de Purmamarca.  Dos personas, living-comedor-cocina, baño y patio. Desde las ventanas se puede disfrutar del Cerro de los Siete Colores y del pintoresco pueblo Patrimonio de la Humanida', 120000, 2, 1, 'Jujuy', 'Purmamarca', 'Av. Siempre viva 234'),
(2, 'una casa salada uwu', 'el mejor lugar lejos de la vida cotidiana veni yayaya que se acaban los lugares loco', 333333, 2, 1, 'Cordoba', 'carlos paz', 'Av. Siempre viva 234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserve`
--

CREATE TABLE `reserve` (
  `id_reserve` int(5) NOT NULL,
  `id_guest` int(5) NOT NULL,
  `id_lodging` int(5) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `count_persons` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `password2` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `birth_day` date NOT NULL,
  `genre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `password2`, `image`, `phone`, `birth_day`, `genre`) VALUES
(1, 'alejandra', 'velazquez', 'ro@gmail.com', '$2a$10$S46VL232xod1Ea2FUvPHx.h', '456456', 'women-default.png', 3885555555, '2002-12-02', 'Mujer'),
(2, 'pepito', 'rodriguez', 'pepito@gmail.com', '$2a$10$BW3Pq2.hjjtrORzw02xKF.X', '123123', 'image-1702012614207.jpg', 388888888, '2255-12-12', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id_favorites`),
  ADD KEY `user_favorite_user_id_foreing` (`id_user`),
  ADD KEY `lodging_favorite_lodging_id_foreing` (`id_lodging`);

--
-- Indices de la tabla `images_lodging`
--
ALTER TABLE `images_lodging`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `images_lodging_lodging_id_foreing` (`id_lodging`);

--
-- Indices de la tabla `include`
--
ALTER TABLE `include`
  ADD PRIMARY KEY (`id_include`);

--
-- Indices de la tabla `include_lodging`
--
ALTER TABLE `include_lodging`
  ADD PRIMARY KEY (`id`),
  ADD KEY `include_lodging_lodging_id_foreing` (`id_lodging`),
  ADD KEY `include_lodging_include_id_foreing` (`id_include`);

--
-- Indices de la tabla `lodging`
--
ALTER TABLE `lodging`
  ADD PRIMARY KEY (`id_lodging`),
  ADD KEY `lodging_user_id_foreing` (`id_user`);

--
-- Indices de la tabla `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`id_reserve`),
  ADD KEY `lodging_user_lodging_id_foreing` (`id_lodging`),
  ADD KEY `lodging_user_user_id_foreing` (`id_guest`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id_favorites` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `images_lodging`
--
ALTER TABLE `images_lodging`
  MODIFY `id_image` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `include`
--
ALTER TABLE `include`
  MODIFY `id_include` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `include_lodging`
--
ALTER TABLE `include_lodging`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lodging`
--
ALTER TABLE `lodging`
  MODIFY `id_lodging` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reserve`
--
ALTER TABLE `reserve`
  MODIFY `id_reserve` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `lodging_favorite_lodging_id_foreing` FOREIGN KEY (`id_lodging`) REFERENCES `lodging` (`id_lodging`),
  ADD CONSTRAINT `user_favorite_user_id_foreing` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `images_lodging`
--
ALTER TABLE `images_lodging`
  ADD CONSTRAINT `images_lodging_lodging_id_foreing` FOREIGN KEY (`id_lodging`) REFERENCES `lodging` (`id_lodging`);

--
-- Filtros para la tabla `include_lodging`
--
ALTER TABLE `include_lodging`
  ADD CONSTRAINT `include_lodging_include_id_foreing` FOREIGN KEY (`id_include`) REFERENCES `include` (`id_include`),
  ADD CONSTRAINT `include_lodging_lodging_id_foreing` FOREIGN KEY (`id_lodging`) REFERENCES `lodging` (`id_lodging`);

--
-- Filtros para la tabla `lodging`
--
ALTER TABLE `lodging`
  ADD CONSTRAINT `lodging_user_id_foreing` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `reserve`
--
ALTER TABLE `reserve`
  ADD CONSTRAINT `lodging_user_lodging_id_foreing` FOREIGN KEY (`id_lodging`) REFERENCES `lodging` (`id_lodging`),
  ADD CONSTRAINT `lodging_user_user_id_foreing` FOREIGN KEY (`id_guest`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;