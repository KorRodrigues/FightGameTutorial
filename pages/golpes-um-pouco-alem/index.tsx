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
          <ul>
            <li>
              <h3>Fireball (ou projétil)</h3>
              <p>
                Golpes de longa distancia que tem como objetivo dominar uma área
                e manter o oponente longe, costumam ter uma recuperação lenta
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
                      O oponente usará pulos e certos golpes para atacar
                      enquanto você ainda está finalizando o ataque
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
                Golpes de longa distancia que tem como objetivo dominar uma área
                e manter o oponente longe, costumam ter uma recuperação lenta
                permitindo contra ataques caso o oponente esteja atento.
              </p>
            </li>
          </ul>
        </p>
      </section>
    </DefaultLayout>
  );
}
