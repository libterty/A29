const express = require('express');
const router = express.Router();

const getData = require('../script');

// 列出全部 Todo
router.get('/', (req, res) => {
    console.log(getData(req.requestTime, req.method, req.url))
    res.send('列出全部 Todo');
});

// 新增一筆 Todo 頁面
router.get('/new', (req, res) => {
    console.log(getData(req.requestTime, req.method, req.url))
    res.send('新增 Todo 頁面');
});

// 顯示一筆 Todo 的詳細內容
router.get('/:id', (req, res) => {
    console.log(getData(req.requestTime, req.method, req.url))
    res.send('顯示一筆 Todo');
});

// 新增一筆  Todo
router.post('/', (req, res) => {
    console.log(getData(req.requestTime, req.method, req.url))
    res.send('新增一筆  Todo');
});

router.delete('/:id/delete', (req, res) => {
    console.log(getData(req.requestTime, req.method, req.url))
    res.send('刪除 Todo');
});

module.exports = router;