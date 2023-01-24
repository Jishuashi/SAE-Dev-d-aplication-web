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

### b) Règles métier 
>Cadre et limite les actions pour qu’elles suivent la stratégie de l’entreprise. Permet un gain de temps et de performance (pose les réponses définis avant les questions), moins de risques sur le projet
>Conditions pour utiliser l’appli : l’utilisateur doit créer un compte. Si compte, alors accède aux fonctionnalités. Sinon, accède juste à la page d’accueil.
>Accepter les conditions d’utilisation. Des droits ont été mis en place pour les contrats informatiques. En créant son compte, le client s’engage à respecter les conditions que nous avons mises en place.
>Performance organisationnelle : élaboration et attribution des tâches sur trello. Chaque semaine correspond à un sprint (~livrable). Chacun d’entre nous à des tâches affectées, où d'autres y sont aussi. Elles sont indépendantes entre elles et doivent être réalisées pour un jour précis. 
### c) Opération, sécurité, documentation 
>Les utilisateurs auront accès à une vidéo explicative, présentant les fonctionnalités de l’appli. (Un système de communication avec les développeurs en cas de problèmes ou de questions). Une page dédiée pour les conditions/mentions légales est à disponibilité. 

>Les mots de passe ne sont pas accessibles par l’admin. Si un utilisateur veut le récupérer, il sera redirigé sur une page en construction.

>Les mots de passe sont cryptés.
### d) Utilisation et Utilisabilité
>Les utilisateurs inscrits auront accès au nombreux modules proposés dans différents domaines. Les modules reçoivent un jeu de données par l’utilisateur et effectue des calcules/simulation sur ce jeu pour renvoyer un résultat 

### e) Maintenance et portabilité

>L’application propose un certain nombre de modules/domaines par défaut. Cependant, les utilisateurs qui souhaitent implémenter des modules pourront nous contacter. De cette façon, nous verrons si nous implémentons ses modules à notre applis. Il en va de même si l’utilisateur souhaite un module mais qui ne sait pas coder, il pourra nous faire une demande de programmation de celui-ci, qui suivra une potentielle implémentation. 

## 6. Chapitre 6 – Recours humain, questions juridiques, politiques, organisationnelles.

### a) Quel est le recours humain au fonctionnement du système ?
>L’utilisateur doit activer le système de lui-même pour le changement de page en cliquant sur les boutons correspondant aux différentes pages.
### b) Quelles sont les exigences juridiques et politiques ?
>Nous stockons les données à caractère personnel suivantes dans le cadre de l’inscription et de la
connexion au site Internet sur lequel notre application se trouve : e-mail, nom, prénom ; et
aucune considérée comme “particulièrement sensible”, suite au cahier des charges établi en
accord avec le client.
Nous avons opté pour une anonymisation des données complète (non pseudonymisée) grâce à
l’algorithme de chiffrement MD5 qui est irréversible, ce qui rend ces données non considérées
comme personnelles et les exigences du RGPD ne sont donc plus applicables. Nous n’utilisons
pas ces données pour quoi que ce soit comme traitement donc cela n’est pas problématique.
Nous stockons ces données depuis la création du compte pendant une durée indéterminée  
Pendant le processus de développement, il faut penser constamment aux utilisateurs de
l’application web et à leur vie privée. Il faut que la vie privée soit une partie centrale du
développement. Il faut bien évidemment réfléchir aux langages à utiliser (ne pas utiliser un
langage que l’on ne connaît pas pour éviter un risque de faille)  
Nous avons effectué une analyse sur les risques du projet et avons rédigé un rapport sur la
gestion des risques
Nous avons mis en place des mots de passe sécurisés pour la connexion SSH au serveur et
utilisons le journal natif des systèmes d’exploitation Linux afin de tracer l’accès à la machine
pour savoir s’il y a eu des essais de connexion avec des informations erronées.  
Nous utilisons le site Internet GitLab (pas l’application) afin de versionner notre code source
ainsi que les différents documents, comme les cahiers des charges. Nous utilisons une
authentification par clef SSH afin de s’y connecter pour effectuer des modifications, et nous
avons paramétré les droits tels que seule l’équipe de développement ait les droits en écriture, car
le client voulait y avoir accès, et a donc la lecture seule.  
L’architecture du projet a été restreinte à une machine avec le système d’exploitation Debian par
le client, qui sera au centre de tout d’où l’importance de le sécuriser.    
Les utilisateurs doivent se connecter grâce à leur adresse e-mail. Pour améliorer la qualité de
notre système d’authentification, en cas d’échec, l’adresse e-mail, mot de passe et adresse ip
utilisés seront stockés dans un fichier .
Nous avons choisi de ne pas utiliser de cookies de session pour améliorer la sécurité et
confidentalité des utilisateurs même si cela veut dire qu’il faut se reconnecter si on ferme le
navigateur et qu’on le re-ouvre. Il faut ouvrir le moins de ports possibles pour notre application.
Si notre application utilise uniquement le protocole HTTPS, il faut simplement ouvrir le port 443
voire le port 80 pour Internet et il faut bloquer les autres sur le pare-feu.
En effet, ouvrir trop de ports peut être dangereux pour la sécurité de l’application car cela
implique que plus de ports permettent d’accéder au site web ce qui le rend moins sécurisé.
Pour notre base de données, il est nécessaire qu’elle soit sécurisée car elle va contenir toutes les
informations sur les utilisateurs. Il faut donc restreindre l’accès à une adresse IP pour éviter que
des personnes externes au développement de l’application puissent accéder à la base de données.
Au cas où ils arrivent quand même à accéder à la base de données, il faut quand même
restreindre l’accès grâce à un compte administrateur.  
Comme dit précédemment, nous stockons le nom, prénom et e-mail de chaque utilisateur de
l’application (également un historique de visites des modules mais cela n’est pas pertinent à
l’égard des données personnelles car elles ne permettent pas de remonter à la personne en
question), même si non traitées. Nous les supprimerions bien pour respecter le concept de
minimisation de données mais cela a été explicitement demandé par le client lors de l’écriture du
cahier des charges. Ces données sont stockées indéfiniment mais ne sont pas problématiques car
chiffrées.  
Dans n’importe quelle application dont la nôtre, il est nécessaire de bien documenter son code
ainsi que son architecture.
En effet, il ne faut pas seulement documenter son code car il faut que les développeurs puisse
comprendre l’architecture tout au long du processus de développement et le fonctionnement
global de tous les composants.
De plus, la documentation doit être mis à jour au fil du processus de développement et ce, en
même temps que le code sans oublier d’inclure une partie sécurité dans cette même
documentation.
Au delà de la documentation, il faut que le code soit de qualité avec des bons noms de
variables et des fonctions explicites pour comprendre rapidement ce que chaque chose fait
ainsi qu’un code qui ne soit pas redondant pour éviter trop d’efforts en cas d’erreur. Il faut aussi
que le code soit bien indenté pour comprendre la structure du code plus rapidement grâce aux
environnements de développement notamment (Visual Studio Code, pack Jetbrains …).  
Pour une application et un livrable complet, il faut avoir un code source qui a une
documentation mais aussi des tests.
En effet, les tests peuvent se séparer en deux types :
Les tests de développement vont nous permettre de bien vérifier que l’application web
fonctionne en accord avec les spécifications demandées.
Les tests de sécurité vont être des tests qui vont vérifier que l’application web fonctionne
correctement et n’est pas vulnérable même quand on ne fait pas ce pourquoi elle est destinée.  
Nous collectons des données personnelles, il est donc nécessaire d’informer les utilisateurs sur
les données collectées à travers les mentions légales.  
Pour notre application, il nous est demandé de faire des statistiques de visites du site et des
différents modules. Il est donc nécessaire de faire preuve de prudence en terme de collecte des
données et de traceurs.
On peut être exempté de consentement pour les statistiques de fréquentation d’un site web. En
effet, il faut que les traceurs de mesure d’audience servent uniquement à la mesure d’audience
du site ou de l’application. Il ne faut pas que les traceurs permettent de suivre la navigation
globale d’une personne sur d’autres sites web. Il faut aussi que les données statistiques
récoltées soient anonymes.  
Dans notre cas et compte tenu de nos compétences en terme de sécurité, nous n’allons pas
réussir à tout protéger. Toutefois, nous pouvons effectuer quelques actions pour sécuriser au
maximum notre application. Nous pouvons faire des requêtes préparées permettant d’éviter une
injection SQL (une injection SQL permet de manipuler des bases de données pour pouvoir se
connecter en tant qu’administrateur par exemple sans avoir le mot de passe). Nous pouvons
aussi vérifier que tous les composants logiciels sont à jour régulièrement pour faire en sorte que
les possibles failles soient réglées.

### c) Quelles sont les conséquences humaines de la réalisation du système ?
>Il n’y a pas de conséquences humaines à la réalisation de ce système. En effet, des sites existent déjà pour calculer les modules que nous allons faire. 
### d) Quels sont les besoins en formation ?
>L’équipe doit se former en JavaScript et ReactJS car nous comptons utiliser ces deux technologies dans notre application Web
### e) Quelles sont les hypothèses et les dépendances affectant l’environnement humain ?
>/
