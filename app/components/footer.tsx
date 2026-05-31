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
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Kontakt</a>
        </div>

      </div>

    </footer>
  );
}