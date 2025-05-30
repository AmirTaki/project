<?php 

// create database : adidas
function createDataBase ($name){
    $serverName = "localhost";
    $username = "root";
    $password = ""
    try {
        $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ);
        $connection = new PDO("mysql:host=$serverName",$username, $password, $options)
        $sql = "CREATE DATABASE $name"
        $connection->exec($sql)
    }
    catch(PDOException $error) {
        return "Warning : ".$erorr->getMessage()
    }
}



?>