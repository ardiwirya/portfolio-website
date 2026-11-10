"use client";
import Image from "next/image";

export default function ProjectCard({ item, onOpen, certificate = false }) {
  const tags = certificate ? item.type : item.stacks;
  return (
    <article className="relative h-full bg-surface rounded-xl border border-outline shadow-md hover:shadow-lg hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300 overflow-hidden">
      <div className="h-52 md:h-72 relative overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="text-foreground px-4 pt-3 pb-4">
        <h3 className="text-xl font-semibold mb-4">
          <button
            type="button"
            onClick={onOpen}
            className="text-left after:absolute after:inset-0 after:rounded-xl"
          >
            {item.title}
          </button>
        </h3>
        {!certificate && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag) => (
              <li
                key={tag}
                className="bg-chip text-sm text-center py-1 px-3 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {!certificate && <p className="text-muted">{item.description}</p>}
        {item.dateOrPublisher && (
          <p className="text-muted mb-5">{item.dateOrPublisher}</p>
        )}
        {certificate && (
          <ul className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <li
                key={tag}
                className="bg-chip text-sm text-center py-1 px-3 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
