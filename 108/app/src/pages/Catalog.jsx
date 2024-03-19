import "./Catalog.css";
import Product from '../components/Product';

function Catalog() {

    const data = [
        {
            title:"Gel",
            price: 2.85,
            category: "Hair",
            image: "",
            _id: "1",
        },

        {
            title:"Dye",
            price: 6.55,
            category: "Hair",
            image: "img2.jpg",
            _id: "2",
        },

        {
            title:"Oil",
            price: 2.98,
            category: "Hair",
            image: "img3.jpg",
            _id: "3",
        },

        {
            title:"Relaxer",
            price: 7.00,
            category: "Hair",
            image: "img4.jpg",
            _id: "4",
        },

        {
            title:"Moisturizer",
            price: 16.75,
            category: "Hair",
            image: "img5.jpg",
            _id: "5",
        },

        {
            title:"Shaampoo",
            price: 17.99,
            category: "Hair",
            image: "img6.jpg",
            _id: "6",
        },

        {
            title:"Conditioner",
            price: 21.75,
            category: "Hair",
            image: "img7.jpg",
            _id: "7",
        },
   
    ];
    return (
        <div className="catalog page">
        <h1>Our amazing catalog!!</h1>

        <Product info={data[0]} />
        <Product info={data[1]} />


        </div>
    );
}

export default Catalog;