import { Container, Card, Badge } from "react-bootstrap";

const journeyData = [
  {
    year: "2023–Present",
    title: "Finance Data Analyst",
    current: true,
    bullets: [
      "Built R and SQL workflows to automate month-end processes and generate journal-ready outputs.",
      "Developed automated reports to track expected vs actual cash flows across multiple data sources.",
      "Designed forecasting models for premium and expense analysis to support senior decision-making.",
      "Established the data pipeline for a newly launched MGA, aligned with financial reporting standards.",
      "Produced reinsurance reports and worked with brokers to support regulatory submissions.",
    ],
  },
  {
    year: "2017–2020",
    title: "COVID-19 Research Intern",
    bullets: [
      "Designed statistical analysis plans for EQ-5D health economics data.",
      "Reviewed and refined analytical methodologies in COVID-19 research.",
      "Applied appropriate statistical techniques to ensure robust findings.",
      "Prepared documentation for regulatory and research ethics approval.",
    ],
  },
  {
    year: "2021–2022",
    title: "MSc Data Science",
    bullets: [
      "Thesis: Applied data models to neuroscience datasets.",
      "Algorithms for Data Science.",
      "Data Visualisation.",
      "Data Storage and Management.",
    ],
  },
  {
    year: "2018–2021",
    title: "BSc Mathematics with Finance & Economics",
    bullets: [
      "Operational Research.",
      "Programming and Computational Mathematics.",
      "Corporate Finance.",
      "Linear Algebra.",
    ],
  },
];


export default function JourneyComponent() {
  return (
    <Container className="my-5">
     <div className="timeline-center">
  <div className="timeline">
    {journeyData.map((item, index) => {
      const sideClass =
        index % 2 === 0 ? "timeline-item-left" : "timeline-item-right";

      return (
        <div className={`timeline-item ${sideClass}`} key={index}>
          <Card className="timeline-card">
            <Card.Body>
              <Card.Subtitle className="card-subtitle mb-1">
                {item.year}
                {item.current && (
                  <Badge bg="success" className="ms-2">
                    Current
                  </Badge>
                )}
              </Card.Subtitle>

              <Card.Title>{item.title}</Card.Title>

              <ul className="homeV__bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </div>
      );
    })}
  </div>
</div>

    </Container>
  );
}
