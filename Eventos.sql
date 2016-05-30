-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-05-2016 a las 04:29:30
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.5.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Knx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Eventos`
--

CREATE TABLE `Eventos` (
  `event_name` text NOT NULL,
  `id_event` int(11) NOT NULL,
  `location` text NOT NULL,
  `date_time` datetime NOT NULL,
  `price` float NOT NULL,
  `photo` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `description_2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de los eventos con sus precios';

--
-- Volcado de datos para la tabla `Eventos`
--

INSERT INTO `Eventos` (`event_name`, `id_event`, `location`, `date_time`, `price`, `photo`, `description`, `description_2`) VALUES
('Onda vaga', 1, 'Sala cubierta', '2016-06-04 22:30:00', 95, 'CQi5ZE8.jpg', 'Con siete años de historia, la banda ya tiene en su haber tres discos de estudio: Fuerte y caliente, Espíritu salvaje y Magma elemental, que la consagraron en la escena local, cuatro giras europeas y la consagración como banda revelación en el festival Fuji Rock de Japón.\r\n\r\nLa banda se presentó ante más de 10 mil personas y fue destacada por Billboard por su energía en el escenario y la aceptación del público\r\n', 'UNA ONDA VAGA RECORRE EL PLANETA, UN MOVIMIENTO SIN FORMA, UN PROPIO DE TANGO ALEGRE'),
('La bomba de tiempo', 2, 'Sala E', '2016-05-30 19:00:00', 110, '4emoGht.jpg', 'La Bomba de Tiempo es un seleccionado de excelentes percusionistas que improvisa en escena mientras la energía del público va marcando su impronta. Así, todos los lunes en el Konex se genera un verdadero ritual de ritmo y percusión que se apodera del ambiente y que invita a vivir una experiencia única. Más de tres millones de personas ya disfrutaron del fenómeno que revolucionó la percusión en la ciudad y que le da otro color al primer día de la semana.', 'Para mayores de 18 / No se suspende por lluvia.'),
('La isla desierta', 3, 'Sala D', '2016-06-06 20:15:00', 200, 'SEgTfyQ.jpg', 'En su decimosexta temporada de éxito, vuelve La Isla Desierta, la obra de Roberto Arlt que inauguró el Teatro Ciego en 2001. El Grupo Ojcuro, conformado por actores no videntes y videntes, realiza una interpretación de auténtica integración con una novedosa puesta basada en la ausencia total de luz. Desde que ingresan en la oscuridad de la sala, los espectadores son llevados a experimentar sensaciones táctiles, sonoras y olfativas, haciendo de esta obra una experiencia inolvidable.', ''),
('Música en la oscuridad con Parlantes Holofónicos: Queen - A Night At The Opera', 4, 'Sala D', '2016-06-07 17:00:00', 120, 'bMwugkg.jpg', 'Los invitamos a una experiencia sonora única en el mundo, donde gracias a la tecnología del PARLANTE HOLOFÓNICO, podrán redescubrir a sus artistas favoritos como ni siquiera ellos han podido escuchar su propia creación. Todo esto será reproducido en absoluta oscuridad, para que aumentes tu percepción sonora, te liberes del entorno, y te dejes sumergir en el sonido de una manera nunca antes igualada. Hoy ofrecemos un espectáculo único, con los mejores Parlantes Holofónicos diseñados hasta la fecha, de 5 metros de altura cada uno y con un rango de frecuencia superior al oído humano. El resultado es una experiencia visceral que te hará creer que los artistas y sus instrumentos están allí en vivo en la oscuridad. Es un espectáculo APTO PARA TODO PÚBLICO, que te demostrará que la alta fidelidad sonora obtenida te acercará a tu artista favorito como nunca antes habías podido experimentar.', ''),
('Circo del Horror', 5, 'Sala A', '2016-06-03 22:00:00', 230, 'XS0NViU.jpg', 'Vení a ver exorcismos, torturas, contorsiones, suspensión corporal, fuerza capilar, cama de clavos, perforaciones, lanza cuchillos y hachas, malabares con motosierras, pirofagia, equilibrios mortales, trapecios suicidas y Horror en vivo!!!!', 'Llegó el tiempo de las almas en pena... De los viejos fantasmas.... \r\nLlega el Circo del Horror!');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD PRIMARY KEY (`id_event`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
