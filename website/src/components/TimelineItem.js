import React, { useEffect } from "react";
import "./timeline.css";

const Timeline = ({ events }) => {
    useEffect(() => {
        const handleScroll = () => {
            const events = document.querySelectorAll(".event");
            events.forEach((event) => {
                const eventTop = event.getBoundingClientRect().top;
                const eventBottom = event.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                if (eventTop < windowHeight && eventBottom > 0) {
                    event.classList.add("active");
                } else {
                    event.classList.remove("active");
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`event ${index % 2 === 0 ? "left" : "right"}`}
                >
                    <h2 className="event-date">{event.date}</h2>
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-description">{event.description}</div>
                    <h4>Keywords</h4>
                    <ul style={{ listStyleType: "none", fontWeight: "100" }}>
                        {event.keywords.map((word) => (
                            <li
                                style={{
                                    display: "inline",
                                }}
                            >
                                <a
                                    href="#"
                                    style={{
                                        textDecoration: "none",
                                        color: "#071013",
                                    }}
                                >
                                    &nbsp;&nbsp;&nbsp;
                                    {word}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
