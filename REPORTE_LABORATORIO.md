# Reporte del Laboratorio — "React revisado por pruebas"

## Comparación entre el Prompt Original y lo Implementado

---

## 1. Objetivo General del Laboratorio

El laboratorio pide escribir **8 componentes funcionales puros** (sin hooks ni estado) de una cartelera de cine, ubicados en `src/duel/team/`, de modo que **26 pruebas automáticas** pasen con `npm run duel`.

> El conteo de 26 se refiere a los enunciados de las 8 tareas individuales; la ejecución real produce **43 tests** (cada `.test.jsx` agrupa varios `test()` con `describe()`).

---

## 2. Componente por Componente

### T1 — `Header`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `name` (string) y `links` (array de `{ href, label }`) | ✅ | Sí |
| Devuelve un `<header>` (rol `banner`) | ✅ `<header>` | Sí |
| El nombre del cine es `<h1>` con nombre accesible = `name` | ✅ `<h1>{name}</h1>` | Sí |
| Navegación con `aria-label="Principal"` | ✅ `<nav aria-label="Principal">` | Sí |
| Una lista `<ul>` con un `<li><a href>` por link | ✅ `{links.map(...)}` | Sí |
| Sin avisos de React en la consola | ✅ Sin warnings | Sí |
| Con otros datos muestra esos datos | ✅ Props passthrough | Sí |

**Tests T1: 5/5 pasando**

---

### T2 — `Footer`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `contact` = `{ address, phone, email }` | ✅ | Sí |
| Devuelve un `<footer>` (rol `contentinfo`) | ✅ `<footer>` | Sí |
| Muestra la dirección como texto | ✅ `<p>{contact.address}</p>` | Sí |
| Teléfono es enlace `tel:` | ✅ `<a href={tel:...}>{...}</a>` | Sí |
| Correo es enlace `mailto:` | ✅ `<a href={mailto:...}>{...}</a>` | Sí |
| Sin avisos de React (usa `className`, no `class`) | ✅ Sin `className` necesario, sin warnings | Sí |
| Con otros datos de contacto muestra esos datos | ✅ Props passthrough | Sí |

**Tests T2: 6/6 pasando**

---

### T3 — `MovieCard`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `movie` = `{ id, title, image, synopsis, rating, showtimes }` | ✅ | Sí |
| Devuelve un `<article>` (rol `article`) | ✅ `<article>` | Sí |
| `<img src={movie.image} alt={movie.title}>` | ✅ | Sí |
| Título en `<h3>` — **solo el título**, sin rating | ✅ `<h3>{movie.title}</h3>` | Sí |
| Valoración como texto con estrella | ✅ `<span>★ {movie.rating}</span>` | Sí |
| Sin avisos de React en la consola | ✅ | Sí |
| Con otra película muestra los datos correctos | ✅ Props passthrough | Sí |

> **Nota importante:** El `<h3>` debe contener **únicamente** el título de la película, no el título + rating. Esto fue la causa de 3 fallos al inicio.

**Tests T3: 6/6 pasando**

---

### T4 — `Showtimes`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `times` (array de strings como `"19:30"`) | ✅ | Sí |
| Con horas: dibuja `<ul>` con `<li>` por hora, en orden | ✅ `{times.map(...)}` en `<ul>` | Sí |
| Con horas NO muestra "Sin funciones hoy" | ✅ Solo `<ul>` | Sí |
| Con lista vacía muestra `<p>Sin funciones hoy</p>` | ✅ `if (!times || times.length === 0) return <p>...</p>` | Sí |
| Con lista vacía no imprime un "0" suelto | ✅ Solo el `<p>` | Sí |
| Con lista vacía no dibuja una lista | ✅ No renderiza `<ul>` | Sí |
| Sin avisos de React en la consola | ✅ | Sí |

**Tests T4: 6/6 pasando**

---

### T5 — `MovieList`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `movies` (array de objetos movie) | ✅ | Sí |
| Devuelve un `<ul>` con `<li>` por película, mismo orden | ✅ `{movies.map(...)}` en `<ul>` | Sí |
| Cada `<li>` contiene un `<MovieCard>` (`<article>`) | ✅ `<MovieCard movie={movie} />` | Sí |
| Cada `<li>` lleva `key` que identifica la película | ✅ `key={movie.id}` | Sí |
| Sin avisos de React por keys faltantes | ✅ | Sí |
| Al invertir el orden, cada película conserva su nodo DOM | ✅ `key={movie.id}` mantiene identidad | Sí |
| Al quitar la primera, las demás conservan su nodo DOM | ✅ `key={movie.id}` mantiene identidad | Sí |

**Tests T5: 5/5 pasando**

---

### T6 — `Synopsis`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `text` (string, escrito por terceros) | ✅ | Sí |
| Texto normal se muestra tal cual dentro de `<p>` | ✅ `<p>{text}</p>` | Sí |
| **Sinopsis hostil** se muestra como texto literal (etiquetas a la vista) | ✅ Renderizado como texto plano | Sí |
| No crea elementos nuevos (`img`, `b`, `script`) | ✅ React escapa el texto | Sí |
| No ejecuta código: `window.__xss` queda `undefined` | ✅ Sin `dangerouslySetInnerHTML` | Sí |
| Sin avisos de React en la consola | ✅ | Sí |

> **Nota:** Esto cumple el requisito XSS del "Parte 5" del README: el texto se muestra literal, nunca como HTML. No se usa `dangerouslySetInnerHTML`.

**Tests T6: 5/5 pasando**

---

### T7 — `Hero`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `movie` (un objeto movie) | ✅ | Sí |
| No lanza errores al renderizar | ✅ | Sí |
| Sin avisos de React en la consola | ✅ | Sí |
| Es un `<section>` con `aria-label="Destacada"` (rol `region`) | ✅ `<section aria-label="Destacada">` | Sí |
| Título de la película en `<h2>` | ✅ `<h2>{movie.title}</h2>` | Sí |
| Enlace "Ver horarios" con `href="#horarios-{id}"` | ✅ `<a href={#horarios-${movie.id}}>Ver horarios</a>` | Sí |

**Tests T7: 5/5 pasando**

---

### T8 — `AgentMessage`

| Requisito del prompt / test | Implementado | ¿Cumple? |
|---|---|---|
| Recibe `author` (string) y `text` (string) | ✅ | Sí |
| Sin avisos de React en la consola | ✅ | Sí |
| Autor en `<strong>` seguido de dos puntos | ✅ `<strong>{author}:</strong>` | Sí |
| Texto en `<span>` dentro del mismo `<p>` | ✅ `<p><strong>...</strong> <span>{text}</span></p>` | Sí |
| Texto hostil se muestra literal (no como HTML) | ✅ React escapa el texto | Sí |
| No ejecuta código: `window.__xss` queda `undefined` | ✅ Sin `dangerouslySetInnerHTML` | Sí |
| No crea elementos `img`, `b`, `script` | ✅ | Sí |

**Tests T8: 5/5 pasando**

---

## 3. Resumen de Pruebas

| Tarea | Tests | Pasando | Fallando | Estado |
|---|---|---|---|---|
| T1 Header | 5 | 5 | 0 | ✅ |
| T2 Footer | 6 | 6 | 0 | ✅ |
| T3 MovieCard | 6 | 6 | 0 | ✅ |
| T4 Showtimes | 6 | 6 | 0 | ✅ |
| T5 MovieList | 5 | 5 | 0 | ✅ |
| T6 Synopsis | 5 | 5 | 0 | ✅ |
| T7 Hero | 5 | 5 | 0 | ✅ |
| T8 AgentMessage | 5 | 5 | 0 | ✅ |
| **Total** | **43** | **43** | **0** | **✅ 100%** |

---

## 4. Decisiones y Solución de Problemas

### T3 MovieCard — Encabezado con nombre accesible incorrecto

El problema fue que el `<h3>` contenía `"El Jardín de Vidrio · ★ 4.7"` (título + rating), pero la prueba esperaba un heading con nombre accesible `"El Jardín de Vidrio"` (solo título). 

**Solución:** Se separó el rating en un `<span>` independiente, dejando el `<h3>` con solo `{movie.title}`.

---

## 5. Archivos Creados / Modificados

| Archivo | Tipo | Descripción |
|---|---|---|
| `src/duel/team/Header.jsx` | Nuevo | T1 — Encabezado del cine |
| `src/duel/team/Footer.jsx` | Nuevo | T2 — Pie de página con contacto |
| `src/duel/team/MovieCard.jsx` | Nuevo | T3 — Tarjeta individual de película |
| `src/duel/team/Showtimes.jsx` | Nuevo | T4 — Horarios de funciones |
| `src/duel/team/MovieList.jsx` | Nuevo | T5 — Lista de películas |
| `src/duel/team/Synopsis.jsx` | Nuevo | T6 — Sinopsis XSS-safe |
| `src/duel/team/Hero.jsx` | Nuevo | T7 — Hero de película destacada |
| `src/duel/team/AgentMessage.jsx` | Nuevo | T8 — Mensaje de agente XSS-safe |
| `src/duel/team/index.jsx` | Nuevo | Exporta los 8 componentes |
| `.opencode/agents/*.md` | Nuevos | Configuración del equipo de agentes |
| `AGENTS.md` | Nuevo | Guía del equipo de desarrollo |

---

## 6. ¿Faltó algo?

**No.** Todos los 8 componentes fueron implementados según las especificaciones de cada archivo de test, cumpliendo con:

- ✅ Todos son componentes funcionales puros (sin hooks ni estado)
- ✅ Props exactas según la tabla del README
- ✅ Roles ARIA correctos (`banner`, `contentinfo`, `article`, `region`, `navigation`)
- ✅ Accesibilidad: `aria-label`, nombres accesibles, roles semánticos
- ✅ XSS-safe: `Synopsis` y `AgentMessage` no usan `dangerouslySetInnerHTML`
- ✅ List rendering con `key` estable (`key={movie.id}`)
- ✅ Sin avisos de React en la consola
- ✅ Manejo de datos vacíos (`Showtimes` con `[]`)
- ✅ Renderizado condicional de datos (props passthrough con datos alternativos)

**Los 43 de 43 tests pasan.** No falta nada del scope del laboratorio.
