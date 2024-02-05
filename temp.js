// // ####1#####
// console.log("Hello World!");

// // ####2#####
// for (let i = 1; i <= 150; i++) {
//     console.log("Hello World", i);
// }

// // ####3#####
// for (let i = 2; i <= 20; i++) {
//     i % 2 === 0 && console.log(i);
// }

// // ####4#####
// console.log("результат:", process.argv[2] * 2);

// // ####5#####
// if (process.argv[2] === undefined) {
//     console.log("Zero");
//     process.exit();
// }

// if (process.argv[2].length > 5) {
//     console.log(process.argv[2]);
// } else {
//     console.log(process.argv[2].split("").reverse().join(""));
// }

// ####6#####
// const args = process.argv.slice(2);
// if (args.length !== 0) {
//     switch (args[0]) {
//         case "+":
//             console.log(args.slice(1).reduce((acc, cur) => acc + +cur, 0));
//             break;
//         case "-":
//             console.log(args.slice(1).reduce((acc, cur) => acc - +cur, 0));
//             break;
//         case "*":
//             console.log(args.slice(1).reduce((acc, cur) => acc * +cur, 1));
//             break;
//         case "**":
//             console.log(args.slice(1).reduce((acc, cur) => acc ** +cur, 1));
//             break;
//         case "/":
//             console.log(args.slice(1).reduce((acc, cur) => acc / +cur, 1));
//             break;
//         default:
//             console.log("Unknown command");
//     }
// }

// ####7#####
// const size = process.argv[2]; // {number}
// for (let k = 1; k <= size; k++) {
//     let s = "";
//     for (let i = 1; i <= size; i++) {
//         if (k === 1 || k === size) {
//             s += "*";
//             continue;
//         } else {
//             if ((size - i + 1) / k === 1) {
//                 s += "*";
//             } else {
//                 s += " ";
//             }
//         }
//     }
//     console.log(s);
// }
