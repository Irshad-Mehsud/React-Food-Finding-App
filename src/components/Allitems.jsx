import React, { useState } from "react";
import "./Allitems.css";
import "bootstrap/dist/css/bootstrap.min.css";
//===============All the imported Images======================
import Icone from "../assets/ic-1.jpeg";
import Ictwo from "../assets/ic-2.jpeg";
import Icthree from "../assets/ic-3.jpeg";
import Icfour from "../assets/ic-4.jpeg";
import Icfive from "../assets/ic-5.jpeg";
import Icsix from "../assets/ic-6.jpeg";
import pizzas1 from "../assets/pizza-1.jpg";
import pizza2 from "../assets/pizza-2.jpeg";
import pizza3 from "../assets/pizza-3.jpg";
import brgr1 from "../assets/brgr-1.jpeg";
import brgr2 from "../assets/brgr-2.jpeg";
import biryani from "../assets/bryni-1.jpeg";
import palao from "../assets/palao.jpg";
import fries1 from "../assets/fries.jpeg";
import fries2 from "../assets/fries-2.jpeg";
import chicken from "../assets/chkn-1.jpeg";
import parata from "../assets/prta-1.jpg";
import NoItemsFound from "./NoItemfound";


const Allitems = ({ inputval }) => {
  // Sample data for the items with categories
  const items = [
    { 
      image: Icone, 
      title: "Vanilla Bean Ice Cream", 
      catagory: "ice-cream", 
      description: "A classic, creamy vanilla ice cream made with real vanilla beans for a smooth and flavorful treat." 
    },
    { 
      image: Ictwo, 
      title: "Chocolate Fudge Brownie", 
      catagory: "ice-cream", 
      description: "Rich chocolate ice cream loaded with chunks of fudge brownie, creating a heavenly indulgence." 
    },
    { 
      image: Icthree, 
      title: "Strawberry Cheesecake", 
      catagory: "ice-cream", 
      description: "Sweet and tangy strawberry cheesecake ice cream, with chunks of real cheesecake and a rich strawberry swirl." 
    },
    { 
      image: Icfour, 
      title: "Mint Chocolate Chip", 
      catagory: "ice-cream", 
      description: "Cool mint ice cream with crunchy chocolate chips for a refreshing and satisfying dessert." 
    },
    { 
      image: Icfive, 
      title: "Salted Caramel", 
      catagory: "ice-cream", 
      description: "A smooth caramel ice cream with a hint of salt to enhance the rich, sweet flavor." 
    },
    { 
      image: Icsix, 
      title: "Cookies and Cream", 
      catagory: "ice-cream", 
      description: "Decadent vanilla ice cream with generous chunks of crunchy chocolate cookies." 
    },
    { 
      image: pizzas1, 
      title: "Veggie Delight Pizza", 
      catagory: "pizza", 
      description: "A healthy pizza with bell peppers, onions, olives, mushrooms, and a generous topping of mozzarella." 
    },
    { 
      image: pizza2, 
      title: "Hawaiian Pizza", 
      catagory: "pizza", 
      description: "A tropical pizza with a mix of ham, pineapple, and cheese for a perfect sweet and savory combo." 
    },
    { 
      image: pizza3, 
      title: "Meat Lover's Pizza", 
      catagory: "pizza", 
      description: "Loaded with a combination of sausage, pepperoni, bacon, and ground beef, this pizza is a meat lover's dream." 
    },
    { 
        image: brgr1, 
        title: "Classic Beef Burger", 
        catagory: "burger", 
        description: "A juicy grilled beef patty with fresh lettuce, tomato, cheese, and a toasted sesame bun." 
      },
      { 
        image: brgr2, 
        title: "Crispy Chicken Burger", 
        catagory: "burger", 
        description: "Crispy fried chicken breast with lettuce, mayo, and pickles in a soft brioche bun." 
      },
      { 
        image: biryani, 
        title: "Hyderabadi Biryani", 
        catagory: "biryani", 
        description: "A fragrant and flavorful basmati rice dish cooked with tender marinated chicken, saffron, and aromatic spices." 
      },
      { 
        image: palao, 
        title: "Afghani Palao", 
        catagory: "palao", 
        description: "A fragrant and flavorful basmati rice dish cooked with tender marinated chicken, saffron, and aromatic spices." 
      },
      { 
        image: fries1, 
        title: "Classic French Fries", 
        catagory: "fries", 
        description: "Crispy golden French fries, lightly salted and served hot for the perfect snack." 
      },
      { 
        image: fries2, 
        title: "Cheese Loaded Fries", 
        catagory: "fries", 
        description: "Crunchy fries topped with melted cheese, jalapenos, and a drizzle of ranch sauce." 
      },
      { 
        image:chicken, 
        title: "Grilled Chicken Platter", 
        catagory: "chicken", 
        description: "Juicy, perfectly grilled chicken served with a side of fresh veggies and a tangy garlic sauce." 
      },
      { 
        image: parata, 
        title: "Stuffed Aloo Paratha", 
        catagory: "paratha", 
        description: "A delicious Indian flatbread stuffed with spiced mashed potatoes, served with butter and yogurt." 
      }
  ];

  // State to manage visibility of details for each item
  const [showDetails, setShowDetails] = useState({});

  // Filter items based on inputval (category)
  const filteredItems = items.filter(item => 
    item.catagory.toLowerCase().includes(inputval.toLowerCase())
  );

  const addToCart = () => {
    console.log("Item added to cart");
  };

  // Toggle show details for a specific item
//   const toggleDetails = (index) => {
//     setShowDetails(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]  // Toggle the visibility for the clicked item
//     }));
//   };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Render filtered items */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card shadow-lg m-3" style={{ width: "100%", maxWidth: "350px" }}>
                <img 
                  src={item.image} 
                  className="card-img-top" 
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  {/* Show details if toggled */}
                  {showDetails[index] && (
                    <div className="item-details">
                      <p><strong>Full Description:</strong> {item.description}</p>
                      {/* Add more details here if necessary */}
                    </div>
                  )}
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <button 
                    onClick={addToCart} 
                    className="btn btn-primary"
                    style={{width:"100%"}}
                  >
                    Add to Cart
                  </button>
                  {/* <button 
                    onClick={() => toggleDetails(index)} 
                    className="btn btn-info"
                  >
                    {showDetails[index] ? "Hide Details" : "Show Details"}
                  </button> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoItemsFound/> // Show if no items match the filter
        )}
      </div>
    </div>
  );
};

export default Allitems;
