import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember — Where slow love finds you" },
      { name: "description", content: "A dating app for people who'd rather write a letter than a one-liner." },
      { property: "og:title", content: "Ember — Where slow love finds you" },
      { property: "og:description", content: "A dating app for people who'd rather write a letter than a one-liner." },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient dusk wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ background: "var(--gradient-dusk)" }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 lg:grid-cols-12">
        {/* Editorial left — image + poetry */}
        <section className="relative col-span-1 hidden lg:col-span-7 lg:flex lg:flex-col lg:justify-between p-10 xl:p-16">
          <header className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--gradient-ember)" }}>
              <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">ember</span>
          </header>

          <div className="relative my-10 flex-1">
            <div
              className="absolute -left-6 top-6 h-[80%] w-[55%] rotate-[-4deg] rounded-2xl border border-border/60 bg-card"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
            <img
              src={heroImg}
              alt="Two silhouettes at sunset"
              width={1080}
              height={1600}
              className="relative ml-12 h-[85%] w-[70%] rotate-[2deg] rounded-2xl object-cover"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
            <div className="absolute bottom-6 right-2 max-w-xs rounded-xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm">
              <p className="font-display text-sm italic text-muted-foreground">
                "He sent me a recipe before he sent me a selfie. Reader, I married him."
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">— Maya, joined 2024</p>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Volume Ⅶ · Slow dating
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-foreground xl:text-6xl">
              Where slow love<br />
              <em className="font-light" style={{ background: "var(--gradient-ember)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                finds you.
              </em>
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              No swiping. No streaks. Just thoughtful introductions, one a week, written by humans who've actually read your profile.
            </p>
          </div>
        </section>

        {/* Login right */}
        <section className="col-span-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-5 lg:px-12 xl:px-16">
          <div className="lg:hidden mb-10 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--gradient-ember)" }}>
              <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight">ember</span>
          </div>

          <div
            className="relative rounded-3xl border border-border/70 bg-card/80 p-8 backdrop-blur-xl sm:p-10"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Still glowing</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-foreground">
              Your heart left a<br />bookmark here.
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-8 space-y-5"
            >
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                <div className="group relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@somewhere.lovely"
                    className="h-12 w-full rounded-xl border border-border bg-background/60 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Password
                  <a href="#" className="normal-case tracking-normal text-primary hover:underline">Forgot?</a>
                </span>
                <div className="group relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="h-12 w-full rounded-xl border border-border bg-background/60 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </div>
              </label>

              <button
                type="submit"
                className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl font-medium text-primary-foreground transition-transform active:scale-[0.98]"
                style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-soft)" }}
              >
                <span>Light the ember</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or
                <span className="h-px flex-1 bg-border" />
              </div>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background/60 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"/>
                </svg>
                Continue with Google
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              New to ember?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Request an invitation
              </a>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground/80">
            By signing in you agree to be kind. And to our{" "}
            <a href="#" className="underline">house rules</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
