/**
 * @description DOM选择器
 * @param strExpr
 * @returns {HTMLElement|*[]}
 */
function $$(strExpr) {
  let idExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  let classExpr = /^(?:\s*(<[\w\W]+>)[^>]*|.([\w-]*))$/;
  if (idExpr.test(strExpr)) {
    let idMatch = idExpr.exec(strExpr);
    return document.getElementById(idMatch[2]);
  } else if (classExpr.test(strExpr)) {
    let classMatch = classExpr.exec(strExpr);
    let allElement = document.getElementsByTagName('*');
    let ClassMatch = [];
    for (let i = 0, l = allElement.length; i < l; i++) {
      if (allElement[i].className.match(new RegExp('(\\s|^)' + classMatch[2] + '(\\s|$)'))) {
        ClassMatch.push(allElement[i]);
      }
    }
    return ClassMatch;
  }
}
export  default $$;
