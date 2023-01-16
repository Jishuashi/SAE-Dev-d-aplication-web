<?php
    //Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
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


    $connexion= mysqli_connect($serveur,$loginDB,$passwdDB)
        or die("Connexion impossible au serveur $serveur pour $loginDB");

    mysqli_select_db($connexion,$bd)
        or die("Impossible d'accéder à la base de données");

    $reqinsertUser="INSERT into user(login, lastname, firstname, email)";
    $reqinsertPass="INSERT into passwd(password)";
    $reqinsertPerm="INSERT into permission(type)";
    $reqinsertUser.="VALUES(?,?,?,?)";
    $reqinsertPass.="VALUES(?)";
    $reqinsertPerm.="VALUES(?)";

    $reqprepareUser=mysqli_prepare($connexion,$reqinsertUser);
    $reqpreparePass=mysqli_prepare($connexion,$reqinsertPass);
    $reqpreparePerm=mysqli_prepare($connexion,$reqinsertPerm);

    mysqli_stmt_bind_param($reqprepareUser,'ssss', $login, $lastname, $firstname, $email);
    mysqli_stmt_bind_param($reqpreparePass,'s',$passwd);
    mysqli_stmt_bind_param($reqpreparePerm,'s',$perm);
    mysqli_stmt_execute($reqprepareUser) or die('Error : USER');
    mysqli_stmt_execute($reqpreparePass) or die('Error: PASSWD');
    mysqli_stmt_execute($reqpreparePerm) or die('Error : PERM');

    echo(1);