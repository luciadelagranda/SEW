<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="articulos">
<html>
<head>
<title>Ejercicio 1 - Tarea 3</title>
<h1>Todos los artículos de los últimos 5 años</h1>
<link rel="stylesheet" type="text/css" href="Revista.css"/> 
</head>  
<body>
<xsl:for-each select="articulo">
<xsl:sort order="ascending" select="year"/> 
<xsl:if test="year &gt; 2012">
<h2><xsl:value-of select="titulo"/></h2>
<p><xsl:value-of select="autor/@nombre"/>&#160;<xsl:value-of select="autor/@apellido"/></p>
<p><xsl:value-of select="autor/@correo"/></p>
<p><xsl:value-of select="resumen"/></p>
<p>Páginas artículo: <xsl:value-of select="paginas/pagina_inicio"/> -
<xsl:value-of select="paginas/pagina_final"/>   
</p>
<p>Año: <xsl:value-of select="year"/></p>   
<p><xsl:value-of select="revista"/> Volumen revista número: <xsl:value-of select="volumen"/></p>     
<p><xsl:value-of select="ee"/></p>
<p><xsl:value-of select="keywords"/></p>
 </xsl:if>
</xsl:for-each>


</body>

</html> 
</xsl:template>
</xsl:stylesheet>
 