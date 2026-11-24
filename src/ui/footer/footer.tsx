import FooterContentContainer from "./footer-content-container";

export default function Footer() {
  return (
    <footer className="bg-forest-deep mt-auto text-slate-50">
      <div
        aria-hidden="true"
        className="from-chow via-market to-service h-1 w-full bg-gradient-to-r"
      />
      <FooterContentContainer />
    </footer>
  );
}
