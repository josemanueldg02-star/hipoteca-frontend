📊 Panel Interactivo - Simulador Hipotecario (Frontend)
Interfaz de usuario (SPA) moderna e interactiva diseñada para consumir el motor financiero backend. Permite al usuario simular condiciones hipotecarias en tiempo real y visualizar la evolución de su deuda a través de gráficos dinámicos.

🚀 Tecnologías y Herramientas
Core: React 18, Vite.

Estilos: CSS puro con diseño Responsive y variables de estado.

Gráficos Data-Viz: Recharts (para renderizado SVG de alto rendimiento del cuadro de amortización).

Conexión: Fetch API asíncrona con manejo seguro de promesas y operadores de encadenamiento opcional (?.) para resiliencia de datos.

✨ Características Destacadas
Controles Deslizantes: Inputs tipo range enlazados al estado de React para una experiencia de usuario fluida.

Intersección Financiera: Visualización gráfica de la curva de intereses pagados frente al capital devuelto (Sistema Francés).

Resiliencia: Manejo de errores de conexión y validación de respuestas asíncronas.

⚙️ Guía de Ejecución Rápida
Prerrequisitos
Node.js (versión LTS recomendada).

El motor backend de este proyecto encendido en el puerto 8083.

1. Clonar el repositorio
git clone https://github.com/josemanueldg02-star/hipoteca-frontend.git
cd hipoteca-frontend

2. Instalar dependencias
npm install

3. Levantar el entorno de desarrollo
El proyecto está configurado con strictPort para asegurar la conectividad con las políticas CORS del backend:

npm run dev

(Abre tu navegador en http://localhost:5174 para utilizar el simulador).