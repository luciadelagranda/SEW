<?php
           
          
            // Conexión al SGBD local con XAMPP con el usuario creado pepito:password2017
            $db = new mysqli('localhost','pepito','password2017');
                         
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error.". No existe el usuario</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}
        
            // Creo la base de datos de trabajo "universidad" utilizando ordenación en español
            $cadenaSQL = "CREATE DATABASE IF NOT EXISTS universidad COLLATE utf8_spanish_ci";
            if($db->query($cadenaSQL) === TRUE){
                echo "<p>Base de datos universidad creada con éxito (o ya existe)</p>";
            } else { 
                echo "<p>ERROR en la creación de la Base de Datos universidad</p>";
                exit();
            }
           
    
        ?>