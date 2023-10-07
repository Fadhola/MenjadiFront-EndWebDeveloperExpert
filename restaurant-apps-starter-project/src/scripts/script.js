const menuIcon = document.getElementById("menu-icon");
const navDrawer = document.getElementById("nav-drawer");

menuIcon.addEventListener("click", () => {
  navDrawer.classList.toggle("active");
});

const restaurantList = document.querySelector(".restaurant-list");

fetch("./public/data/DATA.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement("div");
      restaurantCard.classList.add("restaurant-card");

      const restaurantImage = document.createElement("img");
      restaurantImage.src = restaurant.pictureId;
      restaurantImage.alt = restaurant.name;

      const restaurantName = document.createElement("h2");
      restaurantName.textContent = restaurant.name;

      const restaurantDescription = document.createElement("p");
      restaurantDescription.textContent = restaurant.description;

      const restaurantCity = document.createElement("p");
      restaurantCity.textContent = `City: ${restaurant.city}`;

      const restaurantRating = document.createElement("p");
      restaurantRating.textContent = `Rating: ${restaurant.rating}`;

      restaurantCard.appendChild(restaurantImage);
      restaurantCard.appendChild(restaurantName);
      restaurantCard.appendChild(restaurantDescription);
      restaurantCard.appendChild(restaurantCity);
      restaurantCard.appendChild(restaurantRating);

      restaurantList.appendChild(restaurantCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching restaurant data:", error);
  });