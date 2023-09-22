import * as S from '../../style/home'

export default function Home() {
  return (
    <>
      <S.Header>
        <div className='container'>
          <img src="" alt="logo da tribo business"/>

          <nav>
            <S.ButtonMenu>Criar conta</S.ButtonMenu>
            <S.ButtonMenu background="var(--blue-700)">Entrar</S.ButtonMenu>
          </nav>
        </div>
      </S.Header>
      
      <S.Hero>
        <div className='container'>
          <S.HeroContainer>
            <h2>Do chat, para o chat</h2>
            <h1>Encontre um <strong>business</strong> ou divulgue o seu, chat.</h1>
            <p>Um lugar para uma mula que quer comprar para outra que quer vender.</p>
          </S.HeroContainer>

          <form action="">
            <input type="text" />
            <input type="text" />
            <button type="submit">Buscar agora</button>
          </form>
        </div>
      </S.Hero>
    </>
  )
}
