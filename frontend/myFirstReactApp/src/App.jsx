//  import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My First React App</div>
      <p className="bg-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil tempore
        architecto cupiditate adipisci veritatis voluptas rerum nemo, est quia
        quasi. Beatae ducimus rerum temporibus ipsum aspernatur laborum? Libero,
        explicabo dolorum.
      </p>
      <button>click here</button>

      <Footer />
    </>
  );
}

export default App;
