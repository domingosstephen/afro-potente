interface SectionDividerProps {
  variant?: "wave" | "angle";
  color?: string;
  bgColor?: string;
  flip?: boolean;
}

export function SectionDivider({
  variant = "wave",
  color = "#F5EDE0",
  bgColor = "transparent",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      {variant === "wave" && (
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill={color}
          />
        </svg>
      )}
      {variant === "angle" && (
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <polygon points="0,60 1200,0 1200,60" fill={color} />
        </svg>
      )}
    </div>
  );
}
