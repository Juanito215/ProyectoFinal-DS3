# ===============================
# ETAPA 1: BUILD
# ===============================
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copiamos pom.xml y descargamos dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiamos el código fuente
COPY src ./src

# Construimos el JAR
RUN mvn clean package -DskipTests

# ===============================
# ETAPA 2: RUNTIME
# ===============================
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copiamos el JAR generado
COPY --from=build /app/target/*.jar app.jar

# Puerto del barber-service
EXPOSE 8082

# Ejecutar app
ENTRYPOINT ["java", "-jar", "app.jar"]
