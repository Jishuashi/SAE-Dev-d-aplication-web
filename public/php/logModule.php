<?php
header("Access-Control-Allow-Origin: *");

$module = $_POST['module'];
$user = $_POST['user'];

$path = "../logs/logModule.csv";
$data = "";

if(file_exists($path)){
    $file = fopen($path, "a") or die("Unable to open file!");
    $data = "
    ".$user. ";" . $module . ";" . date("Y-m-d H:i:s");

}else{
    $file = fopen($path, "a") or die("Impossible d'ouvrir le fichier");
    $data = <<<_END
    "Identifiant";"Module";"Date"
_END;
    $data = $data."
    ".$user. ";" . $module . ";" . date("Y-m-d H:i:s");
}

fwrite($file, $data);
fclose($file);