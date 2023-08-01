import "../../assets/css/main.css";

function AboutUs() {
  return (
    <>
      <div className="aboutus_main">
        <div className="aboutus_hero_section">
          <h1 className="about_us_title">About</h1>
          <hr className="horizontal_line horizontal_line_long" />
          <hr className="horizontal_line horizontal_line_short" />
        </div>
      </div>
      <div className="below_main">
        <h1 className="heading">
          <span className="heading_light">About</span> DPFZE
        </h1>
        <hr className="horizontal_line horizontal_line_blue" />
        <p className="paragraph">
          Dynamic Products FZE is a supplier of steel and alloy piping
          materials, Valves and accessories. Comprised of a skilled and
          knowledgeable team with over 25 years of industry experience, we are
          ready to provide solutions for all your piping material requirements.
          We are your specialist when it comes to ambitious and challenging
          projects.
          <br />
          <br /> Our main scope of business is to supply Pipes, Fittings,
          Flanges, Valves, Plates/Sheets, and other Industrial Parts, all the
          while continuously trying to set ourselves apart with unparalleled
          customer service and an abundant resources of material grades, so that
          no part you need is too hard to find.
        </p>
      </div>
      <div className="who_are_we">
        <div className="who_are_we_left">
          <h1 className="about_us_title">30+</h1>
          <h3>Years Of Experience</h3>
          <h1 className="about_us_title">200k</h1>
          <h3>Tons of Annual TurnOver </h3>
          <h1 className="about_us_title">5</h1>
          <h3>GCC Countries</h3>
        </div>
        <div className="who_are_we_right">
          <h1 className="heading">
            <span className="heading_light">
              Who <br />
            </span>
            are we
          </h1>
          <hr className=" horizontal_line horizontal_line_blue" />
          <p className="paragraph">
            We are your specialist when it comes to ambitious and challenging
            projects. Our main scope of business is to supply Pipes, Fittings,
            Flanges, Valves, Plates/Sheets, and other Industrial Parts <br />
            <br />
            All that while continuously trying to set ourselves apart with
            unparalleled customer service and an abundant resources of material
            grades, so that no part you need is too hard to find.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
