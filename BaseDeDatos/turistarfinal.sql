-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2023 a las 19:37:27
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

--
-- Volcado de datos para la tabla `favorites`
--

INSERT INTO `favorites` (`id_favorites`, `id_user`, `id_lodging`) VALUES
(5, 5, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images_lodging`
--

CREATE TABLE `images_lodging` (
  `id_image` int(5) NOT NULL,
  `id_lodging` int(5) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `images_lodging`
--

INSERT INTO `images_lodging` (`id_image`, `id_lodging`, `name`) VALUES
(1, 1, 'casaPurma1.jpg'),
(2, 1, 'casaPurma2.jpg'),
(3, 1, 'casaPurma3.jpg'),
(4, 1, 'casaPurma4.jpg'),
(5, 2, 'ecocabaña1.jpg'),
(6, 2, 'ecocabaña2.jpg'),
(7, 2, 'ecocabaña3.jpg'),
(8, 2, 'ecocabaña4.jpg'),
(9, 3, 'casaArtista1.jpg'),
(10, 3, 'casaArtista2.jpg'),
(11, 3, 'casaArtista3.jpg'),
(12, 3, 'casaArtista4.jpg'),
(13, 4, 'casaUshuaia1.jpg'),
(14, 4, 'casaUshuaia2.jpg'),
(15, 4, 'casaUshuaia3.jpg'),
(16, 4, 'casaUshuaia4.jpg'),
(17, 4, 'casaUshuaia5.jpg'),
(18, 4, 'casaUshuaia6.jpg'),
(19, 5, 'deptoBaires1.jpg'),
(20, 5, 'deptoBaires2.jpg'),
(21, 5, 'deptoBaires3.jpg'),
(22, 5, 'deptoBaires4.jpg'),
(23, 5, 'deptoBaires5.jpg'),
(24, 5, 'deptoBaires6.jpg'),
(25, 6, 'deptoBariloche1.jpg'),
(26, 6, 'deptoBariloche2.jpg'),
(27, 6, 'deptoBariloche3.jpg'),
(28, 6, 'deptoBariloche4.jpg'),
(29, 6, 'deptoBariloche5.jpg'),
(30, 6, 'deptoBariloche6.jpg'),
(31, 7, 'mendoza1.jpg'),
(32, 7, 'mendoza2.jpg'),
(33, 7, 'mendoza3.jpg'),
(34, 7, 'mendoza4.jpg'),
(35, 8, 'tucuman1.jpg'),
(36, 8, 'tucuman2.jpg'),
(37, 8, 'tucuman3.jpg'),
(38, 8, 'tucuman4.jpg'),
(39, 9, 'villaCarlosPaz1.jpg'),
(40, 9, 'villaCarlosPaz2.jpg'),
(41, 9, 'villaCarlosPaz3.jpg'),
(42, 9, 'villaCarlosPaz4.jpg'),
(43, 10, 'casaIguazu.jpg'),
(44, 10, 'casaIguazu2.jpg'),
(45, 10, 'casaIguazu3.jpg'),
(46, 10, 'casaIguazu4.jpg'),
(47, 10, 'casaIguazu5.jpg'),
(48, 11, 'hotelMediterraneo.jpg'),
(49, 11, 'hotelMediterraneo2.jpg'),
(50, 11, 'hotelMediterraneo3.jpg'),
(51, 11, 'hotelMediterraneo4.jpg'),
(52, 12, 'departamentoIguazu.jpg'),
(53, 12, 'departamentoIguazu2.jpg'),
(54, 12, 'departamentoIguazu3.jpg'),
(55, 12, 'departamentoIguazu4.jpg'),
(65, 17, 'image-1702263478268.jpg'),
(66, 17, 'image-1702263478269.jpg'),
(67, 17, 'image-1702263478270.jpg'),
(76, 23, 'image-1702349508378.jpg'),
(77, 23, 'image-1702349508379.jpg'),
(80, 22, 'image-1702406088582.jpg'),
(81, 22, 'image-1702406088583.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `include`
--

CREATE TABLE `include` (
  `id_include` int(5) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `include`
--

INSERT INTO `include` (`id_include`, `name`) VALUES
(1, 'Cocina'),
(2, 'Heladera'),
(3, 'Freezer'),
(4, 'Lavarropa'),
(5, 'Wi-fi'),
(6, 'Agua Caliente'),
(7, 'Baño privado'),
(8, 'Baño compartido'),
(9, 'Televisor'),
(10, 'Estacionamiento'),
(11, 'Garage'),
(12, 'Pileta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `include_lodging`
--

CREATE TABLE `include_lodging` (
  `id` int(5) NOT NULL,
  `id_lodging` int(5) NOT NULL,
  `id_include` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `include_lodging`
--

INSERT INTO `include_lodging` (`id`, `id_lodging`, `id_include`) VALUES
(18, 23, 1),
(19, 23, 3),
(20, 23, 4),
(21, 23, 5),
(22, 23, 7),
(23, 23, 9),
(24, 1, 1),
(25, 1, 5),
(26, 1, 6),
(27, 1, 7),
(28, 2, 1),
(29, 2, 6),
(30, 2, 7),
(31, 2, 8),
(32, 3, 1),
(33, 3, 2),
(34, 3, 5),
(35, 3, 6),
(36, 3, 9),
(37, 4, 1),
(38, 4, 5),
(39, 4, 7),
(40, 4, 9),
(41, 4, 10),
(42, 5, 1),
(43, 5, 5),
(44, 5, 7),
(45, 5, 9),
(46, 5, 10),
(47, 5, 12),
(48, 6, 1),
(49, 6, 2),
(50, 6, 5),
(51, 6, 6),
(52, 6, 9),
(53, 7, 1),
(54, 7, 3),
(55, 7, 4),
(56, 7, 5),
(57, 7, 6),
(58, 7, 7),
(59, 8, 1),
(60, 8, 2),
(61, 8, 7),
(62, 8, 9),
(63, 9, 1),
(64, 9, 5),
(65, 9, 9),
(66, 9, 12),
(67, 10, 1),
(68, 10, 2),
(69, 10, 5),
(70, 10, 9),
(71, 10, 10),
(72, 11, 1),
(73, 11, 2),
(74, 11, 5),
(75, 11, 9),
(76, 11, 12),
(77, 12, 1),
(78, 12, 2),
(79, 12, 5),
(80, 12, 7),
(81, 12, 9),
(82, 12, 12),
(83, 17, 2),
(84, 17, 6),
(85, 17, 7),
(86, 17, 9),
(87, 17, 11),
(103, 22, 1),
(104, 22, 2),
(105, 22, 6),
(106, 22, 7),
(107, 22, 8),
(108, 22, 9),
(109, 22, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lodging`
--

CREATE TABLE `lodging` (
  `id_lodging` int(5) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(400) NOT NULL,
  `price` bigint(7) NOT NULL,
  `persons` int(11) NOT NULL,
  `id_user` int(5) NOT NULL,
  `province` varchar(30) NOT NULL,
  `locality` varchar(30) NOT NULL,
  `street` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lodging`
--

INSERT INTO `lodging` (`id_lodging`, `name`, `description`, `price`, `persons`, `id_user`, `province`, `locality`, `street`) VALUES
(1, 'Casita Purmamarca', 'APROVECHÁ PREVIAJE CON NOSOTROS!!! Casita Purma es una casita nueva dentro del casco histórico de Purmamarca.  Dos personas, living-comedor-cocina, baño y patio. Desde las ventanas se puede disfrutar del Cerro de los Siete Colores y del pintoresco pueblo Patrimonio de la Humanida', 120000, 2, 1, 'Jujuy', 'Purmamarca', 'Av. Siempre viva 234'),
(2, 'ECOCABAÑA 3', 'ECOCABAÑA es un concepto de alojamiento rural y ecológico ubicado en Purmamarca con una de las mejores vistas panorámicas del Cerro de los 7 Colores, aquí tendrás un gran espacio para conectar con la naturaleza. Estamos muy cerca de todo, pudiendo recorrer prácticamente toda la c', 30000, 1, 1, 'Jujuy', 'Purmamarca', 'Ruta 9'),
(3, 'Casa de artista con senderos & arroyo', 'No es una casa cualquiera. De madera de cipres acerrado ahi mismo. Luminosa, amplia, bien aislada para asegurar el mínimo consumo de energía. Decoración de sencilla elegancia acorde al lugar, cuadros de fotos de Florian von der Fecht enmarcados con madera reciclada. sin vecinos, ', 60000, 2, 3, 'Rio Negro', 'Bariloche', 'Oscar Orias 234'),
(4, 'Un Chiringo entre el bosque y la montaña', 'Cabaña de montaña, que consta de 1 ambiente en planta baja con cocina-comedor, equipado con heladera, anafe a gas, horno eléctrico, jarra eléctrica y vajilla para 4 personas. El baño ubicado en planta baja tiene ducha con mampara. En este ambiente hay un futón cama donde pueden d', 30750, 3, 2, 'BuenosAires', 'Ushuaia', 'Av. Los Olivos 222'),
(5, 'Departamento en Buenos Aires', 'Espectacular apartamento de tres ambientes en Villa Crespo, muy bien conectado y cerca de Palermo.Torre con amenities y todas las comodidades de una casa: jardin, piscina, cancha de futbol, mucho verde y seguridad 24 hs. Espacios amplios, luminosos y equipados. Tiene escritorio d', 33750, 3, 4, 'BuenosAires', 'Ciudad Autónoma Buenos Aires', 'La Fé 554'),
(6, 'Departamento HOME - Vista Lago y Bosque', 'Relájate en este increíble alojamiento en un entorno único y pacifico, rodeado de un bosque nativo, aves autóctonas y una hermosa vista al lago Nahuel Huapi. Este departamento moderno y acogedor se encuentra dentro de un barrio cerrado a menos de 5 km del centro de Bariloche, cer', 56250, 3, 1, 'Rio Negro', 'Bariloche', 'Horacio Carrillo 342'),
(7, 'Vivienda en Mendoza - Vista a las montañas', 'la tierra del malbec, que alberga al imponente cerro Aconcagua, se fortalece como el Olimpo para los enófilos de todo el orbe al formar parte de la prestigiosa red global de las Great Wine Capitals.', 55000, 7, 1, 'Mendoza', 'Las Cuevas', 'Cuba 232'),
(8, 'Vieja casona en un pequeño pueblo', 'A tan solo 25 kilómetros al oeste de la ciudad de Tucumán se encuentra, enclavada entre los cerros y la selva, la hermosa y pintoresca localidad de Villa Nougués.', 28000, 3, 3, 'BuenosAires', 'Villa Nougués', 'San Martin 212'),
(9, 'Hostería Villa del Lago', 'se encuentra en Villa Carlos Paz y ofrece salón, dos habitaciones y pileta', 28000, 5, 2, 'Cordoba', 'Villa Carlos Paz', 'Martiarena 1004'),
(10, 'Alojamiento Puerto Iguazu', 'sEl alojamiento se encuentra en un lugar tranquilo rodeado de naturaleza, cerca de varios atractivos turisticos de la ciudad', 27000, 4, 3, 'Misiones', 'Puerto Iguazu', 'Salta 243'),
(11, 'Hotel Mediterraneo', 'Hotel centrico ubicado cerca de lugares turisticos', 28500, 4, 1, 'Misiones', 'Puerto Iguazu', 'Formosa 543'),
(12, 'Cabañas Rincon Santa Maria', 'Cabañas con piscina con cerca perimetral de seguridad, iluminación nocturna en quincho y área de barbacoa', 31500, 8, 4, 'Misiones', 'Puerto Iguazu', 'Costanera 654'),
(17, 'boquita pasion', 'la mejor casa lejos de todo y mas si quieres olvidar a tu ex, visitanos ya', 120000, 2, 1, 'Cordoba', 'carlos paz', 'Av. Siempre viva 234'),
(22, 'casas saladas', 'mejor casita lejos de todo y es mas esta super lejos de donde estas llamaya ', 333333, 2, 5, 'BuenosAires', 'carlos paz', 'Av. Siempre viva 234'),
(23, 'casita en la montañita con chikorita', 'casita pequeña en una montañita pequeña uwu junto con chikorita', 100000, 2, 5, 'Cordoba', 'Villa Carlos Paz', 'Av. Siempre viva 234');

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
  `last_name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  `password2` varchar(60) NOT NULL,
  `image` varchar(80) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `birth_day` date NOT NULL,
  `genre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `password2`, `image`, `phone`, `birth_day`, `genre`) VALUES
(1, 'alejandra', 'velazquez', 'ro@gmail.com', '$2a$10$KwPSfDkCaPltbet2ry82ZuIJ6j30/dH8j0otfDsDaZ6ZIz7MAeGC2', '123123', 'women-default.png', 3885555555, '2002-12-02', 'Mujer'),
(2, 'pepito', 'rodriguez', 'pepito@gmail.com', '$2a$10$.6l503wiuczstthFMD87UOudbntYi5QAyn6CNTK753bVDsNeDXbg6', '456456', 'women-default.png', 388888888, '2255-12-12', 'Hombre'),
(3, 'Martin', 'Romero', 'martin@gmail.com', '$2a$10$Sw3rSeCtxYwq.TmZpjdw7OoOvcNWakJiI7XsPNaMngtx5LpbgICFu', '456456', 'women-default.png', 38888888, '2005-05-12', 'Hombre'),
(4, 'roberta', 'Monzon', 'roberta@gmail.com', '$2a$10$Dvy9wWHYsXcwhY3jYM1oEuqdB9Bb6/Ypa.HI1SllfwvVUlYH2x34.', '456456', 'women-default.png', 3885123123, '2005-12-02', ''),
(5, 'Marta Maria', 'Lopez', 'marta@gmail.com', '$2a$10$PEvSaimtqJP4gAtQsbF9LOjkdwUR5O6Dt4mQigm3VXSZqbIQ/ZayG', '123123', 'image-1702353099576.jpg', 3885123123, '2002-12-02', '');

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
  MODIFY `id_favorites` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `images_lodging`
--
ALTER TABLE `images_lodging`
  MODIFY `id_image` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `include`
--
ALTER TABLE `include`
  MODIFY `id_include` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `include_lodging`
--
ALTER TABLE `include_lodging`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT de la tabla `lodging`
--
ALTER TABLE `lodging`
  MODIFY `id_lodging` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `reserve`
--
ALTER TABLE `reserve`
  MODIFY `id_reserve` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
