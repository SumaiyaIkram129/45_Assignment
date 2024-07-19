// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string ="sumaiya Ikram"
console.log("Lowecase:", personName.toLowerCase())
console.log("Uppercase:", personName.toUpperCase())
console.log("Titlecase", personName.replace(/\b\w/g, c=> c.toUpperCase()))