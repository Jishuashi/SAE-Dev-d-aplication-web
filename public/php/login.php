<?php

//Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
header("Access-Control-Allow-Origin: http://localhost:3000");

$login = $_POST['login'];
$passwd = md5($_POST['password']);

$serveur = "localhost";
$loginDB = "sae";
$passwdDB = "sae";
$bd = "sae";


$connexion = mysqli_connect($serveur, $loginDB, $passwdDB)
or die("Connexion impossible au serveur $serveur pour $loginDB");

mysqli_select_db($connexion, $bd)
or die("Impossible d'accéder à la base de données");

$request="SELECT login, password, type FROM user, passwd, permission where user.id = passwd.user_id and user.id = permission.user_id ORDER BY id";
$result = mysqli_query($connexion, $request);

$passBool = false;
$passLog = false;

while ($line=mysqli_fetch_row($result)) {
    if($login == $line[0]){
        $passLog = true;
        if($passwd == $line[1]){
            $passBool = true;
        }
    }
}

if($passBool && $passLog){
    echo (1);
}else{
    echo ("Login ou Mot de passe incorect !");
}

?>



