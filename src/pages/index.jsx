import FeaturedCategory from "@/components/FeaturedCategory";
import FeaturedProduct from "@/components/FeaturedProduct";
import RootLayout from "@/components/RootLayout";
import Head from "next/head";

export default function Home({ data, category }) {
  return (
    <div>
      <Head>
        <title>Build PC</title>
      </Head>

      <img
        className="w-full  md:h-[500px]"
        src="https://i.ibb.co/BsdJWGY/Capture.png"
        alt=""
      />

      <FeaturedProduct data={data} />

      <FeaturedCategory data={category} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}product/random-products`
  );
  const data = await res.json();

  const response = await fetch(
    `${process.env.API_URL}category/categorys`
  );
  const category = await response.json();
  
  return {
    props: {
      data,
      category,
    },
  };
};
