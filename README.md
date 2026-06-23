# Omar Segura · Servicios Contables Digitales

Sitio web profesional estático. Compatible con GitHub Pages, Netlify y cualquier hosting.  
No requiere npm, Node.js, ni servidor.

---

## 📁 Estructura de archivos

```
index.html    → Contenido y estructura de la página
styles.css    → Estilos y diseño visual
main.js       → Comportamiento e interactividad
assets/       → Imágenes e íconos opcionales
README.md     → Este archivo
```

---

## ✏️ Cómo editar textos

Abre `index.html` en cualquier editor de texto (Notepad, VS Code, etc.).

### Nombre y eslogan
Busca `Omar Segura` y reemplaza donde necesites.

### Subtítulos y descripciones
Busca el texto que quieres cambiar y edítalo directamente.  
Cada sección tiene un comentario como `<!-- SECCIÓN 2 – SOBRE MÍ -->` para orientarte.

### Estadísticas del Hero
```html
<span class="stat-num">+5</span>
<span class="stat-label">Años de experiencia</span>
```
Cambia el número y la etiqueta.

---

## 📱 Cómo cambiar el número de WhatsApp

1. Abre `main.js`
2. Encuentra esta línea cerca del inicio:
```js
var WA_NUMBER = '50300000000';
```
3. Reemplaza `50300000000` con tu número real:
   - Formato: código de país + número sin espacios ni guiones
   - El Salvador: `503` + tu número (ej: `50370123456`)

El mensaje automático ya está configurado:  
*"Hola Omar, deseo información sobre servicios contables."*

Para cambiar el mensaje, edita `WA_MESSAGE` en el mismo archivo (usa `%20` para espacios).

---

## 📧 Cómo cambiar el correo electrónico

En `index.html`, busca:
```html
<a href="mailto:omar@servicioscontablesdigitales.com" ...>
```
Reemplaza con tu correo real. Actualiza también el texto visible `cc-val`.

---

## 💼 Cómo actualizar servicios

Cada tarjeta de servicio está en la sección `<!-- SECCIÓN 3 – SERVICIOS -->`.  
Cada ítem de lista tiene esta estructura:
```html
<li>
  <svg ...>...</svg>
  Texto del servicio aquí
</li>
```
Puedes agregar o quitar `<li>` según necesites.

---

## 💲 Cómo cambiar precios

En la sección `<!-- SECCIÓN 4 – PLANES -->`, busca:
```html
<span class="price-val">$300</span>
```
Reemplaza con tu precio actual.

---

## 🔗 Cómo agregar LinkedIn u otras redes

En la sección de contacto, busca el bloque `linkedin`:
```html
<a href="#" class="contact-card linkedin ...">
```
Reemplaza `#` con la URL completa de tu perfil.  
Ejemplo: `https://www.linkedin.com/in/omar-segura`

---

## 🚀 Cómo subir a GitHub Pages

1. Crea un repositorio en [github.com](https://github.com) (puede ser privado o público)
2. Sube todos los archivos al repositorio
3. Ve a **Settings → Pages**
4. En "Source", selecciona la rama `main` y carpeta `/root`
5. Haz clic en **Save**
6. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repositorio`

### Con Netlify (alternativa, aún más simple):
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta gratuita
2. Arrastra la carpeta del proyecto al área de deploy
3. Obtienes una URL en segundos

---

## 🎨 Colores del tema

Edita en `styles.css` dentro de `:root`:

```css
--blue:  #12355B;   /* Azul principal */
--green: #198754;   /* Verde de acento */
--gray:  #F4F6F8;   /* Fondo alterno */
```

---

## 📞 Soporte

Sitio construido por y para Omar Segura · C.P.A.  
Servicios Contables Digitales · El Salvador · 2026
