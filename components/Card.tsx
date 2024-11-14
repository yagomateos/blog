interface CardProps {
  title: string
  description: string
  imgSrc: string
  href: string
}

const Card = ({ title, description, imgSrc, href }: CardProps) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <img
          alt={title}
          src={imgSrc}
          className="object-cover object-center w-full lg:h-48 md:h-36"
        />
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <a href={href} className="text-gray-900 dark:text-gray-100">
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
            {description}
          </p>
          {href && (
            <a
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Leer más &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card