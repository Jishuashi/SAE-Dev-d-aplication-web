<?php
    //Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
    header("Access-Control-Allow-Origin: http://localhost:3000");

    session_start();

    $value = $_POST['cookie'];

    if($value == 'true'){
        $_SESSION['cookie'] = true;
        setcookie('cookie', $_SESSION['cookie'], time() + 365*24*3600, null, null, false, true);
    }else{
        $_SESSION['cookie'] = false;
    }

    $_GET['cookie'] = $_SESSION['cookie'];


    echo(1);
?>