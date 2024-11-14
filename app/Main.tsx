import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

// Fecha de los posts
const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  try {
    return new Date(date).toLocaleDateString('es-ES', options);
  } catch (error) {
    console.error('Error al formatear la fecha:', error);
    return date.toString();
  }
};

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Banner con imagen a ancho completo */}
        <div className="relative w-full bg-white dark:bg-gray-900">
          <div className="w-full"> {/* Eliminado el max-w-7xl y padding para ancho completo */}
            <div className="flex flex-col items-center justify-between">
              {/* Imagen Principal a ancho completo */}
              <div className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3"
                  alt="Vintage Fashion"
                  className="w-full h-[600px] object-cover" // Altura aumentada y object-cover
                />
              </div>
              
              {/* Contenedor para la barra y subtítulo */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Barra decorativa */}
                <div className="mt-8 w-24 h-0.5 bg-emerald-600 mx-auto"></div>
                
                {/* Subtítulo */}
                <p className="mt-8 text-center text-lg text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase">
                  Moda Vintage & Sostenible
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resto del código permanece igual */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Leer más &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400"
            aria-label="All posts"
          >
            Todos los artículos &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm 
          title="Suscríbete a nuestro newsletter" />
        </div>
      )}
    </>
  )
}