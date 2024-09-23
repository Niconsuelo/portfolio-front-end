"use client";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import Button from "../components/button";

export default function Home() {
  const goToDown = () => {
    console.log("aprete boton 1");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-scroll bg-cover bg-center font-roboto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-1 md:order-1">
          <h1 className="flex-col font-roboto font-extralight text-[25px] md:text-[30px] lg:text-[50px] text-white">
            Hi! I'm Nicole Aburto
          </h1>
          <h2 className="font-extrabold custom-base-title text-[30px] md:text-[50px] lg:text-[80px]  text-white uppercase">
            Web developer !
          </h2>
          <h3 className="text-white text-[15px] md:text-[30px] lg:text-[30px]">
            {" "}
            Santiago, Chile.
          </h3>

          <Button
            buttonText="Let's Start"
            className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:bg-white ... h-10 w-48 text-white py-2 px-4"
            onClick={goToDown}
          />
        </div>
        <div className="order-2 md:order-2">
          <Image
            src={avatar}
            alt="user profile picture"
            width={250}
            height={250}
            className="border-8 bg-center border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476] rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
