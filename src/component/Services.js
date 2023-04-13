import Title from "./Title";
import { servicesData } from "./Data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstPart="Our" secondPart="Services" />
      <div className="section-center services-center">
        {servicesData.map((serv) => {
          return (
            <Service key={serv.id} {...serv} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
