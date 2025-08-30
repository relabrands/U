"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Building2, ArrowLeft, Check, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const CREATOR_NICHES = ["Fashion", "Lifestyle", "Beauty", "Fitness", "Tech", "Travel", "Food", "Gaming", "Music", "Art"]
const BRAND_INDUSTRIES = [
  "E-commerce",
  "Fashion",
  "Beauty",
  "Tech",
  "Food",
  "Travel",
  "Healthcare",
  "Finance",
  "Education",
  "Entertainment",
]

export default function RegisterPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"creator" | "brand">("creator")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Creator form state
  const [creatorForm, setCreatorForm] = useState({
    name: "",
    email: "",
    handle: "",
    followers: "",
    engagement_rate: "",
    niche: [] as string[],
    bio: "",
    instagram: "",
    tiktok: "",
    youtube: "",
  })

  // Brand form state
  const [brandForm, setBrandForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: [] as string[],
    description: "",
    website: "",
    contact_person: "",
  })

  const handleCreatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/creators", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...creatorForm,
          followers: Number.parseInt(creatorForm.followers) || 0,
          engagement_rate: Number.parseFloat(creatorForm.engagement_rate) || 0,
          social_links: {
            instagram: creatorForm.instagram,
            tiktok: creatorForm.tiktok,
            youtube: creatorForm.youtube,
          },
          rating: 0,
          campaigns_completed: 0,
          total_earnings: 0,
          status: "pending",
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          router.push("/dashboard/creators")
        }, 2000)
      } else {
        throw new Error("Error al registrar creador")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al registrar. Por favor intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBrandSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...brandForm,
          total_spent: 0,
          campaigns_created: 0,
          status: "pending",
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          router.push("/dashboard/brands")
        }, 2000)
      } else {
        throw new Error("Error al registrar marca")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al registrar. Por favor intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleCreatorNiche = (niche: string) => {
    setCreatorForm((prev) => ({
      ...prev,
      niche: prev.niche.includes(niche) ? prev.niche.filter((n) => n !== niche) : [...prev.niche, niche],
    }))
  }

  const toggleBrandIndustry = (industry: string) => {
    setBrandForm((prev) => ({
      ...prev,
      industry: prev.industry.includes(industry)
        ? prev.industry.filter((i) => i !== industry)
        : [...prev.industry, industry],
    }))
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">¡Registro Exitoso!</h2>
            <p className="text-muted-foreground mb-4">
              Tu cuenta ha sido creada exitosamente. Serás redirigido al dashboard en unos segundos.
            </p>
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Volver al inicio</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ContentHub</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Únete a ContentHub</h1>
            <p className="text-xl text-muted-foreground">
              Conecta con marcas y creadores para crear contenido auténtico
            </p>
          </div>

          <Tabs value={userType} onValueChange={(value) => setUserType(value as "creator" | "brand")}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="creator" className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Soy Creador</span>
              </TabsTrigger>
              <TabsTrigger value="brand" className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Soy Marca</span>
              </TabsTrigger>
            </TabsList>

            {/* Creator Registration */}
            <TabsContent value="creator">
              <Card>
                <CardHeader>
                  <CardTitle>Registro de Creador</CardTitle>
                  <CardDescription>Completa tu perfil para comenzar a colaborar con marcas increíbles</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreatorSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="creator-name">Nombre Completo *</Label>
                        <Input
                          id="creator-name"
                          value={creatorForm.name}
                          onChange={(e) => setCreatorForm({ ...creatorForm, name: e.target.value })}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="creator-email">Email *</Label>
                        <Input
                          id="creator-email"
                          type="email"
                          value={creatorForm.email}
                          onChange={(e) => setCreatorForm({ ...creatorForm, email: e.target.value })}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="creator-handle">Handle Principal *</Label>
                      <Input
                        id="creator-handle"
                        value={creatorForm.handle}
                        onChange={(e) => setCreatorForm({ ...creatorForm, handle: e.target.value })}
                        placeholder="@tuhandle"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="creator-followers">Seguidores Totales *</Label>
                        <Input
                          id="creator-followers"
                          type="number"
                          value={creatorForm.followers}
                          onChange={(e) => setCreatorForm({ ...creatorForm, followers: e.target.value })}
                          placeholder="25000"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="creator-engagement">Engagement Rate (%) *</Label>
                        <Input
                          id="creator-engagement"
                          type="number"
                          step="0.1"
                          value={creatorForm.engagement_rate}
                          onChange={(e) => setCreatorForm({ ...creatorForm, engagement_rate: e.target.value })}
                          placeholder="4.8"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Nichos de Contenido *</Label>
                      <p className="text-sm text-muted-foreground mb-3">Selecciona hasta 3 nichos principales</p>
                      <div className="flex flex-wrap gap-2">
                        {CREATOR_NICHES.map((niche) => (
                          <Badge
                            key={niche}
                            variant={creatorForm.niche.includes(niche) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary/10"
                            onClick={() => toggleCreatorNiche(niche)}
                          >
                            {niche}
                            {creatorForm.niche.includes(niche) && <X className="w-3 h-3 ml-1" />}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="creator-bio">Biografía *</Label>
                      <Textarea
                        id="creator-bio"
                        value={creatorForm.bio}
                        onChange={(e) => setCreatorForm({ ...creatorForm, bio: e.target.value })}
                        placeholder="Cuéntanos sobre ti, tu estilo de contenido y lo que te hace único..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <Label>Redes Sociales</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="creator-instagram">Instagram</Label>
                          <Input
                            id="creator-instagram"
                            value={creatorForm.instagram}
                            onChange={(e) => setCreatorForm({ ...creatorForm, instagram: e.target.value })}
                            placeholder="@tuinstagram"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="creator-tiktok">TikTok</Label>
                          <Input
                            id="creator-tiktok"
                            value={creatorForm.tiktok}
                            onChange={(e) => setCreatorForm({ ...creatorForm, tiktok: e.target.value })}
                            placeholder="@tutiktok"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="creator-youtube">YouTube</Label>
                          <Input
                            id="creator-youtube"
                            value={creatorForm.youtube}
                            onChange={(e) => setCreatorForm({ ...creatorForm, youtube: e.target.value })}
                            placeholder="@tuyoutube"
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Registrando..." : "Crear Cuenta de Creador"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Brand Registration */}
            <TabsContent value="brand">
              <Card>
                <CardHeader>
                  <CardTitle>Registro de Marca</CardTitle>
                  <CardDescription>Configura tu cuenta para comenzar a crear campañas de UGC exitosas</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBrandSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="brand-name">Nombre de la Marca *</Label>
                        <Input
                          id="brand-name"
                          value={brandForm.name}
                          onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                          placeholder="Mi Marca"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brand-email">Email Corporativo *</Label>
                        <Input
                          id="brand-email"
                          type="email"
                          value={brandForm.email}
                          onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                          placeholder="contacto@mimarca.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="brand-company">Nombre de la Empresa *</Label>
                        <Input
                          id="brand-company"
                          value={brandForm.company}
                          onChange={(e) => setBrandForm({ ...brandForm, company: e.target.value })}
                          placeholder="Mi Empresa S.A."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brand-contact">Persona de Contacto *</Label>
                        <Input
                          id="brand-contact"
                          value={brandForm.contact_person}
                          onChange={(e) => setBrandForm({ ...brandForm, contact_person: e.target.value })}
                          placeholder="Juan Pérez"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brand-website">Sitio Web</Label>
                      <Input
                        id="brand-website"
                        type="url"
                        value={brandForm.website}
                        onChange={(e) => setBrandForm({ ...brandForm, website: e.target.value })}
                        placeholder="https://mimarca.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Industrias *</Label>
                      <p className="text-sm text-muted-foreground mb-3">Selecciona las industrias relevantes</p>
                      <div className="flex flex-wrap gap-2">
                        {BRAND_INDUSTRIES.map((industry) => (
                          <Badge
                            key={industry}
                            variant={brandForm.industry.includes(industry) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary/10"
                            onClick={() => toggleBrandIndustry(industry)}
                          >
                            {industry}
                            {brandForm.industry.includes(industry) && <X className="w-3 h-3 ml-1" />}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brand-description">Descripción de la Marca *</Label>
                      <Textarea
                        id="brand-description"
                        value={brandForm.description}
                        onChange={(e) => setBrandForm({ ...brandForm, description: e.target.value })}
                        placeholder="Describe tu marca, productos/servicios, valores y lo que buscas en colaboraciones con creadores..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Registrando..." : "Crear Cuenta de Marca"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
