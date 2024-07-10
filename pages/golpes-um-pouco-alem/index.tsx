import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import DefaultLayout from "@/layouts/blogpost";

export default function Basic() {
  return (
    <DefaultLayout title="Categorias de golpes">
      <section>
        <p>
          A combinação de diversas propriedades em um ataque pode coloca-lo em
          algumas categorias e que moldam sua utilidade estratégica durante as
          batalhas:
        </p>
      </section>
      <section>
        <h2>Fireball (ou projétil)</h2>
        <p>
          Golpes de longa distancia que tem como objetivo dominar uma área e
          manter o oponente longe, costumam ter uma recuperação lenta permitindo
          contra ataques caso o oponente esteja atento.
        </p>
        <p>
          Existem projéteis com diferentes velocidades, alcances e ângulos,
          personagens com muitas fireballs permitem mindgames contra os
          oponentes.
          <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
            <Image
              isBlurred
              shadow="sm"
              src="/article/golpes-um-pouco-alem/Shinku_Hadoken.webp"
              width="initial"
            />
            <Image
              isBlurred
              shadow="sm"
              src="/article/golpes-um-pouco-alem/akuma_fb.webp"
              width="initial"
            />
          </div>
          <Accordion className="shadow-medium rounded-medium bg-content1 pt-2 px-4">
            <AccordionItem key="1" title="Cuidado ao usar a curtas distancias!">
              <p>
                O oponente usará pulos e golpes que atravessam projeteis para
                atacar enquanto você ainda está se recuperando do ataque.
              </p>
              <Image
                className="mt-6 mb-8"
                shadow="sm"
                src="/article/golpes-um-pouco-alem/fireball_punish.gif"
              />
            </AccordionItem>
          </Accordion>
        </p>
      </section>
      <section>
        <h2>Golpes de longo alcance</h2>
        <p>
          Golpes de longa distância nos jogos de luta tendem a ser mais rápidos
          que projéteis mas possuem a desvantagem de ter uma hurtbox maior,
          tornando o lutador mais vulnerável a contra-ataques se o golpe for
          bloqueado ou esquivado.
          <Image
            className="mt-6 mb-8"
            shadow="sm"
            src="/article/golpes-um-pouco-alem/Dhalsim.gif"
            width="initial"
          />
          <Accordion className="shadow-medium rounded-medium bg-content1 pt-2 px-4">
            <AccordionItem
              key="1"
              title="É possivel acertar o oponente que errou um golpe de longa distancia por ele possuir uma hurtbox maior"
            >
              <Image
                className="mt-6 mb-8"
                shadow="sm"
                src="/article/golpes-um-pouco-alem/long-whiff-punish.gif"
              />
            </AccordionItem>
          </Accordion>
        </p>
      </section>
      <section>
        <h2>Golpes de avanço</h2>
        <p>
          Golpes de avanço são caracterizados por ataques que mandam o
          personagem na direção do oponente, usualmente com alguma segurança
          como golpes que atravessam fireballs, golpes rapidos demais para se
          reagir ou golpes com armadura que permitem receber um golpe sem ser
          interrompido.
        </p>
        <p>
          Existem inúmeras outras variações de golpes de avanço, com alguns
          permitindo golpes diferentes dependendo do botão pressionado após um
          dash, outros que permitem dar um ‘fake’ tentando baitar um golpe do
          oponente, teleportes, e outros que atravessam o oponente na tentativa
          de atravessar a defesa.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
          <Image
            isBlurred
            shadow="sm"
            src="/article/golpes-um-pouco-alem/300px-Ryu_Side_B_SSBU.gif"
            width="initial"
          />
          <Image
            isBlurred
            shadow="sm"
            src="/article/golpes-um-pouco-alem/hammerfall.gif"
            width="initial"
          />
        </div>
        <p>
          No geral, a intenção do Golpe de avanço é iniciar a agressão, tentando
          pegar o oponente desprevenido ou o forçando a adivinhar como o golpe
          vai acertar. Logo em seguida o jogador atacante pode decidir se
          continua a pressão ou se joga defensivo tentando baitar um golpe
          desesperado do oponente.
        </p>
      </section>
      <section>
        <h2>Agarrões e arremessos</h2>
        <p>
          A maioria dos jogos de luta possui uma forma universal de agarrão.
          Eles têm alcance curto e recuperação alta, mas ignoram a defesa e
          causam um dano significativo. Além disso, muitos jogos permitem
          escolher a direção para onde você lança o oponente, o que pode virar o
          jogo em situações desfavoráveis, especialmente perto das paredes.
        </p>
        <p>
          Para se defender de um agarrão comum, você pode pular, se esquivar ou
          usar um agarrão ao mesmo tempo, o que geralmente resulta em ambos os
          personagens sendo empurrados para trás.
        </p>
        <p>
          Existem também agarrões especiais, conhecidos como agarrões de
          comando, eles podem causar mais dano, pegar oponentes no ar, iniciar
          com uma movimentação ou dash antes do ataque entre outras
          características únicas. Esses agarrões não podem ser defendidos com um
          agarrão comum.
        </p>
        <p>
          Devido à alta recuperação dos agarrões e ao risco de contra-ataques, a
          melhor estratégia para usá-los é esperar uma brecha no ataque do
          oponente, forçando-o a respeitar sua presença a curta distância.
        </p>
      </section>
      <section>
        <h2>Sub categorias de golpes</h2>
        <div>
          <h3>Anti-aéreo</h3>
          <p>
            A única característica que define que um golpe vai ser considerado
            anti-aéreo é a capacidade de vencer oponentes que estão pulando em
            cima de você. Os anti-aéreos geralmente têm uma hitbox projetada
            para cima do personagem, ou podem ter uma hurtbox menor na parte
            inferior tornando-o difíceis de acertar, alguns podem lançar o
            personagem ou um projetil para cima. Esses golpes são essenciais
            para controlar o espaço aéreo e impedir que o adversário ganhe
            vantagem através de saltos.
          </p>
          <p>
            Existem golpes anti-aéreos de todos os tipos. Por exemplo, alguns
            projéteis, como o Grave Reaper de Testament. Há também golpes que
            lançam o personagem para cima, como o Flash Kick de Guile ou
            Shoryuken de Ryu, e até agarrões específicos, como o anti-aéreo de
            Zangief, que pegam o oponente no ar.
          </p>
          <p>
            Entender a função dos anti-aéreos e como usá-los efetivamente pode
            ser a diferença entre dominar o espaço aéreo ou ser continuamente
            pressionado por ataques aéreos do oponente.
          </p>
        </div>
        <div>
          <h3>Golpes de contra-ataque</h3>
          <p>
            São movimentos especiais projetados para punir o adversário por
            ataques imprudentes. Quando ativados no momento certo, esses golpes
            interrompem o ataque inimigo e causam danos significativos. A
            característica principal desses golpes é a invencibilidade
            temporária durante a qual o personagem absorve o impacto do golpe
            adversário e responde imediatamente com um contra-ataque.
          </p>
          <p>
            Por exemplo, o &quot;Counter&quot; de Geese Howard em King of
            Fighters bloqueia o ataque do oponente e contra-ataca de forma
            rápida e eficiente. Baiken em Guilty Gear Strive pode bloquear
            diversos golpes e arremesar o oponente logo em seguida.
          </p>
          <p>
            A chave para usar golpes de contra-ataque de forma eficaz é o timing
            e a leitura do adversário. No entanto, esses golpes vêm com riscos:
            errar o timing ou ser previsível pode deixar você exposto a um
            contra-ataque ainda mais devastador. Golpes de contra-ataque
            recompensam jogadores com bom senso de timing e uma leitura precisa
            do comportamento do oponente.
          </p>
        </div>
        <div>
          <h3>Reversal</h3>
          <p>
            Reversals são golpes que podem ser usados imediatamente após
            levantar do chão ou sair de um estado de atordoamento,
            frequentemente com invencibilidade inicial para interromper a
            pressão do oponente. Eles são uma ferramenta poderosa para virar o
            jogo a seu favor e escapar de situações difíceis.
          </p>
          <p>
            No entanto, usar um reversal vem com riscos significativos. Esses
            golpes têm uma recuperação muito alta, e se o oponente prever o
            movimento e defender, você ficará vulnerável a um combo completo,
            resultando em grandes danos como punição. Portanto, é crucial usar
            reversals de forma estratégica e calculada, escolhendo o momento
            certo para maximizar sua eficácia sem se expor a contra-ataques
            devastadores.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
