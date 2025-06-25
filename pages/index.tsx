export default function Home() {
    return (
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Registro de Entrenamiento</h1>
        <form className="bg-white p-6 rounded shadow-md space-y-4 max-w-md">
          <div>
            <label className="block font-medium">Ejercicio</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Ej: Press banca"
            />
          </div>
          <div>
            <label className="block font-medium">Series</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Ej: 4"
            />
          </div>
          <div>
            <label className="block font-medium">Repeticiones</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Ej: 10"
            />
          </div>
          <div>
            <label className="block font-medium">Peso (kg)</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Ej: 80"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </form>
      </main>
    );
  }
