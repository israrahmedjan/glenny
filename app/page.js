import Counter from "./_components/Counter";
import ProductsByCategory from "./_components/products/ProductsByCategory";

export default function Home() {


  const product = [
    {
      title: "Awesome Product",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 5",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product -6",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 7",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    {
      title: "Awesome Product - 8",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    } ,
    {
      title: "Awesome Product - 9",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageUrl: "/images/product-2.png",
    },
    // {
    //   title: "Awesome Product - 10",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //   imageUrl: "/images/product-2.png",
    // }     
  ]
  // const product = {
  //   title: "Awesome Product",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  //   imageUrl: "/images/product-2.png",
  // };

  return (
    <div>
     
      {/* <Firebasedemo /> */}
     <Counter />
      <ProductsByCategory categoryId={1} limit={4} categoryname="Electronics" />
     {/* <Header /> */}
     {/* <HeroSection /> */}
     {/* <div className="flex flex-col items-center mt-8 mx-8">
      <h2 className="text-4xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {product.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div> */}

    {/* <TwoColumnSection />
    <TwoColumnSection2 /> */}

     {/* <Footer /> */}

       </div>
  );
}
