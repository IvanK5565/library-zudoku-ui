import{O as i,j as e}from"./entry.client-DqQkXF8J.js";const o="This instruction will help you install and use the SDK generated with openapi-generator-cli for Typescript/Node in your project.",l=[{depth:2,value:"Step 1: SDK Installation in your project",id:"step-1-sdk-installation-in-your-project"},{depth:2,value:"Step 2: Using SDK in your project",id:"step-2-using-sdk-in-your-project"}],c={title:"Installation"};function r(t){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["This instruction will help you install and use the SDK generated with ",e.jsx(n.code,{inline:!0,children:"openapi-generator-cli"})," for Typescript/Node in your project."]}),`
`,e.jsx(n.h2,{id:"step-1-sdk-installation-in-your-project",children:"Step 1: SDK Installation in your project"}),`
`,e.jsx(n.p,{children:"To get SDK, you first need to add a repository from GitHub as NPM dependence.Use the command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install git+https://github.com/IvanK5565/library-sdk.git
`})}),`
`,e.jsx(n.h2,{id:"step-2-using-sdk-in-your-project",children:"Step 2: Using SDK in your project"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Import SDK in your Typescript file:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DefaultApi } from 'library-sdk/api';
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Create an API instance:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const api = new DefaultApi();
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Use API methods to interact with your server:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`api.booksGet(1).then((response) => {\r
  console.log(response.body);\r
}).catch((error) => {\r
  console.error(error);\r
})
`})})]})}function a(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default,o as excerpt,c as frontmatter,l as tableOfContents};
//# sourceMappingURL=installation-boaf00_m.js.map
