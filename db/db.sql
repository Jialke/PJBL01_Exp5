-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: pjbl_usuarios
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `anoNascimento` date DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Saras Schamberger','Ebba.Kris66@hotmail.com','2001-01-27','24684 Frances Lodge Apt. 419','09410985769'),(2,'Terrence Barrows','Tamara92@gmail.com','1983-07-01','4467 Vine Street Suite 231','30368781575'),(3,'Dr. Joanne Kirlin','Vickie.Toy@yahoo.com','1958-04-16','4449 Hammes Place Suite 652','25124315349'),(4,'Miss Christina Hayes','Astrid28@yahoo.com','1965-07-16','9551 Katelin Branch Suite 510','62977756666'),(5,'Samuel Emmerich','Nathen_Block@hotmail.com','1946-08-20','7514 Brook Road Apt. 143','32117606988'),(7,'Edgar White','Freddy.Hackett@yahoo.com','2003-03-13','626 E Jefferson Street Suite 258','80532858478'),(8,'Jan Kuphal','Ignatius_Kilback18@gmail.com','1990-11-09','93649 Ritchie Branch Suite 127','22920290229'),(9,'Katie Klocko','Linnie90@hotmail.com','1995-07-05','813 Bettye Avenue Apt. 887','61646618170'),(10,'Bruce Hegmann','Nikko.Torphy38@yahoo.com','2005-06-10','5613 Rodolfo Station Suite 164','02414978231'),(11,'Bertha O\'Hara','Maxine36@hotmail.com','1961-08-27','5634 Nick Prairie Apt. 568','57834099302'),(12,'Eloise Cummerata','Douglas_Hettinger@yahoo.com','1993-12-05','722 Kenneth Courts Apt. 833','32416269451'),(13,'Julian Aufderhar','Hoyt.Maggio40@yahoo.com','1968-08-18','1322 Wiley View Suite 945','73186520868'),(14,'Clarence Ruecker','Dedrick53@hotmail.com','2001-06-08','9125 Murphy Unions Apt. 531','30511678684'),(15,'Marianne Champlin','Kaleb85@yahoo.com','2005-03-09','881 Junior Square Apt. 600','55184745859'),(16,'Mr. Roberto Wolf','Savion40@yahoo.com','1955-10-31','150 O\'Reilly Points Suite 144','06169175441'),(17,'Juanita Lynch','Stephany_Klein97@yahoo.com','1959-02-23','10002 E Franklin Street Suite 965','52021050186'),(18,'Marlene McDermott','Francesco_Vandervort81@yahoo.com','1985-10-25','464 Feeney Ranch Suite 988','70309207135'),(19,'Cecilia Miller IV','Emie.Hodkiewicz19@gmail.com','1987-10-14','27569 Long Lane Apt. 731','06081715444'),(21,'Mabel Schinner PhD','Ashly_Schoen@yahoo.com','1959-01-10','687 Fahey Parkways Apt. 234','17425966344'),(22,'Mark O\'Keefe','Agustin_Gleichner@yahoo.com','1952-11-19','9037 N Monroe Street Suite 860','37871417032'),(23,'Vicki Streich','Jayda_Emmerich@yahoo.com','1973-06-08','966 Shirley Shoals Suite 848','56455265310'),(24,'Shari Mills-Kreiger Jr.','Vincenza_Connelly40@gmail.com','1952-06-08','503 Kraig Gateway Suite 256','38041423590'),(25,'Gloria Wunsch','Cara28@gmail.com','1947-10-29','761 Orn Landing Apt. 594','84753515491'),(26,'Austin Pfannerstill','Rebecca11@hotmail.com','2003-01-08','12226 Damon Mountains Apt. 735','55724314120'),(27,'Patsy Rau','Ivah_Hamill1@hotmail.com','1999-03-26','518 Ferry Radial Suite 632','57619164015'),(28,'Roderick Senger Jr.','Citlalli.Kuphal82@yahoo.com','2006-05-12','234 Rowe Green Apt. 167','51070228768'),(29,'Christina Cronin','Helga_Bayer@hotmail.com','1984-05-08','2336 Goyette Divide Suite 490','92724594981'),(30,'Danielle Cormier','Santa44@hotmail.com','1960-05-17','8095 Sporer Run Apt. 355','78332171356');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09  0:12:42
