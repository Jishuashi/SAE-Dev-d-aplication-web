<?php
header(Access-Allow-Control-Origin("*"));

$domains = file_get_contents('../../src/pages/domains/domains_info.json');
$parseDomains = json_decode($domains, true);

echo $parseDomains

