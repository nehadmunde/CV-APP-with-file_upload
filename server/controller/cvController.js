const res = require("express/lib/response");
const cvModel = require("../model/cvModel");
const fs=require("fs");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djx8oemno",
  api_key: "479316483197538",
  api_secret: "22wDu5h-HG5GwgL6pEWxZEKt4gs",
  secure: true,
});

class cvController {
  static createCV = async (req, res) => {
    console.log(req.files.file.path.split("\\"));

    const splitArray = req.files.file.path.split("\\");
    const newArray = splitArray[splitArray.length - 1];
    console.log(newArray);
  
    var imageFile = req.files.file.path;
    // console.log(imageFile)
    cloudinary.uploader.upload(imageFile, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        const newData = new cvModel({
            file:result.url,
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            ug:req.body.ug,
            pg:req.body.pg
        });
  
        newData.save()
          .then((data) => {
            
            fs.unlink(newArray, () => {
              console.log("file deleted");
              res.json({
                message: "Successfully registered",
              });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };


  //get controller
  static getAlldata = async (req, res) => {
    try {
      let data=await cvModel.find();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  }

  // edit data
  static DisplayCV=async(req,res)=>{
    console.log(req.params.id);
    try{
        let newData= req.body;
        let result=await cvModel.findOne({_id:req.params.id});
        console.log(result);
        res.send(result);

    }catch(err){
        console.log(err);
    }
}

}

module.exports = cvController;
