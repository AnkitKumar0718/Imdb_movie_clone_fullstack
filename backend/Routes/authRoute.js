const express=require('express');
const router=express.Router();

const {login,logout,signup}=require('../Controllers/userAuthController');

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);

module.exports=router;