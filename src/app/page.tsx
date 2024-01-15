import { InstagramLogo } from '@/components/icons';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4 py-8 md:py-10 bg-zinc-950">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={` text-3xl text-white `}>
          !Hola, Aquí estamos construyendo la nueva plataforma de realizar tus
          compras vía importación, con las mejores marcas¡&nbsp;
        </h1>
        <h1 className={"text-blue-500 text-5xl"}>Tienda Yura&nbsp;</h1>
        {/* <br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2> */}
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

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
      <div className="absolute bottom-2">
        <span className="text-sm font-semibold text-white">
          Desarrollado por{" "}
          <span className="text-blue-500 text-2xl">Yura &reg; </span>{" "}
        </span>
      </div>
    </section>
  );
}
