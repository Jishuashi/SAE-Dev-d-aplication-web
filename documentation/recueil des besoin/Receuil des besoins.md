# Receuil des besoins

## Sommaire 

### 1. Chapitre 1 – Objectif et portée 

    a)  Quels sont la portée et les objectifs généraux ? 

    b)  Les intervenants. (Qui est concerné́ ?) 

    c)  Qu’est-ce qui entre dans cette portée ? Qu’est-ce qui est en dehors ? (Les limites du système.) 

### 2. Chapitre 2 – Terminologie employée / Glossaire 
### 3. Chapitre 3 – Les cas d’utilisation 
     
    a) Les acteurs principaux et leurs objectifs 
    généraux. 

    b) Les cas d’utilisation métier (concepts opérationnels). 

    c) Les cas d’utilisation système. 

### 4. Chapitre 4 – La technologie employée

    a) Quelles sont les exigences technologiques pour ce système ?

    b) Avec quels systèmes ce système 
    s’interfacera-t-il et avec quelles exigences ? 

### 5. Chapitre 5 – Autres exigences

    a) Processus de développement 

        1)  Qui sont les participants au projet ?

        2)  Quelles valeurs devront être privilégiées ? 
        (Exemple : simplicité́, disponibilité́, rapidité́, souplesse etc.…) 

        3)  Quels retours ou quelle visibilité́ sur le projet les utilisateurs et commanditaires souhaitent-ils ? 

        4)  Que peut-on acheter ? Que doit-on construire ? Qui sont nos concurrents ? 

        5)  Quels sont les autres exigences du processus ? (Exemple : tests, installation, etc.…) 

        6)  À quelle dépendance le projet est-il soumis ? 

    b) Règles métier 

    c) Performances 

    d) Operations, sécurité́, documentation

    e) Utilisation et utilisabilité

    f) Maintenance et portabilité

    g) Questions non résolues ou reportées à plus tard 

### 6. Chapitre 6 – Recours humain, questions juridiques, politiques, organisationnelles. 

    (a) Quel est le recours humain au fonctionnement du système ? 

    (b) Quelles sont les exigences juridiques et politiques ?

    (c) Quelles sont les conséquences humaines de la réalisation du système ?

    (d) Quels sont les besoins en formation ?

    (e) Quelles sont les hypothèses et les dépendances affectant l’environnement humain ? 



## 1. Chapitre 1 – Objectif et portée 
### a) Quels sont la portée et les objectifs généraux ? 
 >&nbsp;&nbsp;&nbsp; Elle devra être capable de créer des utilisateur dit “inscrit” lorsqu’une personne se créer un compte, à partir d’une adresse mail qui fera office de login et d’un mot de passe. Elle devra ensuite stocker ce nouvel utilisateur pour ainsi qu’il puisse se reconnecter ultérieurement.  Lorsqu’un utilisateur déjà inscrit essaye de se connecter, elle devra être capable de récupérer son compte. Si un utilisateur ne souhaite pas s’inscrire, alors l’appli devra lui proposer un document explicatif sur son fonctionnement, des différents modules etc…sans pour autant lui donner accès à ses fonctionnalités. Enfin un utilisateur se démarquera des autres; le gestionnaire. Il est comme un administrateur. Il aura accès à la liste de tous les utilisateurs, un visuel sur un historique de chaque utilisateur (heure d’utilisation et son module) et pourra supprimer des utilisateurs (avec en parallèle son historique). Un historique des erreurs s’effectuera dans une page à part où aucun des utilisateurs ne pourront y accéder. Doit-être capable de modifier la base de données des mdp si un utilisateurs décide de modifier le sien. Établir une statistique des domaines/modules pour l’admin


### b) Les intervenants. (Qui est concerné́ ?) 
> &nbsp;&nbsp;&nbsp;Les utilisateurs sont des personnes du grand public. L’interface de l’appli devra être compréhensible pour tous types d’utilisateurs (une personne sans connaissance informatique devra être capable d'accéder et d’utiliser tous les modules).

### c)  Qu’est-ce qui entre dans cette portée ? Qu’est-ce qui est en dehors ? (Les limites du système.) 
> &nbsp;&nbsp;&nbsp;L’utilisateur ne peut changer les autres données renseignées autre que son mdp. L’appli aura seulement trois types distincts d’utilisateurs. Les domaines et modules ne pourront pas être modifiés par les utilisateurs. Ils n’auront pas des recommandations de modules selon leurs historiques. “Ne pourront pas importer de modules”. Un seul admin est présent, par conséquent il ne pourra pas nommer un autre utilisateur inscrit comme admin et ne pourra pas non plus perdre son titre d’admin. 

### 2. Chapitre 2 – Terminologie employée / Glossaire

| Termes  |  Description
| :---------------: |:---------------:| 
| Scénarios  | Different cas d'utilisations du projet  | 
| Modules  | Differentes parties du programmes dans diffenrents domaines | 
| Domaines  | Catégorie des modules en référence| 


## 3. Chapitre 3 – Les cas d’utilisation
### a) Les acteurs principaux et leurs objectifs généraux.
| Objet/Acteur  |  Etats | Comportement |
| :-------------- |:---------------| :---------------| 
| Espace personnel| contient des données personnelles de l’utilisateur  | - | 
| Utilisateur  | Peut être visiteur, inscrit ou gestionnaire | - |
| Simulation  | - | effectue des calculs affiche les résultats |
| Visiteur  | - | s’inscrit regarde la vidéo/le texte explicatif accède à la page d’accueil |
| Utilisateur inscrit | Espace personnel | se connecte, lance les modules de simulation, accède à son espace personnel |
| Gestionnaire  | - | gère les utilisateurs accède à certaines données sur les utilisateurs accède à des données statistiques du site |
| Page d’accueil  | Texte/vidéo explicatif | - |

### b) Les cas d’utilisation métier (concepts opérationnels). 
> Il n’y a pour l’instant aucun cas d’utilisation métier

### c) Les cas d’utilisation système. 
>Cas d’utilisation 1 : Afficher la page d’accueil 
```
Nom : Afficher la page d’accueil 
Contexte d’utilisation : Affichage de la page d’accueil avant  de s’inscrire ou quand on se connecte
Portée : Le site web / page d’accueil 
Niveau : sous-système 
Acteur principal : L’utilisateur du site 
Intervenants et intérêts : 
Précondition : Aucune 
Garantie minimale : La page s'affiche
Garantie en cas de succès : La page s’affiche 
Déclencheur : Le client lance le site 
Scénario nominal : 
    1. Le client tape l’adresse du site 
    2. Le système affiche la page d’accueil
Extension : Aucune 
Liste des variantes : 
Informations connexes : 
```

> Cas d’utilisation 2 : Afficher la page des mentions légales
```
Nom : Afficher la page des mentions légales
Contexte d’utilisation : Affichage des mentions légales contenant toutes les informations juridiques que le gérant du site doit respecter 
Portée : Le site web / page des mentions légales 
Niveau : sous-système 
Acteur principal : L’utilisateur du site 
Intervenants et intérêts : 
Précondition : Aucune 
Garantie minimale : La page s'affiche
Garantie en cas de succès : La page s'affiche
Déclencheur : 
Scénario nominal : 
    1. Utilisateur clique sur le boutton des mentions
    2. Le système affiche la page
Extension :
Liste des variantes : 
Informations connexes : 
```
> Cas d’utilisation 3 : S’inscrire
```
Nom : S’inscrire
Contexte d’utilisation : Affichage de la page d’inscription
Portée : Le site web / page d’inscription
Niveau : sous-système 
Acteur principal : L’utilisateur du site 
Intervenants et intérêts : 
Précondition : Aucune
Garantie minimale : La page s'affiche 
Garantie en cas de succès : L'utilisateur est inscrit 
Déclencheur : Cliquer sur le bouton “s’inscrire”
Scénario nominal : 
    1. Le client est sur la page d’accueil 
    2. Il clique sur le bouton “s’inscrire”
    3. Il entre les informations nécessaires à l’inscription  
    4. Il a un nouveau compte
Extension :
Liste des variantes : 
Informations connexes : 
```

> Cas d’utilisation 4 : Se connecter
```
Nom : Se connecter 
Contexte d’utilisation : Affichage de la page de connexion avant de s’inscrire ou quand on se connecte
Portée : Le site web / page de connexion
Niveau : sous-système  
Acteur principal : L’utilisateur du site 
Intervenants et intérêts : 
Précondition : Être inscrit
Garantie minimale : La page s'affiche 
Garantie en cas de succès : L'utilisateur est connecter
Déclencheur : Cliquer sur le bouton de connexion
Scénario nominal : 
    1. Le client est sur la page d’accueil
    2. Il clique sur le bouton “se connecter”
    3. Il rentre ses informations de connexion
    4. Il est connecté
Extension : 
    1. Mauvaises informations de connexion
        a. La page se relance
        b. Elle renvoie un message d’erreur précisant que des mauvaises informations de connexion ont été rentrées 
        c .Le client doit rentrer une nouvelle fois ses informations de connexion
* Liste des variantes : 
* Informations connexes : 
```

> Cas d’utilisation 5 : Afficher la page de profil
```
Nom : Afficher la page de profil
Contexte d’utilisation : Affichage de la page du profil de l’utilisateur contenant ses informations personnelles qu’il peut modifier
Portée : Le site web / page de profil
Niveau : sous-système 
Acteur principal : L’utilisateur inscrit du site 
Intervenants et intérêts : 
Précondition : Être inscrit et connecté
Garantie minimale : La page s'affiche 
Garantie en cas de succès : La page s'affiche
Déclencheur : 
Scénario nominal : 
    1. L’utilisateur se connecte 
    2. Il clique sur le bouton correspondant à la page de son profil
    3. Il accède à la page de profil 
Extension :
Liste des variantes : 
Informations connexes : 
```

## 4. Chapitre 4 – La technologie employée
### a) Quelles sont les exigences technologiques pour ce système ?

>L'application tournera en front-end avec une application React JS et pour le back-end en PHP Mysql. Le tout tournera sur un Raspberry PI4 4Go RAM et 16Go SD sous rabian (Linux famille Debian)

### b)  Avec quels systèmes ce système s’interfacera-t-il et avec quelles exigences ? 

>Il s'interfacera dans les navigateur web des utilisateurs/visiteurs sous n'importe quel distribution.

## 5. Chapitre 5 – Autres exigences
### a) Processus de développement 
####  1. Participants au projet
>Il y a les développeurs : Samuel, Hugo, Brandon, Yanis, Vivien. Le client, nos profs
#### 2. Valeurs privilégiées
> * L’application devra être utilisable par tout type d’utilisateur, ce qui signifie qu’on doit tout mettre en œuvre pour que l’appli réponde aux besoins 	du client, tout en lui facilitant la tâche, car c’est avant tout une appli de simulation et donc d’aide. 	
>
>* L’aspect rapidité de calcule 	et traitement de la demande. Le système devra être capable de recevoir la demande et de la traiter rapidement pour que le client voie dans les plus courts délais, le résultat.
>
>* La compréhension du résultat. Les valeurs retournées par le système devront être claires et compréhensibles pour le client. En cas d’échec du traitement, affichera une erreur
>	
>* Diversification des domaines. L’appli devra proposer de nombreux domaines pour satisfaire un maximum de clients.
> 	
>* Navigabilité. Le client pourra 	se déplacer facilement entre les pages qui lui seront dédiées
>	
>* Sécurité. Les données renseignées par le client ne seront visible que par lui. Un client n’a pas les fonctionnalités de l’admin et ne pourra pas contourner cette règle ni d’accéder à la base de données des 	mots de passe.

#### 3.Retour et visibilité sur le projet
>Le visiteur aura l’accès à la page d’accueil, à la page d’inscription, de connexion et des mentions légale
>		
>L’utilisateur inscrit quand à lui aura accès à la page principale, du profil, des domaines, des modules
>		
>L’admin aura accès à toutes les pages qu’ont accès les utilisateurs inscrits, en plus d’une page de statistique, de la liste des utilisateurs et des historiques des erreurs.

#### 4.Achat, Construction, Concurrents
>L’application 	propose des services gratuits, aucun achat n’y est présent. La seule contrainte est que le client devra créer son compte pour accéder aux fonctionnalités de l’appli. 			
>		
>Les utilisateurs inscrits rentreront des données dans les modules qu’ils souhaitent. Le système reçoit et revoit d’autres données, répondant à la demande. 			
>		
>La concurrence sont les sites de simulations en ligne gratuits, comme les calculatrices, calculateurs (variance, écart-types par exemple) ou encore les autres groupes de projet

#### 5.Exigence processus
>Le système devra être capable d’établir une base de données de mots de passe dans une page web en construction, une autre sur les utilisateurs. Un historique des erreurs (login, mdp, date, adr ip) visible par l’admin. Modifier la BD utilisateur en cas de suppression de compte.

#### 6. Dépendance
>Autre fonctionnalité : le client pourra communiquer aux dev pour l’ajout d’un éventuel module/domaine
Le client ne comprend pas un module, un système d’aide est mis en place ou une communication possible aux dev


