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
import { CPSecretSkills } from "@/components/sections/cp/cp-secret-skills";
import { CPSecretTopics } from "@/components/sections/cp/cp-secret-topics";

export const metadata: Metadata = {
  title: "Competitive Programming",
  description:
    "Landing page cabang Competitive Programming INACOMP 2.0 untuk siswa/i SMA/SMK/sederajat dengan format maksimal 2 orang per tim.",
};

export default function CompetitiveProgrammingPage() {
  return (
    <div className="page-shell page-shell-cp">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(83,170,161,0.18),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(45,73,93,0.12),_transparent_20%)]" />
      <CPHero />
      <CPAbout />
      <CPParticipantInfo />
      <CPFormat />
      <CPSecretTopics />
      <CPSecretSkills />
      <CPSecretScoring />
      <CPGallery />
      <CPFaq />
      <CPGuidebookCTA />
      <CPClosingCTA />
    </div>
  );
}

