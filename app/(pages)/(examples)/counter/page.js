import Counter from "./components/Counter";

export const metadata = {
  title: "Ejemplo - Counter",
  description: "Counter",
};

export default function CounterPage() {
  return (
    <>
      <Counter value={0}/>
    </>
  );
}
