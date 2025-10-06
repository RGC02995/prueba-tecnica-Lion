# 🏠 Property List

Proyecto de gestión y visualización de propiedades inmobiliarias hecho con **React + Vite + TailwindCSS + React-Router-Dom**.

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/property-list.git
   cd property-list

   ```

2. Instalar dependencias
   ```bash
   npm install
   ```
3. Ejecutar en desarrollo
   ```bash
   npm run dev
   ```

## 📂 Estructura del proyecto y decisiones técnicas

```
src/
├── assets/              # Imágenes, íconos y recursos estáticos
├── components/
│   ├── layout/          # Layouts globales (Sidebar, Layout principal con <Outlet/>)
│   ├── ui/              # Componentes de interfaz reutilizables (inputs, botones, )
│   ├── features/        # Componentes con lógica de negocio (ej: PropertyList)
│   └── icons/           # Iconos SVG exportados como componentes React
├── data/                # Datos mock (ej: properties.json)
├── hooks/               # Custom hooks para lógica reutilizable (ej: useProperties)
├── pages/               # Páginas principales (Home, Error)
├── utils/               # Funciones auxiliares (filtros, handlers de eventos)
├── App.jsx              # Configuración de rutas y layout principal
├── main.jsx             # Punto de entrada React
└── index.css            # Estilos globales + Tailwind


```

## 🛠️ Decisiones técnicas

##### React + Vite:

Vite como bundler por su rapidez en el desarrollo y optimización en producción. React como librería principal para la UI.

##### TailwindCSS:

Se eligió por su velocidad en prototipado y consistencia visual, evitando escribir CSS repetitivo.

##### React Router DOM:

Para gestionar la navegación y mantener un layout persistente con Sidebar en todas las rutas.

##### División en ui/, features/ y layout/:

- ui/ → Pequeños componentes reutilizables sin lógica compleja (botones, inputs, modales).

- features/ → Bloques de UI ligados al negocio (ejemplo: listado de propiedades).

- layout/ → Componentes estructurales que definen la organización visual global.

- Custom hooks (hooks/) → Para centralizar la lógica de estado compartido (ej: useProperties maneja el array de propiedades y su actualización).

- Separación de utilidades (utils/) → Funciones puras como filterProperties o onRowClick están aisladas para mantener los componentes más limpios.

## ⚙️ Funcionalidades implementadas y cómo se usan

##### Listado de propiedades

Muestra tarjetas con imagen, precio, ubicación y características.

Uso: Navegar por la lista y ver información básica de cada propiedad.

##### Búsqueda

Permite buscar propiedades por título o ubicación.

Uso: Escribir un término en la barra de búsqueda y la lista se filtra dinámicamente.

##### Ordenación

Ordena propiedades por precio ascendente/descendente o por fecha.

Uso: Seleccionar opción en el dropdown de ordenación y el listado se reorganiza.

##### Barra lateral

Redirige al usuario al inicio

Uso: Seleccionar icono Home para redirección.

##### Modal de detalles

Al hacer clic en una tarjeta, se abre un modal con descripción completa, imágenes y características.

Uso: Hacer clic en cualquier propiedad y cerrar el modal con el botón de cierre.

##### Modal añadir propiedades

Al hacer clic se abrirá un formulario, donde al rellenarlo y presionar el botón guardar, almacenará en en localstorage el nuevo inmueble.

Uso: hacer clic en el botón Añadir nueva propiedad, para cerrarlo presionar fuera del formulario.

## Desafios

1. Puesto que nunca había usado tailwind, tube que ponerme a investigar el primer dia, tube problemas con los comandos que estaban en el md, así que me dirigí a la documentación oficial, y complete la instalación de forma manual creando los archivos postcss.config.js y tailwind.config.js y con su respectivo contenido, tube que reaprender a usar los estilos ya que estoy acostumbrado a usar los estilos en archivos css o scss, lo que me ha hecho un poco más lento todo el proceso, pero me ha gustado el desafio.

2. Quise crear la función de poder añadir nuevos inmuebles, aunque no con la eficiencia que querría como al pasar las imágenes tube que pensar en una alternativa rápida, lo que se me ocurrió fue coger las propiedades en si y actualizarlas con las nuevas añadidas almacenandolas en el storage par así poder añadirlas ya que directamente al JSON no se pueden añadir al no disponer de un backend como tal. Aunque ahora pensándolo mejor podría haber hecho uso de Redux para almacenar todo...

3. Quizá quise abarcar demasiado para el poco tiempo del que dispuse al final por el trabajo y creé rutas con con react router dom, pero no he podido terminarlo a tiempo como me hubiese gustado.

## 🕐 Mejoras que haría con más tiempo

- Añadir redux para el almacenamiento de los inmuebles y no localStorage, así podriamos haber manejado mejor el estado global de los inmuebles y creado un código más limpio.
- Añadir paginación o scroll infinito a la lista de propiedades.
- Añadir soporte para la subida de imágenes en AddPropertyModal.
- Añadir un Darkmode con Tailwind.
- Terminar el Layout con el componente SideBar siempre presente.
- Añadir más opciones a la barra lateral y crear un filtrado también por los iconos de esta.
- Crear un spinner y gestión de errores de la busqueda.
- Implementar una API real en lugar de datos mock(JSON local).
- Añadir SVG al buscador y barra lateral.
- Añadir pagina y ruta de ajustes, botón de editar el modal con las propiedades...
- Mejorar bastante el diseño responsive, ya que con la adaptación a Tailwind tuve que reaprender y no lo he dejado como me hubiese gustado.
