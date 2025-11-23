# 05-frontend-js-practica-Wallapop

Aplicación web tipo Wallapop desarrollada con JavaScript (sin ninguna librería). Una plataforma donde los usuarios pueden crear, listar, ver detalles y gestionar anuncios de compra/venta.

## Características

- 🔐 Sistema de autenticación (login/registro)
- 📋 Listado de anuncios
- 🔍 Detalle de anuncios
- ✏️ Editar anuncios (solo propietario)
- 🗑️ Borrar anuncios (solo propietario)
- ➕ Crear nuevos anuncios
- 🔔 Sistema de notificaciones
- 📱 Interfaz responsive con Bootstrap 5

## Requisitos Previos

Antes de iniciar el proyecto, necesitas clonar e instalar el servidor de API (`sparrest.js`):

### 1. Clonar y configurar sparrest.js

```bash
git clone https://github.com/kasappeal/sparrest.js.git
cd sparrest.js
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor

```bash
npm start
```

El servidor se ejecutará en `http://localhost:8000` por defecto.

> **Nota:** Consulta la [documentación oficial de sparrest.js](https://github.com/kasappeal/sparrest.js) para más información sobre configuración y uso.

## Instalación del Proyecto

```bash
git clone https://github.com/AlexAlgarate/05-frontend-js-practica-Wallapop.git
cd 05-frontend-js-practica-Wallapop/project
```

## Ejecutar el Proyecto

### Iniciar el servidor de desarrollo

```bash
npx live-server
```

La aplicación se abrirá automáticamente en `http://localhost:8080` (o el puerto disponible).

> **Importante:** Asegúrate de que el servidor `sparrest.js` esté ejecutándose en otra terminal antes de iniciar la aplicación. En caso de no estar iniciado, surgirán errores al interactuar con la API, aunque están controlados desde el frontedn de la aplicación.
