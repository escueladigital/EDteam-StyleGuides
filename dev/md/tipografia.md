# Tipografía
<!-- TOC -->

- [Familias tipográficas](#familias-tipogr%C3%A1ficas)
- [Tamaños de fuente](#tama%C3%B1os-de-fuente)
- [Clases para estilos de título](#clases-para-estilos-de-t%C3%ADtulo)
- [Clases para tamaños de fuente](#clases-para-tama%C3%B1os-de-fuente)
- [Tabla de tamaños de fuente](#tabla-de-tama%C3%B1os-de-fuente)
- [Mixins de Sass para tamaños de fuente](#mixins-de-sass-para-tama%C3%B1os-de-fuente)
- [Blockquote](#blockquote)
- [Enlaces](#enlaces)

<!-- /TOC -->

Archivo `theme/typography.scss` [(ver)](https://github.com/escueladigital/EDteam-StyleGuides/blob/master/dev/scss/theme/_typography.scss)

---

<a id="markdown-familias-tipográficas" name="familias-tipográficas"></a>
## Familias tipográficas

EDteam utiliza dos familias tipográfaaicas:

* **Open Sans (700)** Para los títulos
* **Lato (400,400i,700)** Para los contenidos

Estas tipografías están definidas en las siguientes variables CSS. Tiene las clases `.heading-font` y `.body-font` si requiere aplicar las familias tipográficas respectivas a otros elementos.

```css
  :root {
  --heading-font: 'Open Sans', sans-serif;
  --body-font: Lato, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
.heading-font {
  font-family: var(--heading-font);
}

body,
.body-font {
  font-family: var(--body-font)
}
```

Incluya siempre estas fuentes en el código HTML del sitio:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:700">
```

<a id="markdown-tamaños-de-fuente" name="tamaños-de-fuente"></a>
## Tamaños de fuente

Las siguientes variables definen los tamaños de texto. Los tamaños cambian en el breakpoint `lg`.

```scss
@function rem($px) {
@return ($px / 16px) * 1rem;
}

// CSS variables for typography
:root {
  // Font sizes
  --h1-font-size        : rem(24px);
  --h2-font-size        : rem(20px);
  --h3-font-size        : rem(16px);
  --normal-font-size    : rem(15px);
  --small-font-size     : rem(13px);
  --smaller-font-size   : rem(12px);
  --heading-line-height : 1.3;
  --body-line-height    : 1.6;

  // Font sizes from lg breakpoint (64em ~ 1024px)
  @include from(lg) {
    --h1-font-size      : rem(36px);
    --h2-font-size      : rem(24px);
    --h3-font-size      : rem(20px);
    --normal-font-size  : rem(16px);
    --small-font-size   : rem(14px);
    --smaller-font-size : rem(13px);
  }
}
```

<a id="markdown-clases-para-estilos-de-título" name="clases-para-estilos-de-título"></a>
## Clases para estilos de título

Use las clases `t1` hasta `t6` para dar estilo de títulos
* Por ejemplo, si necesita que un `<h1>` tenga estilo de `<h2>`, jamás cambie de etiqueta, solo agregue la clase `t2`
* De igual manera si quiere que un `<p>`, `<span>`, etc tengan estilo de títulos (tipografia, tamaño, peso) use estas clases.

Ejemplo:

<p class="t1">Soy un párrafo con la clase t1<p>
<p class="t2">Soy un párrafo con la clase t2<p>
<p class="t3">Soy un párrafo con la clase t3<p>
<p class="t4">Soy un párrafo con la clase t4<p>
<p class="t5">Soy un párrafo con la clase t5<p>
<p class="t6">Soy un párrafo con la clase t6<p>

```html
<p class="t1">Soy un párrafo con la clase t1<p>
<p class="t2">Soy un párrafo con la clase t2<p>
<p class="t3">Soy un párrafo con la clase t3<p>
<p class="t4">Soy un párrafo con la clase t4<p>
<p class="t5">Soy un párrafo con la clase t5<p>
<p class="t6">Soy un párrafo con la clase t6<p>
```


<a id="markdown-clases-para-tamaños-de-fuente" name="clases-para-tamaños-de-fuente"></a>
## Clases para tamaños de fuente

Use las clases `.biggest`, `.bigger`, `.big`, `.normal `, `.small` y `.smaller` Para cambiar de tamaño de fuente manteniendo los estilos de contenido (tipografia, peso, alto de linea).

Ejemplo:

<p class="biggest">Soy un párrafo con la clase biggest<p>
<p class="bigger">Soy un párrafo con la clase bigger<p>
<p class="big">Soy un párrafo con la clase big<p>
<p class="normal">Soy un párrafo con la clase normal<p>
<p class="small">Soy un párrafo con la clase biggest<p>
<p class="smaller">Soy un párrafo con la clase smaller<p>

```html
<p class="biggest">Soy un párrafo con la clase biggest<p>
<p class="bigger">Soy un párrafo con la clase bigger<p>
<p class="big">Soy un párrafo con la clase big<p>
<p class="normal">Soy un párrafo con la clase normal<p>
<p class="small">Soy un párrafo con la clase biggest<p>
<p class="smaller">Soy un párrafo con la clase smaller<p>
```

<a id="markdown-tabla-de-tamaños-de-fuente" name="tabla-de-tamaños-de-fuente"></a>
## Tabla de tamaños de fuente
Se indica entre paréntesis su equivalencia en pixeles (font-size / line-height títulos | line-height contenidos)
| Selectores                  | Tamaño en móvil                          | Tamaño en desktop                        |
| --------------------------- | ---------------------------------------- | ---------------------------------------- |
| `h1` `.t1` `.biggest`       | **1.5rem** (~24px / 31.2px \| 38.4px)    | **2.25rem** (~36px / 46.8px \| 57.6px)   |
| `h2` `.t2` `.bigger`        | **1.25rem** (~20px / 26px \| 32px)       | **1.75rem** (~28px / 36.4px \| 44.8px)   |
| `h3` `.t3` `.big`           | **1rem** (~16px / 20.8px \| 25.6px)      | **1.25rem** (~20px / 26px \| 32px)       |
| `h4` `.t4` `.normal`        | **0.875rem** (~14px / 18.2px \| 22.4px)  | **1rem** (~16px / 20.8px \| 25.6px)      |
| `h5` `.t5` `small` `.small` | **0.8125rem** (~13px / 16.9px \| 20.8px) | **0.875rem** (~14px / 18.2px \| 22.4px)  |
| `h6` `.t6` `.smaller`       | **0.75rem** (~12px / 15.6px \| 19.2px)   | **0.8125rem** (~13px / 16.9px \| 20.8px) |

<a id="markdown-mixins-de-sass-para-tamaños-de-fuente" name="mixins-de-sass-para-tamaños-de-fuente"></a>
## Mixins de Sass para tamaños de fuente

Es recomendable utilizar las clases anteriores para asignar estilos de fuente. Pero si no puede acceder al código HTML del proyecto puede usar mixins de Sass que tienen el mismo resultado que asignar la clase correspondiente.

Los nombres de los mixins son los mismos que los nombres de las clases: `t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `bigger`, `bigger`, `big`, `normal`, `small`, `smaller`. Por ejemplo:

```scss
.card__title {
  @include t3 // El resultado es el mismo que asignar la clase .t3 al elemento .card__title
}
```


<a id="markdown-blockquote" name="blockquote"></a>
## Blockquote

> El coronel destapó el tarro del café y comprobó que no había más de una cucharadita. Retiró la olla del fogón, vertió la mitad del agua en el piso de tierra, y con un cuchillo raspó el interior del tarro sobre la olla hasta cuando se desprendieron las últimas raspaduras del polvo de café revueltas con óxido de lata.

<a id="markdown-enlaces" name="enlaces"></a>
## Enlaces
<a href="https://ed.team" target="_blank">EDteam</a> es la opción honesta y sin falsas promesas para aprender programación, diseño y emprendimiento en Latinoamerica y España. Visítanos en <a href="https://ed.team" target="_blank">ed.team</a>
