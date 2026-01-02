# Proyecto03 - Pruebas TDD con Jest

Proyecto educativo de Angular enfocado en aprender **Jest** y **TDD (Test-Driven Development)** desde conceptos básicos hasta técnicas avanzadas.

## 📋 Descripción

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.9 y está configurado para usar **Jest** como framework de pruebas en lugar de Karma/Jasmine tradicional.

El objetivo principal es aprender a escribir pruebas profesionales siguiendo la metodología TDD (Test-Driven Development), aplicando el ciclo **Red → Green → Refactor** en un proyecto Angular real.

## 🎯 Objetivo del Curso

Aprender a escribir pruebas profesionales con Jest siguiendo la metodología TDD, desde conceptos básicos hasta técnicas avanzadas, aplicándolo en un proyecto Angular real.

### Metodología TDD

- **Red**: Escribir prueba que falle
- **Green**: Escribir código mínimo para pasar
- **Refactor**: Mejorar código manteniendo pruebas

## 🛠️ Tecnologías Utilizadas

- **Angular** 20.3.0
- **Jest** 30.2.0 (framework de pruebas)
- **TypeScript** 5.9.2
- **Babel** (para transpilación en pruebas)
- **RxJS** 7.8.0

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── services/
│   │   ├── math-utils.ts          # Utilidades matemáticas
│   │   ├── math-utils.spec.ts     # Pruebas de MathUtils
│   │   ├── string-utils.ts        # Utilidades de strings
│   │   └── string-utils.spec.ts   # Pruebas de StringUtils
│   └── ...
└── ...
```

### Servicios Implementados

- **MathUtils**: Funciones matemáticas puras (suma, resta, multiplicación, división)
- **StringUtils**: Manipulación de strings (capitalizar, invertir, trim, camelCase, palíndromos, contar palabras)

## 🚀 Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
ng serve

# Abrir en el navegador: http://localhost:4200/
```

### Construcción

```bash
# Compilar el proyecto para producción
ng build

# Compilar en modo watch (desarrollo)
npm run watch
```

### Pruebas con Jest

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch (se re-ejecutan al cambiar archivos)
npm run test:watch

# Ejecutar pruebas con reporte de cobertura
npm run test:coverage
```

### Generación de Código

```bash
# Generar un nuevo componente
ng generate component component-name

# Ver todas las opciones disponibles
ng generate --help
```

## 🧪 Pruebas Unitarias

Este proyecto utiliza **Jest** en lugar de Karma/Jasmine. Las pruebas se encuentran en archivos con extensión `.spec.ts`.

### Ejemplo de Estructura de Pruebas

```typescript
import { describe, test, expect } from '@jest/globals';
import { MathUtils } from './math-utils';

describe('MathUtils', () => {
  describe('sum', () => {
    test('should add two positive numbers correctly', () => {
      const result = MathUtils.sum(5, 3);
      expect(result).toBe(8);
    });
  });
});
```

### Configuración de Jest

La configuración de Jest se encuentra en `jest.config.js` e incluye:
- Patrones de archivos de prueba
- Configuración de cobertura de código
- Reportes de cobertura (HTML, texto, LCOV)

## 📚 Temario Completo

Para ver el temario completo del curso con todos los módulos y ejercicios, consulta el archivo [TEMARIO_COMPLETO.md](./TEMARIO_COMPLETO.md).

### Módulos del Curso

1. **Fundamentos y Configuración**: Introducción a Jest y TDD
2. **Pruebas Unitarias Básicas**: Matchers y funciones puras
3. **Mocks y Spies**: Simulación de dependencias
4. **Pruebas de Componentes**: Testing de componentes Angular
5. **Snapshots**: Pruebas de snapshot
6. **Pruebas de Integración**: Testing de flujos completos
7. **Técnicas Avanzadas**: Testing asíncrono, pipes, directivas, guards
8. **Cobertura y Optimización**: Code coverage y CI/CD
9. **Proyecto Final TDD**: Aplicación completa con TDD

## 📊 Cobertura de Código

El objetivo de cobertura es **mínimo 80%**. Para generar el reporte de cobertura:

```bash
npm run test:coverage
```

El reporte se generará en la carpeta `coverage/` con diferentes formatos (HTML, texto, LCOV).

## 🎓 Principios TDD

- ✅ Siempre escribir pruebas primero (Red)
- ✅ Implementar código mínimo para pasar (Green)
- ✅ Refactorizar manteniendo pruebas verdes (Refactor)
- ✅ Mantener pruebas simples y legibles
- ✅ Un test = una cosa a probar

## 📝 Notas Importantes

1. **TDD Estricto**: Seguir ciclo Red-Green-Refactor siempre
2. **Pruebas Independientes**: Cada prueba debe poder ejecutarse sola
3. **Nomenclatura**: Usar nombres descriptivos que expliquen qué se prueba
4. **Documentación**: Todas las pruebas deben tener `describe()` descriptivos

## 🔗 Recursos Adicionales

- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Angular Testing Guide](https://angular.dev/guide/testing)

---

**¡Vamos a aprender Jest y TDD de manera profesional! 🎉**
