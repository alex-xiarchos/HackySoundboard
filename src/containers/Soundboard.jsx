// src/containers/Soundboard.jsx
import { useState } from 'react'

function StreamDeckButton({ label, soundUrl, icon }) {
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
            className="w-24 h-24 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900
        flex flex-col items-center justify-center gap-2
        border border-gray-700
        shadow-lg hover:shadow-cyan-500/20
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-b before:from-gray-600/20 before:to-transparent
        before:pointer-events-none relative
        transform hover:scale-105 hover:brightness-110
        transition-all duration-200"
        >
            {icon && (
                <span className="text-2xl text-gray-300">{icon}</span>
            )}
            <span className="text-xs font-medium text-gray-300 whitespace-pre-line text-center px-1">
        {formattedLabel}
      </span>
        </button>
    )
}

function Soundboard() {
    const sounds = [
        { label: 'Hell\'s Kitchen', url: '/sounds/Kitchen.mp3', icon: '🔪' },
        { label: 'Vine Boom', url: '/sounds/VineBoom.mp3', icon: '💰' },
        { label: 'Μην χειροδικείτε', url: '/sounds/MinXeirodikeite.mp3', icon: '🤪' },
    ]

    return (
        <div className="w-[95%] md:w-[600px] mx-auto bg-gray-900/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl
          border border-gray-800/50">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {sounds.map((sound, index) => (
                    <StreamDeckButton
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

export default Soundboard