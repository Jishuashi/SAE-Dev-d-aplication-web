<?php
    //Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
    header("Access-Control-Allow-Origin: http://localhost:3000");



    file('text.txt');
    file_put_contents('text.txt', $_POST["name"]);