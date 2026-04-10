import type { Metadata } from "next";
import { CPAbout } from "@/components/sections/cp/cp-about";
import { CPClosingCTA } from "@/components/sections/cp/cp-closing-cta";
import { CPFaq } from "@/components/sections/cp/cp-faq";
import { CPFormat } from "@/components/sections/cp/cp-format";
import { CPGallery } from "@/components/sections/cp/cp-gallery";
import { CPGuidebookCTA } from "@/components/sections/cp/cp-guidebook-cta";
import { CPHero } from "@/components/sections/cp/cp-hero";
import { CPParticipantInfo } from "@/components/sections/cp/cp-participant-info";
import { CPSecretScoring } from "@/components/sections/cp/cp-secret-scoring";
import { CPSecretTopics } from "@/components/sections/cp/cp-secret-topics";

export const metadata: Metadata = {
  title: "Competitive Programming",
  description:
    "Landing page cabang Competitive Programming INACOMP 2.0 untuk siswa/i SMA/SMK/sederajat dengan format maksimal 2 orang per tim.",
};

export default function CompetitiveProgrammingPage() {
  return (
    <div className="pb-10">
      <CPHero />
      <CPAbout />
      <CPParticipantInfo />
      <CPFormat />
      <CPSecretTopics />
      <CPSecretScoring />
      <CPGallery />
      <CPFaq />
      <CPGuidebookCTA />
      <CPClosingCTA />
    </div>
  );
}
