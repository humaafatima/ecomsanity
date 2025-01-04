export default {
    name: 'productDetails',
    title: 'Product Deatils',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
      },
      {
        name: 'productPrice',
        title: 'Product Price',
        type: 'number',
      },
      {
        name: 'availableColors',
        title: 'Available Colors',
        type: 'string',
      },
      {
        name: 'careInstructions',
        title: 'Care Instructions',
        type: 'text',
      },
      {
        name: 'material',
        title: 'Material',
        type: 'string',
        },
    ]
  };
  