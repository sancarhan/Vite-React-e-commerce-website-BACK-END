import multer from "multer";

const storage = multer.diskStorage({
 filename:function(req,fileqcallback){
  useCallback(null,fileqcallback.originalname)
 }
})

const upload = multer({storage})

export default upload