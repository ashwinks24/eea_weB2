
import Slider from "react-slick";
import Proj1 from "../assets/Projects/proj1.jpg";
import Proj2 from "../assets/Projects/proj2.jpeg";
import Proj3 from "../assets/Projects/proj3.webp";


const projects = [
  {
    id: 1,
    title: "Smart Energy Meter",
    image: Proj1,
    link: "https://drive.google.com/yourProject1Link", // replace with your project link
  },
  {
    id: 2,
    title: "AI Powered Circuit Simulator",
    image: Proj2,
    link: "https://drive.google.com/yourProject2Link",
  },
  {
    id: 3,
    title: "IoT Based Home Automation",
    image: Proj3,
    link: "https://drive.google.com/yourProject3Link",
  },
  // add more projects here
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // how many cards visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobiles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "2em", background: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Ongoing Projects</h1>
      <Slider {...settings}>
        {projects.map((proj) => (
          <div
            key={proj.id}
            style={{
              padding: "1rem",
              cursor: "pointer",
            }}
            onClick={() => openProject(proj.link)}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                transition: "transform 0.3s",
                background: "#fff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={proj.image}
                alt={proj.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ padding: "1rem", textAlign: "center" }}>{proj.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
