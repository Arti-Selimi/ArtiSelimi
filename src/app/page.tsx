import BoardMain from "@/components/board/main";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center p-10">
        <Navbar />
      </div>
      <div>
        <BoardMain />
      </div>
    </div>
  );
}
