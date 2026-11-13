import Image from "next/image";
import Modal from "./Modal";
import type { PortfolioItem } from "../data/types";

const sections = [
  ["keyFeatures", "Key Features"],
  ["keyTechnologies", "Key Technologies"],
  ["myRole", "My Role"],
  ["learningAbout", "Learning About"],
] as const;
const validLink = (url: string | undefined): url is string =>
  typeof url === "string" && /^https:\/\//.test(url);

interface ItemDetailsProps {
  item: PortfolioItem;
  onClose: () => void;
  certificate?: boolean;
}

export default function ItemDetails({ item, onClose, certificate = false }: ItemDetailsProps) {
  const repos =
    item.repoLinks ??
    (validLink(item.gitUrl)
      ? [{ label: "View GitHub", url: item.gitUrl }]
      : []);
  return (
    <Modal title={item.title} onClose={onClose}>
      <div className="flex justify-center mb-4">
        <Image
          src={item.image}
          alt={item.title}
          width={item.imageWidth}
          height={item.imageHeight}
          sizes="(max-width: 768px) 90vw, 60vw"
          className="max-h-80 w-auto object-contain"
        />
      </div>
      <p className="text-muted mb-4">{item.description}</p>
      {sections.map(([key, title]) =>
        item[key]?.length ? (
          <div className="mb-4" key={key}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className="list-disc list-inside space-y-1">
              {item[key]?.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        ) : null,
      )}
      {item.projectBackground && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Project Background</h3>
          <p>{item.projectBackground}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        {repos
          .filter((repo) => validLink(repo.url))
          .map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline rounded-sm px-3 py-2 hover:bg-chip"
            >
              {repo.label}
            </a>
          ))}
        {validLink(item.previewUrl) && (
          <a
            href={item.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline rounded-sm px-3 py-2 hover:bg-chip"
          >
            {certificate ? "View Certificate" : "View Live Demo"}
          </a>
        )}
      </div>
    </Modal>
  );
}
