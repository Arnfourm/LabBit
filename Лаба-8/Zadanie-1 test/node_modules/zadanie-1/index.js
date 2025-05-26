const express = require('express'); //Импорт модуля express
const app = express(); //объявление express приложения
const port = 8080; //порт, на котором будет работать приложение

app.get("/", (req, res) => { // Контроллер для обработки запроса по адресу http://localhost:8080/
 res.send("<h1>Hello world</h1>")
});

app.listen(port, () => { //Запуск приложения. Веб-сервер начинает прослушивать указанный порт
 console.log(`Example app listening at
http://localhost:${port}`)
});

module.exports = app;