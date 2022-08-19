import React from "react";

// CSS
import "./styles/sass/App.css";

//Components
import Component_1_Nav from "./Components/Component_1_Nav/Component_1_Nav";
import Component_2_Nav from "./Components/Component_2_Nav/Component_2_Nav";
import Component_4_Nav from "./Components/Component_4_Nav/Component_4_Nav";
import Component_3_Footer from "./Components/Component_3_Footer/Component_3_Footer";

//Effects
import Effect_1_Color_Picker from "./Effects/Effect_1_Color_Picker/Effect_1_Color_Picker";
import Effect_1_Collor_Picker_rev1 from "./Effects/Effect_1_Color_Picker/Effect_1_Color_Picker_rev1";
import Effect_2_Writing_Text from "./Effects/Effect_2_Writing_Text/Effect_2_Writing_Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">TDM's Components Repository</h1>
        <section className="Effects">
          <Effect_1_Color_Picker />

          {/* <Effect_1_Collor_Picker_rev1 /> */}
          <Effect_2_Writing_Text />
        </section>
        <Component_1_Nav />
        <Component_2_Nav />

        <section className="container">
          <Component_4_Nav />
        </section>
      </header>
      <main className="container"></main>
      <footer>
        <Component_3_Footer />
      </footer>
    </div>
  );
}

export default App;
