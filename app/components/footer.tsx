export default function Footer() {
  return (
    <footer className="border-t border-[#d8cfc2] py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold">
            Masáže Michelle
          </h3>

          <p className="text-[#7b6a58] mt-2">
            Relaxace a péče o tělo i mysl.
          </p>
        </div>

      <div className="flex gap-6 text-sm text-[#7b6a58]">
  <a
    href="https://www.instagram.com/_masazemichelle/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>

  <a href="#kontakt">
    Kontakt
  </a>
</div>

      </div>

    </footer>
  );
}