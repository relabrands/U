import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Users,
  Eye,
  Target,
  BarChart3,
  Building2,
  Plus,
  Filter,
  Search,
  Star,
  MessageSquare,
  Settings,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BrandsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Dashboard Marca</h1>
                <p className="text-sm text-muted-foreground">Gestiona tus campañas UGC</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Campaña
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/brand-manager-profile.png" />
                <AvatarFallback>BM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inversión Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$15,240</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+22%</span> vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alcance Total</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+18%</span> esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI Promedio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2x</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+0.8x</span> vs objetivo
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Creadores Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">12 nuevos este mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campañas</TabsTrigger>
            <TabsTrigger value="creators">Creadores</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Buscar campañas..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nueva Campaña
              </Button>
            </div>

            <div className="grid gap-6">
              {/* Active Campaign */}
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Lanzamiento Producto Primavera</CardTitle>
                      <CardDescription>Campaña de awareness para nueva colección</CardDescription>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20">Activa</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Presupuesto</p>
                      <p className="text-lg font-semibold text-primary">$5,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Creadores</p>
                      <p className="text-lg font-semibold">8/10</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contenido</p>
                      <p className="text-lg font-semibold">24 posts</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Alcance</p>
                      <p className="text-lg font-semibold">450K</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso de campaña</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Ver Contenido</Button>
                    <Button size="sm" variant="outline">
                      Analytics
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contactar Creadores
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Planning Campaign */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Campaña Black Friday</CardTitle>
                      <CardDescription>Promoción especial fin de año</CardDescription>
                    </div>
                    <Badge variant="secondary">Planificando</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Presupuesto</p>
                      <p className="text-lg font-semibold text-primary">$8,500</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Inicio</p>
                      <p className="text-lg font-semibold">1 Nov 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duración</p>
                      <p className="text-lg font-semibold">30 días</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Meta Alcance</p>
                      <p className="text-lg font-semibold">1.2M</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Buscar Creadores</Button>
                    <Button size="sm" variant="outline">
                      Editar Campaña
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Completed Campaign */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Campaña San Valentín</CardTitle>
                      <CardDescription>Promoción especial febrero</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      Completada
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Invertido</p>
                      <p className="text-lg font-semibold text-primary">$3,200</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="text-lg font-semibold text-green-600">5.2x</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Alcance</p>
                      <p className="text-lg font-semibold">680K</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Conversiones</p>
                      <p className="text-lg font-semibold">2,450</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ver Reporte
                    </Button>
                    <Button size="sm" variant="outline">
                      Duplicar Campaña
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Creators Tab */}
          <TabsContent value="creators" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Buscar creadores..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Invitar Creador
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "María Lifestyle",
                  handle: "@marialifestyle",
                  followers: "25.4K",
                  engagement: "4.8%",
                  niche: "Lifestyle",
                  rating: 4.9,
                  campaigns: 12,
                },
                {
                  name: "Carlos Fitness",
                  handle: "@carlosfitness",
                  followers: "18.2K",
                  engagement: "6.2%",
                  niche: "Fitness",
                  rating: 4.7,
                  campaigns: 8,
                },
                {
                  name: "Ana Fashion",
                  handle: "@anafashion",
                  followers: "32.1K",
                  engagement: "5.1%",
                  niche: "Fashion",
                  rating: 4.8,
                  campaigns: 15,
                },
                {
                  name: "Luis Travel",
                  handle: "@luistravel",
                  followers: "41.5K",
                  engagement: "3.9%",
                  niche: "Travel",
                  rating: 4.6,
                  campaigns: 6,
                },
                {
                  name: "Sofia Beauty",
                  handle: "@sofiabeauty",
                  followers: "28.7K",
                  engagement: "7.1%",
                  niche: "Beauty",
                  rating: 4.9,
                  campaigns: 20,
                },
                {
                  name: "Diego Tech",
                  handle: "@diegotech",
                  followers: "15.8K",
                  engagement: "4.3%",
                  niche: "Tech",
                  rating: 4.5,
                  campaigns: 4,
                },
              ].map((creator, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/creator-${index + 1}.png`} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground">{creator.handle}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{creator.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Seguidores</span>
                        <span className="font-medium">{creator.followers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Engagement</span>
                        <span className="font-medium text-accent">{creator.engagement}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Campañas</span>
                        <span className="font-medium">{creator.campaigns}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{creator.niche}</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Contactar
                      </Button>
                      <Button size="sm" variant="outline">
                        Ver Perfil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rendimiento de Campañas</CardTitle>
                  <CardDescription>Métricas de los últimos 3 meses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">ROI Promedio</span>
                      <span className="text-sm font-medium text-accent">4.2x</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Tasa de Conversión</span>
                      <span className="text-sm font-medium text-accent">3.8%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Engagement Rate</span>
                      <span className="text-sm font-medium text-accent">5.2%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Creadores</CardTitle>
                  <CardDescription>Mejor rendimiento este mes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "María Lifestyle", performance: "+45%", metric: "ROI" },
                      { name: "Ana Fashion", performance: "+38%", metric: "Engagement" },
                      { name: "Sofia Beauty", performance: "+52%", metric: "Conversiones" },
                    ].map((creator, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">#{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{creator.name}</p>
                          <p className="text-sm text-muted-foreground">Mejor {creator.metric}</p>
                        </div>
                        <Badge variant="outline" className="text-accent border-accent/20">
                          {creator.performance}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Nicho</CardTitle>
                <CardDescription>Inversión por categoría de contenido</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { niche: "Fashion", amount: "$4,200", percentage: 28 },
                    { niche: "Lifestyle", amount: "$3,800", percentage: 25 },
                    { niche: "Beauty", amount: "$3,200", percentage: 21 },
                    { niche: "Fitness", amount: "$2,600", percentage: 17 },
                  ].map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-2xl font-bold text-primary">{item.amount}</div>
                      <div className="text-sm text-muted-foreground">{item.niche}</div>
                      <div className="text-xs text-accent">{item.percentage}% del total</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Marca</CardTitle>
                <CardDescription>Gestiona la información de tu empresa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/brand-logo-main.png" />
                    <AvatarFallback>BM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Mi Marca</h3>
                    <p className="text-muted-foreground">@mimarca</p>
                    <div className="flex gap-2">
                      <Badge>E-commerce</Badge>
                      <Badge>Fashion</Badge>
                      <Badge>Lifestyle</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Información General</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Building2 className="w-4 h-4 mr-2" />
                        Información de Empresa
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Métodos de Pago
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Target className="w-4 h-4 mr-2" />
                        Objetivos de Marketing
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Preferencias</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Users className="w-4 h-4 mr-2" />
                        Criterios de Creadores
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Configurar Analytics
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Settings className="w-4 h-4 mr-2" />
                        Configuración Avanzada
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
