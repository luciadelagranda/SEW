<?php

        $db = new mysqli('localhost', 'pepito', 'password2017', 'universidad');
                
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}
        
            $consultaPre = $db->prepare("INSERT INTO asignatura (NOMASIG, CURSO, idCarrera) VALUES (?,?,?)");   
        
            $consultaPre->bind_param('sdi', 
                    $_POST["NOMASIG"],$_POST["CURSO"],$_POST["idCarrera"]);

            $consultaPre->execute();

            if ($consultaPre->affected_rows>0){
            echo "<p>Filas agregadas: ".$consultaPre->affected_rows."</p>";
            }else echo "<p>No se pueden insertar los datos</p>";
            $consultaPre->close();
            
            $db->close();
            
?>