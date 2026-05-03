import Image from "next/image";

const Wallpapers = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Image className='w-full h-auto object-cover' src='/wallpapers/AlexMercer.jpg' alt='Alex Mercer' width={200} height={100} />
            <Image className='w-full h-auto object-cover' src='/wallpapers/Bleach.jpg' alt='Ichigo' width={200} height={100} />
            <Image className='w-full h-auto object-cover' src='/wallpapers/OnePunch.png' alt='Saitama' width={200} height={100} />
            <Image className='w-full h-auto object-cover' src='/wallpapers/ZorroBlack.jpg' alt='Zorro' width={200} height={100} />
        </div>
    )
}
export default Wallpapers