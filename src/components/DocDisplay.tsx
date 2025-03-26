import React from 'react';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

function DocsDisplay() {
  const sidebarCategory = useCurrentSidebarCategory();
  
  if (!sidebarCategory) {
    return null;
  }

  const renderItem = (item: any) => {
    if (item.type === 'link') {
      return (
        <li key={item.href}>
          <Link to={item.href}>{item.label}</Link>
        </li>
      );
    }
    if (item.type === 'category') {
      return (
        <li key={item.label}>
          <h3>{item.label}</h3>
          <ul>
            {item.items?.map((subItem: any) => renderItem(subItem))}
          </ul>
        </li>
      );
    }
    return null;
  };

//   return (
//     <div>
//       <h2>{sidebarCategory.label}</h2>
//       <ul>
//         {sidebarCategory.items?.map((item: any) => renderItem(item))}
//       </ul>
//     </div>
//   );
}

export default DocsDisplay;
