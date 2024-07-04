import Scene from "@/components/FightGame/Scene";
import DefaultLayout from "@/layouts/default";

const dash: CHAR_ACTION = {
  name: "forward dash",
  type: "move",
  startup: 0,
  hitting: 0,
  recover: 13,
  hitBox: "standing",
  moveEachFrame: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
};

const jab: CHAR_ACTION = {
  name: "standing far low punch",
  type: "atack",
  startup: 4,
  hitting: 3,
  recover: 4,
  reach: 1,
  enableGuard: "highlow",
  hitBox: "standing",
  hitStun: 4 + 4,
  blockStun: 4 + 4,
  counterStun: 4 + 4,
};

const kick: CHAR_ACTION = {
  name: "standing high kick",
  type: "atack",
  startup: 8,
  hitting: 5,
  recover: 18,
  reach: 2,
  enableGuard: "highlow",
  hitBox: "standing",
  hitStun: 18 - 3,
  blockStun: 18 - 5,
  counterStun: 18 - 1,
};

export default function DocsPage() {
  const p1Stack: CHAR_ACTION_STACK[] = [
    {
      action: dash,
      canBeRemoved: false,
    },
    {
      action: jab,
      canBeRemoved: false,
    },
  ];
  const p2Stack: CHAR_ACTION_STACK[] = [
    {
      action: jab,
      canBeRemoved: false,
    },
    {
      action: kick,
      canBeRemoved: false,
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Scene p1Stack={p1Stack} p2Stack={p2Stack} />
      </section>
    </DefaultLayout>
  );
}
