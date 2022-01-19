import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import preview from "../public/images/image-equilibrium.jpg";
import etherumIcon from "../public/images/icon-ethereum.svg";
import clockIcon from "../public/images/icon-clock.svg";
import avatar from "../public/images/image-avatar.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='NTF-card challenge from frontend mentor with nextjs and tailwind'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600\&display=swap`}
          rel='stylesheet'
        />
      </Head>
      <main>
        {/* section */}
        <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-clr-section'>
          {/* card */}
          <div className='text-clr-white max-w-[20rem] md:max-w-[21.875rem] w-full bg-clr-card rounded-2xl p-6 font-body'>
            {/* card__image */}
            <div className='relative overflow-hidden rounded-lg'>
              <Link href='#'>
                <a className='hover:after:opacity-50 after:content-[""] w-full h-full  after:w-full after:h-full after:top-0 after:left-0 after:block after:opacity-0 after:absolute after:bg-clr-secondary after:z-10 after:transition-opacity after:duration-200 before:bg-eye before:bg-no-repeat before:bg-center before:bg-contain before:absolute before:content-[""] before:top-2/4 before:w-16 before:h-16 before:z-20 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200'>
                  <Image
                    src={preview}
                    layout='responsive'
                    priority='true'
                    alt='Equilibrium #3429 image'
                  />
                </a>
              </Link>
            </div>
            {/* ./card__image */}

            {/* card__title */}
            <h1 className='mt-6 text-[1.375rem] font-semibold transition-colors duration-200 text-clr-white hover:text-clr-secondary'>
              <Link href='#'>
                <a>Equilibrium #3429</a>
              </Link>
            </h1>
            {/* ./card__title */}

            {/* card__text */}
            <p className='mt-3 text-[1.125rem] font-light md:mt-6 text-clr-primary'>
              Our Equilibrium collection promotes balance and calm.
            </p>
            {/* ./card__text */}

            {/* card__content */}
            <div className='items-center justify-between mt-4 md:mt-6 xs:flex'>
              <div className='flex items-center gap-2 text-base font-bold text-clr-secondary'>
                <Image src={etherumIcon} alt='Etherum icon' />
                <p>0.041 ETH</p>
              </div>

              <div className='flex items-center gap-2 text-base font-medium text-clr-primary'>
                <Image src={clockIcon} alt='clock icon' />
                <p>3 days left</p>
              </div>
            </div>
            {/* ./card__content */}

            {/*  card__footer */}
            <div className='flex items-center gap-4 pt-4 mt-4 border-t md:mt-6 border-clr-line'>
              <div className='w-full max-w-[32px] max-h-[32px] border rounded-full border-clr-white'>
                <Image src={avatar} layout='responsive' alt='Author avatar' />
              </div>
              <p>
                <span className='text-clr-primary'>Creation of </span>
                <Link href='/'>
                  <a className='transition-colors duration-200 hover:text-clr-secondary'>
                    Jules Wyvern
                  </a>
                </Link>
              </p>
            </div>
            {/* ./card__footer */}
          </div>
          {/* ./card */}
        </div>
        {/* ./section */}
      </main>
    </>
  );
}
