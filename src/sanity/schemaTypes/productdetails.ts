export default {
    name: 'productDetails',
    title: 'Product Details',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'productName',
          maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
        },
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
  