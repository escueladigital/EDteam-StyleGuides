# Botones


Archivo `componentes/_buttons.scss` [(ver)](https://github.com/escueladigital/EDteam-StyleGuides/blob/master/dev/scss/components/_buttons.scss)

--- 

Los botones se obtienen con la clase `button`.

```html
<a class="button">Soy un botón</a>
```
<a class="button s-mb-1">Soy un boton</a>


Para agregar separaciones utilice las clases de márgenes de EDgrid.

```html
<a class="button s-mr-1">Soy un botón</a>
<a class="button">Soy un segundo botón</a>
```
<div class="l-block">
  <a class="button s-mr-1">Soy un botón</a>
  <a class="button">Soy un segundo botón</a>
</div>

## 1. Colores de los botones


Use las clases `first-color`, `second-color`, `third-color`, `accent-color`, `dark-color`, `text-color`, `light-color` para obtener botones con los colores de EDteam. Por defecto, la clase `button` da un botón azul, pero si necesita forzar el color azul use `first-color`.

```html
<a class="button">.button.first-color</a>
<a class="button second-color">.button.second-color</a>
<a class="button third-color">.button.third-color</a>
<a class="button accent-color">.button.accent-color</a>
<a class="button dark-color">.button.dark-color</a>
<a class="button text-color">.button.text-color</a>
<a class="button light-color">.button.light-color</a>

```

<div class="l-block">
  <a class="s-mr-1 s-mb-1 button">.button.first-color</a>
  <a class="s-mr-1 s-mb-1 button second-color">.button.second-color</a>
  <a class="s-mr-1 s-mb-1 button third-color">.button.third-color</a>
  <a class="s-mr-1 s-mb-1 button accent-color">.button.accent-color</a>
  <a class="s-mr-1 s-mb-1 button dark-color">.button.dark-color</a>
  <a class="s-mr-1 s-mb-1 button text-color">.button.text-color</a>
  <a class="s-mr-1 s-mb-1 button light-color">.button.light-color</a>
</div>


## 2. Alinear botones

Los botones pueden alinearse por su contenedor o por ellos mismos. Por el contedor use las clase de EDgrid para alienar contenido, y para alinear al mismo botón use las clases de EDgrid de alineación de elementos.

<a href="https://ed-grid.com/documentacion/alineacion.html" target="_blank" class="button s-to-center">Ver alineación en EDgrid</a>

Si desea que un botón ocupe todo el ancho disponible, agregue la clase `.full`

```html
<a class="button full">Soy un botón full</a>
```

<div class="l-block">
<a class="button full">Soy un botón full</a>
</div>

<a id="markdown-botones-fantasma-ghost" name="botones-fantasma-ghost"></a>
## 3. Botones fantasma (ghost)


Los botones fantasma tienen fondo transparente y solo constan de borde y texto. Se usa la clase `ghost`. Ejemplo:

```html
<a class="button ghost">Soy un botón fantasma</a>
```

<div class="l-block">
<a class="button ghost">Soy un botón fantasma</a>
</div>


Para conseguir los colores, use las clases indicadas en la sección anterior `first-color`, `second-color`, `third-color`, `accent-color`, `dark-color` y `light-color` (este último es blanco, úselo sobre fondos oscuros).

```html
<a class="button ghost">button.ghost.first-color</a>
<a class="button ghost second-color">button.ghost.second-color</a>
<a class="button ghost third-color">button.ghost.third-color</a>
<a class="button ghost accent-color">button.ghost.accent-color</a>
<a class="button ghost dark-color">button.ghost.dark-color</a>
<a class="button ghost light-color">button.ghost.light-color</a>
```

<div class="l-block">
  <a class="s-mr-1 s-mb-1 button ghost">button.ghost</a>
  <a class="s-mr-1 s-mb-1 button ghost second-color">button.ghost.second-color</a>
  <a class="s-mr-1 s-mb-1 button ghost third-color">button.ghost.third-color</a>
  <a class="s-mr-1 s-mb-1 button ghost accent-color">button.ghost.accent-color</a>
  <a class="s-mr-1 s-mb-1 button ghost dark-color">button.ghost.dark-color</a>
  <a class="s-mr-1 s-mb-1 button ghost text-color">button.ghost.text-color</a>
  <a class="s-mr-1 s-mb-1 button ghost light-color">button.ghost.light-color</a>
</div>

<a id="markdown-tamaños-de-los-botones" name="tamaños-de-los-botones"></a>
## 4. Tamaños de los botones


Usando las clases `.big`, `.small` y `.tiny` al botón (ya sea normal o fantasma) puede variar su tamaño.

```html
<a class="button big">.button.big</a>
<a class="button">.button</a>
<a class="button small">.button.small</a>
<a class="button tiny">.button.tiny</a>
<a class="button micro">.button.micro</a>
```
<div class="l-block">
<a class="s-mr-1 s-mb-1 button big">.button.big</a>
<a class="s-mr-1 s-mb-1 button">.button</a>
<a class="s-mr-1 s-mb-1 button small">.button.small</a>
<a class="s-mr-1 s-mb-1 button tiny">.button.tiny</a>
<a class="s-mr-1 s-mb-1 button micro">.button.micro</a>
</div>


```html
<a class="button--ghost big">Boton grande</a>
<a class="button--ghost-cta">Botón normal</a>
<a class="button--ghost-alert small">Boton pequeño</a>
<a class="button--ghost-dark tiny">Botón diminuto</a>
<a class="button--ghost-dark micro radius">Botón micro</a>
<a class="button--ghost-dark micro">Botón micro</a>
```

<div class="l-block">
<a class="s-mr-1 s-mb-1 button ghost big">.button.ghost.big</a>
<a class="s-mr-1 s-mb-1 button ghost">.button.ghost</a>
<a class="s-mr-1 s-mb-1 button ghost small">.button.ghost.small</a>
<a class="s-mr-1 s-mb-1 button ghost tiny">.button.ghost.tiny</a>
<a class="s-mr-1 s-mb-1 button ghost micro">.button.ghost.micro</a>
</div>


## 5. Botón desactivado.

Use la clase `disabled` para mostrar un botón como desactivado.

```html
<a class="button disabled s-mr-1 s-mb-1 big">.button.disabled.big</a>
<a class="button disabled s-mr-1 s-mb-1">.button.disabled</a>
<a class="button disabled s-mr-1 s-mb-1 small">.button.disabled.small</a>
<a class="button disabled s-mr-1 s-mb-1 tiny">.button.disabled.tiny</a>
<a class="button disabled s-mr-1 s-mb-1 micro">.button.disabled.micro</a>
```

<div class="l_block">
<a class="button disabled s-mr-1 s-mb-1 big">.button.disabled.big</a>
<a class="button disabled s-mr-1 s-mb-1">.button.disabled</a>
<a class="button disabled s-mr-1 s-mb-1 small">.button.disabled.small</a>
<a class="button disabled s-mr-1 s-mb-1 tiny">.button.disabled.tiny</a>
<a class="button disabled s-mr-1 s-mb-1 micro">.button.disabled.micro</a>
</div>

<a id="markdown-uso-de-los-colores" name="uso-de-los-colores"></a>
## 6. Uso de los colores

Los colores de los botones deben respetar las siguientes guias

* El botón por defecto `first-color` es para acciones predeterminadas como envios de formularios
* El botón rojo `third-color` normal o ghost, es para indicar otro tipo de acciones, como compras.
* El boton amarillo `accent-color` normal o ghost, es para llamados a la acción como descuentos, suscripciones, ofertas, etc.
* El boton gris `text-color` es para cancelar en cuadros de diálogo.

Los otros botones: celeste (second), gris oscuro (dark) y blanco (light) sí pueden usarse con fines decorativos.
