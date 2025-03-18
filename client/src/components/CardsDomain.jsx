import React from "react";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

function CardsDomain({ imageUrl, title, description }) {
  return (
    <div>
      <FlippingCard>
        <FlippingCardBack>
          <div className="bg-[#FFFFF] max-w-2xl h-[43vh] rounded-3xl overflow-hidden shadow shadow-slate-500 border border-black">
            <div className="px-6 py-4">
              <p className="text-[#00000] text-xl mb-2">{description}</p>
            </div>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <div className="max-w-2xl h-[43vh] rounded-3xl overflow-hidden shadow shadow-slate-500 border border-black">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl text-center mb-2">{title}</div>
            </div>
          </div>
        </FlippingCardFront>
      </FlippingCard>
    </div>
  );
}

export default CardsDomain;
