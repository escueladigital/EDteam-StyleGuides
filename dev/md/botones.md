# Botones

<!-- TOC -->

- [Colores de los botones](#colores-de-los-botones)
- [Alinear botones](#alinear-botones)
- [Botones fantasma (ghost)](#botones-fantasma-ghost)
- [Tamaños de los botones](#tama%C3%B1os-de-los-botones)
- [Uso de los colores](#uso-de-los-colores)
- [Colores de botones heredados](#colores-de-botones-heredados)
- [Boton cancelar](#boton-cancelar)

<!-- /TOC -->

Archivo `componentes/_buttons.scss` [(ver)](https://github.com/escueladigital/EDteam-StyleGuides/blob/master/dev/scss/components/_buttons.scss)

--- 

Los botones se obtienen con la clase `button`.

```html
<a class="button">Soy un botón</a>
```
<div class="button">Soy un boton</div>


Puede usar varios botones juntos. Las separaciones ya están listas.

```html
<a class="button">Soy un botón</a>
<a class="button">Soy un segundo botón</a>
```

<a class="button">Soy un botón</a>
<a class="button">Soy un segundo botón</a>

<a id="markdown-colores-de-los-botones" name="colores-de-los-botones"></a>
## Colores de los botones


Use las clases `button--second`, `button--alert`, `button--cta`, `button--dark` y `button--light` para obtener botones con los colores de EDteam. Por defecto, la clase `.button` da un botón azul.

```html
<a class="button">Botón por defecto</a>
<a class="button--second">Botón secundario</a>
<a class="button--alert">Botón de alerta</a>
<a class="button--cta">Botón de llamado a la acción</a>
<a class="button--dark">Botón oscuro</a>
<a class="button--light">Botón claro</a>
```

<a class="button">Botón por defecto</a>
<a class="button--second">Botón secundario</a>
<a class="button--alert">Botón de alerta</a>
<a class="button--cta">Botón de llamado a la acción</a>
<a class="button--dark">Botón oscuro</a>
<a class="button--light">Botón claro</a>

<a id="markdown-alinear-botones" name="alinear-botones"></a>
## Alinear botones

La alineación de los botones depende del elemento padre pues se comportan como texto. Es decir, si el elemento padre tiene la propiedad `text-align: right` el botón (o botones) se alinearán a la derecha. Esta guia de estilos tiene la clase `.center` que centra todo el contenido del elemento. Ejemplo:

```html
<div class="center">
  <div class="button">Soy un boton</div>
  <div class="button">Soy otro boton</div>
  <div class="button">Soy un tercer boton</div>
</div>
```

<div class="center l-block">
<div class="button">Soy un boton</div>
<div class="button">Soy otro boton</div>
<div class="button">Soy un tercer boton</div>
</div>


Si desea centrar un único boton, puede agregarle la clase `.center`

```html
<a class="button center">Soy un botón centrado</a>
```
<div class="l-block">
<a class="button center">Soy un botón centrado</a>
</div>


Los botones tiene un margin a la derecha y hacia abajo de `1rem` por defecto. Sin embargo, de un grupo de botones el último no tiene el margen derecho. Si desea forzar el borrado de ambos márgenes en un botón específico use la clase `.last`

```html
<div class="button">Soy un boton</div>
<div class="button">Soy otro boton</div>
<div class="button last">Soy un tercer boton sin margenes</div>
```

<div class="l-block">
<div class="button">Soy un boton</div>
<div class="button">Soy otro boton</div>
<div class="button last">Soy un tercer boton sin margenes</div>
</div>


Si desea que un botón ocupe todo el ancho disponible, agregue la clase `.full`

```html
<a class="button full">Soy un botón full</a>
```

<div class="l-block">
<a class="button full">Soy un botón full</a>
</div>

<a id="markdown-botones-fantasma-ghost" name="botones-fantasma-ghost"></a>
## Botones fantasma (ghost)


Los botones fantasma tienen fondo transparente y solo constan de borde y texto. Se usa la clase `button--ghost`. Ejemplo:

```html
<a class="button--ghost">Soy un botón fantasma</a>
```

<div class="l-block">
<a class="button--ghost">Soy un botón fantasma</a>
</div>


Para conseguir los colores, use las clases `button--ghost-second`, `button--ghost-alert`, `button--ghost-cta`, `button--ghost-dark` y `button--ghost-light` (este último es blanco, úselo sobre fondos oscuros).

```html
<a class="button--ghost-second">Secundario</a>
<a class="button--ghost-alert">Alerta</a>
<a class="button--ghost-cta">Llamado a la acción</a>
<a class="button--ghost-dark">Oscuro</a>
<a class="button--ghost-light">Claro</a>
```

<div class="l-block">
<a class="button--ghost-second">Secundario</a>
<a class="button--ghost-alert">Alerta</a>
<a class="button--ghost-cta">Llamado a la acción</a>
<a class="button--ghost-dark">Oscuro</a>
<a class="button--ghost-light">Claro</a>
</div>

<a id="markdown-tamaños-de-los-botones" name="tamaños-de-los-botones"></a>
## Tamaños de los botones


Usando las clases `.big`, `.small` y `.tiny` al botón (ya sea normal o fantasma) puede variar su tamaño.

```html
<a class="button big">Boton grande</a>
<a class="button--cta">Botón normal</a>
<a class="button--alert small">Boton pequeño</a>
<a class="button--dark tiny">Botón diminuto</a>
```
<div class="l-block">
<a class="button big">Boton grande</a>
<a class="button--cta">Botón normal</a>
<a class="button--alert small">Boton pequeño</a>
<a class="button--dark tiny">Botón diminuto</a>
</div>


```html
<a class="button--ghost big">Boton grande</a>
<a class="button--ghost-cta">Botón normal</a>
<a class="button--ghost-alert small">Boton pequeño</a>
<a class="button--ghost-dark tiny">Botón diminuto</a>
```

<div class="l-block">
<a class="button--ghost big">Boton grande</a>
<a class="button--ghost-cta">Botón normal</a>
<a class="button--ghost-alert small">Boton pequeño</a>
<a class="button--ghost-dark tiny">Botón diminuto</a>
</div>

<a id="markdown-uso-de-los-colores" name="uso-de-los-colores"></a>
## Uso de los colores


Los colores de los botones deben respetar las siguientes guias

* El botón por defecto (azul) es para acciones predeterminadas como envios de formularios
* El botón rojo (normal o fantasma) es para indicar otro tipo de acciones, como compras.
* El boton amarillo (normal o fantasma) es para llamados a la acción como descuentos, suscripciones, ofertas, etc.

Los otros botones: celeste (second), gris oscuro (dark) y blanco (light) sí pueden usarse con fines decorativos.

<a id="markdown-colores-de-botones-heredados" name="colores-de-botones-heredados"></a>
## Colores de botones heredados


Gracias a las **Variables CSS** los botones (y otros elementos) pueden heredar los colores de sus ancestros.

Por ejemplo, un botón con la clase `button` o `button--ghost` (sin variación de color) puede cambiar de color si su padre tiene alguna de las siguientes clases: `color-second`, `color-third`, `color-accent`, `color-dark` o `color-light`. Por ejemplo:

```html
<div class="color-third">
<a class="button--ghost">Inscríbete ahora</a>
</div>
```

<div class="color-third l-block">
<a class="button--ghost">Inscríbete ahora</a>
</div>


```html
<div class="color-accent">
<a class="button">Ver planes</a>
</div>
```

<div class="color-accent l-block">
<a class="button">Ver planes</a>
</div>

<a id="markdown-boton-cancelar" name="boton-cancelar"></a>
## Boton cancelar


Úselo en cuadros de diálogo o modales para mostrar la opción secundaria como **Cancelar**, **Eliminar** , etc.

```html
<a class="button--cancel">Cancelar</a>
```

<a class="button--cancel">Cancelar</a>
