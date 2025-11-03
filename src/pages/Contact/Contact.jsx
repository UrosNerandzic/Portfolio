import { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm("service_wwdjm9s", "template_n6ecu9k", form.current, {
          publicKey: "HFRHav4qgnIn8O8rh",
        })
        .then(() => {
          toast.success("successfully sent! 😁");
        });
    } else {
      toast.error("Please fill in your fields! 😏");
    }
  };
  const mapPosition = [44.8177777778, 20.4569444444];

  return (
    <section>
      <header className="h2 article-title">Contact</header>
      <section className="mapbox">
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
          className="mapContainer">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}></Marker>
        </MapContainer>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" action="#" ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="form-btn" type="submit" value="Send">
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
