
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Portfólio</h1>
          <p className="mt-4 text-lg text-gray-500">Meus projetos e experiências</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Empty project cards for structure */}
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl">Projeto {item}</CardTitle>
                  <CardDescription>Descrição do projeto</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="h-40 bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-400">Imagem do projeto</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-gray-50 flex justify-end">
                  <Button variant="outline">Ver projeto</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Sobre</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-500">Informações sobre mim e minhas habilidades.</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contato</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-500">Minhas informações de contato.</p>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">© 2025 Meu Portfólio</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
