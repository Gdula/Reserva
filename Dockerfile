# Build stage
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY backend/pom.xml backend/
COPY frontend/pom.xml frontend/
COPY backend/src backend/src
COPY frontend/src frontend/src
RUN mvn -B -pl backend -am package -DskipTests

# Runtime stage
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/backend/target/spring-angular-app.war app.war
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.war"]
