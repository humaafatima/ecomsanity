export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
      },
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'productPrice',
        title: 'Product Price',
        type: 'number',
      },
      {
        name: 'addToCartButton',
        title: 'Add to Cart Button',
        type: 'object',
        fields: [
          {
            name: 'buttonLabel',
            title: 'Button Label',
            type: 'string',
          },
        ],
      },
    ],
  };
  