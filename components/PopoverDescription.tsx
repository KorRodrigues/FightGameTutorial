import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Link } from "@nextui-org/link";

export default function PopoverDescription({
  children,
  name,
}: {
  children: React.ReactNode;
  name: React.ReactNode;
}) {
  return (
    <Popover showArrow backdrop="opaque" offset={20} placement="bottom">
      <PopoverTrigger>
        <Link>{name}</Link>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}

export function Projetil({ children }: { children: React.ReactNode }) {
  return (
    <PopoverDescription name={children}>
      <div className="px-1 py-2 max-w-80">
        <div className="text-small font-bold">Um golpe de projétil</div>
        <div className="text-tiny">
          em jogos de luta é quando seu personagem lança algo, como uma bola de
          fogo ou uma rajada de energia, em direção ao oponente. Isso ajuda a
          manter a pressão sem precisar chegar perto. É ótimo para controlar o
          espaço e forçar o adversário a se mover, mas esses golpes são
          geralmente mais lentos e podem ser evitados ou bloqueados se o
          oponente estiver atento.
        </div>
      </div>
    </PopoverDescription>
  );
}
