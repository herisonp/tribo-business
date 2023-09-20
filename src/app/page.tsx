import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full relative h-screen overflow-hidden">
      <Image 
        src='assets/bg-banner.svg'
        width={500}
        height={500}
        alt='Imagem'
        className='w-full absolute z-0 object-cover top-[50%] translate-y-[-50%]'
      />
    </section>
  )
}
