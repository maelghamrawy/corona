import React from "react";
import "./About.css";

const List = [
  {
    text: "Symotions of coronavirus",
  },
  {
    text: "How to protect yourself",
  },
  {
    text: "How coronavirus is spread",
  },
  {
    text: "myth-Bustres coronavirus",
  },
  {
    text: "questions and answer",
  },
];

function About() {
  return (
    <>
      <div className="parent container">
        <div className="aboutCorona ">
          <div className="leftAbout">
            <h4>about the disase</h4>
            <h1>coronavirus (covid-19)</h1>
            <p>
              <span>
                {" "}
                COVID_19 is a newillness that can affect your hugs and airways.
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quia voluptatum incidunt aspernatur repellendus
              perferendis assumenda optio a? Reiciendis asperiores sunt esse sed
              nisi. Placeat illum ea rem adipisci possimus.
            </p>
            <p>
              COVID_19 is a newillness that can affect your hugs and airways.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quia voluptatum incidunt aspernatur repellendus
              perferendis assumenda optio a? Reiciendis asperiores sunt esse sed
              nisi. Placeat illum ea rem adipisci possimus.
            </p>
            <p>
              COVID_19 is a newillness that can affect your hugs and airways.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quia voluptatum incidunt aspernatur repellendus
              perferendis assumenda optio a? Reiciendis asperiores sunt esse sed
              nisi. Placeat illum ea rem adipisci possimus.
            </p>
          </div>

          <div className="rightAbout">
            <div
              className="card shadow   mb-5 bg-white rounded"
              style={{ width: "60%" }}
            >
              <div className="card-header">
                <h5> What you need to know</h5>
              </div>
              <ul className="he list-group list-group-flush">
                {List.map((li, index) => (
                  <li key={index} className="list-group-item">
                    {li.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
