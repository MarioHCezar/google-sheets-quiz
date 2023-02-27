const output = document.querySelector(".output");
const urlGS = "https://docs.google.com/spreadsheets/d/";
const ssid = "1WEwJwk-XgO1EiNIVlFts_noffkJW5c_BvRYiYN4pWxI";
const gviz = "/gviz/tq?";
const endpoint = `${urlGS}${ssid}${gviz}`;
// let quiz = [];
// let questions = [];

// fetch(endpoint)
//   .then((res) => res.text())
//   .then((data) => {
//     const json = JSON.parse(data.substring(47).slice(0, -2));
//     const rows = json.table.rows;
//     rows.forEach((row) => quiz.push(row.c));
//     console.log(quiz);
//     // quiz.forEach((question) => console.log(question[7].v));
//     quiz.forEach((question) => questions.push(question[0].v));
//     quiz.forEach((question) => console.log(question[0].v));

//     // renomeando as entradas do quiz para facilitar a criação de questões
//     let quizArray = quiz.map((item) => {
//       return {
//         q: item[0].v,
//         options: [item[1].v, item[1].v, item[1].v, item[1].v, item[1].v],
//         answer: item[6].v,
//         theme: item[7].v,
//       };
//     });
//     console.log(quizArray);
//   });
