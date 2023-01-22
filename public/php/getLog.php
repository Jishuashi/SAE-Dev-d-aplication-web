<?php
header("Access-Control-Allow-Origin: *");

$file = "../logs/logModule.csv";

if(file_exists($file)){
    $fp = fopen($file, "r");

    while (!feof($fp)) {
        $line[] = fgetcsv($fp, null, ";");
    }

    fclose($fp);
    $lines = count($line);

    for ($i = 0; $i < $lines; $i++) {
        for ($j = 0; $j < 4; $j++) {
            echo $line[$i][$j] . " ";
        }
    }
}
else{
    echo (0);
}