<?php 

// use Dba\Connection;

// create database : adidas
function createDataBase ($name){
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    try {
        $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ);
        $connection = new PDO("mysql:host=$serverName",$userName, $password, $options);
        $sql = "CREATE DATABASE $name";
        $connection->exec($sql);
    }
    catch(PDOException $error) {
        return "Warning : ".$error->getMessage();

    }
}
// connect to dataBase
function connectDataBase ($dbName){
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    global $connection ;

    try { 
        $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ);
        $connection = new PDO ("mysql:host=$serverName;dbname=$dbName", $userName, $password, $options);
        return $connection;
    }
    catch(PDOException $error){
        return "Warning : ".$error->getMessage();
    }
}

// creat userTabel
function createUserTable ($dbName){
    try{
        $connection = connectDataBase($dbName)  ; 

        $sql = "CREATE TABLE `users`(
            `id` int(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            `name` varchar(130),
            `email` varchar(200) UNIQUE,
            `status` TINYINT NOT NULL DEFAULT 0,
            `password` varchar(130),
            `created_at` DATETIME 
        )";
        $connection->exec($sql);
    }
    catch(PDOException $error){
        return 'Warning : '.$error->getMessage();
    }
}

//read table to dataBase 
function readTable ($dbName, $query, $sigle = true, $execute = null){
    $pdo = connectDataBase($dbName);
    $statment = $pdo->prepare($query);
    $execute = null ? $statment->execute() : $statment->execute($execute);
    $reading =   $sigle ? $statment->fetch() : $statment.fetchAll();
    return $reading;
}

//  create account to user table
function createAccountToUserTable ($name, $email, $password, $dbname, $table){
    try {
        $connection = connectDataBase($dbname);
        $sql = "INSERT INTO $table SET name = ?, email = ?, password = ? , created_at = NOW();";
        $statment = $connection->prepare($sql);
        $statment->execute([$name, $email, $password]);
    }
    catch(PDOException $error){
        return "Warning : ".$error->getMessage();
    }
}


?>