# 🎵 Playlist Frontend App

Frontend de la aplicación **Playlist**, desarrollada como parte de una **prueba técnica**, utilizando **Angular** y **Bootstrap 5**. Esta aplicación consume un backend en Java con autenticación y autorización basada en roles.

### Inicio de Sesión
<img width="1910" height="941" alt="image" src="https://github.com/user-attachments/assets/432cf686-4b3a-4e80-8256-1cb55d887bcd" />

### Dashboard
<img width="1911" height="940" alt="image" src="https://github.com/user-attachments/assets/bef41ac3-a732-4bd3-8abb-b66daa02b881" />

### Detalle de las listas de canciones
<img width="1915" height="956" alt="image" src="https://github.com/user-attachments/assets/ba26761c-b4db-4988-bc63-6b1b3f13a81b" />

---

## 🚀 Tecnologías utilizadas

* **Angular**
* **TypeScript**
* **Bootstrap 5**
* **RxJS**
* **HTML / SCSS**

---

## 📌 Funcionalidades

### 🔐 Autenticación

* Login de usuario
* Manejo de sesión mediante **JWT**
* Interceptor HTTP para adjuntar el token a cada request
* Manejo de errores **401** y **403**

### 🎶 Playlists

* Crear listas de reproducción con múltiples canciones
* Visualizar playlists registradas
* Eliminar playlists (solo usuarios con rol **ADMIN**)
* Búsqueda de playlists por nombre
* Visualización del detalle de una playlist

### 🛡️ Autorización

* Acciones protegidas por backend
* Manejo de errores **403 Forbidden** con mensajes claros en la UI
* Feedback visual al usuario cuando no tiene permisos

---

## 🧭 Vistas principales

* **Login**
* **Playlists**

  * Crear playlist
  * Agregar canciones
  * Listar playlists
  * Eliminar playlist (admin)
  * Buscar playlist

---

## ⚙️ Configuración del proyecto

### 📥 Clonar el repositorio

```bash
git clone https://github.com/sergiolvargas95/frontend_technical_test_quipux.git
cd playlist-frontend
```

### 📦 Instalar dependencias

```bash
npm install
```

### ▶️ Ejecutar en modo desarrollo

```bash
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## 🔗 Conexión con el Backend

Configura la URL del backend en el servicio correspondiente, por ejemplo:

```ts
private apiUrl = 'http://localhost:8080/api/playlists';
```

El backend debe exponer endpoints protegidos con Auth Basic.

---

## 🔑 Roles soportados

* **ADMIN**: puede crear y eliminar playlists
* **USER**: solo puede visualizar playlists

Las acciones no autorizadas son manejadas mediante mensajes de error claros para el usuario.

---

## 🧪 Manejo de errores

* **401 Unauthorized** → sesión inválida o expirada
* **403 Forbidden** → usuario sin permisos

Los errores son interceptados y manejados sin romper la experiencia de usuario.

---

## 🎨 UI / UX

* Diseño **minimalista**
* Componentes estilizados con **Bootstrap 5**
* Mensajes informativos cuando no existen playlists
* Favicon personalizado en formato PNG

---

## 📄 Estructura del proyecto

```
src/
 ├── app/
 │   ├── core/
 │   │   ├── interceptors/
 │   │   ├── models/
 │   │   └── services/
 │   ├── pages/
 │   │   ├── login/
 │   │   ├── playlists-detail/
 │   │   └── playlists/
 │   └── app.module.ts
 ├── assets/
 └── index.html
```

---

## 🧠 Notas finales

Este proyecto prioriza:

* Buenas prácticas
* Separación de responsabilidades
* UX clara frente a errores de autorización
* Código limpio y escalable

---

## ✨ Autor

Desarrollado por **Sergio Vargas** como parte de una prueba técnica de Ingeniería de Software para la empresa QUIPUX.

---

¡Gracias por revisar este proyecto! 🚀
