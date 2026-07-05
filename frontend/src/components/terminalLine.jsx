function TerminalLine({ cwd = "~", command = "", cursor = false }) {
    return <p className="font-mono text-sm text-fg2 mb-2">
        <span className="text-accent">luca@archPC</span>:{cwd}<span>$ </span>
        <span>{command}</span>
        {cursor && <span className="terminal-cursor" aria-hidden="true" />}
    </p>
}

export default TerminalLine
