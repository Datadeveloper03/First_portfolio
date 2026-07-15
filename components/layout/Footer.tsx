export function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-foreground/60">
          Designed and Developed by{" "}
          <span className="font-semibold text-foreground/80">Sabarish S</span>
        </p>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
