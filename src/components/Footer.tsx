'use client'
import React from 'react'
import style from '@/app/main.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import GithubMark from '@/../public/github-mark.svg'

export default function Footer() {
  const router = useRouter()
  const navigateToGithub = () => {
    router.push('https://github.com/Miodini/Color-Playground')
  }

  return (
    <footer className={style.footer}>
      <Image src={GithubMark} alt="Github" className={style.githubIcon} onClick={navigateToGithub}/>
    </footer>
  )
}