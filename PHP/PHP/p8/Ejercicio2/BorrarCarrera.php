<?php
            //conecto a la base de datos agenda con el usuario pepito:password2017
                
            $db = new mysqli('localhost', 'pepito', 'password2017', 'universidad');

            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

            
            $consultaPre = $db->prepare("SELECT * FROM carrera WHERE nombre = ?");   
        
            $consultaPre->bind_param('s', $_GET["nombre"]);    

            $consultaPre->execute();
            $resultado = $consultaPre->get_result();

            if ($resultado) {
                
                echo "<p>Los datos de la carrera borrada son:</p> ";
                while($row = $resultado->fetch_assoc()) {
                    $id = $row['idCarrera'];
                    echo  "<p>Nombre : ".$row['NOMBRE']." Duracion: ".$row['DURACION']."</p>"; 
                }
                
            } else {
                echo "Sin resultados";
            }

            //se realiza el borrado
           

            $consultaPre = $db->prepare("DELETE FROM carrera WHERE idCarrera = ?");   
        
            $consultaPre->bind_param('i', $id);    

            $consultaPre->execute();
            


            $consultaPre->close();
            
            $db->close();
            
?>