const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({ storage: multer.memoryStorage() });
app.use(express.static(__dirname));

// Отображение формы
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/test/index.html");
});

// Обработка данных с формы
app.post("/user", upload.single("userImg"), (req, res) => {
    const name = req.body.userName;
    const age = req.body.userAge;
    const file = req.file;

    if (!name || !age || !file)
        return res.status(400).json({ error: "Не все поля формы заполнены!" });

    const responseText = `Ваше имя: ${name}, ваш возраст: ${age}`;
    const base64Image = file.buffer.toString("base64");
    const imageDataUrl = `data:${file.mimetype};base64,${base64Image}`;

    res.json({
        message: responseText,
        imageDataUrl: imageDataUrl,
    });
});

// Вывод в консоль
app.listen(3000, () => console.log("Сервер находится по адресу: http://localhost:3000"));
