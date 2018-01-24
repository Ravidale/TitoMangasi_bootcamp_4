const express = require("express");
const item = require("../models/item");

const router = express.Router();



router.get("/", (req, res) => {
    item.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
});

router.get("/detail/:id", (req, res) => {
    item.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }else{
            res.json(result);
        }
    });
})


router.get("/accessories", (req, res) => {
    item.find({ category: "accessories" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/denim", (req, res) => {
    item.find({ category: "denim" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/footwear", (req, res) => {
    item.find({ category: "footwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/jeans", (req, res) => {
    item.find({ category: "jeans" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/outerwear", (req, res) => {
    item.find({ category: "outerwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/pants", (req, res) => {
    item.find({ category: "pants" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shirts", (req, res) => {
    item.find({ category: "shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/t-shirts", (req, res) => {
    item.find({ category: "t-shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shorts", (req, res) => {
    item.find({ category: "shorts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})



    router.post("/",  (req, res) => {
        if (!req.files.picture) {
            return res.status(400).send("No files were uploaded");
        }

        let image = req.files.picture;
        //extLast mengambil extension dari file
        let ext = image.name.split(".");
        let extLast = ext[ext.length - 1].toLowerCase();


        if (extLast == "png" || extLast == "jpg" || extLast == "jpeg" || extLast == "bmp" || extLast == "gif") {
            let imageName = Date.now() + "." + extLast;

            image.mv("./public/item/" + imageName, (error) => {
                if (error) return res.status(500).send(error);

                let newObj = new item({
                    name: req.body.name,
                    category : req.body.category,
                    price: req.body.price,
                    color: req.body.color,
                    size: req.body.size,
                    picture: "http://localhost:3000/item/" + imageName,
                });

                newObj.save((error) => {
                    if (error) {
                        res.status(500).send(error);
                    } else {
                        res.json(newObj);
                    }
                });
            });

        } else {
            return res.status(400).send("Error")
        };
    });

    module.exports = (function(){
        return router;
    })();