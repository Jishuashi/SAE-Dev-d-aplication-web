<?php
header("Access-Control-Allow-Origin: *");

$user = $_POST['login'];

$serveur="localhost";
$loginDB="sae";
$passwdDB="sae";
$bd="sae";

$connexion = mysqli_connect($serveur, $loginDB, $passwdDB)
or die("Connexion impossible au serveur $serveur pour $loginDB");

mysqli_select_db($connexion, $bd)
or die("Impossible d'accéder à la base de données");

$request="DELETE u, p, pa FROM user u JOIN permission p ON u.id = p.user_id JOIN passwd pa ON u.id = pa.user_id WHERE u.login = '$user'";
$result = mysqli_query($connexion, $request) or die("Impossible de supprimer l'utilisateur");

