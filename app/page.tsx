import Image from "next/image";
import NavItem from "./components/header/navItem";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";
import {
  BuildingStorefrontIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import SectionHeader from "./components/text/sectionHeader";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full flex items-center justify-center px-[150px] pt-14">
        <header className="w-full  p-4 rounded-full bg-mauve-100/15 backdrop-blur-md flex items-center justify-between">
          <div className="min-w-32">Logo</div>
          <nav className="flex items-center justify-center gap-40">
            <NavItem target="/"> Our story</NavItem>
            <NavItem target="/"> Projects</NavItem>
            <NavItem target="/"> Pricing</NavItem>
            <NavItem target="/"> Team</NavItem>
          </nav>
          <Button>Contact us</Button>
        </header>
      </section>
      <section className="w-screen flex flex-col items-start justify-center px-[150px] pt-32">
        <header className="w-1/2  flex flex-col gap-16">
          <h1 className="text-white font-poppins font-semibold text-[40px]">
            At Everloop we create lasting impressions and provide smart software
            solution.
          </h1>
          <h2 className="text-white font-poppins font-medium text-[28px]">
            Looking for a way to put yourself and your company on the map? Or
            want to elevate your business to the next level? Then you are at the
            right place! We create a digital solution catered to your company.
          </h2>
        </header>

        <div className="flex flex-col gap-12 pt-16  w-1/3 items-center min-w-[600px]">
          <article className="flex gap-6">
            <div className="flex items-start justify-end">
              <BuildingStorefrontIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <h1 className="font-poppins font-medium text-white text-[20px]">
                Handcrafted websites for your bussiness
              </h1>
              <p className="font-poppins font-normal text-white text-[16px]">
                Boost online sales with our elegant e-commerce sites, featuring
                <br />
                secure payments and user-friendly navigation for a premium
                <br />
                shopping experience
              </p>
            </div>
            <div className="flex items-end justify-end">
              <ArrowRightIcon className="w-7 h-7 text-mauve-100" />
            </div>
          </article>

          <article className="flex gap-6">
            <div className="flex items-start justify-end">
              <PaintBrushIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <h1 className="font-poppins font-medium text-white text-[20px]">
                Handcrafted websites for your bussiness
              </h1>
              <p className="font-poppins font-normal text-white text-[16px]">
                Boost online sales with our elegant e-commerce sites, featuring
                <br />
                secure payments and user-friendly navigation for a premium
                <br />
                shopping experience
              </p>
            </div>
            <div className="flex items-end justify-end">
              <ArrowRightIcon className="w-7 h-7 text-mauve-100" />
            </div>
          </article>

          <article className="flex gap-6">
            <div className="flex items-start justify-end">
              <ComputerDesktopIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <h1 className="font-poppins font-medium text-white text-[20px]">
                Handcrafted websites for your bussiness
              </h1>
              <p className="font-poppins font-normal text-white text-[16px]">
                Boost online sales with our elegant e-commerce sites, featuring
                <br />
                secure payments and user-friendly navigation for a premium
                <br />
                shopping experience
              </p>
            </div>
            <div className="flex items-end justify-end">
              <ArrowRightIcon className="w-7 h-7 text-mauve-100" />
            </div>
          </article>
        </div>
      </section>
      <section className="px-[150px]">
        <SectionHeader sectionName={"Protfolio"} title={"Our Projects"} />
        <div>
          <article className="bg-black rounded-[25px] flex flex-col w-[550px] h-[580px] font-poppins text-white items-center justify-center p-3">
            <div className="flex flex-col items-start justify-center gap-2 p-3">
              <h1 className="font-medium text-[36px]">
                Bussiness blog/project website
              </h1>
              <p className="font-normal text-[16px]">
                An interestiong case where peak design meats funtionality, take
                a journey through a great success stories of their projects.
                Watch the before and after.
              </p>

              <div className="flex gap-3">
                <div className="rounded-full bg-mauve-100 text-mauve-400 px-3 py-[6px] flex items-center justify-center font-medium">
                  Webdesign
                </div>{" "}
                <div className="bg-mauve-100 text-mauve-400 px-3 py-[6px] flex items-center justify-center rounded-full font-medium">
                  Webdevelopment
                </div>
              </div>
            </div>

            <div>
              <Image
                height={300}
                width={500}
                src={""}
                alt="Project cover image"
              />
            </div>
          </article>
        </div>
      </section>
      <section className="w-full">
        <Footer></Footer>
      </section>
    </main>
  );
}
