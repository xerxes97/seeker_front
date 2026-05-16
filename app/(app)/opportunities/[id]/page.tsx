import MatchScore from "@/components/common/match-score";
import Tag from "@/components/common/tag";
import SectionCard from "@/components/common/section-card";
import Button from "@/components/common/button";
import TextField from "@mui/material/TextField";

export default function OpportunityDetailPage() {
  return (
    <main className="h-[calc(100vh-4rem)] overflow-y-auto bg-background p-6">
      {/* Hero */}
      <section className="relative w-full h-80 flex items-end px-margin-desktop pb-stack-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Corporate office background"
            className="w-full h-full object-cover opacity-30 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UZIrIJ4VW9I6pvjjU7e2CP6Khq9h7ufESqeVVULgS566J4RpnYqLzNvcAje1uDu16BEt2DeJ1OxndiVu_RYegvX04ZBvTTYQ1n1KnJClgXHmozfmkpfhodfUsXKceyBJe1IGK70hUI6xYk7gOriwRm7M6-oWj6uzkrxXxBU_c9YOBRCOt9snzvc13Ssyk9AwbCYvIPnY72OikDfhR5ihv3I-n3W5ci9HkbkTBAchbKUg9WNTRbXr9-l-zPbiuoUDJZQkeNL0yQ"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 flex items-start gap-stack-lg w-full">
          <div className="w-24 h-24 rounded-xl glass-panel flex items-center justify-center p-stack-sm">
            <img
              alt="Company Logo"
              className="w-full h-full object-contain rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGLGKs2kW2BJDJa73xN1uEHu04BHW_prR2ws89zRH5Q6Ak67WcMrSyGXm99f5vjEGp7yMqdxeJmkdaMOlSh6pNlDmIGmXojw3w7VmDKtLBlN6jczQTX-e7wacoKB5lixDuUFyky23PKlsWVFW_jfLAHP2faYFQog3IGVZGxOqUIcMCmzyhmurouas1vwbuPO8gL_yPoh43e-6TDCQJe_6NQyCGB6ZR5SZommr8wq1SnU_5wdWnLynhRColVXtb5i_oVlhWZ65jKA"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-stack-sm mb-unit">
              <Tag variant="secondary">Full-time</Tag>
              <Tag>Remote</Tag>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Senior Product Designer
            </h2>
            <div className="flex items-center gap-stack-md mt-unit text-on-surface-variant font-body-md text-body-md">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">
                  domain
                </span>
                Quantum Systems Inc.
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                San Francisco, CA (Hybrid)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-stack-md">
            <div className="text-right">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Match Score
              </p>
              <p className="font-display-lg text-display-lg text-primary">
                94%
              </p>
            </div>
            <MatchScore
              percentage={94}
              size={64}
              strokeWidth={4}
              label="High"
            />
          </div>
        </div>
      </section>

      {/* Bento Content Grid */}
      <div className="px-margin-desktop py-stack-lg grid grid-cols-12 gap-6 max-w-container-max mx-auto mt-12">
        {/* Left Column */}
        <div className="col-span-8 space-y-gutter">
          {/* Compatibility */}
          <SectionCard>
            <div className="flex items-center justify-between mb-stack-md">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                Compatibilidad
              </h3>
              <span className="text-on-surface-variant font-label-md text-label-md">
                8 de 10 habilidades coinciden
              </span>
            </div>
            <div className="grid grid-cols-2 gap-stack-md">
              <div className="space-y-stack-sm">
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Habilidades Requeridas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma Expert",
                    "Design Systems",
                    "Prototyping",
                    "UX Research",
                  ].map((skill) => (
                    <Tag key={skill} variant="primary" icon="check">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="space-y-stack-sm">
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Gap de Habilidades
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Three.js"].map((skill) => (
                    <Tag key={skill} variant="error" icon="error">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* AI Insights */}
          <SectionCard glow>
            <div className="flex items-center gap-stack-md mb-stack-sm">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Insights de IA
              </h3>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              &ldquo;Basado en tu reciente proyecto en{" "}
              <strong>Lumina Design</strong>, tienes una ventaja competitiva
              del 15% sobre otros candidatos. Tu experiencia escalando
              librerías de componentes se alinea perfectamente con el objetivo
              de Quantum Systems de unificar su suite de productos.&rdquo;
            </p>
            <div className="mt-stack-md flex gap-stack-md">
              {[
                {
                  label: "Probabilidad de Entrevista",
                  value: "Alta",
                },
                {
                  label: "Rango Salarial Estimado",
                  value: "$140k - $185k",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 p-stack-sm bg-surface-container-low rounded-lg border border-outline-variant"
                >
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    {stat.label}
                  </p>
                  <p className="font-headline-md text-headline-md text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Benefits */}
          <SectionCard>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
              Beneficios
            </h3>
            <div className="grid grid-cols-3 gap-stack-md">
              {[
                {
                  icon: "health_and_safety",
                  title: "Salud Integral",
                  desc: "Seguro premium 100% cubierto para ti y tu familia.",
                },
                {
                  icon: "home_work",
                  title: "Flexibilidad Total",
                  desc: "Semanas de 4 días opcionales y presupuesto para home office.",
                },
                {
                  icon: "school",
                  title: "Crecimiento",
                  desc: "$5,000 USD anuales para cursos y conferencias.",
                },
              ].map((ben) => (
                <div key={ben.title} className="flex flex-col gap-unit">
                  <span className="material-symbols-outlined text-secondary">
                    {ben.icon}
                  </span>
                  <p className="font-label-md text-label-md text-on-surface">
                    {ben.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {ben.desc}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Job Description */}
          <SectionCard>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
              Sobre el Rol
            </h3>
            <div className="space-y-stack-md font-body-md text-body-md text-on-surface-variant">
              <p>
                Como Senior Product Designer en Quantum Systems, serás
                responsable de liderar la visión visual de nuestra plataforma
                de análisis de datos de próxima generación. Trabajarás
                estrechamente con ingenieros y product managers para
                transformar problemas complejos en interfaces intuitivas y
                elegantes.
              </p>
              <ul className="list-disc pl-5 space-y-unit">
                <li>
                  Liderar el diseño de punta a punta para el módulo de
                  visualización predictiva.
                </li>
                <li>
                  Colaborar en la evolución de nuestro sistema de diseño
                  &ldquo;Aether&rdquo;.
                </li>
                <li>
                  Mentorizar a diseñadores junior y realizar revisiones de
                  diseño semanales.
                </li>
              </ul>
            </div>
          </SectionCard>
        </div>

        {/* Right Column */}
        <aside className="col-span-4 space-y-gutter">
          <div className="glass-panel p-stack-lg rounded-xl sticky top-stack-md">
            <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-stack-md">
              Acciones
            </h4>
            <div className="space-y-stack-sm">
              {[
                {
                  icon: "send",
                  label: "Postular Ahora",
                  variant: "contained" as const,
                  color: "primary" as const,
                  fill: true,
                },
                {
                  icon: "star",
                  label: "Guardar en Favoritos",
                  variant: "outlined" as const,
                  color: "inherit" as const,
                  fill: false,
                },
                {
                  icon: "archive",
                  label: "Archivar Oportunidad",
                  variant: "outlined" as const,
                  color: "inherit" as const,
                  fill: false,
                },
              ].map((action) => (
                <Button
                  key={action.label}
                  fullWidth
                  variant={action.variant}
                  color={action.color}
                  startIcon={
                    <span
                      className="material-symbols-outlined"
                      style={
                        action.fill
                          ? { fontVariationSettings: "'FILL' 1" }
                          : undefined
                      }
                    >
                      {action.icon}
                    </span>
                  }
                >
                  {action.label}
                </Button>
              ))}
            </div>

            <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
              <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-stack-sm">
                Notas Personales
              </h4>
              <div className="relative">
                <TextField
                  multiline
                  minRows={5}
                  fullWidth
                  variant="outlined"
                  placeholder="Escribe tus notas sobre este puesto..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
                    },
                  }}
                />
                <div className="absolute bottom-3 right-3 text-on-surface-variant font-label-sm text-label-sm">
                  Autoguardado
                </div>
              </div>
            </div>

            <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
              <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-stack-sm">
                Timeline
              </h4>
              <div className="space-y-stack-md">
                {[
                  {
                    title: "Oportunidad encontrada",
                    time: "Hace 2 horas",
                    active: true,
                  },
                  {
                    title: "Aún no has postulado",
                    active: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-stack-sm">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-2 h-2 rounded-full ${item.active ? "bg-primary" : "bg-outline-variant"}`}
                      />
                      {i === 0 && (
                        <div className="w-px h-full bg-outline-variant" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-label-md text-label-md ${item.active ? "text-on-surface" : "text-on-surface-variant"}`}
                      >
                        {item.title}
                      </p>
                      {item.time && (
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {item.time}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar Opportunities */}
          <SectionCard>
            <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-stack-md">
              Puestos Similares
            </h4>
            <div className="space-y-stack-md">
              {[
                {
                  initial: "S",
                  title: "UX Designer III",
                  company: "Stripe • Remote",
                  score: "89%",
                },
                {
                  initial: "A",
                  title: "Visual Systems Lead",
                  company: "Airbnb • San Francisco",
                  score: "82%",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-stack-sm cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center font-bold text-on-surface-variant group-hover:bg-primary-container/20 transition-colors">
                    {item.initial}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-primary font-label-sm text-label-sm">
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </aside>
      </div>
    </main>
  );
}
