import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'
function Reviews() {
  const slides = [
    {
      src: pic1,
      text: '"PayMint has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Spain",
    },
    {
      src: pic2,
      text: '"Using PayMint has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "England",
    },
    {
      src: pic3,
      text: '"PayMint has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    },
  ];
  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join other thousands of people growing with PayMint.
        </h2>
        <StoreLinks type={BtnTypes.Standard} />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
