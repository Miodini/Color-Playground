import React from 'react'
import style from '@/app/main.module.css'
import Image from 'next/image'
import GithubMark from '@/../public/github-mark.svg'
import buildInfo from '@/../.buildinfo.json'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/Miodini/Color-Playground" className={style.githubLink}>
        <Image src={GithubMark} alt="GitHub" className={style.githubIcon} />
      </a>
      <span>
        {new Date(buildInfo?.buildDate).getFullYear()}
      </span>
    </footer>
  )
}