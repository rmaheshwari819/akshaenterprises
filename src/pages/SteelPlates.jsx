import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import SheetImage from '../assets/sheetplateinside.jpeg';

const SteelPlates = () => {
  const post = {
    title: 'Steets / PLates',
    metaDescription:
      'Aksha Enterprises - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    imageSection: SheetImage,
    h1: 'Steets / PLates',
    aboutSection: {},

    productTables: {
      title: 'Types of Flanges',
      title1: 'Metal Available for Steets / PLates',
      heading: [{ Srno: 'Sr.no', title: 'Flanges' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],

      points1: [
        { id: '1', points: 'MS' },
        { id: '2', points: 'Copper' },
        { id: '3', points: 'Steel' },
        { id: '4', points: 'Bronze' },
        { id: '5', points: 'Stainless-Steel' },
        { id: '6', points: 'Alluminium' },
        { id: '7', points: 'Nickel' },
        { id: '8', points: 'Monel' },
        { id: '9', points: 'Gunmetel' },
        { id: '10', points: 'Brass' },
        { id: '11', points: 'Non-Ferrous Allow' },
        { id: '12', points: 'Ferrous Allow' },
      ],
    },
  };
  return <ProductsDetails {...post} />;
};

export default SteelPlates;
