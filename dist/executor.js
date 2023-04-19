module.exports = function (include) {
  const $GLOBALS = {} // объект глобальных переменных
  let $_REQUEST = null // ссылка на объект запроса

  return function () {
    // если в первом аргументе передавался объект запроса
    if (arguments[0]) {
      $_REQUEST = arguments[0] // сохранить его в переменной
    }

    // определить во втором аргументе исполнителя специальных тегов
    arguments[1] = (function* () {
      while (true) {
        // вернуть последнее значение или пустую строку, если значение "undefined"
        arguments[0] = yield eval(arguments[0]) ?? ''
      }
    })()
  
    arguments[1].next() // перейти к бесконечному циклу

    return arguments[1] // вернуть исполнителя
  }
}