import ReactPlayer from "react-player/youtube";

function TrailerSection() {
  return (
    <section className="w-full h-fit mt-32">
      <div className="w-4/5 max-h-[580px] aspect-video max-w-screen-xl m-auto text-center flex flex-col justify-center items-center">
        <h1 className="leading-normal w-full min-w-[225px] max-w-[382px] mb-5 lg:mb-16 text-active-blue font-inter text-2xl lg:text-4xl font-bold lg:leading-10">
          After Movie UNAS Fest 2023
        </h1>
        <ReactPlayer
          className="react-player"
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=wy7yAUl3ROw"
        />
      </div>
    </section>
  );
}

export default TrailerSection;
