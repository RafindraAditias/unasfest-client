import { Card, CardContent, CardTitle } from "@/components/ui/card";

function BenefitSection() {
  return (
    <section className="mt-20 font-inter">
      <Card className="p-16">
        <CardTitle className="text-center text-5xl font-semibold mb-14 tracking-normal">
          Benefit dari Kompetisi UnasFest 2023
        </CardTitle>
        <CardContent className="w-3/4 flex mx-auto flex-wrap content-center justify-center">
          <div className="text-center p-5 basis-96">
            <div className="w-16 h-16 rounded-full bg-primary-light-a8 m-auto mb-[22px]"></div>
            <h1 className="text-[22px] font-semibold tracking-normal mb-4">
              E-Certificate
            </h1>
            <p className="text-base font-normal tracking-normal leading-6">
              Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
              mattis etiam.
            </p>
          </div>

          <div className="text-center p-5 basis-96">
            <div className="w-16 h-16 rounded-full bg-primary-light-a8 m-auto mb-[22px]"></div>
            <h1 className="text-[22px] font-semibold tracking-normal mb-4">
              Hadiah Jutaan Rupiah
            </h1>
            <p className="text-base font-normal tracking-normal leading-6">
              Velit nulla eu tortor elit sed. Volutpat ornare mi tempor, hac
              morbi faucibus.
            </p>
          </div>

          <div className="text-center p-5 basis-96">
            <div className="w-16 h-16 rounded-full bg-primary-light-a8 m-auto mb-[22px]"></div>
            <h1 className="text-[22px] font-semibold tracking-normal mb-4">
              Enim scelerisque dictum
            </h1>
            <p className="text-base font-normal tracking-normal leading-6">
              Turpis eget ut sed vitae in sapien egestas ultrices feugiat.
              Elementum platea.
            </p>
          </div>

          <div className="text-center p-5 basis-96">
            <div className="w-16 h-16 rounded-full bg-primary-light-a8 m-auto mb-[22px]"></div>
            <h1 className="text-[22px] font-semibold tracking-normal mb-4">
              Vulputate et enim
            </h1>
            <p className="text-base font-normal tracking-normal leading-6">
              Amet, eros nisl vestibulum tincidunt pellentesque. Congue id
              sapien dictum a.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default BenefitSection;
