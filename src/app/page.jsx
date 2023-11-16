import Frame from "@/components/frame/Frame";
import NavBar from "../components/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
      </div>
    </>
  );
}
