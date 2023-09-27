import Company from "./Company";
import affiliationStyles from './Affiliation.module.css'

const companies = [
  {
    name: "google",
    url: "./company-logos/google-2015.svg",
  },
  {
    name: "coca cola",
    url: "./company-logos/coca-cola-2021.svg",
  },
  {
    name: "amazon",
    url: "./company-logos/amazon-2.svg",
  },
  {
    name: "hilton",
    url: "./company-logos/hilton.svg",
  },
  {
    name: "tesla",
    url: "./company-logos/tesla-9.svg",
  },
  {
    name: "fedex",
    url: "./company-logos/fedex-express-6.svg",
  },
  {
    name: "microsoft",
    url: "./company-logos/microsoft-6.svg",
  },
  {
    name: "target",
    url: "./company-logos/target-7.svg",
  },
];

function Affiliation() {
  return (
    <section className={affiliationStyles.sectionLogos}>
      <h1 className={affiliationStyles.sectionTitle}>Popular companies that work with us to hire you</h1>
      <ul className={affiliationStyles.logosContainer}>
        {companies.map((company) => (
          <Company company={company} key={company.name} />
        ))}
      </ul>
    </section>
  );
}

export default Affiliation;
