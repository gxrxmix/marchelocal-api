-MarchéLocal API
Ce projet est une API de marketplace développée avec Node.js et Express pour gérer des vendeurs, des produits et des commandes. Il sert de fil rouge pour notre formation en Programmation Serveur et API REST en Licence 2 Génie Informatique.

Prérequis
Il faut installer Node.js en version LTS sur la machine.

Le serveur écoute par défaut sur le port 3000 ou sur le port spécifié dans les variables d'environnement.

Endpoints de base
La route principale / renvoie un message de bienvenue en JSON.

La route /health permet de vérifier le statut du serveur et renvoie un timestamp à jour.

Guide pour pousser le projet sur GitHub
Voici la démarche exacte pour versionner le projet en respectant la consigne des trois commits minimum et le pousser sur GitHub.

On commence par initialiser Git et configurer le fichier pour ignorer les fichiers lourds ou sensibles comme le dossier node modules.

Bash
git init
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
On fait un premier commit pour valider la configuration initiale du projet.

Bash
git add package.json package-lock.json .gitignore
git commit -m "chore: initial project setup"
On fait un deuxième commit pour ajouter le code source du serveur Express.

Bash
git add src/
git commit -m "feat: add server setup with health and welcome endpoints"
On fait un troisième commit pour inclure la documentation.

Bash
git add README.md
git commit -m "docs: add project documentation in README"
Pour finir, on bascule sur la branche principale, on lie le dossier local au dépôt GitHub et on pousse le code en ligne.

Bash
git branch -M main
git remote add origin https://github.com/gxrxmix/marchelocal-api.git
git push -u origin main