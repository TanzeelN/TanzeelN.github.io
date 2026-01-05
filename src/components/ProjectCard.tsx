import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import type { ProjectTypes } from "../types/ProjectTypes";

type Props = {
  project: ProjectTypes;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="h-100 shadow-sm project-card">
      <div className="project-card__imgWrap">
        <Card.Img
          variant="top"
          src={project.image}
          alt={project.title}
          className="project-card__img"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{project.title}</Card.Title>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          {project.tech.map((t) => (
            <Badge key={t} bg="secondary" className="fw-normal">
              {t}
            </Badge>
          ))}
        </Stack>

        <ul className="mb-3 ps-3">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button variant="outline-primary" className="w-100" disabled>
            More details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
