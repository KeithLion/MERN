const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;


app.get("/api", (req,res) => {
    res.json({message: Working})
})