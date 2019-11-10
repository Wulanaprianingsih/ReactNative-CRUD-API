const router = require("express").Router();
const User = require("../models/User.js");

router.get("/", (req,res) => {
const {page, perpage,sort} = req.query;

User.paginate({}, { page: parseInt(page, 10), limit: parseInt(perpage, 10) , sort:{nama: parseInt(sort)}})
.then(result => res.send(result.docs))
})

router.get("/", (req,res) => {
const id = req.params.id
User.find({})
.then(data => res.send(data))
})

router.post("/", (req,res) => {
User.create(req.body)
.then(data => res.send(data))
})
router.put("/:id", (req,res) => {
const id = req.params.id;
const {nama , nomor, email} = req.body

User.findByIdAndUpdate(id, {$set: { nama, email, nomor}})
.then(data => {
User.findById(id)
.then(data => res.send(data))
})
})
router.delete("/:id", (req,res) => {
const id = req.params.id;
User.findByIdAndRemove(id)
.then(data => {
res.send("Has Been Deleted")
})
})
module.exports = router;