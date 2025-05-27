export default function Button({ label, soundUrl, icon }) {
    const playSound = () => {
        const audio = new Audio(soundUrl)
        audio.play()
    }

    const labelWords = label.split(' ')
    const formattedLabel = labelWords.length > 2
        ? `${labelWords[0]} ${labelWords[1]}\n${labelWords.slice(2).join(' ')}`
        : label

    return (
        <button
            onClick={playSound}
            className="w-24 h-24 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-950
                flex flex-col items-center justify-center gap-2
                border border-cyan-500/30
                shadow-lg shadow-cyan-500/20
                before:absolute before:inset-0 before:rounded-2xl
                before:bg-gradient-to-b before:from-cyan-400/10 before:to-transparent
                before:pointer-events-none relative
                transform hover:scale-105 hover:-translate-y-1
                hover:shadow-cyan-400/40 hover:border-cyan-400/50
                transition-all duration-200"
        >
            {icon && (
                <span className="text-2xl text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]">
                    {icon}
                </span>
            )}
            <span className="text-xs font-medium text-cyan-300 whitespace-pre-line text-center px-1
                drop-shadow-[0_0_5px_rgba(6,182,212,0.7)]">
                {formattedLabel}
            </span>
        </button>
    )
}