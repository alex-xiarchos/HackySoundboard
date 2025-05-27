import Soundboard from "./containers/Soundboard.jsx";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 py-12 px-4
          bg-cover bg-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-12
                    animate-pulse text-transparent bg-clip-text
                    bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400
                    drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]">
                    Hacky's Soundboard
                </h1>
                <Soundboard />
            </div>
        </div>
    )
}

export default App