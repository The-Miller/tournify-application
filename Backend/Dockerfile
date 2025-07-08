# # Étape 1 : Build avec Maven
# FROM maven:3.8.5-openjdk-17 AS build

# WORKDIR /app

# # Copier uniquement les fichiers nécessaires pour le build Maven
# COPY pom.xml .
# COPY src ./src

# # Build du JAR sans tests (optionnel)
# RUN mvn clean package -DskipTests

# # Étape 2 : Image finale légère pour exécuter l’appli
# FROM openjdk:17-jdk-slim

# # Créer un utilisateur non-root pour la sécurité
# RUN useradd -ms /bin/bash appuser

# WORKDIR /app

# # Copier le JAR généré depuis l’étape de build
# COPY --from=build /app/target/gestiontournois-0.0.1-SNAPSHOT.jar /app/app.jar

# # Ne pas copier les credentials dans le Dockerfile ! Ils doivent être injectés au runtime (via volumes ou variables d'env)

# # Changer la propriété du dossier pour l’utilisateur appuser
# RUN chown -R appuser:appuser /app

# USER appuser

# # Lancer l'application
# ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# EXPOSE 8080

# Étape 1 : Build avec Maven
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Étape 2 : Image finale plus légère
FROM openjdk:17-jdk-slim

# Création utilisateur non-root
RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

# Copier le jar depuis la build
COPY --from=build /app/target/gestiontournois-0.0.1-SNAPSHOT.jar ./app.jar

# Copier le dossier secrets (ou monter en volume dans docker run/k8s)
COPY /etc/secrets /etc/secrets

# Donner les droits à appuser sur le dossier secrets
RUN chown -R appuser:appuser /etc/secrets

USER appuser

# Expose port 8080
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
