const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="72px";nav.style.right="0";nav.style.left="0";nav.style.background="#070b10";nav.style.padding="20px 7%";nav.style.flexDirection="column";});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<851)nav.style.display="none"}));
