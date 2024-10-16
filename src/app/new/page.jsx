function NewPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10">
        <label htmlFor="title" className="font-bold text-sm">
          {" "}
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full rounded"
          placeholder="Título"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la Tarea
        </label>
        <textarea
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full rounded"
          placeholder="describe tu tarea"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
