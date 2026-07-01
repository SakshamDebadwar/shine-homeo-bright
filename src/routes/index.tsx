import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor-sushma-clean.jpg";
import {
  Phone, MapPin, Clock, Star, Leaf, HeartPulse, Baby, Brain, Sparkles,
  Activity, Wind, Droplets, Bone, Moon, Scale, ShieldCheck, Flower2, Instagram,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Laxmi Homeopathic Clinic — Trusted Homeopathy in Pimpri Chinchwad" },
      {
        name: "description",
        content:
          "Gentle, effective homeopathic treatment in Chikhali, Pimpri-Chinchwad. 4.9★ rated clinic treating asthma, skin, hair, PCOS, thyroid, migraine, diabetes and more.",
      },
      { property: "og:title", content: "Shri Laxmi Homeopathic Clinic" },
      { property: "og:description", content: "Trusted homeopathy in Pimpri-Chinchwad. 4.9★ care for the whole family." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PHONE = "093708 69024";
const PHONE_TEL = "tel:+919370869024";
const ADDRESS =
  "Shop no 41, Diagonal Mall, Spine Rd, Raje Shivaji Nagar, Sector 16, Chikhali, Pimpri-Chinchwad, Maharashtra 411019";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shri+Laxmi+Homeopathic+Clinic+Diagonal+Mall+Chikhali+Pimpri+Chinchwad";

const services = [
  { icon: Wind, name: "Asthma Care", desc: "Reduce attacks and dependency on inhalers with constitutional homeopathy." },
  { icon: Sparkles, name: "Hair Fall Treatment", desc: "Address root causes — stress, hormones, deficiencies — for lasting regrowth." },
  { icon: Flower2, name: "Skin Allergy Care", desc: "Gentle, steroid-free relief from eczema, hives, rashes and chronic itching." },
  { icon: HeartPulse, name: "Chronic Diseases", desc: "Long-term support for BP, cholesterol and lifestyle conditions." },
  { icon: Baby, name: "Child Health Care", desc: "Safe remedies for coughs, colds, immunity and growth in kids." },
  { icon: Bone, name: "Joint Pain Relief", desc: "Ease arthritis, sciatica and stiffness without long-term painkillers." },
  { icon: Brain, name: "Migraine Treatment", desc: "Cut frequency and intensity of headaches with individualised care." },
  { icon: Droplets, name: "Digestive Disorders", desc: "Relief from acidity, IBS, bloating and chronic indigestion." },
  { icon: Moon, name: "Stress & Anxiety", desc: "Calm the mind and restore balance with non-sedating remedies." },
  { icon: Activity, name: "Thyroid Treatment", desc: "Regulate hypo/hyperthyroid symptoms alongside your reports." },
  { icon: ShieldCheck, name: "PCOS / PCOD Care", desc: "Regularise cycles, manage weight and improve fertility naturally." },
  { icon: Leaf, name: "Menstrual Disorders", desc: "Relief from painful, irregular or heavy periods at the root." },
  { icon: Droplets, name: "Urinary Problems", desc: "Treat recurring UTIs, stones and kidney concerns gently." },
  { icon: Moon, name: "Sleep Disorders", desc: "Restore deep, natural sleep without habit-forming medication." },
  { icon: HeartPulse, name: "Piles Treatment", desc: "Non-surgical relief from piles, fissures and fistula." },
  { icon: Activity, name: "Diabetes Care", desc: "Support blood sugar control and prevent complications." },
  { icon: Scale, name: "Weight Management", desc: "Sustainable weight loss addressing metabolism and hormones." },
  { icon: Sparkles, name: "Skin Care", desc: "Clearer skin for acne, pigmentation and psoriasis over time." },
];

const reviews = [
  { name: "Saksham Srinivas", text: "Dr. Sushma gives the best homeopathic treatment. Kind, patient and truly effective — highly recommended.", when: "a year ago", rating: 5 },
  { name: "Priya Marathe", text: "Struggled with skin allergies for years. After a few months here I finally see clear, healthy skin. Life-changing!", when: "8 months ago", rating: 5 },
  { name: "Rahul Kulkarni", text: "Great experience. Thorough consultation and the medicines actually work — no side effects at all.", when: "3 months ago", rating: 5 },
  { name: "Anjali Deshpande", text: "My son's recurring cold and asthma have reduced remarkably. Doctor listens patiently and explains everything.", when: "5 months ago", rating: 5 },
  { name: "Vikram Shinde", text: "Chronic migraine — tried everything. Homeopathy here has genuinely reduced the frequency. Grateful.", when: "10 months ago", rating: 5 },
  { name: "Sneha Patil", text: "PCOS treatment has been very effective. Cycles are regular now and I feel much better overall.", when: "6 months ago", rating: 5 },
  { name: "Rohan Jadhav", text: "Best clinic in Chikhali. Clean, calm and Dr. Sushma is very knowledgeable. Reasonable fees too.", when: "2 months ago", rating: 5 },
  { name: "Kavita Bhosale", text: "Joint pain relief has been amazing. I was skeptical about homeopathy but the results speak for themselves.", when: "1 year ago", rating: 5 },
  { name: "Amit Pawar", text: "Whole family visits here now. From kids to grandparents — safe, gentle, and it works.", when: "4 months ago", rating: 5 },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary-gradient grid place-items-center shadow-soft">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg">Shri Laxmi</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Homeopathic Clinic</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </nav>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="bg-hero relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-medium shadow-soft">
              <span className="flex items-center gap-1 text-accent-foreground">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </span>
              <span className="text-muted-foreground">4.9 · 1000+ Patients Treated</span>
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              Gentle healing,
              <br />
              <span className="italic text-primary">natural results.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Trusted homeopathic consultant in Chikhali, Pimpri-Chinchwad — safe, personalised
              treatment for the whole family from skin & hair to chronic care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-warm transition"
              >
                <Phone className="w-4 h-4" /> Book Consultation
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 font-medium hover:border-primary/40 transition"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                Open today · Closes 8:30 pm
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-warm-gradient blur-3xl opacity-60" />
            <div className="absolute -bottom-8 -right-4 w-52 h-52 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Homeopathic remedies with fresh herbs and marigold"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-warm w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-4 flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-primary-gradient grid place-items-center">
                <HeartPulse className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold">20+ Years</div>
                <div className="text-xs text-muted-foreground">of holistic care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border/60 bg-card">
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "4.9★", l: "Google Rating" },
            { n: "1000+", l: "Patients Treated" },
            { n: "18+", l: "Conditions Treated" },
            { n: "100%", l: "Natural Remedies" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-primary">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What we treat</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Personalised care for every stage of life
          </h2>
          <p className="mt-4 text-muted-foreground">
            From everyday concerns to chronic conditions, our homeopathic approach
            treats the root cause — safely, gently and without side effects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-card rounded-2xl p-5 border border-border/60 hover:border-primary/40 hover:shadow-soft transition"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center group-hover:bg-primary-gradient transition">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <div className="mt-4 font-medium">{s.name}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-secondary/40">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative">
            <img
              src={doctorImg}
              alt="Homeopathic doctor at Shri Laxmi Clinic"
              width={1000}
              height={1200}
              loading="lazy"
              className="rounded-3xl shadow-soft object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary-gradient text-primary-foreground rounded-2xl px-5 py-4 shadow-warm">
              <div className="text-xs uppercase tracking-widest opacity-80">Rated</div>
              <div className="font-display text-2xl">4.9 / 5 ★</div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Meet the doctor</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Dr. Sushma Debadwar
            </h2>
            <div className="mt-2 text-muted-foreground">B.H.M.S , M.D , Classical Homeopath</div>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              At Shri Laxmi Homeopathic Clinic, every consultation with Dr. Sushma
              begins with understanding you — your history, lifestyle and lived
              experience. She then crafts a gentle, individualised remedy plan
              grounded in classical homeopathy, trusted by families across Pimpri-Chinchwad.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { i: Leaf, t: "100% Natural", d: "No steroids or side effects" },
                { i: ShieldCheck, t: "Safe for all ages", d: "Infants to elders" },
                { i: HeartPulse, t: "Root-cause care", d: "Not just symptoms" },
                { i: Sparkles, t: "Follow-up support", d: "Progress at every step" },
              ].map((f) => (
                <li key={f.t} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-card grid place-items-center shrink-0 shadow-soft">
                    <f.i className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Patient stories</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Loved by our community</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            4.9 on Google
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-gradient grid place-items-center font-display text-lg text-accent-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.when}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="bg-hero">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Visit us</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Come by the clinic</h2>
            <p className="mt-4 text-muted-foreground">
              Walk-ins welcome. Call ahead to book a quiet consultation slot.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-card grid place-items-center shrink-0 shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{ADDRESS}</div>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline mt-1 inline-block">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-card grid place-items-center shrink-0 shadow-soft">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href={PHONE_TEL} className="text-sm text-muted-foreground hover:text-primary">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-card grid place-items-center shrink-0 shadow-soft">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-sm text-muted-foreground">Mon – Sat · 10:00 am – 8:30 pm</div>
                  <div className="text-sm text-muted-foreground">Sunday · By appointment</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-warm border border-border/60 min-h-[380px] bg-card">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Diagonal+Mall+Spine+Rd+Chikhali+Pimpri+Chinchwad&output=embed"
              className="w-full h-full min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="rounded-3xl bg-primary-gradient text-primary-foreground p-10 md:p-16 shadow-warm relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-warm-gradient opacity-30 blur-2xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl">Start your healing journey today.</h2>
            <p className="mt-4 opacity-90 text-lg">
              A single call is all it takes. Speak with our doctor and find the
              right natural remedy for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-6 py-3 font-medium hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition"
              >
                <MapPin className="w-4 h-4" /> Visit clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-gradient grid place-items-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span>© {new Date().getFullYear()} Shri Laxmi Homeopathic Clinic</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/shreelaxmihomeopathyclinic/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition"
            >
              <Instagram className="w-4 h-4" /> @shreelaxmihomeopathyclinic
            </a>
            <span className="hidden md:inline">·</span>
            <span>Chikhali, PCMC · {PHONE}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
