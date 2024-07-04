import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import Fight from "../Fight";
import Stack from "../Stack";
import Timeline from "../Timeline";

const hitStun: TIMELINE_BLOCK = {
  name: "Hit Stun",
  frameType: "hitStun",
  hitBox: "invincible",
  type: "wait",
  imageFrameIndex: 0,
};

const convertActionToTimelineStack = (action: CHAR_ACTION) => {
  const startupBlocks: TIMELINE_BLOCK[] = Array.from({
    length: action.startup || 0,
  }).map((_, index) => ({
    frameType: "startup",
    imageFrameIndex: index,
    ...action,
  }));
  const hittingBlocks: TIMELINE_BLOCK[] = Array.from({
    length: action.hitting || 0,
  }).map((_, index) => ({
    frameType: "hitting",
    imageFrameIndex: startupBlocks.length + index,
    ...action,
  }));
  const recoverBlocks: TIMELINE_BLOCK[] = Array.from({
    length: action.recover || 0,
  }).map((_, index) => ({
    frameType: "recover",
    imageFrameIndex: startupBlocks.length + hittingBlocks.length + index,
    ...action,
  }));

  return [...startupBlocks, ...hittingBlocks, ...recoverBlocks];
};

const convertActionStackToTimelineStack = (actionStack: CHAR_ACTION_STACK[]) =>
  actionStack.reduce((blocks: TIMELINE_BLOCK[], { action }) => {
    const newTimelineBlock: TIMELINE_BLOCK[] =
      convertActionToTimelineStack(action);

    return [...blocks, ...newTimelineBlock];
  }, []);

const addHitBlockMissToTimeline = (
  player1Stack: TIMELINE_BLOCK[],
  player2Stack: TIMELINE_BLOCK[],
) => {
  const iterations = Math.max(player1Stack.length, player2Stack.length);
  const p1: TIMELINE_BLOCK[] = [];
  const p2: TIMELINE_BLOCK[] = [];
  let p1HasHitStun = 0;
  let p2HasHitStun = 0;

  for (let frame = 0; frame < iterations; frame++) {
    if (p1HasHitStun) {
      if (p1HasHitStun != -1) {
        p1[frame] = hitStun;
        p1HasHitStun -= 1;
        if (p1HasHitStun === 0) p1HasHitStun -= 1;
      }
    } else {
      p1[frame] = player1Stack[frame];
    }
    if (p2HasHitStun) {
      if (p2HasHitStun != -1) {
        p2[frame] = hitStun;
        p2HasHitStun -= 1;
        if (p2HasHitStun === 0) p2HasHitStun -= 1;
      }
    } else {
      p2[frame] = player2Stack[frame];
    }

    const hasActiveHitP1 =
      p1[frame]?.frameType === "hitting" &&
      p2[frame]?.hitBox !== "invincible" &&
      !p2HasHitStun;
    const hasActiveHitP2 =
      p2[frame]?.frameType === "hitting" &&
      p1[frame]?.hitBox !== "invincible" &&
      !p1HasHitStun;

    if (hasActiveHitP1) {
      p1[frame].hasHit = true;
      p2[frame] = hitStun;
      p2HasHitStun = (player1Stack[frame]?.hitStun || 0) - 1;
    }
    if (hasActiveHitP2) {
      p2[frame].hasHit = true;
      p1[frame] = hitStun;
      p1HasHitStun = (player2Stack[frame]?.hitStun || 0) - 1;
    }
    // TODO check if hit was blocked, missed or something
  }

  return [p1, p2];
};

export default function Scene({
  p1Stack,
  p2Stack,
}: {
  p1Stack: CHAR_ACTION_STACK[];
  p2Stack: CHAR_ACTION_STACK[];
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timeoutID = setInterval(() => {
      setFrame((val: number) => val + 1);
    }, 75);

    return () => {
      // 👇️ Clear the timeout when the component unmounts
      clearInterval(timeoutID);
    };
  }, []);

  if (frame > Math.max(p1Stack.length, p2Stack.length, 40)) {
    return setFrame(0);
  }

  const [p1, p2] = addHitBlockMissToTimeline(
    convertActionStackToTimelineStack(p1Stack),
    convertActionStackToTimelineStack(p2Stack),
  );

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <p className="text-md">NextUI</p>
          </CardHeader>
          <CardBody>
            <Stack />
          </CardBody>
        </Card>
        <div className="col-span-2">
          <Fight player1Stack={p1} player2Stack={p2} frame={frame} />
        </div>
        <Card>
          <CardHeader>
            <p className="text-md">NextUI</p>
          </CardHeader>
          <CardBody>
            <Stack />
          </CardBody>
        </Card>
        <div className="col-span-4">
          <Timeline player1Stack={p1} player2Stack={p2} frame={frame} />
        </div>
      </div>
    </div>
  );
}
