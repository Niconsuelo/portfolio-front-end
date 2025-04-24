import { useCallback, useRef } from "react";
import AvatarImage from "./avatarImagen";
import Button from "./button";

interface HomeProps {
  goToDownAboutProps: () => void;
}


const HomeDesktop: React.FC<HomeProps> = ({goToDownAboutProps}) => {

return (
  <section className="hidden lg:flex flex-row mt-[144px] mb-20 gap-6 lg:ml-8 scroll-mt-36 relative z-10">

      <div className="flex flex-col gap-1 mb-2 lg:ml-8">
        <div>
          <h2 className="font-roboto font-extralight text-h2-lg text-white mb-2 mt-10">
            Hi! Im Nicole Aburto
          </h2>
          <h1 className="font-extrabold text-h1-lg text-white uppercase leading-tight mb-2">
            Web
          </h1>
          <h1 className="font-extrabold text-h1-lg text-white uppercase leading-tight">
            Developer!
          </h1>
        </div>
        <p className="text-white text-p-lg leading-relaxed mt-4 mb-10">
          Madrid, España.
        </p>
        <Button
          buttonText="Let's Start"
          className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] text-white hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] py-2 px-4 font-thin shadow-[4px_4px_0px_#F6F7FB] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-48 transition-all hover:font-medium"
          onClick={goToDownAboutProps}
        />
      </div>

      <div className="flex items-center justify-center mx-auto">
        <AvatarImage />
      </div>
    </section>
);
}
export default HomeDesktop;
