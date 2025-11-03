import { useState } from "react";
import { GiCalendar, GiClawSlashes } from "react-icons/gi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import PlayerSong from "./PlayerSong";

function Aside() {
  const [open, setOpen] = useState(true);
  return (
    <aside className={open ? "sidebar sidebarDisplay" : "sidebar"}>
      {/* max-height: 112px; */}
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/image-me.png" alt="" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Uroš Nerandžić</h1>
          <p className="title">Web Developer</p>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* contact info */}
      {open && (
        <div
          className={
            open
              ? "sidebar-info_more sidebar-info_more-visibility "
              : "sidebar-info_more"
          }>
          <hr className="separator2" />
          <PlayerSong />
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <MdOutlineMail />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto: uros.nerandzic1@gmail.com"
                  className="contact-link"
                  style={{ fontSize: "10px" }}>
                  uros.nerandzic1@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <LuPhone />
              </div>
              <div className="contact-info">
                <p className="contact-title">PHONE</p>
                <a href="tel: +381 60-476-0606" className="contact-link">
                  +381 60-476-0606
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar />
              </div>
              <div className="contact-info">
                <p className="contact-title">BIRTHDAY</p>
                <time dateTime="1997-07-04" className="contact-link">
                  July 04 , 1997
                </time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <MdOutlineMail />
              </div>
              <div className="contact-info">
                <p className="contact-title">LOCATION</p>
                <address>Belgrade, Serbia</address>
              </div>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}

export default Aside;
