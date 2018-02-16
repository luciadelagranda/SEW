<?php
    class ArchivoTexto {
        private $nombreArchivo;

        function __construct($nombreArchivo){
            $this->nombreArchivo = $nombreArchivo;
        }

        function crearArchivo(){
            try{   
                if(file_exists($this->nombreArchivo)){  
                    echo "<p>El fichero $this->nombreArchivo ya exite</p>";
                } else throw new Exception('<p>No existe el archivo, se creará</p>');
            }catch(Exception $e){ 
                echo $e->getMessage();
                echo "<p>Archivo $this->nombreArchivo creado</p>";
                $archivo = fopen($this->nombreArchivo,"w");
                fclose($archivo);
            } 
        }

        function leerArchivo(){
            try{   
                if(file_exists($this->nombreArchivo)){
                    $archivo = fopen($this->nombreArchivo,"r");  
                    echo "<p>Contenido del archivo  $this->nombreArchivo </p>";
                    while (!feof($archivo)) {
                        $linea = fgets($archivo); 
                        echo "<p>" .$linea ."</p>";
                    }   
                    fclose($archivo);
                } else throw new Exception('<p>No existe el archivo</p>' + $this->nombreArchivo);
            }catch(Exception $e){ 
                echo $e->getMessage();
            }  
        }

        function escribirArchivo($cadena){
            try{   
                if(file_exists($this->nombreArchivo)){
                    $archivo = fopen($this->nombreArchivo,"a+");
                    fwrite($archivo,$cadena);
                    fclose($archivo);
                }else throw new Exception('<p>No existe el archivo</p>' + $this->nombreArchivo);
            }catch(Exception $e){ 
                echo $e->getMessage();
            }  
        }


        function modificarArchivo($lineaModificar, $texto){
            try{   
                if(file_exists($this->nombreArchivo)){
                    if(filesize($this->nombreArchivo)>0){
                    $archivo = fopen($this->nombreArchivo,"r+");
                    $contenido= fread($archivo,filesize($this->nombreArchivo));
                    fclose($archivo);
                    $contenido = explode("\n", $contenido);
                    $contenido[$lineaModificar] = $texto;
                    $contenido = implode("\r\n", $contenido);
                    $archivo = fopen($this->nombreArchivo,"w");
                    fwrite($archivo,$contenido);
                    fclose($archivo);
                    } else throw new Exception('<p>El archivo está vacío</p>');                    
                }else throw new Exception('<p>No existe el archivo</p>' + $this->nombreArchivo);
            }catch(Exception $e){ 
                echo $e->getMessage();
            }
        }

        function eliminarLineaArchivo($lineaBorrar){
            try{   
                if(file_exists($this->nombreArchivo)){
                    $contenido = file($this->nombreArchivo);
                    $contenido = array_map('rtrim', $contenido);
                    if( isset($contenido[$lineaBorrar])){
                        unset($contenido[$lineaBorrar]);
                        if(count($contenido)<=1){
                            $nuevo_contenido= implode("", $contenido);
                        }
                        else
                            $nuevo_contenido= implode("\r\n", $contenido);
                        file_put_contents($this->nombreArchivo,$nuevo_contenido, LOCK_EX);
                    }                    
                }else throw new Exception('<p>No existe el archivo</p>' + $this->nombreArchivo);
            }catch(Exception $e){ 
                echo $e->getMessage();
            }
        }

        function eliminarArchivo(){
            try{   
                if(file_exists($this->nombreArchivo)){
                   unlink($this->nombreArchivo);
                   echo "<p>Fichero $this->nombreArchivo eliminado.";
                }else throw new Exception('<p>No existe el archivo</p>' + $this->nombreArchivo);
            }catch(Exception $e){ 
                echo $e->getMessage();
            }  
        }



    } 
?>