import ItemsCatagory from "../../Props/DataHome/dataItemCategorysGrapFoodHome";
import { FoodRiceRestaurantLocation } from "../../Components/FoodRiceLocation/FoodRiceRestautantLocation";
import { Routes, Route, Link, Router } from "react-router-dom";
function ItemCategory(props) {
  return (
    <div className="box-item-category">
      <Link to="/Detail-Own-Restaurant-Food-Rice">
        <div className="item-food-special-offers">
          <img src={props.src} alt={props.alt} loading="lazy" />
          <div className="info-item-food-special-offers">
            <p>{props.title}</p>
          </div>
        </div>
      </Link>
      {/* <Routes>
        <Route path="/a" element={FoodRiceRestaurantLocation}></Route>
      </Routes> */}
    </div>
  );
}
function dataCategory() {
  return (
    <div className="container-categories">
      {ItemsCatagory.map((item) => (
        <ItemCategory
          key={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
          href={item.href}
        ></ItemCategory>
      ))}
    </div>
  );
}
export default dataCategory;
