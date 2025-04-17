import BoardMain from "@/components/DekstopLayout/board/main";
import Navbar from "@/components/DekstopLayout/navbar/navbar";
import MobileMain from "@/components/MobileLayout/main/MobileMain";

export default function Home() {
  return (
    <div>
      <div className="hidden md:flex items-center justify-center pb-10">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <BoardMain />
      </div>
      <div className="block md:hidden">
        <MobileMain />
      </div>
    </div>
  );
}
