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

const pageUrl = "https://inacomp.vercel.app/competitive-programming";
const pageTitle = "Competitive Programming INACOMP 2.0";
const pageDescription =
  "Landing page Competitive Programming INACOMP 2.0 untuk siswa/i SMA/SMK/sederajat. Ikuti kompetisi coding siswa tingkat nasional dengan format tim maksimal 2 orang, informasi lomba, FAQ, galeri, dan guidebook resmi.";
const pageKeywords = [
  "competitive programming inacomp",
  "lomba competitive programming sma smk",
  "kompetisi coding siswa",
  "lomba algoritma nasional",
  "competitive programming competition indonesia pelajar",
  "INACOMP 2.0",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "INACOMP 2.0",
      item: "https://inacomp.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageTitle,
      item: pageUrl,
    },
  ],
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: pageTitle,
  description: pageDescription,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  startDate: "2026-05-21",
  endDate: "2026-06-12",
  url: pageUrl,
  image: ["https://inacomp.vercel.app/favicon/android-chrome-512x512.png"],
  organizer: {
    "@type": "Organization",
    name: "BEM PTIK Universitas Negeri Jakarta",
    url: "https://inacomp.vercel.app/",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Siswa/i SMA/SMK/sederajat",
  },
  location: {
    "@type": "VirtualLocation",
    url: pageUrl,
  },
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: "/competitive-programming",
  },
  openGraph: {
    title: `${pageTitle} | Kompetisi Coding Siswa`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | INACOMP 2.0`,
    description: pageDescription,
    images: ["/favicon/android-chrome-512x512.png"],
  },
};

export default function CompetitiveProgrammingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, eventSchema]),
        }}
      />
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
    </>
  );
}

