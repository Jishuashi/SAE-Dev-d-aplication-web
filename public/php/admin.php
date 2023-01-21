<?php
header("Access-Control-Allow-Origin: *");

$perm = 'user';

$serveur="localhost";
$loginDB="sae";
$passwdDB="sae";
$bd="sae";

$connexion = mysqli_connect($serveur, $loginDB, $passwdDB)
or die("Connexion impossible au serveur $serveur pour $loginDB");

mysqli_select_db($connexion, $bd)
or die("Impossible d'accéder à la base de données");

$request="SELECT login, lastname, firstname, email FROM user";
$result = mysqli_query($connexion, $request);

while ($line=mysqli_fetch_row($result)) {
    echo $line[0].";".$line[1].";".$line[2].";".$line[3].";;";
}