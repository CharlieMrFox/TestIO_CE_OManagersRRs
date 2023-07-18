!function(){let e=document.createElement("div");e.id="text-expander-preview",e.style.cssText=`
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
    `,document.documentElement.appendChild(e),document.addEventListener("input",function(t){let l=document.activeElement;if("INPUT"===l.tagName||"TEXTAREA"===l.tagName){let n=l.selectionStart,i=l.value,o=i.slice(0,n).split(" ").pop(),a=expansions[o];if(a){let c=document.querySelectorAll("dd.col-8.col-md-10"),r=c.length>=5?c[4].textContent.trim():"",d=a.replace("{NAME}",r);e.style.display="block",e.textContent=d}else e.style.display="none"}}),document.addEventListener("keydown",function(t){if(" "===t.key&&!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey){let l=document.activeElement;if("INPUT"===l.tagName||"TEXTAREA"===l.tagName){let n=l.selectionStart,i=l.value,o=i.slice(0,n).split(" ").pop(),a=expansions[o];if(a){let c=document.querySelectorAll("dd.col-8.col-md-10"),r=c.length>=5?c[4].textContent.trim():"",d=a.replace("{NAME}",r),s=`${i.slice(0,n-o.length)}${d}${i.slice(n)}`;l.value=s,l.setSelectionRange(n-o.length+d.length,n-o.length+d.length);let p=l.scrollTop;l.scrollTop=p+l.scrollHeight-l.clientHeight,e.style.display="none",t.preventDefault(),t.stopPropagation()}}}}),document.addEventListener("DOMContentLoaded",function(e){})}();
