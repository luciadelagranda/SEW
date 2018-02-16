<?php

        $db = new mysqli('localhost', 'pepito', 'password2017', 'universidad');
                
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}
        
            $consultaPre = $db->prepare("INSERT INTO carrera (nombre, duracion) VALUES (?,?)");   
        
            $consultaPre->bind_param('sd', 
                    $_POST["nombre"],$_POST["duracion"]);    

            $consultaPre->execute();


            echo "<p>Filas agregadas: ".$consultaPre->affected_rows."</p>";
            $consultaPre->close();
            
            $db->close();
            
?>