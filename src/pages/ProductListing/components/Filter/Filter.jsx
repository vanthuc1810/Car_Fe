import "./Filter.scss";
export const Filter = () => {
  return (
    <div className="">
      <div className="filter-container filter-container-mobile-closed">
        <div className="filter-header filter-header-mobile-closed">
          <h2>Filters</h2>
          <button className="reset-btn-hide">Reset</button>
        </div>
        <div className="filter-types-container">
          <div className="price-container">
            <h3>Price</h3>
            <div className="price-input-container">
              <label htmlFor="below-200">
                Below $200
                <input type="checkbox" id="below-200" />
              </label>
              <label htmlFor="201-999">
                $201 - $999
                <input id="201-999" type="checkbox" />
              </label>
              <label htmlFor="1000-1999">
                $1000 - $1999
                <input id="1000-1999" type="checkbox" />
              </label>
              <label htmlFor="over-2000">
                Over $2000
                <input id="over-2000" type="checkbox" />
              </label>
            </div>
          </div>
          <div className="ratings-container ratings-container-mobile">
            <h3>Rating (min)</h3>
            <div className="input-range">
              <datalist id="markers">
                <option label="0" value="0">
                  0
                </option>
                <option label="2.5" value="2.5">
                  2.5
                </option>
                <option label="5.0" value="5">
                  5
                </option>
              </datalist>
              <input
                step="0.1"
                // list="markers"
                id="price"
                type="range"
                min="0"
                max="5.0"
              />
            </div>
          </div>
          <div className="category-container">
            <h3>Categories</h3>
            <div className="category-input-container">
                <label htmlFor="category-men">
                    Men's wear
                    <input 
                    type="checkbox" 
                    id="category-men"
                    />
                </label>
                <label htmlFor="category-women">
                    Women's wear
                    <input 
                    type="checkbox" 
                    id="category-women"
                    />
                </label>
                <label htmlFor="category-kid">
                    Kid's wear
                    <input 
                    type="checkbox" 
                    id="category-kid"
                    />
                </label>
            </div>
          </div>
          <div className="sorting-container">
            <h3>Sort by price</h3>
            <div className="sorting-input-container">
                <label htmlFor="high-to-low">
                    Price high to low
                    <input 
                    name="sort"
                    id="high-to-low"
                    type="radio"
                     />
                </label>
                <label htmlFor="low-to-high">
                    Price low to high
                    <input 
                    name="sort"
                    id="low-to-high"
                    type="radio"
                     />
                </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
