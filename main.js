export const fn = (empanadasA, empanadasB, empanadasC) => {
   const precioEmpanadasA = 12;
   const precioEmpanadasB = 14;
   const precioEmpanadasC = 16;

   const total = Math.ceil(((empanadasA * precioEmpanadasA) + (empanadasB * precioEmpanadasB) + (empanadasC * precioEmpanadasC)) / 3);

if (empanadasA < 0 || empanadasB < 0 || empanadasC <0) {
   throw Error
}
if ((empanadasA + empanadasB + empanadasC) % 3 !== 0) {
   throw Error
}
if ((empanadasA + empanadasB + empanadasC) > 40){
   throw Error
}
   return total;
};
