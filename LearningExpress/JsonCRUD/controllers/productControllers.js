
const products = [
    {
        "id": 1,
        "name": "Product A",
        "price": 19
    },
    {
        "id": 2,
        "name": "Product B",
        "price": 29
    },
    {
        "id": 3,
        "name": "Product C",
        "price": 9
    },
]


//middleware used to parse body of request.body -> "json data "

//HOME
const homePage = (req,res)=>{
    res.send('<h1>Hello world</h1>');
}

//READ
const readProduct = (req, res) => {
    res.json(products);
}

// CREATE
const createProduct =  (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    console.log(products);

}

//UPDATE 

const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;

    const index = products.findIndex((item)=>{
        return item.id === productId;
    })

    if(index === -1){
        res.status(400).json({"error" : "product not found"});
    }
    else{
        products[index] = {...products[index],...updatedProduct}; // merge existing and new 
        // products[index] = updateProduct;

    }
}

//DELETE
const deleteProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = products.findIndex(item => item.id === id);
    if(index === -1){
        res.status(400).json({"error" : "product not found"});
    }
    else{
        const deletedProduct = products[index];
        products.splice(index,1);
        res.json(deletedProduct);
    }

}

module.exports ={
    readProduct,createProduct,updateProduct,deleteProduct,homePage
}