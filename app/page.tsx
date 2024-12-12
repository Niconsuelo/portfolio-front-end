"use client";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import Button from "../components/button";
import portafoliodos from "../public/portafoliodos.jpeg";

export default function Home() {
  const goToDown = () => {
    alert("hiciste click");
  };

  return (
    <body>
      <main className="flex flex-col justify-between p-12 pt-4 pb-6 bg-scroll bg-cover bg-center font-roboto">
        {/* Nav */}
        <nav className="flex flex-row justify-evenly text-white border-b-2 border-gray-300 w-[95%] mx-auto h-20 items-center">
          <a
            href="#about"
            className="hover:underline text-[14px] md:text-[18px] lg:text-[20px] font-thin text-white"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className="hover:underline text-[14px] md:text-[18px] lg:text-[20px] font-thin text-white"
          >
            WORKING SKILLS
          </a>
          <a
            href="#projects"
            className="hover:underline text-[14px] md:text-[18px] lg:text-[20px] font-thin text-white"
          >
            PROJECTS
          </a>
          <div className="flex items-center">
            <Button
              buttonText="CONTACT"
              className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:bg-white ... h-10 w-48 text-white font-thin"
              onClick={goToDown}
            />
          </div>
        </nav>

        {/* First Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 mt-20 mb-20">
          <div className="flex flex-col gap-6 order-1 md:order-1 ml-8 mb-1">
            <h2 className="font-roboto font-extralight text-[23px] md:text-[30px] lg:text-[50px] text-white mb-2">
              Hi! Im Nicole Aburto
            </h2>

            <h1 className="font-extrabold custom-base-title text-[30px] md:text-[50px] lg:text-[64px] text-white uppercase leading-tight">
              Web
            </h1>
            <h1 className="font-extrabold custom-base-title text-[30px] md:text-[50px] lg:text-[64px] text-white uppercase leading-tight">
              developer !
            </h1>

            <p className="text-white text-[14px] md:text-[18px] lg:text-[23px] leading-relaxed mt-4">
              Madrid, España.
            </p>

            <Button
              buttonText="Let's Start"
              className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:bg-white ... h-10 w-48 text-white py-2 px-4 mb-12 mt-8 ml-6"
              onClick={goToDown}
            />
          </div>
          <div className="order-2 md:order-2 flex items-center justify-center">
            <Image
              src={avatar}
              alt="user profile picture"
              width={300}
              height={420}
              className="content-center border-8 bg-center border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476] bounce-box"
            />
          </div>
        </section>

        {/* Second Section */}
        <section className="flex flex-row bg-scroll bg-cover bg-center font-roboto mt-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="flex flex-col order-1 md:order-1 my-8 leading-tight">
                <h1 className="text-gradient font-extrabold custom-base-title text-[30px] md:text-[50px] lg:text-[64px] text-white uppercase mt-16">
                  THERE IS
                </h1>

                <h1 className="text-gradient font-extrabold custom-base-title text-[30px] md:text-[50px] lg:text-[64px] text-white uppercase">
                  ALL...
                </h1>
              </div>

              <p className="font-roboto font-extralight text-[14px] md:text-[18px] lg:text-[23px] text-white leading-tight w-87 mt-20">
                As a front-end developer with a proven track record in team
                management, I excel at driving innovative design solutions. I
                thrive in collaborative environments and enjoy learning new
                things.
              </p>
            </div>
            <div className="order-2 md:order-2 flex items-center justify-end">
              <Image
                src={portafoliodos}
                alt="second picture"
                width={470}
                height={300}
                className="right-0 bottom-0 border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476]"
              />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
