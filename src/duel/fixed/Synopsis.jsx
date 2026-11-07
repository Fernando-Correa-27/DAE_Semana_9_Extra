export default function Synopsis({ text }) {
  return (
    <p className="synopsis" style={{ whiteSpace: 'pre-line' }}>
      {text}
    </p>
  );
}
