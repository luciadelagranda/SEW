<?php
            //conecto a la base de datos agenda con el usuario pepito:password2017
                
            $db = new mysqli('localhost', 'pepito', 'password2017', 'universidad');

            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

            
            $consultaPre = $db->prepare("SELECT * FROM asignatura WHERE NOMASIG = ?");   
        
            $consultaPre->bind_param('s', $_GET["NOMASIG"]);    

            $consultaPre->execute();
            $resultado = $consultaPre->get_result();

            if ($resultado) {
                
                echo "<p>Los datos de la asignatura son:</p> ";
                while($row = $resultado->fetch_assoc()) {
                    $id = $row['idAsignatura'];
                    echo  "<p>Nombre : ".$row['NOMASIG']." Curso: ".$row['CURSO']."  Id carrera asignada:  ". $row['idCarrera'] . "</p>"; 
                }
                
            } else {
                echo "Sin resultados";
            }