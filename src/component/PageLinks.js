import React from 'react'
import { pageLinks } from './Data';

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={`#${link.pageText}`} className={itemClass}>
              {link.pageText}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks