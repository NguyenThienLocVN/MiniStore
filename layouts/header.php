<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

    <!-- Icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Jquery & JS -->
    <script src="assets/js/jquery-1.11.0.min.js"></script>

    <!-- Swiper JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <img src="assets/images/main-logo.png" alt="main-logo">
            </div>
            <div class="top-menu">
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>PRODUCTS</li>
                    <li>WATCHES</li>
                    <li>SALE</li>
                    <li>BLOG</li>
                    <li>PAGES</li>
                </ul>
            </div>
            <div class="top-feature">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <?php
                if(isset($_SESSION['user'])){
                    echo "Xin chào, ".$_SESSION['user'];
                    echo "<a href='app/logout.php'>LOGOUT</a>";
                } else { 
                    echo "<a href='http://localhost/MiniStore/app/login.php'>LOGIN</a>";
                }
            ?>
        </header>