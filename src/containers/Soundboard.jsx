import Button from "./Button.jsx";

export default function Soundboard() {
    const sounds = [
        { label: 'Hell\'s Kitchen', url: '/sounds/Kitchen.mp3', icon: '🔔' }, // Fixed icon
        { label: 'Vine Boom', url: '/sounds/VineBoom.mp3', icon: '💰' },
        { label: 'Μην χειροδικείτε', url: '/sounds/MinXeirodikeite.mp3', icon: '✋' }, // Fixed icon
    ]

    return (
        <div className="w-[95%] md:w-[600px] mx-auto bg-gray-950/60 backdrop-blur-md p-6 rounded-3xl
            shadow-[0_0_50px_rgba(6,182,212,0.15)]
            border border-cyan-500/20">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                {sounds.map((sound, index) => (
                    <Button
                        key={index}
                        label={sound.label}
                        soundUrl={sound.url}
                        icon={sound.icon}
                    />
                ))}
            </div>
        </div>
    )
}

