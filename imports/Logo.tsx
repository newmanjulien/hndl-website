import svgPaths from "./svg-mml7trcbgv";

export default function Logo() {
  return (
    <div className="relative size-full" data-name="logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1521 583"
      >
        <g id="logo">
          <path
            d={svgPaths.p2f681800}
            fill="url(#paint0_linear_6_44)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pe5db00}
            fill="url(#paint1_linear_6_44)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_6_44"
            x1="243.544"
            x2="1499.06"
            y1="188.635"
            y2="277.903"
          >
            <stop stopColor="#FC7236" />
            <stop offset="0.215165" stopColor="#FC4936" />
            <stop offset="0.438504" stopColor="#FC3636" />
            <stop offset="0.508013" stopColor="#FC4936" />
            <stop offset="0.80291" stopColor="#FC7236" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_6_44"
            x1="48.0749"
            x2="307.907"
            y1="284.899"
            y2="255.662"
          >
            <stop stopColor="#FC7236" />
            <stop offset="1" stopColor="#FC4936" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}