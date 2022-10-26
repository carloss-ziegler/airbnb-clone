import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(
    new Date(startDate),
    "dd 'de' MMMM 'de' yyy",
    {
      locale: ptBR,
    }
  );
  const formattedEndDate = format(new Date(endDate), "dd 'de' MMMM 'de' yyy", {
    locale: ptBR,
  });
  const range = `${formattedStartDate} a ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Estadias - <strong>{range}</strong> - para{" "}
            <strong>{noOfGuests}</strong> pessoas
          </p>

          <h1 className="text-2xl font-semibold mt-2 mb-6">
            Estadias em {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Flexibilidade no Cancelamento</p>
            <p className="button">Tipos de Lugares</p>
            <p className="button">Preço</p>
            <p className="button">Quartos e Camas</p>
            <p className="button">Mais Filtros</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
