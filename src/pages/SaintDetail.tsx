import { ArrowLeft, BookOpen } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { saints } from "../data/mockData"
import { ReferenceParser } from "../components/ReferenceParser"

export default function SaintDetail() {

    const {id} = useParams()
    const saint = saints.find((s) => s.id === id)
    if (!saint) {
        return <h1>Santo não encontrado</h1>
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-800 mb-6">
                <ArrowLeft className="wr-4 h-4 mr-2" /> 
                Voltar
            </Link>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-amber-100 p-6 text-center">
                    <h1 className="text-3xl font-bold text-amber-900">{saint.name}</h1>
                    <p className="text-amber-700 mt-2">Festa: {saint.feastDay}</p>
                    <p className="text-sm text-amber-600 mt-2"> Ano Nascimento / Falecimento: {
                        saint.birthYear ? `${saint.birthYear}` : 'Desconhecido'
                        } - {
                        saint.deathYear ? `${saint.deathYear}` : 'Desconhecido'
                        }
                    </p>
                </div>
                <div className="p-8">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" /> Biografia
                    </h2>

                    <ReferenceParser text={saint.biography} />

                    <div className="mt-8">
                        <h3 className="text-lg font-bold mb-3">Obras Principais</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}