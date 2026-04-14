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

const pageTitle = "Cisco Networking Competition untuk Siswa SMA/SMK";
const pageDescription =
  "Cisco Networking Competition INACOMP 2.0 adalah lomba networking untuk siswa SMA/SMK dengan tim maksimal 2 orang, final presentation, guidebook resmi, FAQ, dan informasi kompetisi jaringan komputer nasional pelajar.";
const pageUrl = "/cisco-networking";
const ogImage = "/assets/booklet-cisco.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cisco networking competition",
    "lomba networking sma smk",
    "kompetisi jaringan komputer siswa",
    "lomba cisco networking indonesia",
    "kompetisi jaringan komputer nasional pelajar",
    "INACOMP 2.0",
    "Cisco Networking INACOMP",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | INACOMP 2.0`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "id_ID",
    siteName: "INACOMP 2.0",
    images: [
      {
        url: ogImage,
        alt: "Cisco Networking Competition INACOMP 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | INACOMP 2.0`,
    description: pageDescription,
    images: [ogImage],
  },
};

export default function CiscoNetworkingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://inacomp.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cisco Networking",
            item: `https://inacomp.vercel.app${pageUrl}`,
          },
        ],
      },
      {
        "@type": "Event",
        name: "Cisco Networking Competition INACOMP 2.0",
        description: pageDescription,
        url: `https://inacomp.vercel.app${pageUrl}`,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        startDate: "2026-05-21",
        endDate: "2026-06-12",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
        competitor: {
          "@type": "Audience",
          audienceType: "Siswa SMA/SMK/sederajat",
        },
        organizer: {
          "@type": "Organization",
          name: "BEM Prodi Pendidikan Teknik Informatika dan Komputer Universitas Negeri Jakarta",
          url: "https://inacomp.vercel.app/",
        },
        image: [`https://inacomp.vercel.app${ogImage}`],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page-shell page-shell-cisco">
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-network-mesh opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_16%_8%,_rgba(83,170,161,0.18),_transparent_24%),radial-gradient(circle_at_84%_14%,_rgba(45,73,93,0.22),_transparent_24%)]" />
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
    </>
  );
}
