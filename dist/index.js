const fs = require('fs')
const path = require('path')
const express = require("express")
const port = process.env.PORT || 3000
const app = express()

const regTags = /<\?([^]*?)\?>/g // шаблон поиска специальных тегов

// определить функцию подключения и обработки содержимого html-файлов
const include = (filename, request, charset = 'utf8') => {
  // определить исполнителя специальных тегов запрашиваемого файла
  const exec = getExecutor(request)
  try {
    // получить и вернуть запрашиваемый файл
    return fs.readFileSync(__dirname + '/htdocs' + (filename[0] === '/' ? filename : '/' + filename), charset)
      .replace(regTags, (_, fix) => exec.next(fix).value) // обработать содержимое специальных тегов
  } catch (error) {
    // если файл не найден, то вернуть страницу 404
    return fs.readFileSync(__dirname + '/htdocs/404.html', charset)
  }
}

// определить функцию возвращающую нового исполнителя специальных тегов
const getExecutor = require('./executor.js')(include)

// определить публичный каталог для статических файлов
app.use(express.static(__dirname + '/htdocs/public'))

// определить обработчик запроса фавикона
app.get('/favicon.ico', (_, response) => response.sendStatus(204))

const FancyURLs = true // включает красивые URLs

// определить обработчик поступающих запросов
app.use((request, response) => {
  // если красивые URLs включены
  if (FancyURLs) {
    // выполнить запрос относительно файла "index.html"
    response.send(include('/index.html', request))
  } else {
    // иначе, определить полный путь с названием запрашиваемого файла
    const filename = path.basename(request.path) ? request.path : '/index.html'
    
    // выполнить запрос и при необходимости добавить расширение файла
    response.send(include(path.extname(filename) ? filename : filename + '.html', request))
  }
})

// запустить сервер по указанному порту
app.listen(port, () => console.log('The server is running at http://localhost:' + port))