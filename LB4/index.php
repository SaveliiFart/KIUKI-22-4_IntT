<?php
    $login = isset($_POST['login']) ? $_POST['login'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $file = 'users.txt';
    $storage = file_get_contents($file);
    list($loginStorage, $passwordStorage) = explode(',', trim($storage));

    if ($login == $loginStorage && $password == $passwordStorage) {
        echo 'Ви залогінені!';
    } else {
        echo 'Помилка: Невірний логін або пароль.';
    }
?>