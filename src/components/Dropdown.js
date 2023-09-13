
import React, { useState } from "react";
import '../index.css';

const Dropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <>
            <h1>Should you use a dropdown menu?</h1>

            <div className="dropdown">

                <button onClick={toggleDropdown} className="dropdown-button"><span>Select</span> <i className="fa-solid fa-caret-down"></i></button>

                {isOpen && (
                    <ul className="dropdown-content ">
                        {items.map((item) => (
                            <li key={item} onClick={closeDropdown}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Dropdown;
