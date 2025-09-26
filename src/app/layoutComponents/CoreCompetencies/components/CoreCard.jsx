//핵심역량 카드 컴포넌트

import Image from "next/image";
import { coreCardItem } from "../data/coreCardItem";

export default function CoreCard() {
  return (
    <div className="flex text-start justify-center gap-5 font-medium">
      {coreCardItem.map((item, index) => (
        <div
          key={index}
          className=""
          data-aos="fade-up"
          data-aos-delay={item.fade}
          data-aos-once="true"
        >
          <img
            src={item.img}
            alt={item.title}
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
