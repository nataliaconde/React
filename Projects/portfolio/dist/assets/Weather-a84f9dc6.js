import{u as C,r as s,j as t,_,w as L}from"./index-44860df0.js";const p=s.lazy(()=>_(()=>import("./Conditions-b783abb9.js"),["assets/Conditions-b783abb9.js","assets/index-44860df0.js","assets/index-6343157a.css"]));function S({}){const[r,h]=C(L),[o,m]=s.useState("Overland Park"),[u,l]=s.useState(""),[c,x]=s.useState(38.9928),[i,w]=s.useState(-94.6771),d="850b5e90b2da89a22d801ce5562cb9d8",f="https://api.openweathermap.org/data/2.5/onecall",j="https://api.openweathermap.org/geo/1.0/zip",g=`${f}?lat=${c}&lon=${i}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${d}`,v=()=>{fetch(g).then(e=>e.json()).then(e=>{h(e.daily.map(a=>({weekDay:a.dt,min:a.temp.min,max:a.temp.max,weatherType:a.weather[0].icon,weatherDesc:a.weather[0].description})))})};s.useEffect(()=>{v()},[o]);const D=e=>{e.preventDefault();const a=e.target.zipCode;a.value.match(/\d+/g)&&a.value.length>4?y(e):alert("Please enter the correct US Zip Code")},y=e=>{e.preventDefault();const a=e.target.zipCode,k=`${j}?zip=${a.value}&appid=${d}`;fetch(k).then(n=>n.json()).then(n=>{m(n.name),x(n.lat),w(n.lon)})},b=e=>{e.preventDefault(),D(e),l("")};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex flex-col text-center text-slate-300",children:[t.jsx("div",{className:"text-2xl",children:"Current Weather Forcast For"}),t.jsx("div",{className:"text-2xl",children:o}),t.jsxs("div",{children:["Latitude: ",c," Logitude: ",i]})]}),t.jsx("div",{className:"flex flex-wrap justify-center items-center mt-5 gap-4 w-full",children:!!r&&r.slice(0,5).map((e,a)=>a===0?t.jsx("div",{className:"bg-violet-200 dark:bg-violet-400 rounded p-2 w-[100px] shadow-md dark:shadow-inner",children:t.jsx(s.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(p,{weekDay:e.weekDay,min:e.min,max:e.max,weatherType:e.weatherType,weatherDesc:e.weatherDesc})})},a):t.jsx("div",{className:"bg-violet-300 dark:bg-violet-500 rounded p-2 w-[100px] shadow-md dark:shadow-inner",children:t.jsx(s.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(p,{weekDay:e.weekDay,min:e.min,max:e.max,weatherType:e.weatherType,weatherDesc:e.weatherDesc})})},a))}),t.jsxs("form",{className:"my-5",onSubmit:b,children:[t.jsx("input",{className:"rounded mx-2 px-3 py-1",name:"zipCode",type:"text","aria-label":"zipCode",value:u,onChange:e=>l(e.target.value),placeholder:"Enter Zip code"}),t.jsx("button",{className:"bg-teal-400 rounded mx-2 px-3 py-1 w-fit",type:"button",children:"Check your Weather"})]})]})}export{S as default};
