const buttonStyle = {
  color: 'black',
  background: 'rgb(197, 223, 81)',
  alignContent: 'center'
};

function ProductRow(props) {
  const product = props.product;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.productName), /*#__PURE__*/React.createElement("td", null, "$", product.pricePerUnit), /*#__PURE__*/React.createElement("td", null, product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: product.imageUrl,
    target: "_blank"
  }, "View")));
}

function ProductTable(props) {
  const productRows = props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      productName: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value
    };
    this.props.createProduct(product);
    form.productName.value = "";
    form.pricePerUnit.value = "$";
    form.category.value = "";
    form.imageUrl.value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("table", {
      className: "nonbordered-table"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Category", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      id: "menu",
      name: "category"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), /*#__PURE__*/React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
      value: "Accessories"
    }, "Accessories")))), "\xA0", /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Price Per Unit", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "pricePerUnit",
      defaultValue: "$"
    })))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Product Name", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productName"
    }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Image URL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "imageUrl"
    })))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("button", {
      style: buttonStyle
    }, "Add Product")))));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({
      products: newProductList
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("h3", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));