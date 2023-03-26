const express = require('express');
var cors = require('cors');
require('dotenv').config()

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
app.use(cors());
app.use('/public',express.static(process.cwd()+'public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+ '/views/index.html')
})

app.post('/api/fileanalyse', upload.single('upfile'),  (req, res, next)=> {
  
    res.json({
          "name": req.file.originalname,
          "type": req.file.mimetype,
          "size": req.file.size
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on PORT ${ PORT }`);
});