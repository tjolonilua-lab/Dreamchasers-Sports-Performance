/**
 * Youth Sports Performance Camp gallery (`public/images/camp/`).
 *
 * Drop new photos into that folder and add an entry here — no CMS required.
 * The homepage section hides itself when no listed files are present on disk.
 */

export type CampGalleryPhoto = {
  /** Public path under `/images/camp/` */
  src: string;
  alt: string;
  /** Short lightbox caption */
  caption: string;
  /** Highlight in the carousel rotation */
  featured?: boolean;
};

export const CAMP_GALLERY_PHOTOS: CampGalleryPhoto[] = [
  {
    src: "/images/camp/youth-camp-run-cone.jpg",
    alt: "A young athlete runs with a football around a training cone during Youth Sports Performance Camp.",
    caption: "Cone work — speed and ball security on the grass.",
    featured: true,
  },
  {
    src: "/images/camp/youth-camp-run-wilson.jpg",
    alt: "A young athlete sprints across the field with a Wilson football at Youth Sports Performance Camp.",
    caption: "Open-field tempo — eyes up, feet driving.",
  },
  {
    src: "/images/camp/youth-camp-coaching-stance.jpg",
    alt: "A coach adjusts a young athlete’s stance during one-on-one instruction at Youth Sports Performance Camp.",
    caption: "Form first — coaching cues that stick.",
  },
  {
    src: "/images/camp/youth-camp-girl-run.jpg",
    alt: "A young girl with braids runs across the field carrying a football at Youth Sports Performance Camp.",
    caption: "Full-field energy — every athlete gets reps.",
  },
  {
    src: "/images/camp/youth-camp-smile-run.jpg",
    alt: "A young athlete smiles while running with a football during Youth Sports Performance Camp.",
    caption: "Confidence shows — fun and finish on every rep.",
  },
  {
    src: "/images/camp/youth-camp-track-portrait.jpg",
    alt: "A young athlete in a Youth Sports Performance Camp shirt stands on the track after training.",
    caption: "Camp kit on — strength, speed, confidence.",
  },
  {
    src: "/images/camp/IMG_0647.jpeg",
    alt: "Two young camp athletes in Olonilua jerseys stand together on the grass field.",
    caption: "Camp brotherhood — train with purpose, perform with confidence.",
  },
  {
    src: "/images/camp/IMG_0651.jpeg",
    alt: "Two young athletes walk arm in arm across the camp field in Olonilua jerseys.",
    caption: "Built together — teammates from day one.",
  },
  {
    src: "/images/camp/IMG_0652.jpeg",
    alt: "Coach Sewo Olonilua stands on the field in a Youth Sports Performance Camp shirt with a football.",
    caption: "Led by Sewo — pro standards on every rep.",
    featured: true,
  },
  {
    src: "/images/camp/IMG_0654.jpeg",
    alt: "Coach Sewo demonstrates a three-point stance during Youth Sports Performance Camp.",
    caption: "Stance and leverage — details that transfer.",
  },
  {
    src: "/images/camp/IMG_0655.jpeg",
    alt: "Coach Sewo talks with a young athlete one-on-one on the camp field.",
    caption: "One-on-one coaching — cues that stick.",
  },
  {
    src: "/images/camp/IMG_0658.jpeg",
    alt: "Two young athletes work through a blocking drill during Youth Sports Performance Camp.",
    caption: "Contact and compete — building toughness.",
  },
  {
    src: "/images/camp/IMG_0664.jpeg",
    alt: "Coach Sewo walks the field with a young athlete, carrying hurdles and a football.",
    caption: "Next drill up — stay ready, stay locked in.",
  },
  {
    src: "/images/camp/IMG_0665.jpeg",
    alt: "A line of young athletes sets up in a sprint start on the camp field.",
    caption: "Explode off the line — speed wins reps.",
  },
  {
    src: "/images/camp/IMG_0667.jpeg",
    alt: "Coach Sewo and two young athletes flex together in Youth Sports Performance Camp shirts.",
    caption: "Strength, speed, confidence — camp energy.",
  },
  {
    src: "/images/camp/IMG_0668.jpeg",
    alt: "A young athlete hugs Coach Sewo on the field after camp training.",
    caption: "More than drills — impact that lasts.",
  },
  {
    src: "/images/camp/IMG_0669.jpeg",
    alt: "Coach Sewo encourages a young athlete on the sideline during camp.",
    caption: "Coach in your corner — push through the hard reps.",
  },
  {
    src: "/images/camp/IMG_0670.jpeg",
    alt: "Coach Sewo and a young athlete pose together flexing on the camp field.",
    caption: "Earned confidence — show up, stack wins.",
  },
];
