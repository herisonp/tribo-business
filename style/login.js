'use client'
import styled from 'styled-components'

export const LoginMain = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url('./bg-hero.svg');
  background-size: 180% 180%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  height: fit-content;
  padding: 3.5rem 2.5rem;
  background: var(--slate-950);
  border: 1px solid var(--slate-700);
  border-radius: 16px;
  align-items: center;
  gap: 1rem;
`
export const FormTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  vertical-align: baseline;
`
export const FormDescription = styled.p`
  color: var(--blue-300);
  font-size: 1rem;
  line-height: 1.75rem;
  text-align: center;
`
export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const FormInputLabel = styled.label`
  font-size: 1rem;
  font-weight: 700;
`
export const FormInput = styled.input`
  padding: 0.75rem 0.88rem;
  background: transparent;
  border: 1px solid var(--slate-700);
  color: var(--white);
  font-size: 1rem;
  border-radius: 4px;

  &::placeholder {
    color: var(--slate-400);
  }
  &:focus {
    border: 1px solid var(--blue-700);
  }
`
export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
