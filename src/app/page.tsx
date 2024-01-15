import { InstagramLogo } from '@/components/icons';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Tienda Yura importaciones de USA y China',
  description: 'Yura, somos una empresa de importaciones de productos originales con las mejores marcas del mercado y garantía',
  keywords: ['Yura', 'Tienda Yura', 'Tienda Yura importaciones', 'Tienda Yura importaciones de USA', 'Tienda Yura importaciones de China', 'Tiend'],
  
};


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4 py-8 md:py-10 bg-zinc-950  bg-hero  bg-no-repeat  bg-cover  bg-left  bg-bottom">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={` text-3xl text-white `}>
          ¡Hola. Aquí estamos construyendo la nueva{" "}
          <span className="text-blue-500">Ecommerce</span> para realizar tus
          compras vía importación, con las mejores marcas!
        </h1>
        <h1 className={"text-blue-500 text-5xl"}>Yura&nbsp;</h1>
      </div>

      <div className="flex gap-3">
        <Link
          target="_blank"
          href="https://www.facebook.com/Yura-Store-100106632425227"
          className={
            "bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-800 transition ease"
          }
        >
          Facebook
        </Link>
        <Link
          className={
            "flex items-center justify-center bg-gradient-to-r gap-2 from-pink-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-red-600 transition ease"
          }
          href={""}
        >
          <InstagramLogo size={20} color="#fff" />
          Instagram
        </Link>
      </div>
      <div className="absolute bottom-2">
        <span className="text-sm font-semibold text-white">
          Desarrollado por{" "}
          <span className="text-blue-500 text-2xl">Yura &reg; </span>{" "}
        </span>
      </div>
    </section>
  );
}
