const express = require('express');
const { addToBookmarks, removeFromBookmarks, getBookmarks, checkBookmark } = require('../Controllers/bookmarkController');
const authMiddleware = require('../Middlewares/authentication'); // Assuming you have an authentication middleware
const router = express.Router();


router.post('/addBookmarks/:id', authMiddleware, addToBookmarks);
router.delete('/removeBookmarks/:id', authMiddleware, removeFromBookmarks);
router.get('/bookmark',authMiddleware,getBookmarks)
router.get('/checkBookmark/:id', authMiddleware, checkBookmark);
module.exports = router;
