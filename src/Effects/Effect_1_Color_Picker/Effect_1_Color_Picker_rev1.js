import React from "react";

const Effect_1_Color_Picker_rev1 = () => {
  return (
    <>
      <section className="component">
        <h1 className="text-center">Effect_1_Color_Picker_rev1</h1>

        <div className="color-pickers">
          <article className="text-color-picker">
            <div>
              <h2 className="pickText">
                Text <br /> Color:
              </h2>
            </div>
            <div className="picker">
              <input
                type="color"
                id="favColor"
                className="inputColor"
                value={"#fff"}
              />
            </div>
            <div>
              <h3 className="colorCode" id="c-code">
                #fff
              </h3>
            </div>
          </article>

          <article className="color-picker">
            <div className="pickText">
              Text <br /> Color:
            </div>
            <div className="picker">
              <input
                type="color"
                id="favColor"
                className="inputColor"
                value={"#fff"}
              />
            </div>
            <div className="colorCode" id="c-code">
              #fff
            </div>
          </article>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Effect_1_Color_Picker_rev1;
