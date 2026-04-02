'use client'

export default function CarSVG() {
  return (
    <svg
      viewBox="0 0 340 160"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 10px 28px rgba(0,0,0,.72))' }}
      width="100%"
      height="auto"
    >
      {/* body shell */}
      <ellipse cx="170" cy="80" rx="156" ry="44" fill="#e86810" />
      <ellipse cx="170" cy="80" rx="148" ry="36" fill="#f07818" opacity=".55" />
      {/* specular */}
      <ellipse cx="185" cy="72" rx="60" ry="14" fill="#ffa040" opacity=".25" />

      {/* nose cone */}
      <path d="M322 80 Q342 64 338 80 Q342 96 322 80Z" fill="#cc5800" />

      {/* front splitter wings */}
      <path d="M308 66 L332 50 L337 57 L314 71Z" fill="#b24800" />
      <path d="M308 94 L332 110 L337 103 L314 89Z" fill="#b24800" />

      {/* tail */}
      <path d="M20 80 Q2 64 6 80 Q2 96 20 80Z" fill="#a04500" />
      {/* rear diffuser */}
      <path d="M24 60 L4 47 L9 41 L28 56Z" fill="#8c3c00" />
      <path d="M24 100 L4 113 L9 119 L28 104Z" fill="#8c3c00" />
      {/* rear wing blade */}
      <rect x="6" y="74" width="14" height="12" rx="2" fill="#7a3400" />

      {/* cockpit outer */}
      <path
        d="M152 48 Q176 26 216 32 Q250 38 256 58 Q260 80 250 100 Q236 118 208 120 Q176 122 153 102 Q146 90 146 80 Q146 66 152 48Z"
        fill="#111827"
      />
      {/* cockpit glass */}
      <path
        d="M158 52 Q180 32 214 38 Q244 44 248 62 Q252 80 242 100 Q228 114 208 116 Q178 118 160 100 Q154 88 154 80 Q154 68 158 52Z"
        fill="#0a0e17"
        opacity=".92"
      />
      {/* windscreen glint */}
      <path
        d="M163 56 Q184 38 212 44 Q228 56 222 70 Q202 54 163 56Z"
        fill="rgba(255,255,255,.13)"
      />
      {/* side window strips */}
      <path
        d="M158 96 Q170 110 190 114 Q205 114 215 108 L210 100 Q196 106 180 105 Q167 103 158 96Z"
        fill="rgba(255,255,255,.06)"
      />

      {/* mirrors */}
      <path d="M174 48 L155 36 L160 30 L178 44Z" fill="#cc5800" />
      <path d="M174 112 L155 124 L160 130 L178 116Z" fill="#cc5800" />

      {/* front wheels */}
      <ellipse cx="264" cy="47" rx="16" ry="20" fill="#161616" />
      <ellipse cx="264" cy="47" rx="9" ry="12" fill="#2e2e2e" />
      <ellipse cx="264" cy="47" rx="3.5" ry="4.5" fill="#444" />
      <line x1="264" y1="35" x2="264" y2="59" stroke="#444" strokeWidth="1.2" />
      <line x1="252" y1="47" x2="276" y2="47" stroke="#444" strokeWidth="1.2" />
      <line x1="256" y1="39" x2="272" y2="55" stroke="#444" strokeWidth="1.2" />
      <line x1="272" y1="39" x2="256" y2="55" stroke="#444" strokeWidth="1.2" />

      <ellipse cx="264" cy="113" rx="16" ry="20" fill="#161616" />
      <ellipse cx="264" cy="113" rx="9" ry="12" fill="#2e2e2e" />
      <ellipse cx="264" cy="113" rx="3.5" ry="4.5" fill="#444" />
      <line x1="264" y1="101" x2="264" y2="125" stroke="#444" strokeWidth="1.2" />
      <line x1="252" y1="113" x2="276" y2="113" stroke="#444" strokeWidth="1.2" />
      <line x1="256" y1="105" x2="272" y2="121" stroke="#444" strokeWidth="1.2" />
      <line x1="272" y1="105" x2="256" y2="121" stroke="#444" strokeWidth="1.2" />

      {/* rear wheels (larger) */}
      <ellipse cx="88" cy="44" rx="20" ry="25" fill="#161616" />
      <ellipse cx="88" cy="44" rx="12" ry="15" fill="#2e2e2e" />
      <ellipse cx="88" cy="44" rx="4.5" ry="5.5" fill="#444" />
      <line x1="88" y1="29" x2="88" y2="59" stroke="#444" strokeWidth="1.5" />
      <line x1="73" y1="44" x2="103" y2="44" stroke="#444" strokeWidth="1.5" />
      <line x1="77" y1="33" x2="99" y2="55" stroke="#444" strokeWidth="1.5" />
      <line x1="99" y1="33" x2="77" y2="55" stroke="#444" strokeWidth="1.5" />

      <ellipse cx="88" cy="116" rx="20" ry="25" fill="#161616" />
      <ellipse cx="88" cy="116" rx="12" ry="15" fill="#2e2e2e" />
      <ellipse cx="88" cy="116" rx="4.5" ry="5.5" fill="#444" />
      <line x1="88" y1="101" x2="88" y2="131" stroke="#444" strokeWidth="1.5" />
      <line x1="73" y1="116" x2="103" y2="116" stroke="#444" strokeWidth="1.5" />
      <line x1="77" y1="105" x2="99" y2="127" stroke="#444" strokeWidth="1.5" />
      <line x1="99" y1="105" x2="77" y2="127" stroke="#444" strokeWidth="1.5" />

      {/* headlights (lime) */}
      <path d="M316 73 Q332 67 336 73 Q332 79 316 77Z" fill="#d1f542" opacity=".95" />

      {/* tail lights (red) */}
      <path d="M26 73 Q10 67 7 73 Q10 79 26 77Z" fill="#ff2020" opacity=".88" />

      {/* livery stripe */}
      <path
        d="M232 42 L110 44 L95 80 L110 116 L232 118"
        fill="none"
        stroke="#d1f542"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".5"
      />

      {/* brake duct vents */}
      <rect x="242" y="55" width="14" height="4" rx="1.5" fill="#111" opacity=".65" />
      <rect x="242" y="101" width="14" height="4" rx="1.5" fill="#111" opacity=".65" />
    </svg>
  )
}
