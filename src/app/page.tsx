import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="mx-[1-rem] lg:mx-[2-rem] x1:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gao-4 w-full min-w-[18rem] md:w-[35rem]"></div>
        <div className="flex flex-col"></div>
      </div>
    </main>
  );
}
