const Category = require('../Model/Category.jsx')



const createCategory = async (req, res)=>{
    try {
        const {name, description} = req.body;

        const newCategory = new Category({
            name,
            description,
        });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getCategory = async(req, res) =>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({error: error.message})
            }
}

module.exports = {
    createCategory,
    getCategory
}