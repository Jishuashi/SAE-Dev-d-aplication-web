# SAE3.01 Dev-d-apli Cahier des Charges

## Sommaire
    1. Introduction
    2. Énoncé
    3. Pré-requis
    4. Priorités

## 1.Introduction
/!\ Ce cahier des charges est une première ébauche et n’est évidemment pas
complet et risque d’être modifié dans le futur.
Voici le cahier des charges du projet SAÉ 3.01 Développement d’application qui
contient les sections citées ci-dessus en étant de la manière suivante : dans la
partie II, nous énoncerons la description détaillée du problème à résoudre, son
contexte et les objectifs du projet. Dans la partie III, nous donnerons les
prérequis pour la bonne réalisation du projet et nous finirons dans la partie IV
par les priorités du développement.

## 2.Énoncé
Le Projet se nomme SAE 1.03 Développement d’application, le projet s’articule en la
réalisation d’une application web proposant des modules de simulation de calcul
(l’utilisateur inscrira des données qui seront calculées) pour différents domaines :
    - informatique (exemple : conversions binaires hexa, octal et décimal)
    - mathématiques (exemple : calcul d’une probabilité en loi Normale)
    - autre domaine (exemple : calcul d’amortissement)
    - sécurité (exemple : mise en place d’un algorithme de cryptographie)
L’application gèrera des visiteurs, utilisateurs inscrits et possédera un gestionnaire, qui
fait office d’administrateur.
Le visiteur n’a accès qu’à la page d’accueil qui lui permet de voir une explication
(vidéo et/ou texte) de l’application et de pouvoir s’inscrire/se connecter afin de
pouvoir accéder au système de simulation de calcul.
L’identifiant d’un utilisateur est son email et son mot de passe sera composé d’au
moins 8 caractères étant uniquement des caractères de la norme ASCII. L’utilisateur
doit aussi renseigner son nom et prénom au moment de l’inscription.
Il devra également remplir un captcha pour valider l’inscription.
Un utilisateur peut changer son mot de passe. Il ne peut toutefois pas le récupérer s’il
l’oublie.
Le gestionnaire peut gérer les utilisateurs (voir les identifiants des utilisateurs inscrits
mais pas leurs mots de passe, en supprimer un) et a accès à ses modules utilisés.
Il peut aussi établir une statistique des visites et des modules utilisés par les
utilisateurs inscrits sur la plateforme (exemples : module le plus utilisé, nombre de
visites dans le mois...).
Le gestionnaire ne peut pas accéder aux modules pour faire des simulations de calcul,
il doit se connecter avec un autre identifiant en tant qu’utilisateur standard.
Il y a aussi un fichier de log qui se met à jour à chaque connexion ratée. Il contient
l’identifiant, le mot de passe tenté, l’adresse IP, et la date de la tentative de
connexion.
L’application sera hébergée sur un Raspberry Pi 4, système d’exploitation Linux de la
distribution Debian et aura un système de gestion de base de données dédié.
Elle possèdera aussi une charte graphique, un logo et un nom.

## 3.Pré-requis
Les pré-requis pour les connaissances et compétences :
    - Une connaissance full-stack
    - La création et l’exploitation d’une ou de plusieurs bases de
        données
    - Planification des différentes tâches et cycles de vie
    - Des calculs des différents domaines pour la réalisation du
    système de simulation
    - Graphique pour la réalisation de la charte graphique et de son
    logo
    - Connaissances système dans la mise en place du serveur
    (gestion des droits, connaissances Linux)
    - Connaissances UML (Réalisation du diagramme des classes)
    - Connaissances de la gestion de projet en collaboration
    Les pré-requis matérielles et logicielles :
    - IDE web full-stack (PHPStorm)
    - Un Raspberry PI 4 (hébergement du serveur et des fichiers)
    - MariaDB (système de gestion de base de données)
    - Word (réalisation des documents liés au projet)
    - Trello (mise en place des tâches et la planification à des fins de
    réalisation)

## 4.Priorités
Pour le moment aucune priorité n’a été émise.