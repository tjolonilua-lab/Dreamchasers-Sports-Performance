/**
 * Parent / athlete testimonials — edit copy here (no CMS).
 * Prefer real quotes; replace placeholders as families send them in.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: "Parent" | "Athlete";
  detail?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sewo doesn’t just run drills — he explains why they matter. My son left every session faster and more confident.",
    name: "Michelle R.",
    role: "Parent",
    detail: "Youth athlete · Kingwood area",
  },
  {
    quote:
      "He knows the recruiting grind because he lived it. The standards feel real — not a regular gym class.",
    name: "Jayden M.",
    role: "Athlete",
    detail: "High school · Skill position",
  },
  {
    quote:
      "Clear communication, serious coaching, and my daughter actually looks forward to training. That says everything.",
    name: "Carla T.",
    role: "Parent",
    detail: "Youth Sports Performance Camp family",
  },
  {
    quote:
      "Footwork, explosion, and mindset. I feel more prepared when I step on the field Friday night.",
    name: "Marcus L.",
    role: "Athlete",
    detail: "High school · Class of 2027",
  },
];
