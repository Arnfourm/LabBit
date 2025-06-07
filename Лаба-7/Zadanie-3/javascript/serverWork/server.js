const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "..", "..")));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "..", "index.html"));
});

app.get("/form", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "..", "form.html"));
});

const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, 'uploads');
    },
    filename: function(request, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

app.post("/postPhoto", upload.single("photoImg"), (request, response) => {
    const data = request.body;
    console.log(request.file);

    response.json({
        data: data,
        imageUrl: `/uploads/${request.file.filename}`
    });
});

app.get("/:fileId", (request, response) => {
    const fileId = request.params.fileId;
    const filePath = path.join(__dirname, "uploads", fileId);
    
    response.setHeader("Content-Type", 'image/jpeg');
    response.sendFile(filePath);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});