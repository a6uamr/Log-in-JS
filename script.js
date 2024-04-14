const I=document.querySelectorAll('.i'), dm=document.querySelector('.dm');
function w(m) {dm.innerHTML=m+'<button type="button"></button>';
  dm.lastChild.addEventListener('click',()=>dm.close()); dm.showModal();}
document.forms[0].addEventListener('submit',e=>{e.preventDefault();
  if (!I[0].value.trim() || !I[1].value.trim() || (I[2]?!I[2].value.trim():0)) {
    w('All fields required'); return;}
  if (I[2]) {for (const e of U)
      if (e.e==I[1].value.toLowerCase()) {w('Email taken'); return;}
    if (!/^[A-Z][a-z]{2,14}(?: [A-Z][a-z]{0,14}){0,4}$/.test(I[0].value)) {
      w('Name must be capitalized, 3+ letters and spaces'); return;}
    if (!/^\w+(\.\w+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,})$/i.test(I[1].value)) {
      w('Email invalid'); return;}
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[\w@$!%*?&]{6,}$/.test(I[2].value)) {
      w('Password must be 6+ characters, 1+ letters, 1+ digits'); return;}
    U.push({n:I[0].value,e:I[1].value.toLowerCase(),p:I[2].value});
    localStorage.setItem('U',JSON.stringify(U)); location='./';}
  else {let u; for (const e of U) if (e.e==I[0].value.toLowerCase()) {u=e; break;}
    if (!u) {w('Email not registered'); return;}
    if (u.p!=I[1].value) {w('Password incorrect'); return;}
    U[0]=u.n; localStorage.setItem('U',JSON.stringify(U));
    location='./home';}});
dm.addEventListener('click',e=>{const D=dm.getBoundingClientRect();
  if (e.clientX<D.left||e.clientX>D.right||e.clientY<D.top||
  e.clientY>D.bottom) dm.close();});
