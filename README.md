# Omar Segura · Soluciones Contables y Digitales

Sitio web profesional estático v2. Compatible con GitHub Pages, Netlify y cualquier hosting.  
No requiere npm, Node.js, ni servidor.

---

## ⚙️ Configuración rápida (lo primero que debes hacer)

Abre `main.js` y edita el bloque `CONFIG` al inicio del archivo:

```js
var CONFIG = {
  WA_NUMBER: '50300000000',   // ← Tu número: 503 + número sin espacios
  EMAIL: 'omar@servicioscontablesdigitales.com',  // ← Tu correo real
  WA_MSG_DIRECTO: 'Hola%20Omar%2C%20deseo...'    // ← Mensaje por defecto (opcional)
};
```

Eso es todo. El botón flotante, la sección de contacto y el formulario usarán esos datos automáticamente.

---

## 📁 Estructura de archivos

```
index.html    → Contenido y estructura
styles.css    → Diseño visual
main.js       → Lógica, formulario y configuración
assets/       → Imágenes opcionales
README.md     → Este archivo
```

---

## ✏️ Ediciones comunes

### Cambiar nombre o eslogan
Busca `Omar Segura` o el texto que quieras en `index.html` y edítalo.

### Cambiar correo en la sección de contacto
Busca `omar@servicioscontablesdigitales.com` en `index.html`.

### Agregar LinkedIn
Busca `<!-- EDITAR: Reemplaza # con tu URL de LinkedIn -->` en `index.html` y cambia el `href="#"` por tu URL.

### Agregar un servicio nuevo
En la sección de servicios, encuentra el panel correspondiente (`tab-contabilidad`, `tab-fiscal`, etc.) y agrega un `<li>` dentro del listado.

### Agregar un nuevo panel de servicios
1. Agrega un botón `.stab` con `data-tab="mi-nuevo-tab"`
2. Agrega un `<div class="stab-panel" id="tab-mi-nuevo-tab">` con el contenido
3. El JavaScript lo detecta automáticamente.

### Cambiar precios
Busca `<span class="price-val">$300</span>` y actualiza el valor.

---

## 📋 Formulario de solicitud

El formulario funciona sin backend:
1. El cliente llena los campos
2. Al hacer clic en "Enviar por WhatsApp" → se abre WhatsApp con el resumen
3. Al hacer clic en "Enviar por correo" → se abre el cliente de correo con el resumen

Los datos **no se guardan** en ningún servidor ni en el navegador.

---

## 🚀 Subir a GitHub Pages

1. Crea un repositorio en [github.com](https://github.com)
2. Sube todos los archivos
3. Ve a **Settings → Pages → Source: main / root**
4. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

### Con Netlify (más simple):
Arrastra la carpeta del proyecto a [netlify.com](https://netlify.com) → URL en segundos.

---

## 🎨 Colores del tema (en styles.css)

```css
--blue:  #12355B;  /* Azul principal */
--green: #198754;  /* Verde de acento */
--gray:  #F4F6F8;  /* Fondo alterno */
```

---

## 📞 Soporte

Sitio construido para Omar Segura · Soluciones Contables y Digitales · El Salvador · 2026
