import FightSprites from "../FightSprites";

export default function Fight({
  player1Stack,
  player2Stack,
  frame,
}: {
  player1Stack: TIMELINE_BLOCK[];
  player2Stack: TIMELINE_BLOCK[];
  frame: number;
}) {
  return (
    <div className="grid grid-cols-10">
      <FightSprites frame={frame} playerStack={player1Stack} />
      <div />
      <FightSprites
        frame={frame}
        playerStack={player2Stack}
        style={{ transform: "scaleX(-1)", right: 0 }}
      />
    </div>
  );
}
