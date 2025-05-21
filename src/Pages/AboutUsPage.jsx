import Ad from "../Components/Ad";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <>
      <Ad />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <SideNav />
        <div
          style={{
            flexGrow: 1,
            padding: "2rem 2rem 2rem 10rem",
            overflowY: "auto",
            backgroundColor: "#f8f9fa",
            color: "#212529",
          }}
        >
          <h1 className="about-title">About PharmaTrack</h1>

          <section className="about-purpose">
            <h2>Purpose</h2>
            <p>
              PharmaTrack is designed by showing medication information by
              displaying medicine data such as uses, expiry dates, and necessary
              cautions.
            </p>
          </section>

          <section className="about-features">
            <h2>Key Features</h2>
            <ul>
              <li>Medicine information.</li>
              <li>Interactive quizzes to enhance medicine knowledge.</li>
              <li>User-friendly interface optimized for quick access.</li>
            </ul>
          </section>
          <div style={{ position: "absolute", bottom: "0", width: "87%" }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
