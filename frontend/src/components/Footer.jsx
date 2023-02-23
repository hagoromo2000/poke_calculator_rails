import React from "react";

const Footer = (props) => {
  // const maxDamage = Math.floor(props.damage);
  // const minDamage = Math.floor(Math.floor(props.damage) * 0.85);

  return (
    <>
      <footer className="footer pb-4 bg-base-100 text-base-content fixed bottom-0">
        <div className="w-full">
          <div className="w-full bg-gradient-to-r from-blue-200 to-red-200">
            <p className="ml-10">計算結果</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-11/12 bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{
                  width: `${100 - (props.minDamage / props.hp) * 100}%`,
                }}
              >
                {(100 - (props.minDamage / props.hp) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="flex justify-end mr-10">
              {props.minDamage} ~ {props.maxDamage} (
              {((props.minDamage / props.hp) * 100).toFixed(1)}% ~{" "}
              {((props.maxDamage / props.hp) * 100).toFixed(1)}%)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
