import { links } from "@/data/siteData";

export default function WhatsAppFloat() {
  return (
    <a
      href={links.wa(
        "Hi SDM Car Care, I would like to know more about your services."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SDM Car Care on WhatsApp"
      className="group fixed bottom-[88px] right-4 z-30 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)] md:bottom-6 md:right-6"
    >
      {/* WhatsApp Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="34"
        height="34"
        fill="currentColor"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:rotate-[-8deg]"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.79 1.47h.01c6.57 0 11.92-5.35 11.92-11.92a11.86 11.86 0 0 0-3.48-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[76px] whitespace-nowrap rounded-lg border border-white/10 bg-[#151a23] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}