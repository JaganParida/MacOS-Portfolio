import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { Send, Paperclip, Pencil, Search, Menu } from "lucide-react";
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

  // Validation
  const isInputValid =
    formData.subject.trim() !== "" && formData.message.trim() !== "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!isInputValid) return;

    setSending(true);

    setTimeout(() => {
      const subjectEncoded = encodeURIComponent(formData.subject);
      const bodyEncoded = encodeURIComponent(formData.message);

      // Removed &cc= parameter
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
      width="700px"
      height="550px"
    >
      <div className="mail-window">
        {/* Sidebar - Gmail Style */}
        <div className="mail-sidebar">
          <div className="compose-btn-container">
            <button className="gmail-compose-btn">
              <Pencil size={18} />
              <span>Compose</span>
            </button>
          </div>

          <div className="sidebar-nav">
            <div className="sidebar-item active">
              <span className="icon">Inbox</span>
              <span className="count">1</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">Starred</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">Snoozed</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">Sent</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">Drafts</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mail-main">
          {/* Top Search Bar Simulation */}
          <div className="top-bar">
            <div className="search-box">
              <Menu size={18} className="menu-icon" />
              <Search size={16} className="search-icon" />
              <span>Search in mail</span>
            </div>
          </div>

          <div className="mail-compose-container">
            <div className="compose-card">
              <div className="compose-header">
                <h3>New Message</h3>
              </div>

              <div className="input-group">
                <span className="label">To</span>
                <div className="recipient-chip">
                  <span>Jagan Parida</span>
                </div>
              </div>

              {/* CC Input Removed here */}

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>

              <textarea
                className="message-body"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your email here..."
              ></textarea>

              <div className="compose-footer">
                <button
                  className={`send-btn ${sending ? "sending" : ""}`}
                  onClick={handleSend}
                  disabled={!isInputValid || sending}
                >
                  {sending ? "Sending..." : "Send"}
                  <Send size={14} style={{ marginLeft: "6px" }} />
                </button>

                <button className="attach-btn">
                  <Paperclip size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Mail;
