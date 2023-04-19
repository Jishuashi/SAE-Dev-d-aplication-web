<?php
header("Access-Allow-Control-Origin *");

$modules = file_get_contents('../../src/pages/domains/modules/modules_info.json');
$parseModules = json_decode($modules, true);

echo $parseModules;

