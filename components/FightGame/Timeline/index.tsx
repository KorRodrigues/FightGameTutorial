const PlayerTimeline = ({
  playerStack,
  size,
}: {
  playerStack: TIMELINE_BLOCK[];
  size: number;
}) => (
  <div
    className="grid"
    style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
  >
    {playerStack.map(({ name, frameType }, i) => (
      <div
        key={`${name}-${i}`}
        className={`aspect-square timeline_stack_square--${frameType}`}
        style={{ border: "1px solid gray" }}
      />
    ))}
    {Array.from({ length: size - playerStack.length }).map((_, i) => (
      <div
        key={i}
        className="aspect-square"
        style={{ border: "1px solid gray" }}
      />
    ))}
  </div>
);

export default function Timeline({
  player1Stack,
  player2Stack,
}: {
  player1Stack: TIMELINE_BLOCK[];
  player2Stack: TIMELINE_BLOCK[];
}) {
  const size = Math.max(player1Stack.length, player2Stack.length, 40);

  return (
    <div>
      <PlayerTimeline playerStack={player1Stack} size={size} />
      <PlayerTimeline playerStack={player2Stack} size={size} />
    </div>
  );
}
