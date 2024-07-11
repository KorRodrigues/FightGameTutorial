import DefaultLayout from "@/layouts/blogpost";

export default function IndexPage() {
  return (
    <DefaultLayout title="Tutorial">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <p>
            Aqui vou falar sobre o foco desse site, quais os primeiros passos
            pra aprender fight game, e recomendar outros recursos e videos
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
