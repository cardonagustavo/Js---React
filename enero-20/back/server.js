const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const puerto = 5500

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdlibrary'
})

app.get('/traer', async (req, res) => {
    try{
        const [libros] = await db.query('SELECT * libros')
        req.json(libros);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Libros no encontados"})
    }
})

app.listen(puerto, () => {
    
});