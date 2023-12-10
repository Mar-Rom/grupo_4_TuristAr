-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2023 a las 23:54:24
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
(4, 9, 'image-1701988291344.jpeg');

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
(5, 'mar del plata ', 'prueba numero 2323232 del formulario ', 20000, 4, 1, 'BuenosAires', 'jujuy', 'avenida 9 de julio'),
(6, 'santa fe ', 'Prueba numero 2 para saber si esta bien ', 23213, 4, 1, 'San Juan', 'jujuy', 'avenida 9 de julio'),
(7, 'mar del plata ', 'dsadsadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 20000, 4, 1, 'BuenosAires', 'jujuy', 'avenida 9 de julio'),
(8, 'mar del plata ', 'dsadsadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 20000, 4, 1, 'BuenosAires', 'jujuy', 'avenida 9 de julio'),
(9, 'mar del plata ', 'dsadsadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 20000, 4, 1, 'BuenosAires', 'jujuy', 'avenida 9 de julio');

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
  `birth_day` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `password2`, `image`, `phone`, `birth_day`) VALUES
(1, 'Martin', 'Romero', 'martin14@gmail.com', '1234', '1234', 'default.webp', 3886400813, '2023-03-14');

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
  MODIFY `id_image` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id_lodging` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `reserve`
--
ALTER TABLE `reserve`
  MODIFY `id_reserve` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
