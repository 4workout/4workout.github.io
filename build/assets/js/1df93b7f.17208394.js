"use strict";(self.webpackChunkworkout_notes=self.webpackChunkworkout_notes||[]).push([[583],{7557:(n,e,o)=>{o.d(e,{A:()=>s});const t=o.p+"assets/images/image-1-f42d7074b53c2b91e98defa804c81ab9.jpg";var r=o(4848);const i=n=>{let{title:e}=n;const o=[{id:1,title:"Upper Body 1",href:"/docs/upper-body/upper-body-1",imageUrl:t,alt:"Upper Body Workouts"},{id:2,title:"Upper Body 2",href:"/docs/upper-body/upper-body-1",imageUrl:t,alt:"Lower Body Workouts"},{id:3,title:"Upper Body 3",href:"/docs/upper-body/upper-body-1",imageUrl:t,alt:"Lower Body Workouts"}];return(0,r.jsx)("div",{className:"workout-container",children:o.map((n=>(0,r.jsxs)("div",{className:"workout-section",children:[(0,r.jsx)("h2",{children:n.title}),(0,r.jsx)("div",{className:"workout-content",children:(0,r.jsx)("div",{className:"workout-link",children:(0,r.jsxs)("a",{href:n.href,children:[(0,r.jsx)("img",{src:n.imageUrl,alt:n.alt,className:"workout-thumbnail"}),(0,r.jsxs)("div",{className:"workout-title",children:["View ",n.title," Workouts"]})]})})})]},n.id)))})},s=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"features-container",children:[(0,r.jsx)(i,{}),(0,r.jsx)(i,{})]}),(0,r.jsx)("style",{children:"\n    /* Container styles */\n    .features-container {\n      display: flex;\n      flex-direction: column;\n      gap: 1rem; /* Optional: adds consistent spacing between items */\n    }\n\n    .workout-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      gap: 2rem;\n      padding: 1rem;\n      max-width: 1200px;\n      margin: 0 auto;\n    }\n\n    /* Section styles */\n    .workout-section {\n      background: #ffffff;\n      border-radius: 12px;\n      padding: 1.5rem;\n      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n      transition: all 0.3s ease;\n    }\n\n    .workout-section:hover {\n      transform: translateY(-5px);\n      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n    }\n\n    .workout-section h2 {\n      font-size: 1.5rem;\n      margin-bottom: 1rem;\n      color: #333;\n      text-align: center;\n    }\n\n    /* Content styles */\n    .workout-content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .workout-link {\n      width: 100%;\n      text-align: center;\n    }\n\n    .workout-link a {\n      text-decoration: none;\n      color: inherit;\n      display: block;\n    }\n\n    /* Image styles */\n    .workout-thumbnail {\n      width: 100%;\n      height: 200px;\n      object-fit: cover;\n      border-radius: 8px;\n      margin-bottom: 1rem;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n    }\n\n    .workout-link:hover .workout-thumbnail {\n      transform: scale(1.05);\n    }\n\n    /* Title styles */\n    .workout-title {\n      font-size: 1.1rem;\n      font-weight: 500;\n      color: #2c5282;\n      margin-top: 1rem;\n      transition: color 0.3s ease;\n    }\n\n    .workout-link:hover .workout-title {\n      color: #1a365d;\n    }\n\n    /* Responsive styles */\n    @media (max-width: 768px) {\n      .workout-container {\n        grid-template-columns: 1fr;\n        padding: 1rem;\n        gap: 1.5rem;\n      }\n\n      .workout-section {\n        padding: 1rem;\n      }\n\n      .workout-section h2 {\n        font-size: 1.25rem;\n      }\n\n      .workout-thumbnail {\n        height: 180px;\n      }\n\n      .workout-title {\n        font-size: 1rem;\n      }\n    }\n\n    /* Dark mode support */\n    @media (prefers-color-scheme: dark) {\n      .workout-section {\n        background: #1a202c;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n      }\n\n      .workout-section h2 {\n        color: #e2e8f0;\n      }\n\n      .workout-title {\n        color: #63b3ed;\n      }\n\n      .workout-link:hover .workout-title {\n        color: #90cdf4;\n      }\n    }\n  "})]})},8342:(n,e,o)=>{o.r(e),o.d(e,{default:()=>d});var t=o(4586),r=o(781);const i={container:"container_bfhl",featuresSection:"featuresSection_Y0uK",docsDisplay:"docsDisplay_QEQI"};var s=o(4070),a=(o(6540),o(4848));const l=()=>{let n=(0,s.Gy)().default.versions[0].docs;const e={"upper-body/upper-body":!0};return n=n.filter((n=>e[n.id])),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Upper Body Docs:"}),n&&n.map(((n,e)=>(0,a.jsx)("div",{children:JSON.stringify(n)},e)))]})};var c=o(7557);function d(){const{siteConfig:n}=(0,t.A)();return(0,a.jsxs)(r.A,{title:`Hello from ${n.title}`,description:"Description will go into a meta tag in <head />",children:[(0,a.jsx)("main",{className:i.container,children:(0,a.jsx)("div",{className:i.featuresSection,children:(0,a.jsx)(c.A,{})})}),(0,a.jsx)("div",{className:i.docsDisplay,children:(0,a.jsx)(l,{})})]})}}}]);