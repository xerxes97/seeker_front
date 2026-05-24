export default function BrandHero() {
  return (
    <section className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-surface-container-lowest/80 to-transparent" />
      <img
        className="absolute inset-0 object-cover w-full h-full opacity-60 scale-105"
        alt="Abstract tech visualization"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEHtRR3zBUIVb7uQ-1jpdpGmJE-Rkc8kl2NrdPw1gDr235rFhT5wDCVOKonNp5DshmMASX0kE2GycBkVBkXPH9TU-ox3IEEaYGV8nrmx9-dnjDxFOewMIyBe-bcQ76V2BuPQcCAx5tI6VYcSR6mppGPRccvFOjzMxSHhNGYu5Y2c65UmqRu-OMsdGjmLvD_eAnCwSD6kENirxiA0JiC0Fvptit6wrRkuSRsMU_mgES-6JFRjv3uQY9Q7UNIkrrDGcav92HYwZWHA"
      />
      <div className="relative z-20 flex flex-col justify-between p-margin-desktop w-full">
        <div>
          <h1 className="font-display-lg text-display-lg text-primary tracking-tighter">
            CareerArch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mt-stack-md">
            Eleva tu carrera profesional con inteligencia predictiva y gestión
            de oportunidades de alto impacto.
          </p>
        </div>
        {/* <div className="glass-effect p-stack-lg rounded-xl border border-outline-variant max-w-sm">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-stack-sm">
            Premium Insights
          </span>
          <p className="font-body-md text-body-md text-on-surface">
            &ldquo;La plataforma que transformó mi búsqueda pasiva en una
            estrategia de crecimiento agresiva.&rdquo;
          </p>
          <div className="mt-stack-md flex items-center gap-stack-sm">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container">
                workspace_premium
              </span>
            </div>
            <div>
              <p className="font-label-md text-label-md">Alex Rivera</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Lead Developer @ FinTech
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
