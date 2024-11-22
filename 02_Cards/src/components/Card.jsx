import React from "react";

function Card({title="Chimera",price="1"}) {
  return (
    <span
      className=" flex flex-col rounded-xl  p-4 max-w-80 mx-auto my-4"
      style={{
        border: "0.88px solid",
        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <span>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="200"
          height="200"
          className="rounded-xl"
        />
      </span>
      <span>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </span>
      <div className="font-mono text-center">
        <p>price: ${price}</p>
      </div>
    </span>
  );
}

export default Card;
