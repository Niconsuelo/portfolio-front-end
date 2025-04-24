// AvatarImage.tsx
import Image from 'next/image'
import avatar from '../public/avatar.jpg'

const AvatarImage = () => {
  return (
    <>
      {/* Imagen para móvil */}
      <div className="sm:block lg:hidden">
        <Image
          src={avatar}
          alt="user profile picture"
          width={160}
          height={170}
          className="border-8 bg-center border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476] bounce-box z-10 sm:w-[50px] sm:h-[70px] md:w-[50px] md:h-[70px]"
          priority
        />
      </div>

      {/* Imagen para escritorio */}
      <div className="hidden lg:block">
        <Image
          src={avatar}
          alt="user profile picture"
          width={320}
          height={420}
          className="border-8 bg-center border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476] bounce-box z-10 lg:w-[320px] lg:h-[420px]"
          priority
        />
      </div>
    </>
  )
}

export default AvatarImage
