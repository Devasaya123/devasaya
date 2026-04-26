# DEVASAYA — Ajrakh Handicraft Apparel

A storytelling-first website for **Devasaya**, celebrating the centuries-old Ajrakh block-printing tradition of Kutch, Gujarat.

> *"Ajrakh is not just a print — it is a statement of culture, sustainability, and luxury."*

## ✦ Tech stack

- **Frontend:** React 19 + React Router 7 + Tailwind CSS + shadcn/ui
- **Backend:** FastAPI + Motor (MongoDB async)
- **Database:** MongoDB
- **Typography:** Cormorant Garamond (serif headings) + Manrope (body)

## ✦ Pages

| Route | Purpose |
|---|---|
| `/` | Hero, pillars, story strip, featured pieces |
| `/story` | The Ajrakh Story — long-form heritage narrative |
| `/artisans` | Artisans of Kutch — profiles & quotes |
| `/process` | The 16-stage Craftsmanship Journey |
| `/shop` | Filterable catalogue (Sarees · Dupattas · Fabrics · Kaftans) |
| `/shop/:id` | Product detail with WhatsApp enquiry CTA |
| `/lookbook` | Editorial bento gallery |
| `/journal` & `/journal/:id` | Stories, styling, sustainability writing |
| `/sustainability` | Values & commitments |
| `/about` | Brand story |
| `/contact` | Form + WhatsApp + email |
| `/admin` | Add/remove products & journal posts |

## ✦ API (`/api`)

```
GET    /products?category=Sarees&featured=true
GET    /products/{id}
POST   /products
DELETE /products/{id}

GET    /journal
GET    /journal/{id}
POST   /journal
DELETE /journal/{id}

POST   /contact
POST   /newsletter
```

## ✦ Local development

```bash
# backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001

# frontend
cd frontend
yarn install
yarn start
```

Set `MONGO_URL`, `DB_NAME` in `backend/.env` and `REACT_APP_BACKEND_URL` in `frontend/.env`.

## ✦ Brand contact

- 📞 +91 93408 53746
- ✉️ devasaya.24@gmail.com
- 📍 Ajrakhpur, Kutch, Gujarat

---

*Hand-block printed in Kutch · Natural dyes · Made to last decades.*
