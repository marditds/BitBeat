import React, { useState, useEffect } from "react";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollToTop}>
      {visible && <MdOutlineKeyboardArrowUp className="jumptToTopArrow" />}
    </div>
  );
};
