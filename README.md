# Property List

Aplicación de gestión y visualización de propiedades inmobiliarias desarrollada con **React 19 + Vite + TailwindCSS v4 + React Router DOM v7**.

---

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/property-list.git
cd property-list

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

---

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/          # Layout global con <Outlet/>, SideBar y SideBarItem
│   ├── ui/              # Componentes reutilizables sin lógica de negocio
│   │                      (ModalOverlay, ModalHeader, FormField, SortableColumn...)
│   ├── features/        # Componentes ligados al dominio inmobiliario
│   │                      (PropertyList, PropertyRow, AddPropertyModal, SpecsPropertiesModal...)
│   └── icons/           # Iconos SVG como componentes React
├── data/
│   ├── properties.json  # Datos mock de propiedades
│   ├── columns.js       # Definición de columnas de la tabla
│   ├── propertyFields.js# Campos de búsqueda, ordenación y especificaciones
│   └── formFields.js    # Estructura del formulario de nueva propiedad
├── hooks/
│   └── useProperties.js # Estado global de propiedades + persistencia en localStorage
├── pages/
│   ├── Home/            # Página principal
│   └── Error/           # Página de error 404
├── utils/
│   ├── filterProperties.js   # Filtrado por campos relevantes
│   ├── sortProperties.js     # Ordenación numérica y alfabética
│   ├── handleSubmitForm.js   # Validación y envío del formulario
│   └── handleClickOutside.js # Cierre de modal al clicar fuera
├── App.jsx              # Rutas con Layout persistente
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales + Tailwind
```

---

## Funcionalidades

### Listado de propiedades
Tabla con todas las propiedades disponibles mostrando foto, oficina, referencia, tipo, dirección, precio, habitaciones, superficie y fecha. El header es sticky — permanece visible al hacer scroll.

### Búsqueda dinámica
Filtra propiedades en tiempo real por título, ubicación, tipo, oficina o referencia. Si no hay resultados muestra un estado vacío orientativo.

### Ordenación por columnas
Las columnas Precio, Habitaciones, Superficie y Fecha son clicables. El primer clic ordena ascendente, el segundo descendente. Un indicador `↑/↓` muestra la columna y dirección activas.

### Modal de detalles
Al hacer clic en cualquier fila se abre un modal con el precio formateado, ubicación, características (superficie, habitaciones, baños, clase, emisiones, construcción, conservación), imagen y descripción. Se cierra clicando fuera o con el botón `✕`.

### Añadir propiedad
El botón "Añadir nueva propiedad" abre un formulario con validación inline por campo. Si algún campo está vacío, muestra el error debajo del input afectado sin interrumpir con alertas. Al guardar, la propiedad se añade a la tabla y se persiste en `localStorage` para que sobreviva recargas. Se cierra clicando fuera del formulario.

### Persistencia
Las propiedades añadidas manualmente se guardan en `localStorage` y se combinan con las del JSON al cargar la app.

---

## Decisiones técnicas

**React + Vite**
Vite (con rolldown) como bundler por su velocidad en desarrollo y optimización en producción.

**TailwindCSS v4**
Clases utilitarias para un desarrollo rápido y consistente. Se optó por instalación manual con `postcss.config.js` siguiendo la documentación oficial de v4.

**React Router DOM v7**
Gestiona la navegación con un `Layout` persistente mediante `<Outlet/>`, garantizando que la barra lateral esté siempre presente sin duplicar código en cada ruta.

**Separación de responsabilidades**
- `data/` — todos los datos y configuraciones estáticas en un único lugar
- `ui/` — componentes reutilizables sin conocimiento del dominio
- `features/` — componentes ligados a la lógica inmobiliaria
- `hooks/` — estado compartido y efectos secundarios centralizados
- `utils/` — funciones puras y aisladas

**Persistencia con localStorage**
Sin backend disponible, las propiedades añadidas se guardan en `localStorage`. El hook `useProperties` separa las propiedades del JSON original de las añadidas manualmente, guardando solo estas últimas.

---

## Desafíos

**TailwindCSS v4** fue nuevo para mí. La documentación oficial fue clave para completar la instalación manual, y adaptarse al sistema de clases utilitarias requirió reaprender cómo aplicar estilos.

**Persistencia sin backend** obligó a buscar una alternativa rápida. La solución fue combinar el JSON estático con las entradas guardadas en `localStorage`, manteniendo la separación entre ambas para no corromper los datos originales.

**Responsive en tablas** — las tablas con muchas columnas son el mayor reto responsive en CSS. La solución final combina `border-separate border-spacing-0` (compatible con `position: sticky`), headers pegajosos y tamaños de texto adaptativos.

---

## Posibles mejoras

- Implementar una API real en lugar de datos mock
- Añadir paginación o scroll infinito
- Soporte para subida de imágenes reales en el formulario
- Editar y eliminar propiedades existentes
- Dark mode con TailwindCSS
- Más opciones en la barra lateral con filtrado por categoría
- Spinner de carga y gestión de errores de red
