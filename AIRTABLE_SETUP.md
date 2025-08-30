# Configuración de Airtable para UGC Platform

## Variables de Entorno Requeridas

Agrega estas variables a tu proyecto en Vercel o archivo `.env.local`:

\`\`\`
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_API_KEY=your_api_key_here
\`\`\`

## Estructura de Base de Datos en Airtable

### Tabla: Creators
- **name** (Single line text) - Nombre del creador
- **email** (Email) - Email de contacto
- **handle** (Single line text) - Handle de redes sociales (@username)
- **followers** (Number) - Número de seguidores
- **engagement_rate** (Number) - Tasa de engagement (%)
- **niche** (Multiple select) - Nichos: Fashion, Lifestyle, Beauty, Fitness, Tech, Travel, Food
- **rating** (Number) - Rating del creador (1-5)
- **bio** (Long text) - Biografía del creador
- **profile_image** (Attachment) - Foto de perfil
- **social_links** (Long text) - JSON con links de redes sociales
- **campaigns_completed** (Number) - Campañas completadas
- **total_earnings** (Currency) - Ganancias totales
- **status** (Single select) - active, inactive, pending
- **created_at** (Date) - Fecha de creación

### Tabla: Brands
- **name** (Single line text) - Nombre de la marca
- **email** (Email) - Email de contacto
- **company** (Single line text) - Nombre de la empresa
- **industry** (Multiple select) - Industrias: E-commerce, Fashion, Beauty, Tech, Food, Travel
- **logo** (Attachment) - Logo de la marca
- **description** (Long text) - Descripción de la marca
- **website** (URL) - Sitio web
- **contact_person** (Single line text) - Persona de contacto
- **total_spent** (Currency) - Total invertido
- **campaigns_created** (Number) - Campañas creadas
- **status** (Single select) - active, inactive, pending
- **created_at** (Date) - Fecha de creación

### Tabla: Campaigns
- **brand_id** (Link to Brands) - Marca asociada
- **title** (Single line text) - Título de la campaña
- **description** (Long text) - Descripción detallada
- **budget** (Currency) - Presupuesto total
- **start_date** (Date) - Fecha de inicio
- **end_date** (Date) - Fecha de fin
- **target_audience** (Long text) - Audiencia objetivo
- **content_requirements** (Long text) - Requerimientos de contenido
- **deliverables** (Multiple select) - posts, stories, reels, videos
- **status** (Single select) - draft, active, completed, cancelled
- **creators_assigned** (Link to Creators) - Creadores asignados
- **total_reach** (Number) - Alcance total
- **total_engagement** (Number) - Engagement total
- **roi** (Number) - Return on Investment
- **created_at** (Date) - Fecha de creación

### Tabla: Content
- **campaign_id** (Link to Campaigns) - Campaña asociada
- **creator_id** (Link to Creators) - Creador asociado
- **type** (Single select) - post, story, reel, video
- **platform** (Single select) - instagram, tiktok, youtube
- **content_url** (URL) - URL del contenido publicado
- **caption** (Long text) - Caption del contenido
- **hashtags** (Multiple select) - Hashtags utilizados
- **metrics** (Long text) - JSON con métricas (views, likes, comments, shares, saves)
- **status** (Single select) - draft, submitted, approved, published
- **submitted_at** (Date) - Fecha de envío
- **approved_at** (Date) - Fecha de aprobación
- **published_at** (Date) - Fecha de publicación

## Configuración Inicial

1. Crea una nueva base en Airtable
2. Crea las 4 tablas con los campos especificados
3. Obtén tu Base ID desde la URL de Airtable
4. Genera un API Key desde tu cuenta de Airtable
5. Configura las variables de entorno en tu proyecto

## Uso de la API

La integración proporciona servicios para:
- **CreatorService**: Gestión de creadores
- **BrandService**: Gestión de marcas
- **CampaignService**: Gestión de campañas
- **ContentService**: Gestión de contenido

Cada servicio incluye métodos para crear, leer, actualizar y filtrar datos.
