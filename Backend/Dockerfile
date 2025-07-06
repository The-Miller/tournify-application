# # # Utiliser une image de base avec Java 17
# # FROM openjdk:17-jdk-slim

# # # Définir le répertoire de travail
# # WORKDIR /app

# # # Copier le fichier JAR généré
# # COPY target/gestiontournois-0.0.1-SNAPSHOT.jar /app/app.jar

# # # Commande pour lancer l'application
# # ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# # # Exposer le port 8080
# # EXPOSE 8080

# # Utiliser une image de base avec Java 17
# FROM openjdk:17-jdk-slim

# # Définir le répertoire de travail
# WORKDIR /app

# # Copier le fichier de credentials
# COPY src/main/resources/credentials/chatbot-tournify-sxev-9978e5cfb5ad.json /app/src/main/resources/credentials/

# # Copier le fichier JAR généré
# COPY target/gestiontournois-0.0.1-SNAPSHOT.jar /app/app.jar

# # Commande pour lancer l'application
# ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# # Exposer le port 8080
# EXPOSE 8080

# Backend Dockerfile
FROM openjdk:17-jdk-slim

# Créer un utilisateur non-root (bonne pratique sécurité)
RUN useradd -ms /bin/bash appuser

WORKDIR /app

# Copier les credentials de façon propre
COPY src/main/resources/credentials/ /app/credentials/

# Copier le JAR
COPY target/gestiontournois-0.0.1-SNAPSHOT.jar /app/app.jar

# Changer les permissions
RUN chown -R appuser:appuser /app

USER appuser

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

EXPOSE 8080
