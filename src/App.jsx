import Soundboard from './containers/Soundboard'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12
          bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Hacky's Soundboard
                </h1>
                <Soundboard />
            </div>
        </div>
    )
}

export default App