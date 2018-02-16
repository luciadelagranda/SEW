<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="recetas">
<html>
<head>
<title>Ejercicio 2 - Tarea 4</title>
<h1>Todas las recetas sin leche ni queso</h1>
<link rel="stylesheet" type="text/css" href="Recetas.css"/> 
</head>
    
<body>
<xsl:for-each select="receta">
<xsl:if test="not(ingredientes/ingrediente/@nombre='Leche') and not(ingredientes/ingrediente/@nombre='Queso')">
<h2><xsl:value-of select="nombre"/></h2>
<p><xsl:value-of select="tipo/@plato"/></p>
<p>INGREDIENTES:</p>
<ul>
<xsl:for-each select="ingredientes">
    <xsl:for-each select="ingrediente">
    <li><xsl:value-of select="@cantidad"/>&#160;<xsl:value-of select="@medida"/> de <xsl:value-of select="@nombre"/></li>
</xsl:for-each>
</xsl:for-each>
</ul>
    
<p><xsl:value-of select="calorias/@kcal"/> kcal</p>
<p>ELABORACIÓN:</p>
<ul>
<xsl:for-each select="pasos">
     <xsl:for-each select="paso">
    <li>Paso: <xsl:value-of select="@numero"/>. <xsl:value-of select="@descripcion"/></li>
</xsl:for-each>
</xsl:for-each>
</ul>
<p>Gardo de dificultad: grado <xsl:value-of select="dificultad/@grado"/>.</p>
<p>Tiempo: <xsl:value-of select="tiempo/@minutos"/> minutos.  
</p>
<p>ELEMENTOS NECESARIOS:</p>
<ul>
<xsl:for-each select="elementos">
    <xsl:for-each select="elemento">
    <li>Elemento: <xsl:value-of select="@nombre"/>.</li>
</xsl:for-each>
</xsl:for-each>
</ul>
<p>Origen: <xsl:value-of select="origen"/></p>
</xsl:if>
</xsl:for-each>

</body>

</html> 
</xsl:template>
</xsl:stylesheet>