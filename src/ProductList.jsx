import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    name: "Air-Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 25,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2e5d",
      },
      {
        id: 2,
        name: "Spider Plant",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
      },
      {
        id: 4,
        name: "Rubber Plant",
        price: 30,
        image:
          "https://images.unsplash.com/photo-1597055181300-7a1e8b6c7b9a",
      },
      {
        id: 5,
        name: "Areca Palm",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      },
      {
        id: 6,
        name: "Boston Fern",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1621609764095-b4b0d2e5b3e8",
      },
    ],
  },
  {
    name: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 15,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1525498128493-380d1990a112",
      },
      {
        id: 9,
        name: "Echeveria",
        price: 16,
        image:
          "https://images.unsplash.com/photo-1515472604440-9c1c9f9e2a0b",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1533460004989-cef01064af7e",
      },
      {
        id: 11,
        name: "String of Pearls",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
      },
      {
        id: 12,
        name: "Zebra Plant",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
      },
    ],
  },
  {
    name: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "Orchid",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1566907225472-5147f1e7b5a5",
      },
      {
        id: 14,
        name: "African Violet",
        price: 28,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
      },
      {
        id: 15,
        name: "Anthurium",
        price: 32,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
      },
      {
        id: 16,
        name: "Begonia",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      },
      {
        id: 17,
        name: "Kalanchoe",
        price: 21,
        image:
          "https://images.unsplash.com/photo-1459158807036-7d9f9f9f7e0a",
      },
      {
        id: 18,
        name: "Bromeliad",
        price: 34,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </nav>

      <main className="product-list">
        <h1>Paradise Nursery</h1>
        <h2>Our Houseplants</h2>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>

            <div className="plant-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-thumbnail"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
