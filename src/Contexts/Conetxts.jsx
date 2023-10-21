import { createContext } from "react";
const initialState = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {
    cart: [],
    products: [
      {
        id: 'pc1',
        name: "Spiced Mint",
        price: 9.99,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc2',
        name: "Sweet Straweberry",
        price: 10.2,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc3',
        name: "Cool BlueBerries",
        price: 11.5,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc4',
        name: "Juicy Lemon",
        price: 12.99,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc5',
        name: "Product Name",
        price: 13.51,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc6',
        name: "Fragrant Cinnamon",
        price: 14.61,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc7',
        name: "Summer Cherries",
        price: 15.70,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
      {
        id: 'pc8',
        name: "Clean Lavander",
        price: 16.32,
        wax: "Top grade Soy wax that delivers a smoke less,  consistent burn",
        fragnance: "Premium quality ingredients with natural essential oils",
        burningTime: "70-75 hours",
        dimensions: "10cm x 5cm",
        weight: "400g",
        imgSrc: "/images/image 1.svg"
      },
    ]
  }
export const StateContext = createContext(initialState)