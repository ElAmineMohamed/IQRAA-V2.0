import NavBar from "@/components/Navbar/NavBar";

export default function layout({ children }) {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
}
