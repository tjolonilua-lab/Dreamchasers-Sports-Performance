import { CampGalleryGrid } from "@/components/sections/CampGalleryGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  CAMP_GALLERY_PHOTOS,
  type CampGalleryPhoto,
} from "@/lib/camp-gallery";
import { YOUTH_SPORTS_PERFORMANCE_CAMP } from "@/lib/site-content";
import { access } from "node:fs/promises";
import path from "node:path";

async function resolvePresentPhotos(
  photos: CampGalleryPhoto[],
): Promise<CampGalleryPhoto[]> {
  const present: CampGalleryPhoto[] = [];
  for (const photo of photos) {
    const relative = photo.src.replace(/^\//, "");
    const absolute = path.join(process.cwd(), "public", relative);
    try {
      await access(absolute);
      present.push(photo);
    } catch {
      // Skip missing assets so the section can ship before files land.
    }
  }
  return present;
}

export async function CampGallery() {
  const photos = await resolvePresentPhotos(CAMP_GALLERY_PHOTOS);
  if (!photos.length) return null;

  const camp = YOUTH_SPORTS_PERFORMANCE_CAMP;

  return (
    <SectionShell
      id="gallery"
      eyebrow="From the field"
      title="Youth Camp Gallery"
      description={`Real sessions from ${camp.title} — tap through camp photos without the scroll marathon.`}
      density="default"
      animateEnter
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-dsp-bg via-dsp-navy/30 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.12),transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,149,199,0.1),transparent_70%)] blur-2xl"
        aria-hidden
      />

      <div className="relative z-[1]">
        <CampGalleryGrid photos={photos} />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
          <ButtonLink
            href={camp.registerInquiryHref}
            className="w-full justify-center sm:w-auto sm:min-w-[220px]"
          >
            Join the next camp
          </ButtonLink>
          <ButtonLink
            href="#youth-camp"
            variant="outline"
            className="w-full justify-center sm:w-auto sm:min-w-[220px]"
          >
            Camp details
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
