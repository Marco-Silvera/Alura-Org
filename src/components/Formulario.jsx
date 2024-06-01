function Formulario() {
    return (
        <section className="py-10 px-20 flex justify-center w-full">
            <article className="bg-[#F6F6F6] min-w-[1200px] flex flex-col py-10 px-20 gap-5 rounded-[20px] [box-shadow:7px_7px_15px_rgba(0,_0,_0,_0.08)]">
                <h2 className="text-3xl">
                    Rellena el formulario para crear el colaborador
                </h2>
                <form action="" className="flex flex-col gap-4">
                    <label htmlFor="" className="flex flex-col gap-4 font-bold">Nombre
                        <input type="text" className="p-4 outline-none" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-4 font-bold">Puesto
                        <input type="text" className="p-4 outline-none" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-4 font-bold">Foto
                        <input type="text" className="p-4 outline-none" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-4 font-bold">Equipo
                        <input type="text" className="p-4 outline-none" />
                    </label>
                    <input type="submit" value="Crear" className="bg-blue-600 text-white cursor-pointer p-5 w-40 border rounded-lg font-bold" />
                </form>
            </article>
        </section>
    )
}

export default Formulario