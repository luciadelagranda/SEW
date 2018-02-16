<!DOCTYPE html>
<html lang="es">
<head>
    <title>Ejercicio 1 - p8</title>
    <meta charset="utf-8"/>
    
    <meta name="author" content="Lucia de la Granda" /> 
    
    <link href="Ejercicio1.css" rel="stylesheet" type="text/css"/>
</head>
    
<body>
    <section>
        <h1>Resultado pruebas</h1>

        <?php
            //incluyo la clase ArchivoTexto puede ser con require o include
            //require si no existe genera error
            //require("ArchivoTexto.php");
        
            require_once("ArchivoTexto.php");
            
        
            // Creación de objeto fichero, en este caso un txt
            //echo "<p>Creo una nueva de la Clase incluida con require (o include)</p>";
           // $archivo = new ArchivoTexto("PruebaCrea.txt");
            
            // Prueba con txt básico
            /*$archivo->crearArchivo();
            $archivo->leerArchivo();
            $archivo->escribirArchivo("Otra línea");
            $archivo->modificarArchivo(0,"A ver");
            $archivo->leerArchivo();
            $archivo->eliminarLineaArchivo(0);
            $archivo->leerArchivo();
            $archivo->eliminarArchivo();*/
        
            //Creando un archivo html básico
            echo "<p>PRUEBA CON ARCHIVO HTML</p>";
            $archivo = new ArchivoTexto("PruebaHtml.html");
            $archivo-> crearArchivo();
            $archivo->leerArchivo();
            echo "<p>El archivo debería estar vació.</p>";
            $archivo->escribirArchivo("<!DOCTYPE html>
<html lang=\"es\">
<head>
\t<title>Hola</title>
\t<meta charset=\"utf-8\"/>
</head>                
<body>
\t<h1>Hola mundo</h1>
\t<h2>Idioma es</h2>
</body>
</html>");
            echo "<p>Escribimos en el archivo</p>";
            $archivo->leerArchivo();
            echo "<p>Modificamos el texto</p>";
            $archivo->modificarArchivo(7,"\t<h1>Hi</h1>");
            $archivo->modificarArchivo(8,"\t<h2>Idioma en</h2>");
            $archivo->leerArchivo();
            echo "<p>Eliminamos una linea del archivo</p>";
            $archivo->eliminarLineaArchivo(8);
            $archivo->leerArchivo();
            $archivo->eliminarArchivo();

            echo "<p>---------------------</p>";

            //Creando un archivo css básico
            echo "<p>PRUEBA CON ARCHIVO CSS</p>";
            $archivo = new ArchivoTexto("PruebaCss.css");
            $archivo-> crearArchivo();
            $archivo->leerArchivo();
            echo "<p>El archivo debería estar vació.</p>";
            $archivo->escribirArchivo("p{
font: 17px Arial, sans-serif;
color: gray;
padding-left: 10px;
}");
            echo "<p>Escribimos en el archivo</p>";
            $archivo->leerArchivo();
            echo "<p>Modificamos el texto</p>";
            $archivo->modificarArchivo(2,"color: pink;");
            $archivo->leerArchivo();
            echo "<p>Eliminamos una linea del archivo</p>";
            $archivo->eliminarLineaArchivo(3);
            $archivo->leerArchivo();
            $archivo->eliminarArchivo();

            echo "<p>---------------------</p>";

            //Creando un archivo php básico
            echo "<p>PRUEBA CON ARCHIVO PHP</p>";
            
            $archivo = new ArchivoTexto("PruebaPHP.php");
            $archivo-> crearArchivo();
            $archivo->leerArchivo();
            echo "<p>El archivo debería estar vació.</p>";
            $archivo->escribirArchivo("<code>&lt;?php 
echo \"¡Hola mundo!\";
?&gt;</code>");
            echo "<p>Escribimos en el archivo</p>";
            $archivo->leerArchivo();
            echo "<p>Modificamos el texto.</p>";
            $archivo->modificarArchivo(1, "echo \"¡Adios mundo!\"");
            $archivo->leerArchivo();
            echo "<p>Eliminamos una linea del archivo</p>";
            $archivo->eliminarLineaArchivo(1);
            $archivo->leerArchivo();
            $archivo->eliminarArchivo();

        ?>

    </section>

</body>
</html>
