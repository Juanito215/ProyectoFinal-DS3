# Imagen base con Java 17
FROM eclipse-temurin:17-jdk-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el jar generado por Maven
COPY target/barber.service-0.0.1-SNAPSHOT.jar app.jar

# Exponemos el puerto del microservicio
EXPOSE 8082

# Comando para ejecutar la app
ENTRYPOINT ["java","-jar","app.jar"]
