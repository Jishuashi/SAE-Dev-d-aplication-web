<?php
//Cette ligne passe de localhost:3000 (Version de développement) à localhost:80 en version de déploiment
header("Access-Control-Allow-Origin: *");

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$passwd = md5($_POST['password']);
$perm = 'user';

$dbhost = 'localhost';
$dbname = 'sae';
$dbuser = 'sae';
$dbpass = 'sae';
$dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $dbuser, $dbpass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Vérification si l'e-mail existe déjà dans la table "user"
$stmt = $pdo->prepare("SELECT COUNT(*) as count FROM user WHERE email = ?");
$stmt->execute([$email]);
$row = $stmt->fetch();

echo $email;

if ($row['count'] > 0) {
    die("Un compte existe déjà avec cet e-mail.");
} else {
    // Préparation de la requête d'insertion pour la table "user"
    $stmt = $pdo->prepare("INSERT INTO user (lastname, firstname, email) VALUES (?, ?, ?)");
    $stmt->execute([$lastname, $firstname, $email]);
    $user_id = $pdo->lastInsertId(); // Récupération de l'ID généré automatiquement

    // Préparation de la requête d'insertion pour la table "password"
    $stmt = $pdo->prepare("INSERT INTO password (id, password) VALUES (?, ?)");
    $stmt->execute([$user_id, $passwd]);

    echo(1);
}


