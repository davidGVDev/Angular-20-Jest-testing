# 📚 TEMARIO COMPLETO: Jest y TDD en Angular
## Proyecto03_Pruebas_TDD

---

## 🎯 OBJETIVO DEL CURSO

Aprender a escribir pruebas profesionales con Jest siguiendo la metodología TDD (Test-Driven Development), desde conceptos básicos hasta técnicas avanzadas, aplicándolo en un proyecto Angular real.

---

## 📋 MÓDULO 1: FUNDAMENTOS Y CONFIGURACIÓN (Semana 1)

### 1.1 Introducción a Jest y TDD
**Duración estimada:** 2 horas

**Contenido:**
- ¿Qué es Jest y por qué usarlo?
- Comparación: Jest vs Jasmine/Karma
- Conceptos fundamentales de TDD:
  - Red (escribir prueba que falle)
  - Green (escribir código mínimo para pasar)
  - Refactor (mejorar código manteniendo pruebas)
- Ciclo TDD: Red → Green → Refactor

**Práctica:**
- Configurar Jest en proyecto Angular
- Crear primera prueba simple (función matemática básica)
- Ejecutar pruebas y entender el output

**Componente a crear:** `MathUtils` (servicio con funciones puras)

---

### 1.2 Configuración de Jest en Angular
**Duración estimada:** 1.5 horas

**Contenido:**
- Instalación de dependencias necesarias
- Configuración de `jest.config.js`
- Configuración de `tsconfig.spec.json`
- Setup de archivos de prueba
- Scripts de npm para ejecutar pruebas

**Práctica:**
- Configurar Jest desde cero
- Ejecutar primera suite de pruebas
- Configurar coverage (cobertura de código)

**Archivos a configurar:**
- `jest.config.js`
- `package.json` (scripts)
- `setup-jest.ts` (si es necesario)

---

### 1.3 Estructura de Pruebas con `describe()` e `it()`
**Duración estimada:** 2 horas

**Contenido:**
- Sintaxis de `describe()`: agrupación de pruebas
- Sintaxis de `it()` o `test()`: casos de prueba individuales
- `beforeEach()`, `afterEach()`, `beforeAll()`, `afterAll()`
- Organización de pruebas: AAA (Arrange, Act, Assert)
- Nomenclatura descriptiva de pruebas

**Práctica:**
- Crear suite de pruebas para `StringUtils` (servicio)
- Agrupar pruebas relacionadas con `describe()`
- Usar hooks de ciclo de vida

**Componente a crear:** `StringUtils` (servicio con métodos de manipulación de strings)

---

## 📋 MÓDULO 2: PRUEBAS UNITARIAS BÁSICAS (Semana 2)

### 2.1 Matchers Básicos de Jest
**Duración estimada:** 2.5 horas

**Contenido:**
- `expect()` y matchers fundamentales:
  - `toBe()` vs `toEqual()` vs `toStrictEqual()`
  - `toBeTruthy()` / `toBeFalsy()`
  - `toBeNull()` / `toBeUndefined()`
  - `toBeDefined()`
  - `toContain()` / `toContainEqual()`
  - `toHaveLength()`
  - `toMatch()` (regex)
  - `toBeGreaterThan()` / `toBeLessThan()`
  - `toBeCloseTo()` (números decimales)

**Práctica:**
- Crear pruebas para `NumberUtils` (servicio)
- Probar diferentes tipos de datos
- Entender diferencias entre matchers

**Componente a crear:** `NumberUtils` (servicio con validaciones y operaciones numéricas)

---

### 2.2 Pruebas de Funciones Puras
**Duración estimada:** 2 horas

**Contenido:**
- ¿Qué son funciones puras?
- Ventajas de probar funciones puras
- Casos de prueba: valores normales, edge cases, casos límite
- Pruebas de funciones con múltiples parámetros

**Práctica:**
- Crear `CalculatorService` siguiendo TDD
- Escribir pruebas primero (Red)
- Implementar funcionalidad (Green)
- Refactorizar (Refactor)

**Componente a crear:** `CalculatorService` (servicio con operaciones matemáticas)

---

### 2.3 Pruebas de Servicios Angular
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de servicios con dependencias
- Uso de `TestBed` de Angular
- Inyección de dependencias en pruebas
- Mocking de servicios dependientes

**Práctica:**
- Crear `UserService` con dependencias
- Probar métodos que llaman a otros servicios
- Mockear dependencias

**Componente a crear:** `UserService` (servicio con lógica de usuarios)

---

## 📋 MÓDULO 3: MOCKS Y SPIES (Semana 3)

### 3.1 Introducción a Mocks
**Duración estimada:** 2 horas

**Contenido:**
- ¿Qué es un mock?
- ¿Cuándo usar mocks?
- `jest.fn()`: crear funciones mock
- `jest.mock()`: mockear módulos completos
- `jest.spyOn()`: espiar funciones existentes

**Práctica:**
- Crear `ApiService` con llamadas HTTP
- Mockear llamadas HTTP
- Verificar que se llamen métodos correctamente

**Componente a crear:** `ApiService` (servicio con llamadas HTTP mockeadas)

---

### 3.2 Mocks Avanzados
**Duración estimada:** 2.5 horas

**Contenido:**
- Mockear valores de retorno: `mockReturnValue()`, `mockResolvedValue()`, `mockRejectedValue()`
- Mockear implementaciones: `mockImplementation()`
- Verificar llamadas: `toHaveBeenCalled()`, `toHaveBeenCalledWith()`, `toHaveBeenCalledTimes()`
- Resetear mocks: `mockClear()`, `mockReset()`, `mockRestore()`

**Práctica:**
- Crear `PaymentService` con múltiples dependencias
- Mockear diferentes escenarios (éxito, error, timeout)
- Verificar interacciones entre servicios

**Componente a crear:** `PaymentService` (servicio con lógica de pagos)

---

### 3.3 Mocking de Módulos y Dependencias Externas
**Duración estimada:** 2 horas

**Contenido:**
- Mockear módulos de Node.js
- Mockear librerías externas
- Mockear `localStorage`, `sessionStorage`
- Mockear `window`, `document`

**Práctica:**
- Crear `StorageService` que usa localStorage
- Mockear localStorage en pruebas
- Probar diferentes escenarios de almacenamiento

**Componente a crear:** `StorageService` (servicio para manejo de almacenamiento local)

---

## 📋 MÓDULO 4: PRUEBAS DE COMPONENTES (Semana 4)

### 4.1 Pruebas Básicas de Componentes
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de componentes con `TestBed`
- `ComponentFixture` y `DebugElement`
- Probar propiedades del componente
- Probar métodos del componente
- Probar cambios en el DOM

**Práctica:**
- Crear `ButtonComponent` siguiendo TDD
- Probar renderizado
- Probar eventos de click
- Probar cambios de estado

**Componente a crear:** `ButtonComponent` (componente de botón reutilizable)

---

### 4.2 Pruebas de Inputs y Outputs
**Duración estimada:** 2 horas

**Contenido:**
- Probar `@Input()` properties
- Probar `@Output()` events
- Simular eventos de usuario
- Verificar emisión de eventos

**Práctica:**
- Crear `CardComponent` con inputs y outputs
- Probar diferentes valores de input
- Verificar que se emitan eventos correctamente

**Componente a crear:** `CardComponent` (componente de tarjeta con inputs/outputs)

---

### 4.3 Pruebas de Formularios
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de formularios reactivos
- Testing de formularios template-driven
- Probar validaciones
- Probar envío de formularios
- Simular interacción de usuario

**Práctica:**
- Crear `LoginFormComponent` siguiendo TDD
- Probar validaciones
- Probar envío de formulario
- Probar manejo de errores

**Componente a crear:** `LoginFormComponent` (formulario de login)

---

## 📋 MÓDULO 5: SNAPSHOTS (Semana 5)

### 5.1 Introducción a Snapshots
**Duración estimada:** 2 horas

**Contenido:**
- ¿Qué son los snapshots?
- ¿Cuándo usar snapshots?
- `toMatchSnapshot()`: crear snapshots
- Actualizar snapshots: `-u` flag
- Ventajas y desventajas de snapshots

**Práctica:**
- Crear `HeaderComponent` con snapshot
- Generar snapshot inicial
- Modificar componente y actualizar snapshot

**Componente a crear:** `HeaderComponent` (componente de encabezado)

---

### 5.2 Snapshots Inline y de Objetos
**Duración estimada:** 2 horas

**Contenido:**
- Snapshots inline en pruebas
- Snapshots de objetos complejos
- Snapshots de arrays
- Snapshots de estructuras de datos

**Práctica:**
- Crear `ProductCardComponent` con snapshot de props
- Probar diferentes estados del componente
- Mantener snapshots actualizados

**Componente a crear:** `ProductCardComponent` (tarjeta de producto)

---

### 5.3 Buenas Prácticas con Snapshots
**Duración estimada:** 1.5 horas

**Contenido:**
- Cuándo NO usar snapshots
- Mantenimiento de snapshots
- Snapshots como documentación
- Alternativas a snapshots

**Práctica:**
- Revisar snapshots existentes
- Refactorizar componentes con snapshots
- Decidir qué debe tener snapshot y qué no

---

## 📋 MÓDULO 6: PRUEBAS DE INTEGRACIÓN (Semana 6)

### 6.1 Conceptos de Pruebas de Integración
**Duración estimada:** 2 horas

**Contenido:**
- Diferencia entre pruebas unitarias e integración
- Pirámide de pruebas
- ¿Qué probar en pruebas de integración?
- Testing de flujos completos

**Práctica:**
- Crear `ShoppingCartComponent` con integración
- Probar flujo completo: agregar → modificar → eliminar → checkout
- Probar interacción entre componentes

**Componente a crear:** `ShoppingCartComponent` (carrito de compras)

---

### 6.2 Pruebas de Integración de Componentes
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de componentes padre-hijo
- Testing de comunicación entre componentes
- Testing de servicios compartidos
- Testing de rutas (con RouterTestingModule)

**Práctica:**
- Crear `TodoAppComponent` (padre) con `TodoListComponent` (hijo)
- Probar flujo completo de aplicación
- Probar navegación entre componentes

**Componentes a crear:** `TodoAppComponent` y `TodoListComponent` (aplicación de tareas)

---

### 6.3 Pruebas de Integración con Servicios
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de servicios con dependencias reales
- Testing de flujos de datos
- Testing de transformaciones de datos
- Testing de efectos secundarios

**Práctica:**
- Crear `DataProcessingService` con múltiples servicios
- Probar flujo completo de procesamiento
- Probar manejo de errores en cadena

**Componente a crear:** `DataProcessingService` (servicio de procesamiento de datos)

---

## 📋 MÓDULO 7: TÉCNICAS AVANZADAS (Semana 7)

### 7.1 Testing Asíncrono
**Duración estimada:** 2.5 horas

**Contenido:**
- Testing de Promises: `async/await`
- Testing de Observables (RxJS)
- `fakeAsync()` y `tick()`
- `flush()` y `flushMicrotasks()`
- Testing de timeouts e intervals

**Práctica:**
- Crear `WeatherService` con llamadas asíncronas
- Probar diferentes escenarios asíncronos
- Probar manejo de errores asíncronos

**Componente a crear:** `WeatherService` (servicio con datos asíncronos)

---

### 7.2 Testing de Pipes
**Duración estimada:** 1.5 horas

**Contenido:**
- Testing de pipes personalizados
- Probar transformaciones
- Probar casos edge
- Testing de pipes con dependencias

**Práctica:**
- Crear `CurrencyPipe` personalizado
- Crear `DateFormatterPipe`
- Probar diferentes formatos y casos

**Componentes a crear:** `CurrencyPipe`, `DateFormatterPipe` (pipes personalizados)

---

### 7.3 Testing de Directivas
**Duración estimada:** 2 horas

**Contenido:**
- Testing de directivas estructurales
- Testing de directivas de atributo
- Probar efectos en el DOM
- Testing de directivas con inputs

**Práctica:**
- Crear `HighlightDirective` (resaltar texto)
- Crear `AutoFocusDirective`
- Probar comportamiento de directivas

**Componentes a crear:** `HighlightDirective`, `AutoFocusDirective` (directivas personalizadas)

---

### 7.4 Testing de Guards y Interceptors
**Duración estimada:** 2 horas

**Contenido:**
- Testing de Route Guards
- Testing de HTTP Interceptors
- Mockear Router y ActivatedRoute
- Probar diferentes escenarios de navegación

**Práctica:**
- Crear `AuthGuard` (guard de autenticación)
- Crear `LoggingInterceptor`
- Probar diferentes rutas y escenarios

**Componentes a crear:** `AuthGuard`, `LoggingInterceptor`

---

## 📋 MÓDULO 8: COBERTURA Y OPTIMIZACIÓN (Semana 8)

### 8.1 Code Coverage
**Duración estimada:** 2 horas

**Contenido:**
- ¿Qué es code coverage?
- Tipos de cobertura: statements, branches, functions, lines
- Configurar coverage en Jest
- Interpretar reportes de coverage
- Objetivos de cobertura

**Práctica:**
- Generar reporte de coverage
- Analizar áreas sin cubrir
- Mejorar cobertura de código
- Configurar umbrales mínimos

---

### 8.2 Optimización de Pruebas
**Duración estimada:** 2 horas

**Contenido:**
- Pruebas rápidas vs lentas
- Paralelización de pruebas
- Aislar pruebas
- Evitar pruebas frágiles
- Mejores prácticas de performance

**Práctica:**
- Optimizar suite de pruebas existente
- Medir tiempo de ejecución
- Identificar pruebas lentas
- Mejorar velocidad de ejecución

---

### 8.3 CI/CD con Pruebas
**Duración estimada:** 1.5 horas

**Contenido:**
- Integrar pruebas en CI/CD
- Configurar GitHub Actions / GitLab CI
- Ejecutar pruebas automáticamente
- Reportes de coverage en CI
- Failing tests en CI

**Práctica:**
- Configurar GitHub Actions para ejecutar pruebas
- Configurar reportes automáticos
- Probar flujo completo

---

## 📋 MÓDULO 9: PROYECTO FINAL TDD (Semana 9-10)

### 9.1 Planificación del Proyecto
**Duración estimada:** 2 horas

**Contenido:**
- Definir funcionalidades del proyecto
- Planificar pruebas primero (TDD)
- Estructura del proyecto
- Definir componentes y servicios

**Proyecto:** Aplicación de Gestión de Tareas Avanzada

---

### 9.2 Desarrollo con TDD Completo
**Duración estimada:** 8-10 horas

**Contenido:**
- Desarrollar aplicación completa siguiendo TDD
- Escribir pruebas primero
- Implementar funcionalidad
- Refactorizar continuamente
- Mantener alta cobertura

**Funcionalidades a desarrollar:**
1. Sistema de autenticación (login/register)
2. CRUD de tareas
3. Filtros y búsqueda
4. Estadísticas y reportes
5. Notificaciones
6. Exportación de datos

**Componentes a crear:**
- `AuthService` (con pruebas)
- `TaskService` (con pruebas)
- `TaskListComponent` (con pruebas)
- `TaskFormComponent` (con pruebas)
- `TaskFilterComponent` (con pruebas)
- `StatisticsComponent` (con pruebas)
- `NotificationService` (con pruebas)
- `ExportService` (con pruebas)

---

### 9.3 Refactorización y Mejoras
**Duración estimada:** 3 horas

**Contenido:**
- Refactorizar código manteniendo pruebas
- Mejorar estructura de pruebas
- Optimizar suite de pruebas
- Documentar pruebas
- Revisar y mejorar coverage

---

## 📊 RESUMEN DE COMPONENTES A CREAR

### Servicios (Services):
1. `MathUtils` - Funciones matemáticas puras
2. `StringUtils` - Manipulación de strings
3. `NumberUtils` - Validaciones numéricas
4. `CalculatorService` - Operaciones matemáticas
5. `UserService` - Gestión de usuarios
6. `ApiService` - Llamadas HTTP
7. `PaymentService` - Lógica de pagos
8. `StorageService` - Almacenamiento local
9. `WeatherService` - Datos asíncronos
10. `DataProcessingService` - Procesamiento de datos
11. `AuthService` - Autenticación (proyecto final)
12. `TaskService` - Gestión de tareas (proyecto final)
13. `NotificationService` - Notificaciones (proyecto final)
14. `ExportService` - Exportación (proyecto final)

### Componentes:
1. `ButtonComponent` - Botón reutilizable
2. `CardComponent` - Tarjeta con inputs/outputs
3. `LoginFormComponent` - Formulario de login
4. `HeaderComponent` - Encabezado (snapshots)
5. `ProductCardComponent` - Tarjeta de producto (snapshots)
6. `ShoppingCartComponent` - Carrito de compras
7. `TodoAppComponent` - Aplicación de tareas (padre)
8. `TodoListComponent` - Lista de tareas (hijo)
9. `TaskListComponent` - Lista de tareas (proyecto final)
10. `TaskFormComponent` - Formulario de tareas (proyecto final)
11. `TaskFilterComponent` - Filtros (proyecto final)
12. `StatisticsComponent` - Estadísticas (proyecto final)

### Pipes:
1. `CurrencyPipe` - Formato de moneda
2. `DateFormatterPipe` - Formato de fechas

### Directivas:
1. `HighlightDirective` - Resaltar texto
2. `AutoFocusDirective` - Auto-enfoque

### Guards e Interceptors:
1. `AuthGuard` - Guard de autenticación
2. `LoggingInterceptor` - Interceptor de logging

---

## 🎓 METODOLOGÍA DE ENSEÑANZA

### Para cada módulo:
1. **Teoría:** Explicación de conceptos
2. **Ejemplo guiado:** Código paso a paso
3. **Práctica:** Ejercicios para hacer
4. **Revisión:** Revisar código y pruebas
5. **Retroalimentación:** Mejoras y mejores prácticas

### Principios TDD:
- ✅ Siempre escribir pruebas primero (Red)
- ✅ Implementar código mínimo para pasar (Green)
- ✅ Refactorizar manteniendo pruebas verdes (Refactor)
- ✅ Mantener pruebas simples y legibles
- ✅ Un test = una cosa a probar

---

## 📝 NOTAS IMPORTANTES

1. **No editar código automáticamente:** El profesor explicará paso a paso, pero el estudiante escribirá el código
2. **Documentación:** Todas las pruebas deben tener `describe()` descriptivos
3. **Cobertura objetivo:** Mínimo 80% de cobertura
4. **TDD estricto:** Seguir ciclo Red-Green-Refactor siempre
5. **Pruebas independientes:** Cada prueba debe poder ejecutarse sola
6. **Nomenclatura:** Usar nombres descriptivos que expliquen qué se prueba

---

## 🚀 PRÓXIMOS PASOS

1. Crear proyecto Angular: `proyecto03_Pruebas_TDD`
2. Configurar Jest desde cero
3. Comenzar con Módulo 1: Fundamentos

---

**¡Vamos a aprender Jest y TDD de manera profesional! 🎉**

