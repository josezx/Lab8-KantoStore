# ⚡ Kanto Store — Especialistas en Pokémon TCG

> **Plataforma centralizada y especializada en el mercado de cartas coleccionables Pokémon TCG con evaluación transparente de estado de conservación, singles exclusivas, productos sellados y métodos de pago flexibles.**

---

## 📖 1. Descripción General del Proyecto

**Kanto Store** nace como solución a la desconfianza, sobrecostos y dispersión presentes en el mercado local e informal de cartas coleccionables Pokémon TCG. La plataforma ofrece:

- 🔍 **Catálogo Centralizado de Singles:** Cartas individuales organizadas por expansión, rareza, idioma y número de colección.
- 🛡️ **Estado de Conservación Físico Real y Transparente:** Clasificación física objetiva propia (*Mint*, *Near Mint*, *Played*) sin necesidad de recurrir a costosas certificaciones externas de terceros (sin intermediarios PSA ni BGS).
- 📦 **Productos Sellados de Fábrica:** *Booster Boxes* (cajas de 36 sobres), *Elite Trainer Boxes* (ETB), sobres individuales y mazos temáticos de combate listos para jugar, garantizando empaque original no pesado ni manipulado.
- 🔔 **Lista de Deseos (Wishlist) con Alertas de Stock:** Sistema interactivo que permite guardar cartas deseadas y coordinar alertas de reposición de inventario.
- 💳 **Flujo de Checkout con Pagos Flexibles:** Simulación interactiva de compra para clientes registrados o invitados, con confirmación inmediata mediante:
  1. **Código QR:** Billeteras digitales y banca móvil (Yape, Plin, Pix, CoDi).
  2. **Transferencia Bancaria:** Cuentas con opción de copiado rápido en un clic (BCP, BBVA, Interbank).
  3. **Pago Contra Entrega:** Cancelación en efectivo o POS móvil al momento de recibir el paquete.

---

## 🛠️ 2. Tecnologías Utilizadas

El proyecto fue desarrollado bajo una estricta arquitectura **Vanilla Web** sin dependencias pesadas ni frameworks de compilación:

* **HTML5 Semántico:** Estructura accesible (`<header>`, `<nav>`, `<section>`, `<article>`, `<main>`, `<footer>`), metadatos SEO y optimización para lectores de pantalla.
* **CSS3 Puro:**
  * Variables CSS nativas (*Design Tokens*).
  * Maquetación mediante **CSS Grid** y **Flexbox**.
  * Estética moderna *Dark Mode Premier* inspirada en el coleccionismo de alta gama (`#0f172a`, `#1e293b`, acentos en azul eléctrico `#3b82f6` y ámbar Pokémon `#f59e0b`).
  * Efectos de cristal pulido (*Glassmorphism*), sombras volumétricas y micro-interacciones suaves.
  * Diseño 100% responsivo adaptable a dispositivos móviles, tablets y monitores de escritorio.
* **JavaScript Vanilla (ES6+):**
  * Manipulación reactiva del DOM sin librerías externas.
  * Persistencia de datos del Carrito y Wishlist en `localStorage`.
  * Motor de filtrado y búsqueda instantánea multicriterio (Set, Rareza, Idioma, Estado y Ordenación).
  * Sistema de notificaciones no intrusivas (*Toasts*).
  * Modales accesibles y drawer lateral (*Offcanvas*) para el carrito.
* **Gráficos SVG Vectoriales:** Logotipos, insignias, códigos QR e ilustraciones de alta definición libres de pixelado.

---

## 📁 3. Estructura del Proyecto

```text
kanto-store/
├── index.html              # Archivo HTML principal con las 10 secciones del proyecto
├── css/
│   └── styles.css          # Hoja de estilos con variables, diseño responsivo y tema oscuro
├── js/
│   └── script.js           # Lógica del catálogo, filtros, carrito, wishlist y checkout
├── images/
│   ├── logo.svg            # Logotipo vectorizado oficial de Kanto Store
│   ├── qr-payment.svg      # Código QR ilustrativo con Pokéball central
│   ├── charizard-ex.svg    # Carta ilustrada: Charizard ex (151)
│   ├── pikachu-special.svg # Carta ilustrada: Pikachu ex IR (Corona Astral)
│   ├── mewtwo-vstar.svg    # Carta ilustrada: Mewtwo VSTAR (Zenit Supremo)
│   ├── umbreon-vmax.svg    # Carta ilustrada: Umbreon VMAX Alt Art (Cielos Evolutivos)
│   ├── booster-box.svg     # Producto 3D: Booster Box Sellada (36 Sobres)
│   ├── etb-stellar.svg     # Producto 3D: Elite Trainer Box (Corona Astral)
│   ├── booster-pack.svg    # Producto: Sobre de Mejora sellado
│   └── theme-deck.svg      # Producto: Mazo Temático de Combate de Liga
└── README.md               # Documentación y manual de despliegue
```

---

## 💻 4. Instrucciones para Ejecutar Localmente

No se requiere instalar Node.js, npm, Docker ni servidores complejos. El proyecto está listo para ejecutarse en cualquier sistema operativo:

### Opción A: Apertura Directa en el Navegador
1. Clona o descarga este repositorio en tu computadora.
2. Abre la carpeta del proyecto `kanto-store`.
3. Haz doble clic sobre el archivo **`index.html`** (o clic derecho > *Abrir con* > Google Chrome, Mozilla Firefox, Microsoft Edge o Safari).
4. ¡Listo! La tienda cargará todas sus funcionalidades inmediatamente.

### Opción B: Usando una extensión de Servidor Local (Ej. VS Code Live Server)
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Si tienes instalada la extensión **Live Server** (Ritwick Dey), haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
3. La aplicación se abrirá en `http://127.0.0.1:5500/index.html` con recarga automática al guardar cambios.

### Opción C: Usando Python (Opcional)
Si prefieres servirlo mediante línea de comandos:
```bash
# Python 3
python -m http.server 8000
```
Luego visita en tu navegador: `http://localhost:8000`.

---

## 🚀 5. Guía Paso a Paso para Publicar el Sitio Gratuitamente

### 🅰️ Despliegue en **GitHub Pages** (Recomendado - 100% Gratuito)

1. **Crear el Repositorio en GitHub:**
   - Inicia sesión en [GitHub.com](https://github.com/).
   - Haz clic en el botón verde **"New"** para crear un nuevo repositorio.
   - Nómbralo (por ejemplo: `kanto-store`) y asegúrate de marcarlo como **Public** (Público).
   - Haz clic en **"Create repository"**.

2. **Subir los Archivos al Repositorio:**
   - Desde la terminal de tu computadora en la carpeta de `kanto-store`:
     ```bash
     git init
     git add .
     git commit -m "feat: lanzamiento oficial de Kanto Store"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/kanto-store.git
     git push -u origin main
     ```
   - *(Alternativa sin terminal)*: Puedes arrastrar y soltar los archivos y carpetas (`index.html`, `css/`, `js/`, `images/`, `README.md`) directamente en la interfaz web de GitHub mediante el botón **"Upload files"**.

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, dirígete a la pestaña **Settings** (Configuración).
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En la sección **"Build and deployment"** > **Source**, selecciona **"Deploy from a branch"**.
   - En **Branch**, selecciona la rama `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).

4. **Acceder a tu Sitio Web:**
   - En un lapso de 1 a 2 minutos, GitHub generará tu enlace público:
     `https://TU_USUARIO.github.io/kanto-store/`
   - Tu tienda ya está en línea accesible desde cualquier lugar del mundo.

---

### 🅱️ Despliegue en **Render** (Sitio Estático - 100% Gratuito)

1. **Crear una Cuenta:**
   - Regístrate gratuitamente en [Render.com](https://render.com/) e inicia sesión (puedes vincular tu cuenta de GitHub).

2. **Crear un Nuevo Servicio Estático:**
   - En el Dashboard de Render, haz clic en el botón **"New +"** y selecciona **"Static Site"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `kanto-store`.

3. **Configurar los Parámetros del Despliegue:**
   - **Name:** `kanto-store` (o el nombre que prefieras).
   - **Branch:** `main`.
   - **Root Directory:** déjalo vacío o escribe `./`.
   - **Build Command:** déjalo completamente **vacío** (es HTML/CSS/JS puro, no requiere compilar).
   - **Publish Directory:** escribe `./` (o déjalo en blanco para usar la raíz donde está `index.html`).

4. **Desplegar:**
   - Haz clic en **"Create Static Site"**.
   - Render procesará el repositorio en cuestión de segundos y te proporcionará una URL segura con certificado SSL gratuito (ejemplo: `https://kanto-store.onrender.com`).

---

## ⚖️ 6. Aviso Legal y Descargo de Responsabilidad (Disclaimer)

> **Kanto Store es un proyecto académico.**
> Pokémon y Pokémon TCG son marcas comerciales registradas propiedad de **Nintendo**, **Creatures Inc.**, **Game Freak** y **The Pokémon Company**.
> Este sitio web fue creado con fines didácticos, de investigación y demostración técnica. No tiene afiliación comercial, patrocinio ni respaldo oficial por parte de Nintendo ni de The Pokémon Company.
