// @ts-expect-error - assets module is JavaScript-only
import { preview } from '../assets'

type CardProps = {
  name: string
  prompt: string
  photo: string
}

const Card = ({ name, prompt, photo }: CardProps) => {
  return (
    <article className='card rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100'>
      <img
        src={photo || preview}
        alt={prompt}
        className='w-full h-72 object-cover'
      />

      <div className='p-4'>
        <h3 className='font-semibold text-[#222328] text-sm'>{name}</h3>
        <p className='prompt mt-2 text-[#666e75] text-sm leading-6 max-h-24 overflow-y-auto'>
          {prompt}
        </p>
      </div>
    </article>
  )
}

export default Card