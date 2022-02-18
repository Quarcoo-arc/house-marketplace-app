import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pagHeader">Explore</p>
      </header>

      <main>
        {/* Slider */}

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              className="exploreCategoryImage"
              src={rentCategoryImage}
              alt="rent"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sell">
            <img
              className="exploreCategoryImage"
              src={sellCategoryImage}
              alt="sell"
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
