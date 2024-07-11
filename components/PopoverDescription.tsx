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

export function Recuperacao({ children }: { children: React.ReactNode }) {
  return (
    <PopoverDescription name={children}>
      <div className="px-1 py-2 max-w-80">
        <div className="text-small font-bold">Recuperação</div>
        <div className="text-tiny">
          Depois de um golpe, há um período de recuperação onde você não pode se
          mover ou usar outros comandos, ou seja fica vulnerável. Golpes com
          recuperação rápida são mais seguros e golpes com recuperação lenta
          devem ser usados com cautela para evitar contra ataques.
        </div>
      </div>
    </PopoverDescription>
  );
}

export function Overhead({ children }: { children: React.ReactNode }) {
  return (
    <PopoverDescription name={children}>
      <div className="px-1 py-2 max-w-80">
        <div className="text-small font-bold">Overheads/Ataques altos</div>
        <div className="text-tiny">
          Um ataque overhead em jogos de luta é um golpe projetado para atingir
          o oponente enquanto ele está bloqueando agachado. Esses ataques são
          eficazes contra jogadores que usam muito do bloqueio baixo, pois
          ignoram esse tipo de defesa. Geralmente, os ataques overhead têm uma
          animação específica que os diferencia dos golpes normais, exigindo que
          o jogador esteja atento para reagir adequadamente. Incorporar ataques
          overhead na estratégia pode surpreender o adversário e abrir
          oportunidades para combos ou pressão adicional.
        </div>
      </div>
    </PopoverDescription>
  );
}

export function Reversal({ children }: { children: React.ReactNode }) {
  return (
    <PopoverDescription name={children}>
      <div className="px-1 py-2 max-w-80">
        <div className="text-small font-bold">Reversal</div>
        <div className="text-tiny">
          Reversals são golpes que podem ser usados imediatamente após levantar
          do chão ou ao sair de um estado de atordoamento, frequentemente com
          invencibilidade inicial ou inicio imediato, perfeito para interromper
          a pressão do oponente. É uma ferramenta poderosa para virar o jogo a
          seu favor e escapar de situações difíceis.
        </div>
      </div>
    </PopoverDescription>
  );
}
