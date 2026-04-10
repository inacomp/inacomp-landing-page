import type { Metadata } from "next";
import { CiscoAbout } from "@/components/sections/cisco/cisco-about";
import { CiscoClosingCTA } from "@/components/sections/cisco/cisco-closing-cta";
import { CiscoFaq } from "@/components/sections/cisco/cisco-faq";
import { CiscoFormat } from "@/components/sections/cisco/cisco-format";
import { CiscoGallery } from "@/components/sections/cisco/cisco-gallery";
import { CiscoGuidebookCTA } from "@/components/sections/cisco/cisco-guidebook-cta";
import { CiscoHero } from "@/components/sections/cisco/cisco-hero";
import { CiscoParticipantInfo } from "@/components/sections/cisco/cisco-participant-info";
import { CiscoSecretSkills } from "@/components/sections/cisco/cisco-secret-skills";
import { CiscoSecretTopics } from "@/components/sections/cisco/cisco-secret-topics";

export const metadata: Metadata = {
  title: "Cisco Networking",
  description:
    "Landing page cabang Cisco Networking INACOMP 2.0 untuk siswa/i SMA/SMK/sederajat dengan format maksimal 2 orang per tim dan final presentation.",
};

export default function CiscoNetworkingPage() {
  return (
    <div className="pb-10">
      <CiscoHero />
      <CiscoAbout />
      <CiscoParticipantInfo />
      <CiscoFormat />
      <CiscoSecretTopics />
      <CiscoSecretSkills />
      <CiscoGallery />
      <CiscoFaq />
      <CiscoGuidebookCTA />
      <CiscoClosingCTA />
    </div>
  );
}
