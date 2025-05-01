import Header from "./component/navbar/header";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="flex px-3 h-full">
        <div className="w-full bg-secondaryColor h-1/2 rounded-sm flex justify-center items-center">
          <div className="perspective-4000">
            <div className="earth-container">
              <Image
                src="/earth.png"
                width={200}
                height={200}
                alt="Earth rotating in 3D"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}