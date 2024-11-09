<?php

include('../../config/db.php');

$currentCat = $_GET['category_id'];

$sql = "DELETE FROM categories WHERE id = $currentCat";
$query = mysqli_query($conn, $sql); //Truy van

header('Location: http://localhost/MiniStore/app/backend/products.php');