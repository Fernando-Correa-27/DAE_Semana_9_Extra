# AGENTS.md - Equipo de Desarrollo Django + React

## 🏗️ Arquitectura General del Proyecto

Este proyecto utiliza una arquitectura de microservicios con:
- **Backend**: Django + Django REST Framework
- **Frontend**: React + TypeScript
- **Comunicación**: API REST con JWT authentication

---

## 👥 Equipo de Agentes Especializados

### 1. 🎨 UI/UX Designer Agent
**Archivo**: `.opencode/agents/ui-ux.md`
**Responsabilidades**:
- Diseño de interfaces de usuario con React
- Sistemas de diseño (Tailwind CSS, shadcn/ui)
- Componentes accesibles y responsivos
- Diseño de flujos de usuario
- Prototipos y mockups
- Coherencia visual y brand identity
- Experiencia de usuario (UX research básica)

**Herramientas**: ui-styling, ui-ux-pro-max, banner-design

---

### 2. 🏗️ Software Architect Agent
**Archivo**: `.opencode/agents/architect.md`
**Responsabilidades**:
- Diseño de arquitectura de software
- Patrones de diseño (MVC, Clean Architecture, etc.)
- Modelado de datos (ORM de Django)
- API design con Django REST Framework
- Decisiones tecnológicas y trade-offs
- Escalabilidad y rendimiento
- Seguridad (CORS, CSRF, JWT, permissions)
- Estructura de directorios y módulos

**Herramientas**: api-engineer, api-discovery

---

### 3. ✅ QA Tester Agent
**Archivo**: `.opencode/agents/tester.md`
**Responsabilidades**:
- Test unitarios (pytest para Django, Jest/RTL para React)
- Test de integración
- Test de API endpoints
- Test E2E con Cypress o Playwright
- Test de rendimiento básico
- Cobertura de código
- Regression testing
- Test de seguridad básica

**Herramientas**: api-testing, performance-testing

---

### 4. 📝 Documenter Agent
**Archivo**: `.opencode/agents/documenter.md`
**Responsabilidades**:
- Documentación de la API (Swagger/OpenAPI)
- README del proyecto
- Documentación de instalación y configuración
- Código de comentarios (docstrings)
- Changelog y release notes
- Guía de contribución
- Documentación de decisiones técnicas (ADRs)
- Migraciones y base de datos

**Herramientas**: api-documentation

---

### 5. 🔐 Security Agent
**Archivo**: `.opencode/agents/security.md`
**Responsabilidades**:
- Revisión de vulnerabilidades (Django security)
- Autenticación y autorización (JWT, permissions)
- Validación de datos de entrada
- Protección contra XSS, CSRF, SQL injection
- Secrets management
- Security headers
- Audit logging
- Compliance (GDPR si aplica)

---

### 6. 🚀 DevOps Agent
**Archivo**: `.opencode/agents/devops.md`
**Responsabilidades**:
- Docker y Docker Compose
- CI/CD pipelines (GitHub Actions)
- Environment configuration (.env)
- Deployment (Heroku, AWS, DigitalOcean, etc.)
- Monitoring y logging
- Database migrations
- Backup strategies
- Staging vs Production

---

### 7. 🔧 Backend Developer Agent
**Archivo**: `.opencode/agents/backend.md`
**Responsabilidades**:
- Desarrollo de APIs REST con Django REST Framework
- Modelos y base de datos
- Serializers y ViewSets
- Authentication y Permissions
- Signals y tasks (Celery)
- Third-party integrations
- Performance optimization
- Caching (Redis)

---

### 8. 💻 Frontend Developer Agent
**Archivo**: `.opencode/agents/frontend.md`
**Responsabilidades**:
- Componentes React con TypeScript
- State management (Redux / Context API)
- React Router
- API integration (Axios / Fetch)
- Form handling (React Hook Form)
- Form validation (Zod / Yup)
- Testing frontend
- Performance optimization (lazy loading, memo)
- PWA features

---

## 📋 Convenciones del Equipo

### Código
- **Python**: PEP 8, type hints, Black formatter
- **JavaScript/TypeScript**: Airbnb style guide
- **Commits**: Conventional Commits
- **Branches**: Git Flow (main, develop, feature/*, bugfix/*)

### Django
- Cada app debe tener su propio directory
- Settings separados por ambiente
- Environment variables para configs sensibles
- Modelos con validaciones en clean()

### React
- Functional components con hooks
- Arrow functions
- Destructuring de props
- TypeScript strict mode

### Testing
- mínimo 80% de cobertura
- Test names en inglés, descriptivos
- Arrange-Act-Assert pattern

### Git
- Commits en inglés
- Descriptions claras
- PR con descripción y contexto
- Code review obligatorio

---

## 🔄 Workflow de Desarrollo

1. **Arquitecto** define la estructura y diseño
2. **Backend/Frontend Developer** implementan las features
3. **Tester** valida con tests unitarios y de integración
4. **Security** revisa vulnerabilidades
5. **Documenter** actualiza documentación
6. **DevOps** despliega en staging/production
7. **UI/UX** valida la experiencia visual

---

## 🛠️ Tecnologías

### Backend
- Python 3.11+
- Django 5.x
- Django REST Framework
- PostgreSQL
- Redis (caching)
- Celery (tasks)
- Pytest
- Black, Ruff (linting)

### Frontend
- React 18+
- TypeScript 5.x
- Tailwind CSS
- shadcn/ui
- Axios
- React Hook Form
- React Testing Library
- Vite (build tool)

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Nginx (reverse proxy)
