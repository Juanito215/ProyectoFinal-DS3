# ===============================
# ETAPA 1: BUILD
# ===============================
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copiar pom y dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar código fuente
COPY src ./src

# Compilar gateway
RUN mvn clean package -DskipTests

# ===============================
# ETAPA 2: RUNTIME
# ===============================
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copiar el JAR generado
COPY --from=build /app/target/*.jar app.jar

# Puerto del API Gateway
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
