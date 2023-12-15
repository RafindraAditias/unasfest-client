import Blur from "../ui/blur";
import { Card, CardContent, CardTitle } from "../ui/card";

interface Props {
  judgeData: Array<{
    name: string;
    image: string;
    description: string;
    achievements: Array<string>;
  }>;

  seminar?: {
    title: string;
    tema: string;
  };
}

const JudgementSection = ({ judgeData, seminar }: Props) => {
  return (
    <section>
      <Card className="bg-white mb-6 lg:p-0 lg:bg-transparent">
        <Blur className="w-[470px] h-[480px] -bottom-96 -right-96 bg-[#FFDE59]" />
        <Blur className="w-[470px] h-[480px] -bottom-52 -left-[900px] bg-[#00BF63]" />
        {judgeData.map(({ name, image, description, achievements }, index) => (
          <div key={index}>
            <CardTitle className="text-[#000] text-center lg:text-start">
              <h3 className="text-xl font-semibold leading-normal lg:text-[32px]">
                {seminar ? "Pembicara" : "Juri Kompetisi"}
              </h3>
              <h1 className="text-[32px] font-semibold leading-normal lg:hidden">
                {name}
              </h1>
            </CardTitle>
            <CardContent className="py-[30px] px-[15px] flex flex-col gap-[14px] lg:flex-row-reverse lg:justify-center lg:items-center lg:px-0">
              <div className="relative m-auto lg:-top-20">
                <div className="bg-active-blue z-10 w-2/3 max-w-[350px] h-2/3 max-h-[300px] absolute bottom-0 right-1/2 translate-x-1/2 rounded-t-[30px]"></div>
                <img
                  src={image}
                  alt={name}
                  width={500}
                  className="relative z-50 bg-center bg-contain left-[5%]"
                />
              </div>

              <div>
                <h1 className="hidden lg:block text-[32px] font-semibold leading-normal">
                  {name}
                </h1>

                <p className="lg:py-10">{description}</p>

                <h1 className="text-base text-[#000000CC] font-normal">
                  Achievments
                </h1>

                <ul className="list-disc list-outside pl-5">
                  {achievements.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default JudgementSection;
