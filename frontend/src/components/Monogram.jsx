import React from "react";

// Editorial monogram tile — used in place of personal portrait photos.
export const Monogram = ({ variant = 0, label = "MD" }) => {
  const variants = [
    { bg: "linear-gradient(135deg, #0A0A0A 0%, #2D1B08 100%)", line: "#C5832B" },
    { bg: "linear-gradient(160deg, #1A0F05 0%, #050505 80%)", line: "#E6C280" },
    { bg: "radial-gradient(circle at 30% 30%, #2D1B08 0%, #050505 70%)", line: "#D9A555" },
    { bg: "linear-gradient(135deg, #050505 0%, #1A1A1A 60%, #2D1B08 100%)", line: "#E6C280" },
    { bg: "linear-gradient(200deg, #0A0A0A 0%, #2D1B08 100%)", line: "#C5832B" },
  ];
  const v = variants[variant % variants.length];
  return (
    <div
      className="relative w-full h-full overflow-hidden grain hairline-border"
      style={{ background: v.bg, aspectRatio: "3 / 4" }}
      data-testid={`monogram-${variant}`}
    >
      <svg viewBox="0 0 200 260" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={`g-${variant}`} x1="0" x2="1">
            <stop offset="0%" stopColor={v.line} stopOpacity="0.6" />
            <stop offset="100%" stopColor={v.line} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Decorative corner brackets */}
        <path d="M14 14 L14 40 M14 14 L40 14" stroke={v.line} strokeWidth="1" fill="none" opacity="0.55" />
        <path d="M186 14 L186 40 M186 14 L160 14" stroke={v.line} strokeWidth="1" fill="none" opacity="0.55" />
        <path d="M14 246 L14 220 M14 246 L40 246" stroke={v.line} strokeWidth="1" fill="none" opacity="0.55" />
        <path d="M186 246 L186 220 M186 246 L160 246" stroke={v.line} strokeWidth="1" fill="none" opacity="0.55" />
        {/* Diagonal hairlines */}
        <line x1="0" y1="60" x2="200" y2="20" stroke={`url(#g-${variant})`} strokeWidth="0.5" />
        <line x1="0" y1="240" x2="200" y2="200" stroke={`url(#g-${variant})`} strokeWidth="0.5" />
        {/* Monogram */}
        <text
          x="100"
          y="148"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="84"
          fill={v.line}
          opacity="0.92"
        >
          {label}
        </text>
        <text
          x="100"
          y="180"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          letterSpacing="4"
          fill={v.line}
          opacity="0.5"
        >
          MOUHAMMED · DIOP
        </text>
      </svg>
    </div>
  );
};

export default Monogram;
