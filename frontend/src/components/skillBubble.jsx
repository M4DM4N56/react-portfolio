function SkillBubble ({skill}) {


    return <>
        <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-2xl hover:-translate-y-0.5 transform transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-zinc-800 ">{skill.title}</h3>
        <p className="text-zinc-600 ">{skill.text}</p>
        </div>
    </>
}

export default SkillBubble