import React, { useState, useEffect } from 'react';
import { hamb, menu, container_menu, actual } from './menu.module.css';
import { data } from './data';

export const Menu = () => {
  const [active, setActive] = useState(false);

  const menuListener = () => {
    const { href } = window.location;
    for (let i = 0; i < data.length; i++) {
      if (href.includes(data[i].href)) setActive(i + 1);
    }
    const view = document.querySelector('#home');
    if (view != null) {
      setActive(1);
      view.addEventListener('scroll', e => {
        e.target.childNodes.forEach((ele, i) => {
          if (ele.offsetTop <= view.scrollTop + 74 && i + 1 != active) {
            setActive(i + 1);
          }
        });
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') menuListener();
  }, []);

  return (
    <div className={`${container_menu}`}>
      <ul className={menu}>
        {data.map((item, i) => {
          const curr = active == i + 1 ? { id: actual } : {};
          return (
            <li key={`menu-${i + 1}`} {...curr}>
              <a
                onClick={() => {
                  setActive(i + 1);
                }}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
