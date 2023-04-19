<?php
header("Access-Control-Allow-Origin: *");


$email = $_POST['email'];

// Connexion à la base de données
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


// Vérification si l'utilisateur existe dans la table "user"
$stmt = $pdo->prepare("SELECT id FROM user WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();
if (!$user) {
    echo "Cet utilisateur n'existe pas.";
} else {
    $user_id = $user['id'];

    // Suppression du mot de passe correspondant de la table "password"
    $stmt = $pdo->prepare("DELETE FROM password WHERE id = ?");
    $stmt->execute([$user_id]);

    // Suppression de l'utilisateur de la table "user"
    $stmt = $pdo->prepare("DELETE FROM user WHERE email = ?");
    $stmt->execute([$email]);

    echo "L'utilisateur a été supprimé avec succès.";
}