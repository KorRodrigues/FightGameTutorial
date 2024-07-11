/* eslint-disable jsx-a11y/alt-text */

import DefaultLayout from "@/layouts/blogpost";
import {
  Recuperacao,
  Overhead,
  Reversal,
} from "@/components/PopoverDescription";

export default function Basic() {
  return (
    <DefaultLayout title="Entendendo as opções de defesa">
      <section>
        <p>
          A defesa é uma habilidade fundamental em jogos de luta, muitas vezes
          subestimada em comparação com os ataques e combos espetaculares. A
          defesa após alguns golpes é crucial para manter uma posição segura e
          evitar contra-ataques, Após desferir um ataque com{" "}
          <Recuperacao>recuperação</Recuperacao> mais lenta é essencial estar
          pronto para se defender, especialmente se o golpe não acertar ou for
          bloqueado. Isso permite que você mantenha a pressão sobre o oponente
          sem se expor a retaliações rápidas. Incorporar essa prática na sua
          estratégia ajuda a manter o controle da partida e aumenta suas chances
          de sucesso, transformando cada ação em uma oportunidade para
          fortalecer sua posição defensiva e preparar o próximo movimento
          ofensivo. Existem várias categorias de defesa a se dominar, algumas
          comuns e presentes na maioria dos jogos, outras que são unicas de um
          jogo ou franquia.
        </p>
      </section>
      <section>
        <h2>Bloqueio</h2>
        <p>
          O bloqueio é a forma mais básica e comum de defesa. Existem dois tipos
          principais: bloqueio alto e baixo. O bloqueio alto (ou defesa em pé)
          defende contra ataques aéreos, golpes altos e golpes de altura média.
          Enquanto o bloqueio baixo (ou defesa agachado) protege contra ataques
          rasteiros e de altura média. O jogador atacante irá intercalar entre
          golpes rasteiros, médios e <Overhead>overhead</Overhead> e o defensivo
          precisa estar preparado para alternar entre os tipos de bloqueio até
          encontrar uma oportunidade de atacar.
        </p>
      </section>
      <section>
        <h2>Esquiva</h2>
        <p>
          A esquiva envolve movimentos que evitam completamente os ataques do
          adversário. Em jogos como Tekken, esquivas laterais podem tirar você
          da linha de ataque, enquanto em jogos como Street Fighter e Guilty
          Gear, o &quot;dash&quot; ou o &quot;backdash&quot; são movimentos que
          podem criar espaço e evitar um golpe iminente, podem contar com
          invencibilidade temporaria e ser também invulneraveis a agarrões.
          Esquivar requer um excelente senso de timing e leitura do adversário,
          tornando-o uma estratégia avançada, mas extremamente eficaz.
        </p>
      </section>
      <section>
        <h2>Parry</h2>
        <p>
          O &quot;parry&quot; é uma técnica de defesa avançada em jogos de luta,
          onde o jogador neutraliza completamente um ataque ao executá-lo no
          momento exato em que o golpe adversário está prestes a atingi-lo. Ao
          contrário do bloqueio padrão, o parry não apenas evita dano, mas
          também deixa o oponente vulnerável, permitindo um contra-ataque
          imediato. Essa técnica requer um timing preciso e pode ser encontrada
          em diversos jogos de luta, como em Street Fighter III, Tekken, e
          Guilty Gear. Algumas vezes a mecanica de parry é universal ao jogo
          outras vezes é um golpe especifico de um personagem. Parry geralmente
          é vulneravel a agarrões.
        </p>
      </section>
      <section>
        <h2>Tech throw/quebra de agarrão</h2>
        <p>
          O &quot;tech throw&quot; é uma técnica defensiva em jogos de luta que
          permite ao jogador escapar de um agarrão do oponente. Quando um
          adversário tenta agarrar seu personagem, você pode realizar um tech
          throw pressionando os botões correspondentes ao agarrão no momento
          certo. Essa ação cancela o agarrão, deixando ambos os personagens em
          uma posição neutra sem que nenhum deles sofra dano. O tech throw é
          essencial para evitar ser pego em situações vulneráveis e manter o
          controle do combate, especialmente em jogos onde agarrões podem
          iniciar combos ou setups perigosos. Note porém que agarrões de comando
          não podem ser defendidos dessa maneira, tornando um pulo ou dash uma
          defesa mais eficiente para esses casos.
        </p>
      </section>
      <section>
        <h2>Reversals</h2>
        <p>
          <Reversal>Ataques reversals</Reversal> podem ser uma excelente opção
          de defesa em jogos de luta, exemplificando o ditado &quot;a melhor
          defesa é o ataque&quot;. Reversals não só interrompem a ofensiva
          adversária, mas também infligem dano e criam oportunidades para
          retomar o controle da partida. Essa técnica transforma uma situação
          defensiva em uma chance de virar o jogo.
        </p>
      </section>
      <section>
        <h2>Outras opções</h2>
        <p>
          Existem opções de defesa especificas a um jogo ou personagem, como o
          &quot;Burst&quot; em Guilty Gear, que permite escapar de combos e
          pressão intensa com uma explosão que afasta o adversário, e o
          &quot;Guard Cancel Roll&quot; em The King of Fighters, que permite
          rolar após um bloqueio, evitando pressão contínua. Em Street Fighter
          V, o &quot;V-Reversal&quot; usa parte da barra de V-Gauge para
          realizar um contra-ataque durante o bloqueio, interrompendo a ofensiva
          do oponente. Já em Tekken, personagens como Jin Kazama possuem
          &quot;Reversals&quot;, que contra-atacam automaticamente golpes
          bem-timados, transformando defesa em oportunidade ofensiva. Essas
          técnicas adicionam profundidade e variedade, permitindo adaptações
          estratégicas específicas a cada jogo e personagem.
        </p>
      </section>
    </DefaultLayout>
  );
}
