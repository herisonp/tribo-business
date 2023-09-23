'use client'
import Image from 'next/image'
import * as S from '../../style/home'

import Logo from '../../public/logo-tribo-business.svg'
import AvatarEmpresa from '../../public/avatar.svg'
import GaulesThree from '../../public/emojis/3.gif'
import GaulesFive from '../../public/emojis/5.gif'
import GaulesEleven from '../../public/emojis/11.gif'
import { useEffect, useState } from 'react'


const empresas = 
  {
    nomeEmpresa: "Nome da empresa",
    categoria: "categoria",
    descricao: "Ai, aqui vai ter uma breve descrição. Nela, o empreendedor, tem que dizer com poucas palavras qual é o seu negócio",
    endereco: "Rua do Abalo, 777, Vila Que Ota - Curitiba - PR",
    nicktwitch: "nicktwitch"
  }






export default function Home() {

  const [loopEmpresas, setLoopEmpresas] = useState([empresas]);

  function criaUmLoopDeEmpresas(){
    for (let index = 0; index < 5; index++) {      
      setLoopEmpresas(state => [...state, empresas]);
    }
  }

  useEffect(() => {
    criaUmLoopDeEmpresas();
  }, []);

  return (
    <>
      <S.Header>
        <div className='container'>
          <Image className='logo' src={Logo} alt='' />

          <nav>
            <S.Button>Criar conta</S.Button>
            <S.Button hasBackground={true}>Entrar</S.Button>
          </nav>
        </div>
      </S.Header>
      
      <S.Hero>
        <div className='container'>
          <S.HeroContainer>
            <h2>
              <S.EmojiStyle>
                <Image src={GaulesFive} alt="" />
              </S.EmojiStyle>
              Do chat, para o chat
            </h2>
            <h1>Encontre um <strong>business</strong> ou divulgue o seu, chat.</h1>
            <p>Um lugar para uma mula que quer comprar para outra que quer vender.
              <S.EmojiStyle>
                <Image src={GaulesEleven} alt="" width={22} height={22}/>
              </S.EmojiStyle>
            </p>
          </S.HeroContainer>

          <S.FormSearch action="">
            <S.Input placeholder='Pesquise por nome' type="text" />
            <S.Input placeholder='Pesquise uma cidade ou endereço' type="text" />
            <S.Button type="submit" hasBackground={true}>Buscar agora</S.Button>
          </S.FormSearch>
        </div>
      </S.Hero>

      <S.ContentRoot>
        <header className='container'>
          <h3>Os princiais negócios</h3>
          <div className="filter">
            <S.Input type='text' placeholder='Todas categorias'></S.Input>
          </div>
        </header>

        <S.Cards className='container'>

          {loopEmpresas.map((empresa, index) => (
            <S.CardRoot key={empresa.nomeEmpresa + index}>
              <S.CardHeader>
                <S.CardHeaderCategorie>
                  {empresa.categoria}
                </S.CardHeaderCategorie>

                <S.CardHeaderNickTwitch href="#">
                  {empresa.nicktwitch}
                </S.CardHeaderNickTwitch>
              </S.CardHeader>

              <S.CardAvatar>
                <Image className='CardAvatarImage' src={AvatarEmpresa} alt='Avatar da empresa' />
              </S.CardAvatar>

              <S.CardText>
                <S.CardTextTitle>
                  {empresa.nomeEmpresa}
                </S.CardTextTitle>
                <S.CardTextDescription>
                  {empresa.descricao}
                </S.CardTextDescription>
              </S.CardText>

              <S.CardAdress>
                {empresa.endereco}
              </S.CardAdress>

              <S.CardButton hasBackground={true}>
                Ver empresa
              </S.CardButton>

            </S.CardRoot>
          ))}

        </S.Cards>
      </S.ContentRoot>

      <S.Footer>
        <p> 
          <S.EmojiStyle>
            <Image src={GaulesThree} alt="" width={24} height={24} />
          </S.EmojiStyle> <strong>A tribo ajuda a tribo.</strong> / Feito com 💜 pela mula herisonps</p>
      </S.Footer>
    </>
  )
}
