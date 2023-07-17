!function(){let e=document.createElement("div");function t(){let e=document.querySelector("#bug-header > div.flex > div:nth-child(4) > span");return e?e.textContent:""}e.id="text-expander-preview",e.style.cssText=`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #7954ff;
        color: #f4f4f4;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px;
        display: none;
        white-space: pre-wrap;
        z-index: 9999; /* Increase the z-index value */
    `,document.documentElement.appendChild(e),document.addEventListener("input",function(l){let n=document.activeElement;if("INPUT"===n.tagName||"TEXTAREA"===n.tagName){let i=n.selectionStart,a=n.value,o=a.slice(0,i).split(" ").pop(),s=expansions[o];if(s){let c=s.replace("{EDIT WITH NAME}",t());e.style.display="block",e.textContent=c}else e.style.display="none"}}),document.addEventListener("keydown",function(l){if(" "===l.key&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&!l.metaKey){let n=document.activeElement;if("INPUT"===n.tagName||"TEXTAREA"===n.tagName){let i=n.selectionStart,a=n.value,o=a.slice(0,i).split(" ").pop(),s=expansions[o];if(s){let c=s.replace("{EDIT WITH NAME}",t()),r=`${a.slice(0,i-o.length)}${c}${a.slice(i)}`;n.value=r,n.setSelectionRange(i-o.length+c.length,i-o.length+c.length);let d=n.scrollTop;n.scrollTop=d+n.scrollHeight-n.clientHeight,e.style.display="none",l.preventDefault(),l.stopPropagation()}}}}),document.addEventListener("DOMContentLoaded",function(e){})}();
