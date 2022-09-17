interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div>
      <Button title="Botao 1" />
      <Button title="Botao 2" />
      <Button title="Botao 3" />
      <Button title="Botao 4" />
    </div>
  );
}

export default App;
