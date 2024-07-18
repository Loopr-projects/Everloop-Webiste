import Image from "next/image";
import Heading1 from "./components/text/Heading1";
import Heading2 from "./components/text/Heading2";
import Heading3 from "./components/text/Heading3";
import NavItem from "./components/header/navItem";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full flex items-center justify-center ">
        <header className="w-4/5 p-4 rounded-full bg-mauve-100/15 backdrop-blur-md flex items-center justify-between">
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
      <section className="h-screen w-screen">
        <header>
          <Heading1>
            At Everloop we create lasting impressions and provide smart software
            solution.
          </Heading1>
          <Heading3>
            Looking for a way to put yourself and your company on the map? Or
            want to elevate your business to the next level? Then you are at the
            right place! We create a digital solution catered to your company.
          </Heading3>
        </header>

        <article></article>
        <article></article>
        <article></article>
      </section>
      <section>
        <header>
          <h2></h2>
          <h1></h1>
        </header>

        <article>
          <h2></h2>
          <p></p>
        </article>
      </section>
      <section className="w-full">
        <Footer></Footer>
      </section>
    </main>
  );
}
