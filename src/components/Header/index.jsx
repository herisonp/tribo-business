export function Header(){
    return (
        <header
            className="bg-white/[0.02] filter w-full py-4 backdrop-blur fixed z-50 border-b border-b-slate-700"
        >
            <div className="container flex justify-between items-center">
                <span>logo</span>

                <div className="flex gap-4">
                    <a
                        href="#"
                        className="bg-transparent px-4 py-2 rounded text-white font-normal text-center flex justify-center items-center text-md"
                    >
                        Cadastre-se
                    </a>
                    <a
                        href="#"
                        className="bg-blue-700 px-4 py-2 rounded text-white font-normal text-center flex justify-center items-center text-md"
                    >
                        Entrar
                    </a>
                </div>
            </div>
        </header>
    )
}