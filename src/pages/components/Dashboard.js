import Image from "next/image";
import { Inter, Rubik } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });
export default function Dashboard() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center bg-gradient-radial ${inter.className}`}>
      <div className="relative w-[1200px] h-[618px] m-auto flex ">
        <Image
          src={"/images/rectangle.png"}
          alt="rectangle"
          width={420}
          height={618}
        />
        <div>
          <h1 className="absolute top-[5%] left-[14%] text-[68px] font-bold leading-[94px] font-custom not-italic font-bold">
            Turn Your Website <br></br> Into Your Best Sales <br></br> Person
          </h1>
          <div>
            <p
              className={`absolute top-[55%] right-[167px] text-[22px] not-italic font-light leading-[33px] ${rubik.className}`}>
              Triple your sales with a pixel-perfect website. <br></br> At
              SmartSite Studio, we don’t just design and write code, <br></br>{" "}
              we build a revenue-driving machine for your business.
            </p>
            <div className="flex">
              <button className="rounded-full bg-button w-[200px] h-[60px] absolute bottom-[15%] left-[39%] font-bold leading-94 font-custom text-[16px]">
                Talk To Us
              </button>
              <button className="rounded-full border border-trans w-[200px] h-[60px] absolute bottom-[15%] right-[26%] font-bold leading-94 font-custom text-[16px]">
                See Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
