import type { SocialAccount } from '../types/social-account'

export const primarySocials: SocialAccount[] = [
  {
    icon: 'heroicons-solid:mail',
    url: 'mailto:pet.85saf@gmail.com',
    label: 'Email',
    username: 'pet.85saf@gmail.com',
  },
  {
    icon: 'fa-brands:telegram',
    url: 'https://t.me/YOUR_TELEGRAM_USERNAME',
    label: 'Telegram',
    username: '@YOUR_TELEGRAM_USERNAME',
  },
  {
    icon: 'fa-brands:linkedin',
    url: 'https://www.linkedin.com/in/oleksandra-petrova-213909356/',
    label: 'LinkedIn',
    username: 'oleksandra-petrova',
  },
  {
    icon: 'fa-brands:github',
    url: 'https://github.com/YOUR_GITHUB_USERNAME',
    label: 'GitHub',
    username: '@YOUR_GITHUB_USERNAME',
  },
  {
    icon: 'heroicons-solid:phone',
    url: 'tel:+380950231078',
    label: 'Phone',
    username: '+380950231078',
  },
]

export const homeSocials: SocialAccount[] = [
  {
    icon: 'heroicons-solid:mail',
    url: 'mailto:pet.85saf@gmail.com',
    label: 'Email',
    username: 'pet.85saf@gmail.com',
  },
  {
    icon: 'fa-brands:telegram',
    url: 'https://t.me/YOUR_TELEGRAM_USERNAME',
    label: 'Telegram',
    username: '@YOUR_TELEGRAM_USERNAME',
  },
  {
    icon: 'fa-brands:github',
    url: 'https://github.com/YOUR_GITHUB_USERNAME',
    label: 'GitHub',
    username: '@YOUR_GITHUB_USERNAME',
  },
  {
    icon: 'fa-brands:linkedin',
    url: 'https://www.linkedin.com/in/oleksandra-petrova-213909356/',
    label: 'LinkedIn',
    username: 'oleksandra-petrova',
  },
  {
    icon: 'heroicons-solid:phone',
    url: 'tel:+380950231078',
    label: 'Phone',
    username: '+380950231078',
  },
]

const allSocials = [
  ...homeSocials,
]

export default allSocials