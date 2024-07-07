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
        <p>
          <h3>Fireball (ou projétil)</h3>
          <p>
            Golpes de longa distancia que tem como objetivo dominar uma área e
            manter o oponente longe, costumam ter uma recuperação lenta
            permitindo contra ataques caso o oponente esteja atento.
            <Image
              isBlurred
              className="mt-6 mb-8"
              shadow="sm"
              src="/article/golpes-um-pouco-alem/Shinku_Hadoken.webp"
              width="initial"
            />
            <Accordion className="shadow-medium rounded-medium bg-content1 pt-2 px-4">
              <AccordionItem
                key="1"
                title="Cuidado ao usar a curtas distancias!"
              >
                <p>
                  O oponente usará pulos e certos golpes para atacar enquanto
                  você ainda está finalizando o ataque
                </p>
                <Image
                  className="mt-6 mb-8"
                  shadow="sm"
                  src="/article/golpes-um-pouco-alem/fireball_punish.gif"
                />
              </AccordionItem>
            </Accordion>
          </p>
          <h3>Golpes de longo alcance</h3>
          <p>
            Golpes de longa distância nos jogos de luta tendem a ser mais
            rápidos que projéteis mas possuem a desvantagem de ter uma hurtbox
            maior, tornando o lutador mais vulnerável a contra-ataques se o
            golpe for bloqueado ou esquivado.
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
          <h3>Golpes de avanço</h3>
          <p>
            Golpes de avanço são caracterizados por ataques que mandam o
            personagem na direção do oponente, usualmente com alguma segurança
            como golpes que atravessam fireballs, golpes rapidos demais para se
            reagir ou golpes com armadura que permitem receber um golpe sem ser
            interrompido.
            <Image
              className="mt-6 mb-8"
              shadow="sm"
              src="/article/golpes-um-pouco-alem/300px-Ryu_Side_B_SSBU.gif"
              width="initial"
            />
          </p>
          <p>
            Existem inúmeras outras variações de golpes de avanço, com alguns
            permitindo golpes diferentes dependendo do botão pressionado após um
            dash, outros que permitem dar um ‘fake’ tentando baitar um golpe do
            oponente, teleportes, e outros que atravessam o oponente na
            tentativa de atravessar a defesa.
            <Image
              className="mt-6 mb-8"
              shadow="sm"
              src="/article/golpes-um-pouco-alem/hammerfall.gif"
              width="initial"
            />
          </p>
          <p>
            No geral, a intenção do Golpe de avanço é iniciar a agressão,
            tentando pegar o oponente desprevenido ou o forçando a adivinhar
            como o golpe vai acertar. Logo em seguida o jogador atacante pode
            decidir se continua a pressão ou se joga defensivo tentando baitar
            um golpe desesperado do oponente.
          </p>
        </p>
      </section>
    </DefaultLayout>
  );
}
