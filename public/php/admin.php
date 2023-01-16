<?php
header("Access-Control-Allow-Origin: *");

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$login = $_POST['login'];
$email = $_POST['email'];
$passwd = md5($_POST['password']);
$perm = 'user';

$serveur="localhost";
$loginDB="sae";
$passwdDB="sae";
$bd="sae";

$connexion = mysqli_connect($serveur, $loginDB, $passwdDB)
or die("Connexion impossible au serveur $serveur pour $loginDB");

mysqli_select_db($connexion, $bd)
or die("Impossible d'accéder à la base de données");

$request="SELECT login, lastname, firstname FROM user";
$result = mysqli_query($connexion, $request);

while ($line=mysqli_fetch_row($result)) {
    echo $line[0];
}