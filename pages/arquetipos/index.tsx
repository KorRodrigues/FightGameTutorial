/* eslint-disable jsx-a11y/alt-text */

import DefaultLayout from "@/layouts/blogpost";

export default function Basic() {
  return (
    <DefaultLayout title="Personagens e Arquetipos">
      <section>
        <p>
          Cada personagem possui um conjunto único de golpes e habilidades que
          definem seu estilo de jogo e estratégia. Esses conjuntos são
          classificados em diferentes arquétipos. Existem 4 categorias de
          arquetipos principais:
        </p>
      </section>
      <section>
        <h2>Zoner</h2>
        <p>
          Os zoners são mestres em manter a distância. Com várias ferramentas de
          zoning, que incluem ataques e projéteis de diferentes ângulos e
          velocidades, eles controlam o espaço e impedem o avanço do oponente.
          Este tipo de personagem é perfeito para jogadores que preferem um
          estilo de jogo mais defensivo, focado em frustrar as tentativas de
          aproximação do adversário e forçando erros que podem ser capitalizados
          à distância.
        </p>
        <p>
          Geralmente esse personagem não vai ter opções boas de curta distância,
          agarrões e avanço. Justamente por isso um zoner sempre vai buscar uma
          distância segura, empurrando e impedindo o avanço do oponente, jogando
          mais lento e capitalizando erros do oponente a distancia.
        </p>
      </section>
      <section>
        <h2>Rushdown</h2>
        <p>
          Os personagens de rushdown são agressivos e especializados em
          pressionar o oponente incessantemente. Eles se destacam em abrir
          defesas e causar danos rápidos e consistentes. Combinam golpes
          rápidos, mix-ups e pressão contínua para dominar a luta. Embora sejam
          rápidos e eficientes em curtas distâncias, geralmente têm poucas
          opções defensivas e dependem da proximidade para serem eficazes.
        </p>
        <p>
          Os personagens de rushdown são a escolha ideal para jogadores que
          adoram estar na ofensiva constantemente. Eles se destacam em utilizar
          ataques que atingem diferentes hitboxes, com lows e overheads na
          tentativa de encontrar uma brecha na defesa do oponente e causar danos
          rápidos e consistentes. Este arquétipo combina golpes rápidos, mix-ups
          e uma pressão contínua que pode facilmente dominar o adversário,
          tornando cada luta uma dança frenética e implacável.
        </p>
      </section>
      <section>
        <h2>Grappler</h2>
        <p>
          Um grappler se caracteriza por arremessos e agarrões de alto dano.
          Esses personagens tendem a ter ataques poderosos que ignoram a defesa
          do oponente, tem mais vida que a média de outros personagens, golpes
          com armadura e opções de defesa, mas geralmente são mais lentos, não
          costumam ter opções de longo alcance e são vulneráveis a zoning por
          precisar se aproximar para serem eficazes.
        </p>
        <p>
          Os grapplers são personagens de alto risco e alta recompensa, exigindo
          paciência e habilidade para se aproximar e causar muito dano. É comum
          ver grapplers virarem a partida pelo alto dano, sendo uma ótima
          escolha para jogadores que gostam de um estilo de jogo pacientes e
          diretos.
        </p>
      </section>
      <section>
        <h2>Shoto</h2>
        <p>
          Os shotos são os &quot;pau pra toda obra&quot; dos jogos de luta,
          oferecendo um kit balanceado com diversas ferramentas e opções. Os
          protagonistas dos jogos costumam pertencer a esse arquetipo. Eles
          possuem ataques de distância, golpes de avanço e boas alternativas
          defensivas, tornando-os versáteis em qualquer situação. Este arquétipo
          é ideal para jogadores que desejam flexibilidade e a capacidade de se
          adaptar rapidamente a diferentes adversários e estilos de jogo.
        </p>
        <p>
          Embora raramente sejam os melhores em uma única área específica, os
          shotos brilham por sua capacidade de lidar com diversas situações em
          uma partida. Eles são especialmente apropriados para iniciantes, pois
          ensinam fundamentos e estratégias variadas, além de serem
          relativamente fáceis de executar.
        </p>
      </section>
    </DefaultLayout>
  );
}
