import multer from 'multer';

const savePhoto = multer.diskStorage({
   destination(req, file, callback) {
      //callback(null, 'E:/upload');
      callback(null, 'D:/NewCodeFile/LittleRed/photo');
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   }
})

export const upload = multer({ storage: savePhoto });
