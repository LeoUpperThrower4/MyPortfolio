import { Linkedin, GitHub } from "react-feather";
import { CardStructure } from "./CardStructure";

const socialNetworks = [
  {
    url: 'https://www.linkedin.com/in/leonardo-silva-oliveira/',
    Icon: Linkedin
  },
  {
    url: 'https://github.com',
    Icon: GitHub
  },
  {
    url: 'https://www.linkedin.com/in/leonardo-silva-oliveira/',
    Icon: Linkedin
  },
  {
    url: 'https://github.com',
    Icon: GitHub
  }
]

export function SocialNetworksCard() {
  return (
    <CardStructure className="py-6 px-8 flex gap-2 items-center justify-center">
      {socialNetworks.map(({url, Icon}) => {
        return (
          <div key={url} className="border rounded-full p-3">
            <Icon size={32} />
          </div>
        )
      })}
    </CardStructure>
  )
}