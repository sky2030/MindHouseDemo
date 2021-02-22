import background from "../../Image/EVE.jpg";
import yoga from "../../Image/yoga.jpg";
import "./home.css";
function Home() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="left">
        <h2>Explaination of what MH does across these 4 verticles</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
               Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div className="right">
        <div className="yoga">
          <div className="yogadiv">
            <b>Yoga</b>
            <button> Know More ..</button>
          </div>
        </div>
        <div className="subright">
          <div className="top">
            {" "}
            <div className="toptitle">
              <b>Meditation</b>
              <button> Know More ..</button>
            </div>
          </div>
          <div className="bottom">
            {" "}
            <div className="bottomright">
              <div className="brighttitle">
                <b>Nutrition</b>
                <button> Know More ..</button>
              </div>
            </div>
            <div className="bottomleft">
              <div className="brighttitle">
                <b>Therapy</b>
                <button> Know More ..</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
