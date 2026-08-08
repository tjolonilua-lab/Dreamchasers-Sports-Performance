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
  /** Mosaic emphasis — larger tile in the grid */
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
];
