import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Atendimento</h5>
        <p>Central de Ajuda</p>
        <p>AirCover</p>
        <p>Informações de segurança</p>
        <p>Apoie pessoas com deficiência</p>
        <p>Opções de cancelamento</p>
        <p>Nossa resposta à pandemia de COVID-19</p>
        <p>Denuncie um problema do bairro</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Comunidade</h5>
        <p>Airbnb.org: ajuda em desastres</p>
        <p>Apoie refugiados afegãos</p>
        <p>Combate à discriminação</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Hospedagem</h5>
        <p>Experimente hospedar</p>
        <p>AirCover para anfitriões</p>
        <p>Explore recursos para hospedar</p>
        <p>Visite o fórum da comunidade</p>
        <p>Se hospede de forma responsável</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Airbnb</h5>
        <p>Newsroom</p>
        <p>Descubra novos recursos</p>
        <p>Carta dos nossos fundadores</p>
        <p>Carreiras</p>
        <p>Investidores</p>
      </div>
    </div>
  );
}

export default Footer;
