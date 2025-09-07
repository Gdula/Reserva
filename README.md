# Spring Boot + Angular 20

Aplikacja z najnowszymi stabilnymi wersjami:

- ☕ **Java 21** (LTS)
- 🍃 **Spring Boot 3.5.5** (najnowsza stabilna)
- 🅰️ **Angular 20** (najnowsza stabilna)
- 📦 **Maven** (build tool)

## 📁 Struktura projektu

```
spring-angular-app/
├── backend/                          # Moduł Spring Boot
│   ├── src/main/java/
│   │   └── com/example/springangular/
│   │       ├── SpringAngularApplication.java
│   │       ├── controller/
│   │       │   └── HelloController.java
│   │       └── config/
│   │           └── WebConfig.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── static/                   # Tutaj trafiają pliki z Angulara
│   └── pom.xml
├── frontend/                         # Moduł Angular
│   ├── src/main/angular/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.component.ts
│   │   │   │   └── app.component.css
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   └── styles.css
│   │   ├── package.json
│   │   ├── angular.json
│   │   └── tsconfig.json
│   └── pom.xml
├── pom.xml                          # Parent POM
└── README.md
```

## 🛠 Wymagania

- **Java 21** (LTS)
- **Maven 3.6+**
- **Node.js 20+** (będzie automatycznie zainstalowany przez Maven)

## 🚀 Uruchomienie

### 1. Klonowanie/Import do IntelliJ

1. Otwórz **IntelliJ IDEA**
2. `File` → `Open` → wybierz folder projektu
3. IntelliJ automatycznie rozpozna projekt Maven

### 2. Budowanie i uruchomienie

```bash
# Zbuduj cały projekt (backend + frontend)
mvn clean install

# Uruchom aplikację
cd backend
mvn spring-boot:run
```

### 3. Dostęp do aplikacji

- **Frontend**: [http://localhost:8080](http://localhost:8080)
- **Backend API**: [http://localhost:8080/api/hello](http://localhost:8080/api/hello)
- **Health Check**: [http://localhost:8080/actuator/health](http://localhost:8080/actuator/health)

### 4. Uruchomienie w Dockerze

```bash
# Zbuduj obraz
docker build -t reserva-app .

# Uruchom kontener
docker run -p 8080:8080 reserva-app

# Alternatywnie z docker-compose
docker compose up --build
```

## 🔧 Development

### Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```

### Frontend (Angular) - Development Mode
```bash
cd frontend/src/main/angular
npm install
npm start
# Dostęp: http://localhost:4200
```

## 🏗 Build na produkcję

```bash
# Kompletny build
mvn clean install

# Uruchomienie z JAR
java -jar backend/target/spring-angular-app.war
```

## 📋 Dostępne endpointy

### Backend API

| Endpoint | Method | Opis |
|----------|--------|------|
| `/api/hello` | GET | Wiadomość Hello World |
| `/api/status` | GET | Status backendu |
| `/actuator/health` | GET | Health check |

### Frontend Routes

| Route | Opis |
|-------|------|
| `/` | Strona główna z Hello World |

## 🎨 Funkcjonalności UI

- 🌈 **Gradient background**
- 🎯 **Responsive design**
- ✨ **Animacje i hover effects**
- 🧪 **Test button** do sprawdzenia połączenia z backend
- 📱 **Mobile-friendly**

## 🔧 Konfiguracja

### Spring Boot (application.properties)
- Port: `8080`
- CORS: włączony dla Angular dev server
- Static resources: `/static/`
- Logging: DEBUG dla pakietów aplikacji

### Angular
- Standalone Components (Angular 20)
- HttpClient
- TypeScript 5.6
- Responsive CSS Grid

## 📦 Wersje zależności

### Java/Spring Boot
```xml
<java.version>21</java.version>
<spring-boot.version>3.5.5</spring-boot.version>
```

### Angular/Frontend
```json
{
  "@angular/core": "^20.2.0",
  "typescript": "~5.6.0",
  "node": "v20.19.0"
}
```

## 🤝 Przydatne komendy

```bash
# Tylko build frontendu
mvn clean compile -pl frontend

# Skip testów
mvn clean install -DskipTests

# Debug mode
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"

# Build tylko backendu
mvn clean install -pl backend
```

## 🐛 Troubleshooting

### Problem: "Cannot connect to backend"
- Sprawdź czy backend działa na porcie 8080
- Sprawdź logi w konsoli

### Problem: "Maven nie znajduje Node/NPM"
- Usuń folder `frontend/node/` i `frontend/node_modules/`
- Uruchom `mvn clean install` ponownie

### Problem: IntelliJ nie rozpoznaje projektu
- `File` → `Reload Maven Projects`
- `File` → `Invalidate Caches and Restart`

## 📝 Notatki

- Projekt używa **Spring Boot DevTools** - hot reload dla Java
- Frontend automatycznie kopiowany do `backend/src/main/resources/static/`
- **CORS** skonfigurowany dla development (localhost:4200)
- Używa najnowszych stabilnych wersji na wrzesień 2025

---

**Gotowe do uruchomienia w IntelliJ IDEA!** 🚀
