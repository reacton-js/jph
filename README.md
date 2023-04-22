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

<br>

#### Install

```
npm i
```

#### Start

```
node index
```

<br>

Site files are located in the *htdocs* directory. The main site file is called *index.html*.

The executable JavaScript code is located between special tags:

```php
<?
  var number = 10
?>
```

The last expression between the special tags is returned to the HTML content, for example:

```php
<div>
  <?
    var number = 10
    number + 6 // return value 16
  ?>
</div>
```

If you do not want to return the value of the expression, then you must add an empty string before the closing characters of the tags:

```php
<div>
  <?
    var number = 10
    number + 6
  ''?> // an empty string is returned
</div>
```

If the return value is **undefined**, then an empty string will be returned instead:

```php
<div>
  <?
    var number = 10 // an empty string is returned
  ?>
</div>
```

<br>

Variables declared with the **var** keyword are available in any special tags within the same file.

Variables declared with the **const** or **let** keywords are only accessible within the special tags within which they were declared:

```php
<?
  var a = 1 // available within file
  let b = 2 // available within tags
  const c = 3 // available within tags
?>
```

To exchange data between different files, a special $GLOBALS object is used, as shown below:

```php
<?
  $GLOBALS.age = 28 // available within application
?>
```

<br>

To access the [request](https://expressjs.com/en/api.html#req) object, the $_REQUEST global variable is used, for example:

```php
<?
  var fileName = ($_REQUEST.path === '/') ? 'home' : $_REQUEST.path.slice(1)
?>
```

To include HTML files, use the **include()** function with one argument:

```php
<? include('includes/' + fileName + '.html') ?>
```

<br>

By default, the server runs in fancy URLs mode. Access to the pages of the site is formed dynamically, through access to the main file *index.html*.

To switch the server to static mode, start the server with the command:

```
node index static
```

or explicitly change the value of the **FancyURLs** constant to **false** in the *index.js* file, as shown below:

```js
const FancyURLs = false // includes fancy URLs
```