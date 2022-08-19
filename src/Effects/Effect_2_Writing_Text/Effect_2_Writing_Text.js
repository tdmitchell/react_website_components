import React from "react";
import Typed from "react-typed";

const Effect_2_Writing_Text = () => {
  return (
    <>
      <section className="writingText">
        <h1 className="text-center">Typing Animation Effect</h1>

        <div id="animated-typing" className="text-center">
          <Typed
            strings={[
              "This is the example of self writing text.",
              "We can even add more than one text to this effect.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          <br />
        </div>
      </section>
      <hr />
    </>
  );
};

export default Effect_2_Writing_Text;
