function logProduct(product) {
    console.log(product);
}
var myProduct = {
    id: 1,
    name: "Product 1 ",
    price: 9.999,
    inStock: true,
};
logProduct(myProduct);
function wrapValue(value) {
    return [value];
}
var result = wrapValue(50);
console.log(result);
function printApiResult(api) {
    if (api.success) {
        logProduct(api.data);
    }
    else {
        console.log("Error :".concat(api.message));
    }
}
var productApiResponse = {
    data: myProduct,
    success: true,
    message: "fail",
};
printApiResult(productApiResponse);
