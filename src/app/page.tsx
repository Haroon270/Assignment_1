
import Image from "next/image";
import background from "../../public/background.jpg" 
export default function Home() {
  return (
   <div >

    <h1 className="bg-green-500 h-10 text-lg  flex justify-center items-center mt-2 mb-2 px-10">Assignment No 01</h1>

  <Image
      src={"/background.jpg"}
      width={1000}
      height={1000}
      alt="Neelam Valey"
      className="w-screen h-screen"
    />

   </div>
  );
}
