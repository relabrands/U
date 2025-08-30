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
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  Camera,
  Plus,
  Filter,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CreatorsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Dashboard Creador</h1>
                <p className="text-sm text-muted-foreground">Gestiona tu contenido y campañas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Contenido
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/creator-profile.png" />
                <AvatarFallback>MC</AvatarFallback>
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
              <CardTitle className="text-sm font-medium">Ingresos del Mes</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$2,450</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+12%</span> vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alcance Total</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+8%</span> esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+0.3%</span> promedio industria
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campañas Activas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 pendientes de entrega</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campañas</TabsTrigger>
            <TabsTrigger value="content">Mi Contenido</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
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
            </div>

            <div className="grid gap-6">
              {/* Active Campaign */}
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/brand-logo-nike.png" />
                        <AvatarFallback>NK</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Nike Air Max Campaign</CardTitle>
                        <CardDescription>Campaña de lanzamiento de nuevos sneakers</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20">Activa</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Pago</p>
                      <p className="text-lg font-semibold text-primary">$800</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Entrega</p>
                      <p className="text-lg font-semibold">15 Mar 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contenido</p>
                      <p className="text-lg font-semibold">3 posts + 1 reel</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>2/4 entregables</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Subir Contenido</Button>
                    <Button size="sm" variant="outline">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pending Campaign */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/brand-logo-adidas.png" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Adidas Running Collection</CardTitle>
                        <CardDescription>Promoción de nueva línea deportiva</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">Pendiente</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Pago</p>
                      <p className="text-lg font-semibold text-primary">$1,200</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Inicio</p>
                      <p className="text-lg font-semibold">20 Mar 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contenido</p>
                      <p className="text-lg font-semibold">5 posts + 2 stories</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Aceptar Campaña
                    </Button>
                    <Button size="sm" variant="ghost">
                      Rechazar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Mi Biblioteca de Contenido</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Subir Contenido
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-square bg-muted relative">
                    <img
                      src={`/ugc-content-post-.png?height=300&width=300&query=ugc content post ${item}`}
                      alt={`Content ${item}`}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-background/80">
                      {item % 2 === 0 ? "Video" : "Imagen"}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Post #{item}</p>
                      <Badge variant="outline" className="text-xs">
                        {item % 3 === 0 ? "Publicado" : "Borrador"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 1000) + 100}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 50) + 10}
                      </div>
                      <div className="flex items-center">
                        <Share2 className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 20) + 5}
                      </div>
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
                  <CardTitle>Rendimiento Mensual</CardTitle>
                  <CardDescription>Métricas de los últimos 30 días</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Alcance</span>
                      <span className="text-sm font-medium">45.2K</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Engagement</span>
                      <span className="text-sm font-medium">4.8%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Conversiones</span>
                      <span className="text-sm font-medium">2.1%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Contenido</CardTitle>
                  <CardDescription>Mejor rendimiento esta semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium">#{item}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Post Nike Air Max</p>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 5000) + 1000} interacciones
                          </p>
                        </div>
                        <Badge variant="outline">+{Math.floor(Math.random() * 50) + 10}%</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Perfil de Creador</CardTitle>
                <CardDescription>Gestiona tu información y preferencias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/creator-profile-photo.png" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">María Creadora</h3>
                    <p className="text-muted-foreground">@mariacreadora</p>
                    <div className="flex gap-2">
                      <Badge>Lifestyle</Badge>
                      <Badge>Fashion</Badge>
                      <Badge>Travel</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Estadísticas</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Seguidores Instagram</span>
                        <span className="font-medium">25.4K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Seguidores TikTok</span>
                        <span className="font-medium">18.2K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Engagement Rate</span>
                        <span className="font-medium">4.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Configuración</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Users className="w-4 h-4 mr-2" />
                        Conectar Redes Sociales
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Configurar Pagos
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Calendar className="w-4 h-4 mr-2" />
                        Disponibilidad
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
