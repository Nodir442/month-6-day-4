import React from "react";
import { ProductGrid } from "./components/product-grid";
import { DishGrid } from "./components/dish-grid";
function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white p-4 text-center">
        <div className="container">
          <ul className="flex gap-20">
            <li>
              <a className="font-semibold text-2xl" href="#">
                О ресноте
              </a>
            </li>
            <li>
              <a className="font-semibold text-2xl" href="#">
                Каталог
              </a>
            </li>
            <li>
              <a className="font-semibold text-2xl" href="#">
                Наши магазины
              </a>
            </li>
            <li>
              <a className="font-semibold text-2xl" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </div>{" "}
      </header>
      <main className="container bg-white p-4 shadow-lg">
        <ProductGrid />
        <h2 className="text-4xl text-center mt-10 mb-5">Скидки</h2>
        <DishGrid />
      </main>
    </div>
  );
}

export default App;
