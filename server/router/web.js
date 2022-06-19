const express=require("express");
const router=express.Router();
const cvController=require('../controller/cvController');

const app = express();
var multipart = require('connect-multiparty');
const path = require('path')
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"images") });


router.get('/',cvController.getAlldata);
// in thunder : http://localhost:9012/Api  ==> get

router.post('/',multipartMiddleware,cvController.createCV)
// in thunder : http://localhost:9012/Api  ==> post

router.get('/update/:id',cvController.DisplayCV);
// in thunder : http://localhost:9012/Api/update/  ==> get

module.exports=router;