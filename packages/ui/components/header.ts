export function Header({ title }: { title: string }) {
  return `
    <header id="header">
      <h1>${title}</h1>
      <h2>Some subtitle</h2>
    </header>
    `;
}
