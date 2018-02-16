<?php
           
          
            // Conexión al SGBD local con XAMPP con el usuario creado pepito:password2017
            $db = new mysqli('localhost','pepito','password2017');
                         
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error.". No existe el usuario</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}
           
            //selecciono la base de datos universidad para utilizarla
            $db->select_db("universidad");

             $crearTabla = "CREATE TABLE IF NOT EXISTS carrera (idCarrera INT NOT NULL AUTO_INCREMENT, 
             NOMBRE VARCHAR(20),
             DURACION DECIMAL(20),
             PRIMARY KEY (idCarrera)
             )";
 
             if($db->query($crearTabla) === TRUE){
                 echo "<p>Tabla CARRERA creada con éxito (o ya existe)</p>";
              } else { 
                 echo "<p>ERROR en la creación de la tabla CARRERA</p>";
                 exit();
              }

            $crearTabla = "CREATE TABLE IF NOT EXISTS asignatura (idAsignatura INT NOT NULL AUTO_INCREMENT, 
            NOMASIG VARCHAR(20),
            CURSO DECIMAL(20),
            idCarrera INT NOT NULL,
            PRIMARY KEY (idAsignatura),
            UNIQUE (NOMASIG),
            FOREIGN KEY (idCarrera) REFERENCES CARRERA(idCarrera)
            )";
 
            if($db->query($crearTabla) === TRUE){
                echo "<p>Tabla ASIGNATURA creada con éxito (o ya existe)</p>";
             } else { 
                echo "<p>ERROR en la creación de la tabla ASIGNATURA</p>";
                exit();
             }


        //cerrar la conexión
        $db->close();    
        ?>