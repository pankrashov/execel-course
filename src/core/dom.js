class Dom {

}
 
export function $() {
  return new Dom();
}
$.creare = (tagname, classes = '') => {
  const el = document.createElement(tagname);
  if (classes) {
    el.classList.add(classes);
  }
  return el
}