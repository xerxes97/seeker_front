import BrandHero from "@/components/auth/brand-hero";

type Props = {
  form: React.ReactNode;
};

export default function AuthLayout({ form }: Readonly<Props>) {
  return (
    <main className="flex min-h-screen w-full">
      <BrandHero />
      <section className="w-full lg:w-2/5 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface relative">
        <div className="w-full max-w-md space-y-stack-lg py-stack-lg">
          <div className="lg:hidden mb-stack-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary font-bold">
              CareerArch
            </h1>
          </div>
          <div className="px-6">
            {form}
          </div>
        </div>
      </section>
    </main>
  );
}
