import { useScramble } from "use-scramble";

type ScrambledTextProps = {
  Text: string;
};

export default function ScrambledText({ Text }: ScrambledTextProps) {
  const { ref } = useScramble({
  text: Text,
  chance: 1,
  scramble: 20,
  speed: 0.5
});

return <span ref={ref} />;

}
