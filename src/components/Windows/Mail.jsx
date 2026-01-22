import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { Send, Paperclip } from "lucide-react";
import "./mail.scss";

const Mail = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const MY_EMAIL = "jaganparida39064@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      const subjectEncoded = encodeURIComponent(formData.subject);
      const bodyEncoded = encodeURIComponent(formData.message);

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=${subjectEncoded}&body=${bodyEncoded}`;

      window.open(gmailUrl, "_blank");

      setSending(false);
      setFormData({ subject: "", message: "" });
    }, 800);
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="600px"
      height="500px"
    >
      <div className="mail-window">
        <div className="mail-sidebar">
          <div className="sidebar-header">
            <p>Mailboxes</p>
          </div>
          <div className="sidebar-item active">
            <span className="icon">Inbox</span>
            <span className="count">1</span>
          </div>
          <div className="sidebar-item">
            <span className="icon">Sent</span>
          </div>
          <div className="sidebar-item">
            <span className="icon">Drafts</span>
          </div>
          <div className="sidebar-item">
            <span className="icon">Trash</span>
          </div>
        </div>

        <div className="mail-compose">
          <div className="compose-header">
            <div className="header-row">
              <span className="label">To:</span>
              <span className="recipient-pill">Jagan Parida</span>
            </div>
            <div className="header-row">
              <span className="label">Cc:</span>
            </div>
            <div className="header-row">
              <span className="label">Subject:</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                autoComplete="off"
              />
            </div>
          </div>

          <textarea
            className="message-body"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi Jagan, I'd like to discuss..."
          ></textarea>

          <div className="compose-footer">
            <button className="attach-btn">
              <Paperclip size={18} />
            </button>
            <button
              className={`send-btn ${sending ? "sending" : ""}`}
              onClick={handleSend}
            >
              <Send size={16} />
              {sending ? "Opening Gmail..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Mail;
