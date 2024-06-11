import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
    const data = [
    
        {
            title:"Red Potatoes",
            price: 3.89,
            category: "Red",
            image: "red.jpeg",
            _id: "1",
        },

        {
            title:"Sweet Potatoes",
            price: 4.99,
            category: "Sweet",
            image: "sweet.jpeg",
            _id: "2",
        },

        {
            title:"Yukon Gold Potatoes",
            price: 2.98,
            category: "Gold",
            image: "yukon.jpeg",
            _id: "3",
        },

        {
            title:"Purple Potatoes",
            price: 6.00,
            category: "Purple",
            image: "purple.jpg",
            _id: "4",
        },

        {
            title:"Shoestring French Fries",
            price: 8.99,
            category: "Shoestring",
            image: "shoestring.jpeg",
            _id: "5",
        },

        {
            title:"Crinkle Cut French Fries",
            price: 8.99,
            category: "Crinkle",
            image: "crinkle.png",
            _id: "6",
        },

        {
            title:"Waffle Fries",
            price: 5.99,
            category: "Waffle",
            image: "waffle.jpg",
            _id: "7",
        },

        {
            title:"Double-Stuffed Baked Potatoes w/Broccoli",
            price: 3.99,
            category: "Broccoli",
            image: "broccoli.jpg",
            _id: "8",
        },

        {
            title:"Double-Stuffed Baked Potatoes w/Bacon",
            price: 5.99,
            category: "Bacon",
            image: "bacon.jpeg",
            _id: "9",
        },

        {
            title:"Potato Wedges",
            price: 3.95,
            category: "Wedges",
            image: "wedges.jpeg",
            _id: "10",
        },

        {
            title:"Mashed Potatoes w/Butter & Chives",
            price: 4.89,
            category: "Mashed",
            image: "mashed.jpeg",
            _id: "11",
        },

        {
            title:"Whipped Sweet Potato Souffle",
            price: 6.79,
            category: "Souffle",
            image: "souffle'.jpg",
            _id: "12",
        },

        {
            title:"Salt & Vinegar Chips",
            price: 4.99,
            category: "Vinegar",
            image: "vinegar.jpeg",
            _id: "13",
        },

        {
            title:"Sour Cream & Onion Chips",
            price: 4.99,
            category: "Onion",
            image: "onion.jpg",
            _id: "14",
        },

        {
            title:"Salt & Pepper Chips",
            price: 4.99,
            category: "Salt",
            image: "salt.jpeg",
            _id: "15",
        },

        {
            title:"Aged White Cheddar Chips",
            price: 4.99,
            category: "Cheddar",
            image: "cheddar.jpeg",
            _id: "16",
        },

        {
            title:"Gnocchi",
            price: 7.99,
            category: "Gnocchi",
            image: "gnocchi.jpg",
            _id: "17",
        },

        {
            title:"Steak Fries",
            price: 4.99,
            category: "Steak",
            image: "steak.jpg",
            _id: "18",
        },
   
    ];
    return (
        <div className="catalog page">
        <h1>Our amazing catalog!!</h1>

        {data.map((prod) => )
            <Product key={prod_id} info={prod} />

        <Product info={data[0]} />
        <Product info={data[1]} />


        </div>
    );
}


export default Catalog;