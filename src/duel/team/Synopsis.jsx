// Task 6 · Synopsis component
// Props: text (string, written by a third party).
// Returns a <p> that shows the text exactly as it is, never as HTML.
export default function Synopsis({ text }) {
  return <p>{text}</p>;
}

// import DOMPurify from 'dompurify';

// export default function Synopsis({ text }) {
//   const htmlConSaltos = text.replace(/\n/g, "<br />");
//   const htmlSeguro = DOMPurify.sanitize(htmlConSaltos);

//   return (
//     <p 
//       className="synopsis" 
//       dangerouslySetInnerHTML={{ __html: htmlSeguro }} 
//     />
//   );
// }