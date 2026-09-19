import { Quiz } from "@/components/Quiz";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">08 · Floor test</p>
      <h1>100% or you didn’t pass.</h1>
      <p className="lede">
        22 questions, shuffled. Same never-rules as the hire track: XOR, payday
        calendars, spoken 10%, geo, Adam, no invite in message 1. Screenshot a
        pass for Adam.
      </p>
      <Quiz />
    </article>
  );
}
