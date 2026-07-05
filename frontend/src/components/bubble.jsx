import { Code2, ExternalLink, PackageOpen } from "lucide-react"
import Tag from "./tag"

const linkIcons = {
    github: Code2,
    live: ExternalLink,
    releases: PackageOpen
}

const linkLabels = {
    github: "GitHub",
    live: "Live",
    releases: "Releases"
}

function Bubble ({title, tagline, text, items, tags, links}) {
    const hasTags = tags && tags.length > 0
    const hasLinks = links && Object.keys(links).length > 0

    return <>
        <div className="bg-bg1 p-6 rounded-2xl border border-bg2 hover:border-accent-hover transition-colors duration-300">
            {tagline && <p className="font-mono text-sm font-medium text-accent mb-1">{tagline}</p>}
            <h3 className="text-2xl font-bold text-fg1 mb-3">{title}</h3>
            {items && items.length > 0 &&
                <div className="flex flex-wrap gap-2.5">
                    {items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                    ))}
                </div>
            }
            {text && (Array.isArray(text)
                ? <ul className="list-disc pl-5 space-y-2 text-fg2">
                    {text.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                : <p className="text-fg2">{text}</p>
            )}
            {hasTags &&
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
            }
            {hasTags && hasLinks && <hr className="my-4 border-t border-bg2" />}
            {hasLinks &&
                <div className={`flex gap-4 ${hasTags ? "" : "mt-4"}`}>
                    {Object.entries(links).map(([key, href]) => {
                        const Icon = linkIcons[key] ?? ExternalLink
                        return <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="font-mono flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors duration-100">
                            <Icon size={16} />
                            {linkLabels[key] ?? key}
                        </a>
                    })}
                </div>
            }
        </div>
    </>
}

export default Bubble
