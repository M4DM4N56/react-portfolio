function ProjectBubble ({project}) {

    return <>
        <div className="bg-white shadow-md p-6 rounded-lg border border-zinc-200 hover:shadow-2xl hover:-translate-y-0.5 transform transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-zinc-800">{project.title}</h3>
        <ul className="list-disc pl-5 space-y-2 text-zinc-600">
            {project.text.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>
        </div>
    </>
}



export default ProjectBubble