interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

function logProduct(product: Product): void {
  console.log(product);
}

const myProduct: Product = {
  id: 1,
  name: "Product 1 ",
  price: 9.999,
  inStock: true,
};

logProduct(myProduct);

type ProductOrError = Product | string;
function wrapValue<T>(value: T): [T] {
  return [value];
}

let result: number[] = wrapValue(50);
console.log(result);

interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

function printApiResult(api: ApiResult<Product>): void {
  if (api.success) {
    logProduct(api.data);
  } else {
    console.log(`Error :${api.message}`);
  }
}

const productApiResponse: ApiResult<Product> = {
  data: myProduct,
  success: true,
  message: "fail",
};

printApiResult(productApiResponse);
