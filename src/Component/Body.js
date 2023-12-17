// import image
import Familyphoto1 from "./Assets/familyImage.avif";
import Familyphoto2 from "./Assets/familyImage2.avif";
import Familyphoto3 from "./Assets/familyImage3.avif";
import Familyphoto4 from "./Assets/familyImage4.avif";

function Body() {
  return (
    <main>
      {/* section-1 */}
      <section id="section1">
        <div className="body_container">
          <div className="body_wrapper">
            <img src={Familyphoto1}/>
            <img src={Familyphoto2}/>
            <img src={Familyphoto3}/>
            <img src={Familyphoto4}/>
          </div>
        </div>
        {/* <span id="main_icons">
          <i class="material-icons" id="main_icon1">
            chevron_right
          </i>
          <i class="material-icons" id="main_icon2">
            chevron_left
          </i>
        </span> */}
      </section>

      {/* section-2 */}
      <section id="section2">
        <h1>Think Health,Think Massage</h1>
        <p>
          We are open 9am to 6pm; Monday through Sunday. If you would like to
          schedule an appointment with us,please call us at 987-654-3210 today!
        </p>
        <div>
          <button>LEARN ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </section>

      {/* section-3 */}
      <section id="section3">
        <div id="para1">
          <p>
            Are you looking for professional,registerd massage therapist?Sample
            Message Therapy has 4 registedred message therapists who can provide
            clinical massage.
          </p>
          <p>
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <p>
            We welcome you to come explore all the benefits you’ll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>
        </div>
        <hr />
        <div id="para2">
          <h2>Family Wellness Massage Therapy</h2>
          <span>888 Griffiths Way, Mainland ML 12345</span>
          <span>Tel: 987.654.3210</span>
          <span>Email: info@yoursite.com</span>
        </div>
      </section>
    </main>
  );
}

export default Body;
