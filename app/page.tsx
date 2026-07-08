import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0D0512] px-6">
      {/* Gradiente de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#2A0F3D_0%,#0D0512_65%)]" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {/* Ganh<span className="text-[#963BC4]">e</span> 6 Mes<span className="text-[#963BC4]">e</span>s d<span className="text-[#963BC4]">e</span> Amazon Prim<span className="text-[#963BC4]">e</span>  */}
        </h1>
        
        {/* Espaço da logo com aura pulsante */}
        <div className="relative mb-8 flex h-56 w-56 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#963BC4]/20" />
          <span className="absolute inline-flex h-[85%] w-[85%] animate-pulse rounded-full bg-[#963BC4]/25 blur-2xl" />
          <div >
            {/* Sua logo entra aqui */}
            <img
              src="/logo.png"
              alt="Logo do jogo"
              className="h-28 w-28 object-contain drop-shadow-[0_0_20px_rgba(150,59,196,0.6)]"
            />
          </div>
        </div>

        {/* Título */}
        <p className="mt-3 max-w-sm text-center text-sm text-[#B79CC9]">
          Clique em iniciar e boa sorte!
        </p>

        {/* Botão Iniciar */}
        {/* <button
          className="group relative mt-10 rounded-full px-10 py-4 font-semibold text-white
                     transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #963BC4 0%, #6B21A8 100%)",
            boxShadow: "0 0 25px rgba(150, 59, 196, 0.5)",
          }}
        >
          <span className="relative z-10">Iniciar</span>
          <span
            className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity
                       duration-300 group-hover:opacity-70"
            style={{ background: "#963BC4" }}
          />
        </button> */}
          <Link href="/jogo">
          <button
            className="group relative mt-10 rounded-full px-10 py-4 font-semibold text-white
                       transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #963BC4 0%, #6B21A8 100%)",
              boxShadow: "0 0 25px rgba(150, 59, 196, 0.5)",
            }}
          >
            <span className="relative z-10">Iniciar</span>
            <span
              className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity
                         duration-300 group-hover:opacity-70"
              style={{ background: "#963BC4" }}
            />
          </button>
        </Link>
      </div>
    </main>
  );
}