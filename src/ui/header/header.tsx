import HeaderContentContainer from "./header-content-container";

export default function Header() {
  return (
    <header className="border-border bg-card/90 sticky top-0 z-50 border-b backdrop-blur-xl">
      <HeaderContentContainer />
    </header>
  );
}
