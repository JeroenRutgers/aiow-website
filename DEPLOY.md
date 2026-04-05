# Deployment Guide - AIOW.io 🚀

## Option 1: Vercel (Recommended) ⚡

**Snelste en makkelijkste deployment voor Next.js.**

### Stappen:

1. **Push naar GitHub**
```bash
cd ~/aiow-website
git add .
git commit -m "Initial AIOW.io website"
gh repo create aiow-website --public --source=. --remote=origin --push
```

2. **Deploy via Vercel**
- Ga naar [vercel.com](https://vercel.com)
- Klik "Import Project"
- Selecteer je GitHub repo `aiow-website`
- Vercel detecteert automatisch Next.js
- Klik "Deploy"

3. **Custom Domain Setup**
- In Vercel dashboard → Settings → Domains
- Voeg toe: `aiow.io`
- Update DNS bij je domain provider:
  ```
  Type: CNAME
  Name: @
  Value: cname.vercel-dns.com
  ```

**Live in 2 minuten!** ✅

---

## Option 2: Cloudflare Pages 🌐

**Gratis, snel, en uitstekende DDoS protectie.**

### Stappen:

1. **Push naar GitHub** (zie boven)

2. **Connect to Cloudflare Pages**
- Ga naar [pages.cloudflare.com](https://pages.cloudflare.com)
- "Create a project" → "Connect to Git"
- Selecteer je repo
- Build settings:
  - Framework: Next.js
  - Build command: `npm run build`
  - Output directory: `.next`

3. **Custom Domain**
- Cloudflare Pages → Custom domains → Add `aiow.io`
- DNS automatisch geconfigureerd

---

## Option 3: Railway 🚂

**Full-stack platform met database support.**

### Stappen:

1. **Deploy via Railway**
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

2. **Environment variabelen**
- Railway dashboard → Variables
- Voeg toe indien nodig

3. **Custom Domain**
- Railway dashboard → Settings → Domains
- Add custom domain: `aiow.io`

---

## Option 4: DigitalOcean App Platform 💧

**Simpele container deployment.**

### Stappen:

1. **Push naar GitHub** (zie boven)

2. **Create App**
- DigitalOcean → App Platform → Create App
- Connect GitHub repo
- Selecteer branch: `main`
- Auto-detect Next.js
- Deploy

3. **Custom Domain**
- App Settings → Domains → Add `aiow.io`

---

## Option 5: VPS (Custom Server) 🖥️

**Volledige controle - voor als je alles zelf wilt hosten.**

### Prerequisites:
- Ubuntu 22.04+ VPS
- Root access
- Domain pointing to VPS IP

### Stappen:

1. **Setup Server**
```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt install -y nginx
```

2. **Deploy App**
```bash
# Clone repo
cd /var/www
git clone https://github.com/yourusername/aiow-website.git
cd aiow-website

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "aiow-website" -- start
pm2 save
pm2 startup
```

3. **Configure Nginx**
```bash
nano /etc/nginx/sites-available/aiow.io
```

```nginx
server {
    listen 80;
    server_name aiow.io www.aiow.io;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/aiow.io /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

4. **SSL Certificate (Let's Encrypt)**
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d aiow.io -d www.aiow.io
```

---

## Environment Variables 🔐

Voor alle deployment opties, voeg deze toe indien nodig:

```env
# .env.local (niet committen!)
NEXT_PUBLIC_API_URL=https://api.aiow.io
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Optional
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
```

---

## Performance Optimalisatie ⚡

### 1. Image Optimization
```bash
npm install sharp
```

### 2. Caching Headers
In `next.config.js`:
```js
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 3. Compression
Vercel/Cloudflare doen dit automatisch.

Voor VPS in Nginx config:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

---

## Monitoring 📊

### Vercel Analytics
- Ingebouwd in Vercel dashboard
- Real-time metrics

### Google Analytics
```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Gratis
- [Pingdom](https://pingdom.com) - Premium
- [StatusCake](https://statuscake.com) - Free tier

---

## Troubleshooting 🔧

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Glassmorphism not working
- Check browser support (backdrop-filter)
- Fallback: `background: rgba(255,255,255,0.1);`

### Animations laggy
- Reduce blur intensity in `globals.css`
- Disable heavy animations on mobile

### Port 3000 in use
```bash
# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

---

## Recommended: Vercel Deployment 🎯

**Waarom Vercel?**
- ✅ Instant deployments (30 sec)
- ✅ Automatic SSL
- ✅ Edge network (ultra-fast)
- ✅ Preview deploys per PR
- ✅ Built for Next.js
- ✅ Zero config
- ✅ Free tier is generous

**Commands:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

---

**Live in 5 minuten. Choose Vercel. Done.** 🚀
