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
  {
    src: "/images/camp/youth-camp-07.jpg",
    alt: "Young athletes training during Youth Sports Performance Camp on the grass field.",
    caption: "On the grass — reps that build speed and confidence.",
  },
  {
    src: "/images/camp/youth-camp-08.jpg",
    alt: "A coach works with young athletes during Youth Sports Performance Camp.",
    caption: "Hands-on coaching — fundamentals that stick.",
  },
  {
    src: "/images/camp/youth-camp-09.jpg",
    alt: "Youth athletes running a drill during Youth Sports Performance Camp.",
    caption: "Tempo and focus — every step counts.",
  },
  {
    src: "/images/camp/youth-camp-10.jpg",
    alt: "Young athletes in camp shirts during an outdoor training session.",
    caption: "Camp culture — show up ready to work.",
  },
  {
    src: "/images/camp/youth-camp-11.jpg",
    alt: "A young athlete carries a football across the field at Youth Sports Performance Camp.",
    caption: "Ball in hand — eyes up, feet driving.",
  },
  {
    src: "/images/camp/youth-camp-12.jpg",
    alt: "Youth Sports Performance Camp athletes lined up for a field drill.",
    caption: "Group reps — compete and improve together.",
  },
  {
    src: "/images/camp/youth-camp-13.jpg",
    alt: "A young athlete smiles during Youth Sports Performance Camp training.",
    caption: "Confidence shows — fun and finish on every rep.",
    featured: true,
  },
  {
    src: "/images/camp/youth-camp-14.jpg",
    alt: "Young athletes sprinting during Youth Sports Performance Camp.",
    caption: "Explosive speed — building habits that transfer.",
  },
  {
    src: "/images/camp/youth-camp-15.jpg",
    alt: "Coach instruction during Youth Sports Performance Camp on the track.",
    caption: "Form first — cues that carry to game day.",
  },
  {
    src: "/images/camp/youth-camp-16.jpg",
    alt: "Youth athletes training with cones and hurdles at camp.",
    caption: "Agility work — quick feet, sharp cuts.",
  },
  {
    src: "/images/camp/youth-camp-17.jpg",
    alt: "Young athletes resting between reps at Youth Sports Performance Camp.",
    caption: "Camp community — athletes pushing each other.",
  },
  {
    src: "/images/camp/youth-camp-18.jpg",
    alt: "Youth Sports Performance Camp athletes on the field after a training block.",
    caption: "Another rep in the books — strength, speed, confidence.",
  },
];
