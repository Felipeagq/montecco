type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, align = "center", light }: Props) {
  return (
    <div className={`section-head ${align === "left" ? "is-left" : ""} ${light ? "is-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
