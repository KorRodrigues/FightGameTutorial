/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/blogpost";
import { Projetil } from "@/components/PopoverDescription";

export default function Basic() {
  return (
    <DefaultLayout title="Entendendo os golpes">
      <section>
        <p>
          Para ser efetivo na porradaria de rua dos arcades, é essencial
          entender os diferentes tipos de golpes, suas vantagens e desvantagens,
          e quando usá-los. Sim, até na porradaria desenfreada, é preciso pensar
          estrategicamente.
        </p>
        <p>
          Quando você executa um golpe, está se comprometendo e se arriscando.
          Entender a composição de um golpe ajuda a avaliar o risco envolvido e
          as alternativas de defesa disponíveis. Aqui estão alguns aspectos a
          considerar:
        </p>
        <Image
          isBlurred
          className="mt-6 mb-8"
          shadow="sm"
          src="/article/golpes-basicos/R.gif"
          width="initial"
        />
        <p>
          <ul>
            <li>
              <h2>Alcance e Velocidade:</h2>
              <span>
                Golpes rápidos com alcance curto são bons para pressões
                constantes, enquanto golpes mais lentos e com maior alcance
                podem ser usados para surpreender e provocar o oponente à
                distância.
              </span>
            </li>
            <li>
              <h2>Recuperação:</h2>
              <span>
                Depois de um golpe, há um período de recuperação onde você não
                pode se mover ou usar outros comandos, ou seja fica vulnerável.
                Golpes com recuperação rápida são mais seguros e golpes com
                recuperação lenta devem ser usados com cautela para evitar
                contra ataques.
              </span>
            </li>
            <li>
              <h2>Hitbox e Hurtbox:</h2>
              <span>
                A hitbox é a área invisível que define onde um golpe pode
                acertar o oponente. Golpes com hitboxes amplas são eficazes para
                controlar o espaço, outras hitboxes favorecem certos angulos,
                como um golpe áereo que está mirando para baixo.
                <br />
                Já a hurtbox é a área do seu personagem que pode ser atingida
                pelos golpes do adversário. Movimentos com hurtboxes reduzidas
                ou invulneráveis são mais seguros, pois têm menos chance de
                serem atingidos. Por exemplo, se seu oponente estiver lançando{" "}
                <Projetil>projéteis</Projetil> constantemente, você pode usar um
                golpe com hurtbox invulnerável a ataques de altura média,
                podendo assim atravessar o <Projetil>projétil</Projetil> e se
                aproximar para um contra-ataque.
              </span>
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h2 className={title()}>Uma luta, uma dança</h2>
        <p>
          Todos esses aspectos criam uma dança onde a posição e golpes
          disponiveis são considerados pelos jogadores na hora de escolher seu
          próximo movimento.
        </p>
        <Image
          isBlurred
          className="mt-6 mb-8"
          shadow="sm"
          src="/article/golpes-basicos/ryu-ken.gif"
          width="initial"
        />
        <p>
          Imagine uma partida intensa de Street Fighter entre Ryu e Chun-Li. Ryu
          começa usando socos rápidos e curtos para manter Chun-Li sob pressão.
          Dada a velocidade de recuperação rapida, esses golpes permitem que ele
          interrompa as tentativas de ataque de Chun-li.
        </p>
        <p>
          Chun-Li, percebendo a tática de Ryu, começa a recuar e usar golpes de
          longo alcance, como seus chutes giratórios. Embora esses golpes tenham
          uma recuperação mais lenta, seu alcance maior permite que Chun-Li
          mantenha Ryu à distância e quebre a sequência de golpes rápidos dele.
        </p>
        <p>
          Ryu então muda de estratégia, aguardando o momento certo para
          contra-atacar. Quando Chun-Li erra um chute giratório, ele se aproxima
          e executa um combo, aproveitando a vulnerabilidade dela. Essa dança
          entre golpes rápidos de curto alcance e ataques poderosos de longo
          alcance com recuperação lenta é a chave para dominar a luta.
        </p>
        <Image
          className="mt-6 mb-8"
          shadow="sm"
          src="/article/golpes-basicos/Footsies-Trilemma.JPG"
          width="initial"
        />
        <p>
          Talvez você tenha ouvido falar sobre isso com o nome de footsies, e
          funciona funciona como um joken-pô, onde uma opção supera outra.
          Embora a aplicação de footsies possa variar entre personagens e é
          comum os jogos subverterem a ideia, porém a compreensão básica desse
          conceito é essencial para entender parte da dinâmica de um round.
        </p>
      </section>
    </DefaultLayout>
  );
}
