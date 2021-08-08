import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ smallCard, mediumCard }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className=" max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {smallCard.map(({ img, location, distance }) => (
              <SmallCard key={img} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex p-3 -ml-3 overflow-scroll scrollbar-hide space-x-4">
            {mediumCard.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const smallCard = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

  const mediumCard = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      smallCard,
      mediumCard,
    },
  };
}
