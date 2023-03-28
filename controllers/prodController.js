

const createProd = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const readProd = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
const searchProd = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
const updateProd = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product)
            return res.status(404).json({ message: `can not find any product with id ${id}` })

        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteProd = async (req, res) => {

    try {
        const { id } = req.params
        const removedProduct = await Product.findByIdAndDelete(id)
        if (!removedProduct) {
            return res.status(404).json({ message: `can not find any product with id ${id}` })
        }
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}

module.exports={ readProd, createProd, searchProd, deleteProd, updateProd }
