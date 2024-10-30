import React from "react";

const Menu = () => {
  return (
    <div className="md:w-2/3  p-4 menu-sheet">
      <div className="menu-heading">MENU</div>
      <p className=" text-center">
        Welcome! Make yourself at home and order a delicious Frog Soup.
      </p>
      <p className=" text-center">
        A limited number of servings available, so get them while they're hot!
      </p>
      <div className="w-full sold-meter-outer overflow-hidden mt-2 mb-8">
        <div className="sold-meter-inner h-6" style={{ width: "0%" }}>
          <div className="meter-counter">?/5029</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-2 mb-10 mx-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center">
          <div className=" flex flex-col items-center md:items-start pb-4 md:pb-0">
            <h3 className="text-3xl font-bold soup-title">SOUP FOR ONE</h3>
            <p>A single serving of Frog Soup.</p>
            <div className="soupicon-container flex">
              <img src="/1soup.gif" alt="" />
            </div>
          </div>
          <button className="px-4 py-2 mint-button">
            <span className="mintfor">MINT FOR</span>
            <span className="price">0.03ETH</span>
          </button>
        </div>
        <hr className=" mb-5" />
        <div className="mb-10 mx-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
            <span className="discount-tag">
              10% <br />
              OFF!
            </span>
            <h3 className="text-3xl font-bold soup-title">THE TRIPLE TREAT</h3>
            <p>Three soups, for the hungry ones.</p>
            <div className="soupicon-container flex">
              <img src="/3soup.gif" alt="" />
            </div>
          </div>
          <button className="px-4 py-2 mint-button">
            <span className="mintfor">MINT FOR</span>
            <span className="price">0.03ETH</span>
          </button>
        </div>
        <hr className=" mb-5" />
        <div className="mb-10 mx-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
            <span className="discount-tag">
              20% <br />
              OFF!
            </span>
            <h3 className="text-3xl font-bold soup-title">THE SHIBA SPECIAL</h3>
            <p>Five soups, for all the pups.</p>
            <div className="soupicon-container flex">
              <img src="/5soup.gif" alt="" />
            </div>
          </div>
          <button className="px-4 py-2 mint-button">
            <span className="mintfor">MINT FOR</span>
            <span className="price">0.03ETH</span>
          </button>
        </div>
        <hr className=" mb-5" />
        <div className="mb-10 mx-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
            <span className="discount-tag">
              33% <br />
              OFF!
            </span>
            <h3 className="text-3xl font-bold soup-title">
              BANQUET DE GRENOUILLES
            </h3>
            <p>Ten soups, for when you just can't get enough.</p>
            <div className="soupicon-container flex">
              <img src="/10soup.gif" alt="" />
            </div>
          </div>
          <button className="px-4 py-2 mint-button">
            <span className="mintfor">MINT FOR</span>
            <span className="price">0.03ETH</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
