import React, { useRef, useEffect, useState } from "react";
import "./panels.css";
import { changeTitle } from "../commuication/options/options"; // Assuming you only need to get title
import { useDispatch } from "react-redux";
import image1 from "./panelsAssets/picture1.jpg";
import image2 from "./panelsAssets/picture2.jpg";
import image3 from "./panelsAssets/picture3.jpg";
import { Element, animateScroll as scroll } from "react-scroll";

function Panels() {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + 200; // Adjust for any offset if necessary

            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(section.id);
                    console.log(section.id);
                    if (section.id === "section1") {
                        selectOption("SEGMENTS");
                    }
                    else if (section.id === "section2") {
                        selectOption("MAP");
                    }
                    else if (section.id === "section3") {
                        selectOption("TECHNOLOGY");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [selectedOption, setSelectedOption] = useState("SEGMENTS");
    const dispatch = useDispatch();
    const selectOption = (optionLabel) => {
        dispatch(changeTitle({ title: optionLabel }));
        setSelectedOption(optionLabel);
    };

    return (
        <div className="panels-Container">
            <section name="SEGMENTS1" className="panels segmentPanel" id="section1">
                <img className="panels-images" src={image1} alt="SEGMENTS" />
            </section>

            <section name="MAP1" className="mapPanels" id="section2">
                <img className="panels-images" src={image2} alt="MAP" />
            </section>

            <section name="TECHNOLOGY1" className="panels techpanels" id="section3">
                <img className="panels-images" src={image3} alt="TECHNOLOGY" />
            </section>

        </div>
    );
}

export default Panels;
