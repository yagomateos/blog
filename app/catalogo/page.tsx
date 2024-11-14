// ./app/catalogo/page.tsx

interface VintageItem {
  name: string;
  era: string;
  price: string;
  condition: string;
  image: string;
  description: string;
}

interface VintageCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  items: VintageItem[];
}

export default function CatalogoPage() {
  const vintageCategories: VintageCategory[] = [
    {
      id: 'watches',
      title: 'Relojes',
      description: 'Piezas de colección atemporales',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
      items: [
        {
          name: 'Omega Seamaster',
          era: '1960s',
          price: '2800€',
          condition: 'Restaurado',
          image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e',
          description: 'Automático, caja de acero 36mm, dial original'
        },
        {
          name: 'Rolex Datejust',
          era: '1970s',
          price: '6500€',
          condition: 'Excelente',
          image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09',
          description: 'Ref. 1601, caja de acero, brazalete Jubilee'
        },
        {
          name: 'Cartier Tank Louis',
          era: '1980s',
          price: '7200€',
          condition: 'Muy bueno',
          image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc',
          description: 'Icónico Tank Louis Cartier en oro amarillo 18k'
        },
        {
          name: 'Cartier Tank',
          era: '1980s',
          price: '4200€',
          condition: 'Muy bueno',
          image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3',
          description: 'Oro amarillo 18k, movimiento de cuarzo'
        }
      ]
    },
    {
      id: 'jewelry',
      title: 'Joyería',
      description: 'Joyas vintage y art déco',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
      items: [
        {
          name: 'Collar Art Déco',
          era: '1920s',
          price: '1850€',
          condition: 'Excelente',
          image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
          description: 'Platino y diamantes, diseño geométrico'
        },
        {
          name: 'Pulsera Cartier',
          era: '1960s',
          price: '3200€',
          condition: 'Muy bueno',
          image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d',
          description: 'Oro amarillo 18k, diseño Love'
        }
      ]
    },
    {
      id: 'bags',
      title: 'Bolsos',
      description: 'Bolsos icónicos del siglo XX',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      items: [
        {
          name: 'Bolso Kelly Vintage',
          era: '1960s',
          price: '8500€',
          condition: 'Excelente',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
          description: 'Cuero Box negro, hardware dorado, con candado y llaves originales'
        },
        {
          name: 'Chanel 2.55',
          era: '1970s',
          price: '4200€',
          condition: 'Muy bueno',
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
          description: 'Piel de cordero negra, cadena dorada, autenticidad verificada'
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-center mb-16">Colección Vintage</h1>
        
        <div className="grid grid-cols-1 gap-16">
          {vintageCategories.map((category) => (
            <section key={category.id} className="space-y-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h2 className="text-3xl font-serif mb-2">{category.title}</h2>
                  <p className="text-lg opacity-90">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <article key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full">
                        {item.era}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-600">Estado: {item.condition}</p>
                          <p className="text-2xl font-serif mt-1">{item.price}</p>
                        </div>
                        <button className="bg-[#2c2c2c] text-white px-4 py-2 rounded hover:bg-[#404040] transition-colors">
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}