// ./app/marcas/page.tsx

interface VintageBrand {
  name: string
  description: string
  era: string
  image: string
  tags: string[]
  signature: string
}

export default function VintageBrandsPage() {
  const vintageBrands: VintageBrand[] = [
    {
      name: "Levi's Vintage Clothing",
      description: "Reproducciones exactas de prendas históricas de los archivos de Levi's",
      era: "Desde 1873",
      image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
      tags: ["denim", "americana", "workwear"],
      signature: "501 Original Jeans"
    },
    {
      name: "Biba",
      description: "Icónica marca británica que definió la moda de los años 60 y 70",
      era: "1964-1975",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      tags: ["mod", "retro", "británico"],
      signature: "Mini vestidos"
    },
    {
      name: "Diane von Furstenberg",
      description: "Revolucionó la moda femenina con el vestido envolvente",
      era: "Desde 1972",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      tags: ["elegante", "femenino", "prints"],
      signature: "Wrap Dress"
    },
    {
      name: "Pendleton",
      description: "Legendaria marca americana conocida por sus tejidos de lana",
      era: "Desde 1863",
      image: "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1",
      tags: ["americana", "tejidos", "heritage"],
      signature: "Wool Blankets"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Marcas Vintage Legendarias
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubre las marcas que han definido la moda a través de las décadas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {vintageBrands.map((brand) => (
            <div key={brand.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={brand.image} alt={brand.name} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-indigo-600">
                      {brand.era}
                    </p>
                    <div className="flex space-x-1">
                      {brand.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">{brand.name}</h3>
                    <p className="mt-3 text-base text-gray-500">{brand.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        Pieza Icónica: {brand.signature}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Descubrir más marcas vintage
          </button>
        </div>
      </div>
    </main>
  )
}