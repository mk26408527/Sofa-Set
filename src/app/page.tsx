import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import sofaPic1 from "../../public/sofaPic1.png"; 
import productOne from "../../public/productOne.png"; 
import productTwo from "../../public/productTwo.png"; 
import productThree from "../../public/productThree.png"; 
import sofaPhoto from "../../public/sofaPhoto.png"; 
import truck from "../../public/truck.png";
import bag from "../../public/bag.png";
import support from "../../public/support.png";
import turn from "../../public/turn.png";
import table from "../../public/table.png";
import welbetChair from "../../public/welbetChair.png";
import lightSofa from "../../public/lightSofa.png";
import frame from "../../public/frame.png"
import circle from "../../public/circle.png";
import rectangle from "../../public/rectangle.png";
import person from "../../public/person.png";
import blog from "../../public/blog.png";
import mail from "../../public/mail.png";
import plus from "../../public/plus.jpeg";
import sofaLast from "../../public/sofaLast.png";
import line from "../../public/line.png";
import icon from "../../public/icon.png";
import text from "../../public/text.png";
import footer from "../../public/footer.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { group } from "console";


export default function Home() {

  return (
    <>
      <main className="bg-customGreen">
        <div className="flex justify-between items-center mt-16 py-16 mb-4 ml-12">
          <div className="flex flex-col items-start ml-36">
            <h1 className="text-white text-3xl font-bold">Modern Interior <br /> Design Studio</h1>
            <div className="mt-20">
              <Button className="rounded-full bg-customBeige text-black hover:bg-customEFEBCE">Shop Now</Button>
              <Button className="ml-[18px] bg-customColor border-white rounded-full mb-1 hover:bg-customEFEBCE hover:text-black">Explore</Button>
            </div>
          </div>
          <div className="mr-40 -mb-24">
            <Image 
              src={sofaPic1}
              alt="Sofa Pic" 
              className="mx-auto mb-10" 
              width={500} 
              height={300} 
            />
          </div>
        </div>
      </main>
      <main>
      <div className="p-1 ml-32 mt-20">
  <h2 className="text-3xl font-semibold mt-10 text-customDarkGreen">Crafted with <br /> excellent <br /> material.</h2>
  <p className="mt-2 text-gray-700 ">Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe as it was for us to know <br /> what was to be done.</p>
  <Button className="ml-[18px] mt-12 bg-customColor border-white rounded-full bg-customGreen hover:bg-customEFEBCE hover:text-black">Explore</Button>
  <div className="-mt-[390px] -ml-96">
            <Image 
              src={productOne}
              alt="Sofa Pic" 
              className="mx-auto mb-10" 
              width={189} 
              height={261} 
            />
          </div>
          <p className="pl-[360px] font-semibold">Nordic CHAIR <br /> <span className="ml-8">$50.00</span></p>
          <div className="ml-[280px] -mt-56">
          <Image
          src={rectangle}
          alt="Rectangle bg"
          width={296}
          height={307}
          /> 
          </div>  
          <div className="ml-[410px] -mt-16">
          <Image
          src={plus}
          alt="Purchase Sign"
          width={26}
          height={0}
          />   
          </div>
          <div className="ml-[585px] -mt-[365px]">
          <Image
          src={productTwo}
          alt="Product Two"
          width={237}
          height={256}
          /> 
          <p className="pl-[50px] pt-8 font-semibold">Kruzo Aero Chair <br /> <span className="ml-8">$78.00</span></p>
          </div>
          <div className="ml-[870px] -mt-[340px]">
          <Image
          src={productThree}
          alt="Product Three"
          width={153}
          height={235}
          /> 
          <p className="pl-[25px] mt-[55px] font-semibold">Ergonomic Chair <br /> <span className="ml-8">$43.00</span></p>
          </div>
  </div>

    </main>
    <main>
      <div>
        <h2 className="text-3xl font-semibold mt-52 ml-32 text-customDarkGreen">Why Choose Us</h2>
        <p className="mt-2 text-gray-700 ml-32">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla <br /> vivethe as it was for us to know what was to be done. the</p>
        <div className="ml-[660px] -mt-36">
          <Image
          src={sofaPhoto}
          alt="Purchase Sign"
          width={491.07}
          height={618.88}
          />   
          </div>
          <div className="ml-[130px] -mt-[405px]">
          <Image
          src={truck}
          alt="Truck Logo"
          width={31}
          height={25.36}
          />   
          <h3 className="font-semibold mb-1 mt-2">Fast & Free Shipping</h3>
          <p>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe as it was</p>
          </div>
          <div className="ml-[400px] -mt-[135px]">
          <Image
          src={bag}
          alt="bag Logo"
          width={24}
          height={26.67}
          />   
          <h3 className="font-semibold mb-1 mt-2">Easy to Shop</h3>
          <p>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe as it was</p>
          </div>
          <div className="ml-[130px] mt-[35px]">
          <Image
          src={support}
          alt="Support Logo"
          width={27}
          height={27}
          />   
          <h3 className="font-semibold mb-1 mt-2">24/7 Support</h3>
          <p>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe as it was</p>
          </div>
          <div className="ml-[400px] -mt-[138px]">
          <Image
          src={turn}
          alt="Return Logo"
          width={27}
          height={27}
          />   
          <h3 className="font-semibold mb-1 mt-2">Hassle Free Returns</h3>
          <p>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe as it was</p>
          </div>
      </div>
    </main>
    <main className="mt-52">
      <div className="ml-[90px] mt-16">
          <Image
          src={table}
          alt="Photo of Table and sofa"
          width={422}
          height={480}
          />   
          </div>
          <div>
      <div className="ml-[430px] -mt-72">
          <Image
          src={welbetChair}
          alt="welbet Chair"
          width={291}
          height={349}
          />   
          </div>
          <div className="ml-[530px] -mt-[576px]">
          <Image
          src={lightSofa}
          alt="Light Sofa"
          width={187}
          height={187}
          />   
          </div>
          <h2 className="text-3xl font-semibold -mt-40 ml-[800px] text-customDarkGreen">We help  you make <br /> Modern Interior Design</h2>
          <p className="mt-2 text-gray-700 ml-[800px]">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla <br /> vivethe as it was for us to know what was to be done. the this is a <br /> long  post for the text.`This small text has to be place here, since <br /> this is a place holder. You can also chane it.</p>
          <div className="ml-[800px] mt-[50px]">
          <Image
          src={circle}
          alt="Circle"
          width={8}
          height={8}
          />   
          <p className="ml-5 text-gray-700 -mt-4">Donec mattis porta eros,let <br /> aliquet finibus ri</p>
          </div>
          <div className="ml-[800px] mt-[50px]">
          <Image
          src={circle}
          alt="Circle"
          width={8}
          height={8}
          />   
          <p className="ml-5 text-gray-700 -mt-4">Donec mattis porta eros,let <br /> aliquet finibus ri</p>
          </div>
          <div className="ml-[1100px] -mt-[130px]">
          <Image
          src={circle}
          alt="Circle"
          width={8}
          height={8}
          />   
          <p className="ml-6 text-gray-700 -mt-4">Donec mattis porta eros,let <br /> aliquet finibus ri</p>
          </div>
          <div className="ml-[1100px] mt-[50px]">
          <Image
          src={circle}
          alt="Circle"
          width={8}
          height={8}
          />   
          <p className="ml-6 text-gray-700 -mt-4">Donec mattis porta eros,let <br /> aliquet finibus ri</p>
          </div>
          <Button className="ml-[820px] bg-customGreen rounded-3xl  mt-7 mb-36 hover:bg-customEFEBCE hover:text-black">Explore</Button>
      </div>
    </main>
    <main>
  <div className="mt-[100px]">
    <Image
      src={frame}
      alt="frame of brands"
      width={1500}
      height={262}
    />
  </div>
</main>

<main>
  <div>

    <h2 className="flex justify-center mt-16 text-5xl font-semibold text-customDarkGreen">Testimonials</h2>
  </div>

  <Carousel className="relative w-full max-w-2xl mx-auto">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="pl-1">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-900 text-center max-h-[6rem] mt-8 ml-1 mr-2">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Image
              src={person} 
              alt="Girl"
              width={58} 
              height={58} 
              className="rounded-full" 
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Previous Arrow */}
    <div className="absolute -left-10 top-20 transform -translate-y-1/2 z-10">
      <CarouselPrevious className="text-gray-900 hover:text-customDarkGreen" />
    </div>

    {/* Next Arrow with Green Color */}
    <div className="absolute -right-16 top-20 transform -translate-y-1/2 z-10">
      <CarouselNext className="text-white bg-customGreen" />
    </div>
  </Carousel>
</main>
<main>
  <div>
  <div className="flex justify-center mt-12">
            <Image
              src={blog} 
              alt="Blog Section"
              width={1050} 
              height={421} 
            />
          </div>
  </div>
</main>
<footer>
  <main className="bg-customEFEBCE">
    <div>
    <div className=" mt-28 pt-24">
            <Image
              src={mail} 
              alt="Mail Section"
              width={1512} 
              height={760.44} 
            />
          </div>
          <div className="ml-[900px] mt-[-820px]">
            <Image
              src={sofaLast} 
              alt="Footer section sofa"
              width={458} 
              height={396.24} 
      />
      </div>
      <h2 className="text-2xl font-bold ml-48">FurniExpert</h2>
      <div className="ml-[189px] mt-[20px]">
            <Image
              src={footer} 
              alt="Footer section sofa"
              width={1008} 
              height={114} 
      />
      </div>
      <div className="ml-[189px] mt-[20px]">
            <Image
              src={icon} 
              alt="Social Media Icons"
              width={194} 
              height={43} 
      />
      </div>
      <div className="ml-[189px] mt-[20px]">
            <Image
              src={line} 
              alt="Footer Line"
              width={1140} 
              height={0} 
      />
      </div>
      <div className="ml-[189px] mt-[28px]">
            <Image
              src={text} 
              alt="Footer text"
              width={1140} 
              height={0} 
      />
      </div>
    </div>
  </main>
</footer>
    </>
  );
}
