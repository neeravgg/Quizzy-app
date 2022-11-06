// useEffect(() => {
//   const form = JSON.parse(localStorage.getItem("formData"));
//   if (QuizId != 4) {
//     fetch(
//       `${process.env.NEXT_PUBLIC_URL}/api/getQuestion/${form[0]?.class}/${QuizId}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestionState(data);
//       });
//   } else {
//     fetch(`${process.env.NEXT_PUBLIC_URL}/api/getFinal/${form[0]?.class}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestionState(data);
//       });
//   }
// }, []);
