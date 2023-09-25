'use client'
import * as S from './style'
// import { Button } from '../Button'

import Image from 'next/image'
import Logo from '../../public/logo-tribo-business.svg'
import Link from 'next/link'
import { Button } from '../Button'

export function Header(){
  return (
    <S.Header>
      <div className='container'>
        <Link href="./">
          <Image className='logo' src={Logo} width={180} height={'auto'} alt='' />  
        </Link>

        <nav>
          <Button as="div">
            <Link href="./">
              Criar conta
            </Link>          
          </Button>

          <Button as="div" $hasBackground>
            <Link href="/login">
              Entrar
            </Link>
          </Button>
            {/* <S.ButtonHead href="#">Criar conta</S.ButtonHead> */}
            {/* <S.ButtonHead href="./login" hasBackground>Entrar</S.ButtonHead> */}
        </nav>
      </div>
    </S.Header>
  )
}