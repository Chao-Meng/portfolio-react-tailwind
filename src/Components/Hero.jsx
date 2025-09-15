
export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl  py-16 grid items-center gap-10 md:grid-cols-2">
      {/* for sub-elements in this div */}
      <div className="space-y-6">
        <p className="text-sm tracking-widest text-teal-600">WELCOME</p>
        {/* tight means line-height */}
        <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold text-teal-600 dark:text-zinc-100">
          Hey There,<br />I’m Athena
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-prose">
          I build software and data-driven solutions, bridging development skills with analytical thinking, and I love what I do.
        </p>
        <div className="flex gap-3">
          <a
            href="/AthenaMeng-resume.pdf"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-teal-600 text-white dark:bg-white dark:text-zinc-900"
          >
            Download CV
          </a>
          <a
            href="mailto:cmeng036@gmail.com"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-600"
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="relative">
        <div
          className="
            h-[420px] sm:h-[480px] 
            overflow-hidden rounded-3xl 
            shadow-xl ring-1 ring-black/5
            bg-white dark:bg-zinc-900
          "
        >
          <img
            src={`${import.meta.env.BASE_URL}Athena_blur.jpg`}
            alt="Athena portrait"
            className="
              h-full w-full object-cover object-top
              select-none pointer-events-none
              
              [mask-image:linear-gradient(to_bottom,black_85%,transparent)]
            "
          />
        </div>
      </div>
    </section>
  );
}
