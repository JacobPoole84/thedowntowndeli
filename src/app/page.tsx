import Script from "next/script";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedowntowndeli.com";
const restaurantPhone = process.env.NEXT_PUBLIC_RESTAURANT_PHONE;
const restaurantEmail = process.env.NEXT_PUBLIC_RESTAURANT_EMAIL;
const streetAddress = process.env.NEXT_PUBLIC_STREET_ADDRESS;
const postalCode = process.env.NEXT_PUBLIC_POSTAL_CODE;
const latitude = process.env.NEXT_PUBLIC_LATITUDE;
const longitude = process.env.NEXT_PUBLIC_LONGITUDE;

const socialProfiles = [
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_X_URL,
].filter((value): value is string => Boolean(value));

export const metadata: Metadata = {
  title: "Take-Out and Delivery Deli in Florence, SC",
  description:
    "Order premium deli take-out and delivery from The Downtown Deli - Florence. Crafted sandwiches, quality ingredients, and excellent service.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Take-Out and Delivery Deli in Florence, AL",
    description:
      "Order premium deli take-out and delivery from The Downtown Deli - Florence.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Downtown Deli - Florence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Take-Out and Delivery Deli in Florence, AL",
    description:
      "Order premium deli take-out and delivery from The Downtown Deli - Florence.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  const squareOrderLink = "https://square.link/u/REPLACE_WITH_YOUR_LINK";
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "The Downtown Deli - Florence",
    image: `${siteUrl}/opengraph-image`,
    url: siteUrl,
    servesCuisine: "Deli",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...(streetAddress ? { streetAddress } : {}),
      addressLocality: "Florence",
      addressRegion: "AL",
      ...(postalCode ? { postalCode } : {}),
      addressCountry: "US",
    },
    areaServed: "Florence, AL",
    acceptsReservations: "False",
    hasMenu: squareOrderLink,
    potentialAction: {
      "@type": "OrderAction",
      target: squareOrderLink,
      name: "Order online for take-out or delivery",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "16:00",
      },
    ],
  };

  if (restaurantPhone) {
    localBusinessSchema.telephone = restaurantPhone;
  }

  if (restaurantEmail) {
    localBusinessSchema.email = restaurantEmail;
  }

  if (latitude && longitude) {
    localBusinessSchema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  if (socialProfiles.length > 0) {
    localBusinessSchema.sameAs = socialProfiles;
  }

  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden bg-ivory text-ink">
      <Script
        id="local-business-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-gold-mist blur-3xl" />
        <div className="absolute -right-24 top-52 h-80 w-80 rounded-full bg-claret-mist blur-3xl" />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-8 sm:px-10 lg:px-14">
        <header className="mb-20 flex items-center justify-between gap-4 border-b border-black/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-ink/70">
              Florence, SC
            </p>
            <h1 className="font-title text-2xl tracking-wide sm:text-3xl">
              The Downtown Deli - Florence
            </h1>
          </div>
          <a
            className="hidden rounded-full border border-ink/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-ivory sm:block"
            href={squareOrderLink}
          >
            Order Online
          </a>
        </header>

        <section className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink/65">
              Take-Out and Delivery Only
            </p>
            <h2 className="font-title text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Crafted sandwiches.
              <br />
              White-glove service.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
              Every order is built with premium ingredients, strict kitchen
              standards, and a service mindset that treats your table like our
              own.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink/90"
                href={squareOrderLink}
              >
                Order on Square
              </a>
              <p className="text-sm uppercase tracking-[0.16em] text-ink/60">
                Fast pickup and local delivery
              </p>
            </div>
          </div>

          <aside className="stagger-panel rounded-3xl border border-ink/10 bg-white/70 p-7 backdrop-blur-md sm:p-10">
            <h3 className="font-title text-3xl">Today&apos;s Promise</h3>
            <ul className="mt-6 space-y-4 text-base text-ink/80">
              <li>House-roasted meats and hand-cut produce</li>
              <li>Premium cheeses and artisan breads</li>
              <li>Attentive updates from kitchen to doorstep</li>
            </ul>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                Service Hours
              </p>
              <p className="mt-2 font-medium">Mon - Sat: 11:00 AM - 8:00 PM</p>
              <p className="font-medium">Sunday: 11:00 AM - 4:00 PM</p>
            </div>
          </aside>
        </section>

        <section className="mt-16 grid gap-5 sm:grid-cols-3">
          <article className="fade-up rounded-2xl border border-ink/10 bg-white/65 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/55">01</p>
            <h3 className="mt-2 font-title text-2xl">Quality First</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              We source ingredients with care and prepare each order fresh for
              every customer.
            </p>
          </article>
          <article className="fade-up rounded-2xl border border-ink/10 bg-white/65 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/55">02</p>
            <h3 className="mt-2 font-title text-2xl">Delivery Precision</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Organized packaging and timing keep your meal exactly as intended
              on arrival.
            </p>
          </article>
          <article className="fade-up rounded-2xl border border-ink/10 bg-white/65 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/55">03</p>
            <h3 className="mt-2 font-title text-2xl">Genuine Hospitality</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Friendly communication, dependable service, and details handled
              with pride.
            </p>
          </article>
        </section>

        <a
          className="mt-14 inline-flex w-full items-center justify-center rounded-2xl border border-claret/45 bg-claret px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-claret/90 sm:w-auto"
          href={squareOrderLink}
        >
          Place Your Order Through Square
        </a>

        <footer className="mt-10 text-sm text-ink/60">
          The Downtown Deli - Florence • Take-Out & Delivery
        </footer>
      </main>
    </div>
  );
}
