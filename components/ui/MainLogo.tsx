export function MainLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      {...props}
    >
      {/* Pocket watch body */}
      <circle cx="12" cy="13" r="8" className="fill-current text-primary" />

      {/* Pocket watch top loop */}
      <circle cx="12" cy="3" r="1.5" className="fill-current" />

      {/* Connecting line between loop and body */}
      <rect x="11.5" y="4.5" width="1" height="1.5" fill="currentColor" />

      {/* £ symbol cutout (white for contrast) */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="9"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        £
      </text>
    </svg>
  );
}
