export default function FightSprites({
  playerStack,
  frame = 0,
  style,
}: {
  playerStack: TIMELINE_BLOCK[];
  frame: number;
  style?: any;
}) {
  const image = playerStack?.[frame]
    ? `/fight/${playerStack?.[frame]?.name}/${playerStack?.[frame]?.imageFrameIndex}.png`
    : `/fight/stand.png`;

  return (
    <div style={{ overflow: "visible", position: "relative", height: 244 }}>
      <img
        alt="meaninfull"
        src={image}
        style={{ position: "absolute", maxWidth: "initial", ...style }}
      />
    </div>
  );
}
