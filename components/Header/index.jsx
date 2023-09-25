'use client'
import * as S from './style'
// import { Button } from '../Button'

import Image from 'next/image'
import Logo from '../../public/logo-tribo-business.svg'
import Link from 'next/link'

export function Header(){
  return (
    <S.Header>
      <div className='container'>
        <Link href="./">
          <Image className='logo' src={Logo} width={180} height={'auto'} alt='' />  
        </Link>

        <nav>
          {/* <Button> */}
            <S.ButtonHead href="#">Criar conta</S.ButtonHead>
          {/* </Button> */}
          {/* <Button hasBackground={true}> */}
            <S.ButtonHead href="./login" hasBackground>Entrar</S.ButtonHead>
          {/* </Button> */}
        </nav>
      </div>
    </S.Header>
  )
}