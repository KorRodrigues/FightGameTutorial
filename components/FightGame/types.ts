interface CHAR_ACTION {
  name: string;
  hitBox: "invincible" | "standing" | "crouch" | "aerial";
  type: "atack" | "move" | "block" | "wait";
  enableGuard?: "low" | "highlow" | "high";
  reach?: number;
  startup?: number;
  hitting?: number;
  recover?: number;
  hitStun?: number;
  blockStun?: number;
  counterStun?: number;
  moveEachFrame?: [number, number][];
}

interface CHAR_ACTION_STACK {
  action: CHAR_ACTION;
  canBeRemoved: boolean;
}

interface TIMELINE_BLOCK extends CHAR_ACTION {
  hasHit?: true;
  imageFrameIndex: number;
  frameType:
    | "startup"
    | "hitting"
    | "recover"
    | "move"
    | "block"
    | "wait"
    | "hitStun"
    | "blockStun"
    | "counterStun";
}
