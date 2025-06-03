import{O as s,j as e}from"./entry.client-BKr53u31.js";const d=`This Document Defines the Functional and Non-Functional Requirements for the "Electronic Diary" Web Application Developed Using the NetStudents' Learning Activities, Which Allows Teachers to Give Evaluations, and Parents and Students to View Them.`,l=[{depth:1,value:"Introduction",id:"introduction",children:[{depth:2,value:"Appointment of a document",id:"appointment-of-a-document"},{depth:2,value:"Scope",id:"scope"},{depth:2,value:"Definition, abbreviations and abbreviations",id:"definition-abbreviations-and-abbreviations"}]},{depth:1,value:"General Description",id:"general-description",children:[{depth:2,value:"Product prospects",id:"product-prospects"},{depth:2,value:"product functions",id:"product-functions"},{depth:2,value:"User characteristics",id:"user-characteristics"},{depth:2,value:"Restrictions",id:"restrictions"},{depth:2,value:"Assumption and addiction",id:"assumption-and-addiction"}]},{depth:1,value:"Functional requirements",id:"functional-requirements",children:[{depth:2,value:"Registration and Authorization",id:"registration-and-authorization"},{depth:2,value:"Teacher's panel",id:"teachers-panel"},{depth:2,value:"The student panel",id:"the-student-panel"},{depth:2,value:"Parents",id:"parents"},{depth:2,value:"Administrator panel",id:"administrator-panel"}]},{depth:1,value:"Non-functional requirements",id:"non-functional-requirements",children:[{depth:2,value:"Productivity",id:"productivity"},{depth:2,value:"scalability",id:"scalability"},{depth:2,value:"Safety",id:"safety"},{depth:2,value:"The convenience of the interface",id:"the-convenience-of-the-interface"},{depth:2,value:"Ability to extend",id:"ability-to-extend"}]},{depth:1,value:"Other requirements",id:"other-requirements"}],a={title:"Software Requirement Specification"};function t(i){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.h2,{id:"appointment-of-a-document",children:"Appointment of a document"}),`
`,e.jsx(n.p,{children:`This Document Defines the Functional and Non-Functional Requirements for the "Electronic Diary" Web Application Developed Using the NetStudents' Learning Activities, Which Allows Teachers to Give Evaluations, and Parents and Students to View Them.`}),`
`,e.jsx(n.h2,{id:"scope",children:"Scope"}),`
`,e.jsx(n.p,{children:"The System Is Intended For Secondary Schools.Main USers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"School administrators"}),`
`,e.jsx(n.li,{children:"Teachers"}),`
`,e.jsx(n.li,{children:"Students"}),`
`,e.jsx(n.li,{children:"Parents"}),`
`]}),`
`,e.jsx(n.h2,{id:"definition-abbreviations-and-abbreviations",children:"Definition, abbreviations and abbreviations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Next.js- Framework for SSR/SSG REACT APPENDIX"}),`
`,e.jsx(n.li,{children:"SSR- Server-Side Rendering"}),`
`,e.jsx(n.li,{children:"Crud - Create, Read, Update, Delete"}),`
`,e.jsx(n.li,{children:"JWT - JSON WEB TKEN FOR AUTHORIZATION"}),`
`,e.jsx(n.li,{children:"Rest Api- Architectural Style of Client-Server Interaction Interfaces"}),`
`]}),`
`,e.jsx(n.h1,{id:"general-description",children:"General Description"}),`
`,e.jsx(n.h2,{id:"product-prospects",children:"Product prospects"}),`
`,e.jsx(n.p,{children:"An electronic diary is a separate web application with customer-server architecture.The web client is implemented using React and Next.js, the server part-through REST API (possibly with Node.js/Express or foreign API)."}),`
`,e.jsx(n.h2,{id:"product-functions",children:"product functions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Registration and Authorization of Users (JWT)"}),`
`,e.jsx(n.li,{children:"Teacher's panel: class creation, grades, statistics review"}),`
`,e.jsx(n.li,{children:"Student panel: Viewing grades, schedules, tasks"}),`
`,e.jsx(n.li,{children:"Parent panel: Viewing their children's grades"}),`
`,e.jsx(n.li,{children:"Administrator panel: User and class management"}),`
`]}),`
`,e.jsx(n.h2,{id:"user-characteristics",children:"User characteristics"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Students - Basic PC Skills"}),`
`,e.jsx(n.li,{children:"Parents - basic skills, access to children's data"}),`
`,e.jsx(n.li,{children:"Teachers - average level, can create records"}),`
`,e.jsx(n.li,{children:"Administrators - high levels full of access"}),`
`]}),`
`,e.jsx(n.h2,{id:"restrictions",children:"Restrictions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support for modern browsers (Chrome, Firefox, Safari, Edge)"}),`
`,e.jsx(n.li,{children:"SSR using Next.js"}),`
`,e.jsx(n.li,{children:"Using a database (eg Postgresql or Mongodb)"}),`
`]}),`
`,e.jsx(n.h2,{id:"assumption-and-addiction",children:"Assumption and addiction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users have access to the Internet"}),`
`,e.jsx(n.li,{children:"server part can be implemented by a separate command"}),`
`,e.jsx(n.li,{children:"EMAIL-scrying or other security mechanisms are implemented separately"}),`
`]}),`
`,e.jsx(n.h1,{id:"functional-requirements",children:"Functional requirements"}),`
`,e.jsx(n.h2,{id:"registration-and-authorization",children:"Registration and Authorization"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"F1.1: The user can register (indicating the role)"}),`
`,e.jsx(n.li,{children:"F1.2: The user can be authorized"}),`
`,e.jsx(n.li,{children:"F1.3: jwt tokens to protect routes"}),`
`]}),`
`,e.jsx(n.h2,{id:"teachers-panel",children:"Teacher's panel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"F2.1: Creating classes and subjects"}),`
`,e.jsx(n.li,{children:"F2.2: Adding grades"}),`
`,e.jsx(n.li,{children:"F2.3: Comments on grades"}),`
`,e.jsx(n.li,{children:"F2.4: Homework Loading"}),`
`]}),`
`,e.jsx(n.h2,{id:"the-student-panel",children:"The student panel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"F3.1: View grades by dates and items"}),`
`,e.jsx(n.li,{children:"F3.2: Viewing homework"}),`
`,e.jsx(n.li,{children:"F3.3: Success Statistics"}),`
`]}),`
`,e.jsx(n.h2,{id:"parents",children:"Parents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"F4.1: Binding to the student (by code)"}),`
`,e.jsx(n.li,{children:"F4.2: View Teachers' grades and comments"}),`
`]}),`
`,e.jsx(n.h2,{id:"administrator-panel",children:"Administrator panel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"F5.1: ​​User management"}),`
`,e.jsx(n.li,{children:"F5.2: Role Presentation"}),`
`,e.jsx(n.li,{children:"F5.3: Class and Schedule Management"}),`
`]}),`
`,e.jsx(n.h1,{id:"non-functional-requirements",children:"Non-functional requirements"}),`
`,e.jsx(n.h2,{id:"productivity",children:"Productivity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pages should be downloaded in less than 2 seconds"}),`
`]}),`
`,e.jsx(n.h2,{id:"scalability",children:"scalability"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support up to 1000 active users at the same time"}),`
`]}),`
`,e.jsx(n.h2,{id:"safety",children:"Safety"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Authorization Protection through HTTPS and JWT"}),`
`,e.jsx(n.li,{children:"Validation of forms on the client and server"}),`
`]}),`
`,e.jsx(n.h2,{id:"the-convenience-of-the-interface",children:"The convenience of the interface"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"intuitive design according to the role of user"}),`
`,e.jsx(n.li,{children:"adaptive interface (Mobile-FIRST)"}),`
`]}),`
`,e.jsx(n.h2,{id:"ability-to-extend",children:"Ability to extend"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ability to add modules (chat, notifications)"}),`
`]}),`
`,e.jsx(n.h1,{id:"other-requirements",children:"Other requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"use Typescript (recommended)"}),`
`,e.jsx(n.li,{children:"Apply component approach (React)"}),`
`,e.jsx(n.li,{children:"SSR/SSG for SEO and speed"}),`
`,e.jsx(n.li,{children:"CI/CD for automatic imprint (eg Vercel)"}),`
`]})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as default,d as excerpt,a as frontmatter,l as tableOfContents};
//# sourceMappingURL=SRS-CEaQTeSH.js.map
