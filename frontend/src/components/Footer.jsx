import React from "react";

const Footer = (props) => {
  // const maxDamage = Math.floor(props.damage);
  // const minDamage = Math.floor(Math.floor(props.damage) * 0.85);

  return (
    <>
      <footer className="footer pb-4 bg-base-100 text-base-content fixed bottom-0">
        <div className="w-full">
          <div className="w-full bg-gradient-to-r from-blue-200 to-red-200">
            <p className="ml-10 font-medium text-gray-600">計算結果</p>
          </div>
          <div className="w-full">
            <div className="flex justify-end mr-16">
              <div className="mr-2">
                <p>残りHP</p>
              </div>
              <p>
                {props.hp - props.maxDamage < 0
                  ? 0
                  : props.hp - props.maxDamage}{" "}
                ~{" "}
                {props.hp - props.minDamage < 0
                  ? 0
                  : props.hp - props.minDamage}{" "}
                / {props.hp}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-11/12 bg-gray-200 rounded-full relative">
              <div
                className="bg-gray-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2.5 absolute top-0 bottom-0 left-0 right-0"
                style={{
                  width: `100%`,
                }}
              ></div>
              <div
                className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2.5 absolute top-0 bottom-0 left-0 right-0"
                style={{
                  width: `${
                    props.minDamage / props.hp > 1
                      ? 0
                      : 100 - (props.minDamage / props.hp) * 100
                  }%`,
                  transition: "width 0.3s ease-in-out",
                }}
              >
                {/* {(100 - (props.minDamage / props.hp) * 100).toFixed(1)}% */}
              </div>
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2.5 absolute top-0 bottom-0 left-0 right-0"
                style={{
                  width: `${
                    props.maxDamage / props.hp > 1
                      ? 0
                      : 100 - (props.maxDamage / props.hp) * 100
                  }%`,
                  transition: "width 0.3s ease-in-out",
                }}
              >
                {/* {(100 - (props.minDamage / props.hp) * 100).toFixed(1)}% */}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-end mr-10">
              <div className="mr-2">
                {props.compatibility >= 2 ? (
                  <p>こうかばつぐん </p>
                ) : props.compatibility === 0 ? (
                  <p>こうかなし</p>
                ) : props.compatibility < 1 ? (
                  <p>こうかいまひとつ </p>
                ) : null}
              </div>
              <p>
                {props.minDamage} ~ {props.maxDamage} (
                {((props.minDamage / props.hp) * 100).toFixed(1)}% ~{" "}
                {((props.maxDamage / props.hp) * 100).toFixed(1)}%)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
