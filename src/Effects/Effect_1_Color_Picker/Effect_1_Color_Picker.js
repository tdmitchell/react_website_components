import React, { useState } from "react";
// import { SketchPicker } from "react-color";
import { SliderPicker } from "react-color";

const Effect_1_Color_Picker = () => {
  const [color_1, setColor_1] = useState("#fff");
  const [color_2, setColor_2] = useState("#fdf");
  const [color_3, setColor_3] = useState("#000");
  const [showColorPicker_1, setShowColorPicker_1] = useState(false);
  const [showColorPicker_2, setShowColorPicker_2] = useState(false);
  const [showColorPicker_3, setShowColorPicker_3] = useState(false);

  const handleChangeComplete_1 = (color) => {
    setColor_1(color.hex);
    // setTextColor(color_1);
    // document.getElementsByClassName("pickText").innerHTML = e.target.value;
    // document.getElementsByClassName("pickText").innerHTML.style.color = color_1;

    document.getElementById("c-code").style.backgroundColor = color.hex;
    const eg = document.getElementsByClassName("pickText");
    console.log(eg);
    // document.getElementsByClassName("pickText").style.color = color.hex;
  };
  const setTextColor = (color) => {
    document.getElementById("c-code").style.backgroundColor = `${color}`;
    console.log(color);
    // document.getElementsByClassName("pickText").style.color = `${color}`;
  };

  const handleChangeComplete_2 = (color) => {
    setColor_2(color.hex);
  };
  const handleChangeComplete_3 = (color) => {
    setColor_3(color.hex);
    // document.body.style.color = color;
  };

  return (
    <>
      <section className="colorPicker">
        <h1 className="text-center">
          Effect 1 - Color Picker for Text and Background
        </h1>
        {/* <SketchPicker
          onChange={handleChangeComplete}
          // color={state.background}
        /> */}

        <table className="text-center">
          <tr>
            <th>
              <h3>Letter</h3>
            </th>
            <th>
              <h3>Special Letter</h3>
            </th>
            <th>
              <h3>Background</h3>
            </th>
          </tr>

          <tr>
            <td>
              {showColorPicker_1 && (
                <SliderPicker
                  color={color_1}
                  onChange={handleChangeComplete_1}
                />
              )}
              <button
                onClick={() =>
                  setShowColorPicker_1(
                    (showColorPicker_1) => !showColorPicker_1
                  )
                }
              >
                {showColorPicker_1 ? "Close" : "Chose Color"}
              </button>
            </td>

            <td>
              {showColorPicker_2 && (
                <SliderPicker
                  color={color_2}
                  onChange={handleChangeComplete_2}
                />
              )}
              <button
                onClick={() =>
                  setShowColorPicker_2(
                    (showColorPicker_2) => !showColorPicker_2
                  )
                }
              >
                {showColorPicker_2 ? "Close" : "Chose Color"}
              </button>
            </td>

            <td>
              {showColorPicker_3 && (
                <SliderPicker
                  color={color_3}
                  onChange={handleChangeComplete_3}
                />
              )}
              <button
                onClick={() =>
                  setShowColorPicker_3(
                    (showColorPicker_3) => !showColorPicker_3
                  )
                }
              >
                {showColorPicker_3 ? "Close" : "Chose Color"}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <h3>{color_1}</h3>
            </td>
            <td>
              <h3>{color_2}</h3>
            </td>
            <td>
              <h3>{color_3}</h3>
            </td>
          </tr>
        </table>
      </section>
      <hr />

      <section className="component">
        <h1 className="text-center">Effect_1_Color_Picker_rev1 Inside Rev 0</h1>

        <div className="color-pickers">
          <article className="text-color-picker">
            <div className="picker">
              <SliderPicker
                color={color_1}
                onChange={handleChangeComplete_1}
                id="favColor"
                // className="inputColor"
              />

              {/* <input
                type="color"
                id="favColor"
                className="inputColor"
                value={"#fff"}
              /> */}
            </div>
            <div className="color-info">
              <h2 className="pickText">Text Color:</h2>
              <h3 className="colorCode" id="c-code">
                {color_1}
              </h3>
            </div>
          </article>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Effect_1_Color_Picker;
