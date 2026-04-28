from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Devasaya API")
api_router = APIRouter(prefix="/api")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ========= Models =========
class Product(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    category: str  # Sarees | Shirts | Cordsets | Kaftans | Modal 3 Piece Suits
    price: int  # INR
    fabric: str
    description: str
    images: List[str] = []
    sizes: List[str] = []
    featured: bool = False
    in_stock: bool = True
    created_at: str = Field(default_factory=now_iso)


class ProductCreate(BaseModel):
    name: str
    category: str
    price: int
    fabric: str
    description: str
    images: List[str] = []
    sizes: List[str] = []
    featured: bool = False
    in_stock: bool = True


class JournalPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    body: str
    cover_image: str
    category: str  # Heritage | Styling | Sustainability | Behind the Scenes
    author: str = "Devasaya Atelier"
    created_at: str = Field(default_factory=now_iso)


class JournalPostCreate(BaseModel):
    title: str
    excerpt: str
    body: str
    cover_image: str
    category: str
    author: Optional[str] = "Devasaya Atelier"


class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    created_at: str = Field(default_factory=now_iso)


class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    message: str


class NewsletterSignup(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: str = Field(default_factory=now_iso)


class NewsletterCreate(BaseModel):
    email: str


# ========= Seed Data =========
SEED_PRODUCTS = [
    {
        "name": "Indigo Sky Ajrakh Saree",
        "category": "Sarees",
        "price": 8500,
        "fabric": "Hand-block printed Modal Silk",
        "description": "A meditation in indigo and madder. Each motif is hand-stamped with carved teakwood blocks across sixteen stages of natural dyeing — a quiet labour spanning three weeks.",
        "images": [
            "https://images.unsplash.com/photo-1768803968260-3dab844c1476?crop=entropy&cs=srgb&fm=jpg&w=900",
            "https://images.unsplash.com/photo-1764583473949-4645bbb6a2d0?crop=entropy&cs=srgb&fm=jpg&w=900"
        ],
        "featured": True,
    },
    {
        "name": "Madder Earth Saree",
        "category": "Sarees",
        "price": 9200,
        "fabric": "Pure Cotton",
        "description": "Earthy madder root and pomegranate rind lend this saree its warm, sun-baked palette. A homage to the Kutch desert at dusk.",
        "images": ["https://images.unsplash.com/photo-1766043071333-5d82991da1ea?crop=entropy&cs=srgb&fm=jpg&w=900"],
        "featured": True,
    },
    {
        "name": "Twilight Indigo Shirt",
        "category": "Shirts",
        "price": 3400,
        "fabric": "Soft Mulmul Cotton",
        "description": "A weightless indigo shirt with traditional Mughal-influenced motifs and a relaxed silhouette — for ease and elegance in equal measure.",
        "images": ["https://images.unsplash.com/photo-1768651925876-637f68cd64f6?crop=entropy&cs=srgb&fm=jpg&w=900"],
        "featured": True,
    },
    {
        "name": "Ochre Bloom Shirt",
        "category": "Shirts",
        "price": 2800,
        "fabric": "Modal Cotton",
        "description": "Sun-warmed ochre and ivory, hand-block printed in a soft floral lattice — a quiet companion to your daily wardrobe.",
        "images": ["https://images.pexels.com/photos/4566670/pexels-photo-4566670.jpeg?auto=compress&cs=tinysrgb&w=900"],
    },
    {
        "name": "Kutch Heritage Cordset",
        "category": "Cordsets",
        "price": 6500,
        "fabric": "Cotton",
        "description": "A coordinated kurta-and-pant cordset in authentic Ajrakh — for those who prefer their stories told in matched sets.",
        "images": ["https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=900"],
    },
    {
        "name": "Modal Silk Indigo Cordset",
        "category": "Cordsets",
        "price": 7800,
        "fabric": "Modal Silk",
        "description": "Lustrous modal silk cordset hand-printed in deep indigo and madder — relaxed tailoring, ceremonial soul.",
        "images": ["https://images.unsplash.com/photo-1761808070278-dd73772be230?crop=entropy&cs=srgb&fm=jpg&w=900"],
    },
    {
        "name": "Devi Kaftan in Indigo",
        "category": "Kaftans",
        "price": 5600,
        "fabric": "Hand-block printed Cotton",
        "description": "An effortless silhouette cut from breathable cotton — for slow mornings and warm evenings.",
        "images": ["https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=900"],
        "featured": True,
    },
    {
        "name": "Saanjh Kurta",
        "category": "Kaftans",
        "price": 4800,
        "fabric": "Mulmul Cotton",
        "description": "A flowing kurta in indigo and ivory — minimal in form, soulful in detail.",
        "images": ["https://images.unsplash.com/photo-1768803968260-3dab844c1476?crop=entropy&cs=srgb&fm=jpg&w=900"],
    },
    {
        "name": "Saanjh Modal 3-Piece Suit",
        "category": "Modal 3 Piece Suits",
        "price": 12500,
        "fabric": "Hand-block printed Modal Silk",
        "description": "A complete three-piece ensemble — kurta, pant and dupatta — in lustrous modal silk, hand-block printed in classic indigo and madder.",
        "images": ["https://images.unsplash.com/photo-1764583473949-4645bbb6a2d0?crop=entropy&cs=srgb&fm=jpg&w=900"],
        "featured": True,
    },
    {
        "name": "Heritage Modal 3-Piece Suit",
        "category": "Modal 3 Piece Suits",
        "price": 13800,
        "fabric": "Modal Silk",
        "description": "An heirloom-grade modal silk three-piece suit — kurta, churidar and dupatta — finished with hand-knotted tassels and traditional Khatri motifs.",
        "images": ["https://images.unsplash.com/photo-1766043071333-5d82991da1ea?crop=entropy&cs=srgb&fm=jpg&w=900"],
    },
]

SEED_JOURNAL = [
    {
        "title": "The Sixteen Stages of Ajrakh",
        "excerpt": "From the first wash in river water to the final saffron rinse — an unhurried meditation on craft.",
        "body": "Ajrakh is not made in days. It is coaxed into being over weeks. The fabric is washed, soaked in camel dung and soda ash, mordanted with myrobalan, resist-printed with carved teak blocks, dyed in indigo vats fermented for moons, then re-printed and re-dyed sixteen separate times. Each repetition deepens the pigment, each stage demands patience. The artisan reads the cloth like a manuscript — knowing when to dye, when to rest, when to wash. To wear Ajrakh is to wear time itself.",
        "cover_image": "https://images.unsplash.com/photo-1761808070278-dd73772be230?crop=entropy&cs=srgb&fm=jpg&w=1200",
        "category": "Heritage",
    },
    {
        "title": "Why Slow Fashion Matters",
        "excerpt": "In an age of fast wardrobes, the craftsperson's hand is a quiet rebellion.",
        "body": "Every metre of Ajrakh consumes water with reverence — natural dyes are returned to the earth, not the river. Our artisans are paid fair wages, their children sent to school. The cloth lasts decades. Slow fashion is not a trend — it is a remembrance of how things were always meant to be made.",
        "cover_image": "https://images.pexels.com/photos/4566670/pexels-photo-4566670.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "category": "Sustainability",
    },
    {
        "title": "Styling the Indigo Saree",
        "excerpt": "Three ways to wear our signature Indigo Sky — from atelier to ceremony.",
        "body": "Begin with the saree draped in its classic Nivi style — pleats falling at the centre, pallu over the left shoulder. Pair it with an ivory blouse for daytime, or layer madder-toned jewellery for evening. For a modern silhouette, drape it as a dhoti with a structured kurta. Ajrakh is forgiving — it lends itself to your story.",
        "cover_image": "https://images.unsplash.com/photo-1766043071333-5d82991da1ea?crop=entropy&cs=srgb&fm=jpg&w=1200",
        "category": "Styling",
    },
    {
        "title": "A Day in Ajrakhpur",
        "excerpt": "Behind the wooden blocks: a morning with the artisans of Kutch.",
        "body": "Dawn breaks over Ajrakhpur and the first sound is wood meeting cloth — the rhythmic thud of the printing block. Master Ismail-bhai has been at his table since five. His grandfather taught him, as his great-grandfather taught his grandfather. The blocks themselves are heirlooms, some over a hundred years old, their motifs carrying the whispers of every saree they have ever stamped.",
        "cover_image": "https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=1200",
        "category": "Behind the Scenes",
    },
]


@app.on_event("startup")
async def seed_db():
    if await db.products.count_documents({}) == 0:
        for p in SEED_PRODUCTS:
            doc = Product(**p).model_dump()
            await db.products.insert_one(doc)
    if await db.journal.count_documents({}) == 0:
        for j in SEED_JOURNAL:
            doc = JournalPost(**j).model_dump()
            await db.journal.insert_one(doc)


# ========= Routes =========
@api_router.get("/")
async def root():
    return {"message": "Devasaya API — weaving stories in indigo."}


@api_router.get("/products", response_model=List[Product])
async def list_products(category: Optional[str] = None, featured: Optional[bool] = None):
    q = {}
    if category and category.lower() != "all":
        q["category"] = category
    if featured is not None:
        q["featured"] = featured
    items = await db.products.find(q, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


@api_router.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: str):
    item = await db.products.find_one({"id": product_id}, {"_id": 0})
    if not item:
        raise HTTPException(status_code=404, detail="Product not found")
    return item


@api_router.post("/products", response_model=Product)
async def create_product(payload: ProductCreate):
    obj = Product(**payload.model_dump())
    await db.products.insert_one(obj.model_dump())
    return obj


@api_router.delete("/products/{product_id}")
async def delete_product(product_id: str):
    res = await db.products.delete_one({"id": product_id})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Not found")
    return {"deleted": True}


@api_router.get("/journal", response_model=List[JournalPost])
async def list_journal():
    return await db.journal.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)


@api_router.get("/journal/{post_id}", response_model=JournalPost)
async def get_journal(post_id: str):
    item = await db.journal.find_one({"id": post_id}, {"_id": 0})
    if not item:
        raise HTTPException(status_code=404, detail="Journal post not found")
    return item


@api_router.post("/journal", response_model=JournalPost)
async def create_journal(payload: JournalPostCreate):
    obj = JournalPost(**payload.model_dump())
    await db.journal.insert_one(obj.model_dump())
    return obj


@api_router.delete("/journal/{post_id}")
async def delete_journal(post_id: str):
    res = await db.journal.delete_one({"id": post_id})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Not found")
    return {"deleted": True}


@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact(payload: ContactCreate):
    obj = ContactSubmission(**payload.model_dump())
    await db.contacts.insert_one(obj.model_dump())
    return obj


@api_router.post("/newsletter", response_model=NewsletterSignup)
async def newsletter_signup(payload: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return NewsletterSignup(**existing)
    obj = NewsletterSignup(**payload.model_dump())
    await db.newsletter.insert_one(obj.model_dump())
    return obj


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
