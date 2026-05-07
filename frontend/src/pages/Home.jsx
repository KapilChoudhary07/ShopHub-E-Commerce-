

// import MainLayout from "../layout/MainLayout";
// import { useEffect, useState } from "react";
// import { getProducts } from "../services/productService";
// import ProductGrid from "../components/ProductGrid";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [keyword, setKeyword] = useState("");
//   const [category, setCategory] = useState("");

//   const fetchProducts = async () => {
//     const res = await getProducts(keyword, category);
//     setProducts(res.data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [keyword, category]);

//   return (
//     <MainLayout>

//       {/* 🔍 SEARCH + FILTER BAR */}
//       <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
//         <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center gap-2 sm:gap-3">

//           {/* Search Input */}
//           <div className="relative flex-1 min-w-[160px] sm:min-w-[220px] max-w-full sm:max-w-sm">
//             <svg
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//               width="16" height="16" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" strokeWidth="2"
//               strokeLinecap="round" strokeLinejoin="round"
//             >
//               <circle cx="11" cy="11" r="8" />
//               <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
//               value={keyword}
//               onChange={(e) => setKeyword(e.target.value)}
//             />
//           </div>

//           {/* Divider */}
//           <div className="hidden sm:block h-8 w-px bg-gray-200" />

//           {/* Category Filter */}
//           <div className="relative w-full sm:w-auto">
//             <select
//               className="appearance-none w-full sm:w-auto pl-3 sm:pl-4 pr-9 sm:pr-10 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-700 outline-none cursor-pointer transition-all duration-200 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 font-medium"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Electronics">Electronics</option>
//               <option value="Kids">Kids</option>
//               <option value="Beauty">Beauty Product</option>
//             </select>
//             <svg
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//               width="14" height="14" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" strokeWidth="2.5"
//               strokeLinecap="round" strokeLinejoin="round"
//             >
//               <polyline points="6 9 12 15 18 9" />
//             </svg>
//           </div>

//           {/* Active filter badge */}
//           {category && (
//             <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs bg-gray-900 text-white font-semibold rounded-full transition-all duration-200">
//               {category}
//               <button
//                 onClick={() => setCategory("")}
//                 className="text-gray-400 hover:text-white transition-colors ml-0.5"
//               >
//                 ✕
//               </button>
//             </span>
//           )}

//         </div>
//       </div>

//       {/* Products */}
//       <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
//         <ProductGrid products={products} />
//       </div>

//     </MainLayout>
//   );
// };

// export default Home;


import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductGrid from "../components/ProductGrid";

const CATEGORIES = ["Men", "Women", "Electronics", "Kids", "Beauty"];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    const res = await getProducts(keyword, category);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword, category]);

  const hasFilters = keyword || category;

  return (
    <MainLayout>

      {/* ─── SEARCH + FILTER BAR ─── */}
      <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex flex-col gap-3">

          {/* Row 1 — Search input */}
          <div className="relative w-full">
            {/* Search icon */}
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              placeholder="Search products, brands, categories..."
              className="w-full pl-10 pr-10 py-2.5 sm:py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            {/* Clear search button */}
            {keyword && (
              <button
                onClick={() => setKeyword("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-700 transition-all duration-150"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Row 2 — Category pills + active filter badge */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">

            {/* "All" pill */}
            <button
              onClick={() => setCategory("")}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 active:scale-95 ${
                !category
                  ? "bg-gray-950 text-white border-gray-950"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              All
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat === category ? "" : cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 active:scale-95 ${
                  category === cat
                    ? "bg-gray-950 text-white border-gray-950"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}

            {/* Clear all filters */}
            {hasFilters && (
              <>
                <div className="shrink-0 w-px h-5 bg-gray-200 mx-1" />
                <button
                  onClick={() => { setKeyword(""); setCategory(""); }}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-red-500 border border-red-200 bg-red-50 hover:bg-red-100 transition-all duration-150 active:scale-95"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Clear
                </button>
              </>
            )}
          </div>

        </div>
      </div>

      {/* ─── RESULTS HEADER ─── */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 pt-5 sm:pt-7 pb-2 flex items-center justify-between">
        <div>
          {hasFilters ? (
            <p className="text-sm font-semibold text-gray-700">
              {products.length} result{products.length !== 1 ? "s" : ""}
              {keyword && <span> for <span className="text-gray-950">"{keyword}"</span></span>}
              {category && <span className="text-gray-400"> in <span className="text-gray-950">{category}</span></span>}
            </p>
          ) : (
            <p className="text-sm font-semibold text-gray-700">
              All Products
              <span className="text-gray-400 font-normal ml-1.5">({products.length})</span>
            </p>
          )}
        </div>
      </div>

      {/* ─── PRODUCTS ─── */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 pb-6 sm:pb-8">
        <ProductGrid products={products} />
      </div>

    </MainLayout>
  );
};

export default Home;