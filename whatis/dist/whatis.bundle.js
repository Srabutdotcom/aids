function n(n){if(null===n)return t(n,"null");const e=typeof n;return t(n,"object"!==e?e:n?.constructor?.name??"Object")}function t(n,t){return new class{constructor(n){this.value=n}valueOf(){return t}subType(){switch(t){case"null":case"undefined":case"boolean":case"string":case"symbol":default:return"";case"number":return Number.isInteger(n)?"integer":Number.isNaN(n)?"NaN":n==1/0?"Infinity":"float";case"function":return"Function"==n.constructor.name?n.toString().match(/^function/g)?.length?"Function":n.toString().match(/^class/g)?.length?"Class":"Arrow":n.constructor.name}}name(){return"function"==t?n.name:""}}(n)}export{n as whatis};
