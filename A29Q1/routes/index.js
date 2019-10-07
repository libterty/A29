const express = require('express');
const router = express.Router();

// 列出全部 Todo
router.get('/', (req, res) => {
    res.send('列出全部 Todo');
});

// 新增一筆 Todo 頁面
router.get('/new', (req, res) => {
    res.send('新增 Todo 頁面');
});

// 顯示一筆 Todo 的詳細內容
router.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo');
});

// 新增一筆  Todo
router.post('/', (req, res) => {
    res.send('新增一筆  Todo');
});

router.delete('/:id/delete', (req, res) => {
    res.send('刪除 Todo');
});

module.exports = router;