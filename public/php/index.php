<?php
    //Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
    header("Access-Control-Allow-Origin: http://localhost:3000");

    echo('Salut');