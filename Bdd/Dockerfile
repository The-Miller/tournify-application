FROM mysql:latest

# Définir les variables d'environnement
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes \
    MYSQL_DATABASE=gestion_tournois

# Copier le fichier SQL d'initialisation dans le dossier spécial
COPY ./init/sauvegarde.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL
EXPOSE 3306

CMD ["mysqld"]
