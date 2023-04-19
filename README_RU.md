<br>

[EN](https://github.com/reacton-js/jph/blob/main/README.md) / [RU](https://github.com/reacton-js/jph/blob/main/README_RU.md)

![jph](https://raw.githubusercontent.com/reacton-js/jph/main/logo.jpg)

[GitHub](https://github.com/reacton-js/jph) | [NpmJS](https://www.npmjs.com/package/jph)

## jph

Препроцессор гипертекста JavaScript

```php
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>New project</title>
  <link rel="stylesheet" href="style.css">
</head>
<?
  var fileName = ($_REQUEST.path === '/') ? 'home' : $_REQUEST.path.slice(1)
?>
<body id="<? fileName ?>">
  <aside class="menu">
    <nav class="menu__wrapper">
      <a href="/">Главная</a>
      <a href="/about">О нас</a>
      <a href="/contacts">Контакты</a>
    </nav>
  </aside>

  <header class="header">
    <div class="header__wrapper">
      <img class="header__banner" src="img/banner.jpg" alt="banner">
    </div>
  </header>

  <main class="content">
    <div class="content__wrapper">
      <? include('includes/' + fileName + '.html') ?>
    </div>
  </main>
  
  <footer class="footer">
    <p class="footer__wrapper">
      <small>Lorem, ipsum dolor sit amet consectetur adipisicing.</small>
    </p>
  </footer>
</html>
```

<br>

#### Установка

```
npm i
```

#### Запуск

```
node index
```

<br>

Файлы сайта располагаются в каталоге *htdocs*. Главный файл сайта называется *index.html*.

Исполняемый JavaScript-код находится между специальными тегами:

```php
<?
  var number = 10
?>
```

В HTML-содержимое возвращается последнее выражение между специальными тегами, например:

```php
<div>
  <?
    var number = 10
    number + 6 // возвращаемое значение 16
  ?>
</div>
```

<br>

Переменные объявленные с помощью ключевого слова **var**, доступны в любых специальных тегах в пределах одного файла. Переменные объявленные с помощью ключевых слов **const** или **let**, доступны только в пределах специальных тегов:

```php
<?
  var a = 1 // доступна в пределах файла
  let b = 2 // доступна в пределах тегов
?>
```

Для обмена данными между различными файлами, используется специальный объект $GLOBALS, как показано ниже:

```php
<?
  $GLOBALS.myProp = 'ok' // доступна в пределах приложения
?>
```

<br>

Для доступа к объекту [запроса](https://expressjs.com/en/api.html#req), используется глобальная переменная $_REQUEST, например:

```php
<?
  var fileName = ($_REQUEST.path === '/') ? 'home' : $_REQUEST.path.slice(1)
?>
```

Для подключения HTML-файлов применяется функция **include()** с одним аргументом:

```php
<? include('includes/' + fileName + '.html') ?>
```

<br>

По умолчанию, сервер работает в режиме красивых URLs. Доступ к сраницам сайта формируется динамически, через обращение к главному файлу *index.html*.

Для перевода сервера в статический режим работы, измените значение константы **FancyURLs** на **false** в файле *index.js*, как показано ниже:

```js
const FancyURLs = false // включает красивые URLs
```