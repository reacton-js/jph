<br>

[EN](https://github.com/reacton-js/jph/blob/main/README.md) / [RU](https://github.com/reacton-js/jph/blob/main/README_RU.md)

![jph](https://raw.githubusercontent.com/reacton-js/jph/main/logo.jpg)

[GitHub](https://github.com/reacton-js/jph) | [NpmJS](https://www.npmjs.com/package/jph)

## jph

JavaScript Hypertext Preprocessor

```php
<!DOCTYPE html>
<html lang="en">
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
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contacts">Contacts</a>
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