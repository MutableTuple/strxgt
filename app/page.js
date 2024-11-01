import Image from "next/image";
import Main from "./_components/Main";

export default function Home() {
  return (
    <div className="bg-theme_blue-50 min-h-screen text-stone-200 ">
      <div className="md:px-12 px-4 py-4 ">
        <Main />
      </div>
    </div>
  );
}
