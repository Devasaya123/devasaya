"""Backend tests for Devasaya API - products, journal, contact, newsletter."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://ajrakh-artistry.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Greeting
def test_root_greeting(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


# Products list & seed
def test_products_seeded(client):
    r = client.get(f"{API}/products")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) >= 8
    for p in data:
        assert "_id" not in p
        assert "id" in p and "name" in p and "category" in p


def test_products_filter_sarees(client):
    r = client.get(f"{API}/products", params={"category": "Sarees"})
    assert r.status_code == 200
    data = r.json()
    assert len(data) >= 1
    assert all(p["category"] == "Sarees" for p in data)


def test_products_filter_featured(client):
    r = client.get(f"{API}/products", params={"featured": "true"})
    assert r.status_code == 200
    data = r.json()
    assert len(data) >= 1
    assert all(p["featured"] is True for p in data)


def test_products_filter_all(client):
    r = client.get(f"{API}/products", params={"category": "All"})
    assert r.status_code == 200
    assert len(r.json()) >= 8


# Single product / 404
def test_product_detail_and_404(client):
    items = client.get(f"{API}/products").json()
    pid = items[0]["id"]
    r = client.get(f"{API}/products/{pid}")
    assert r.status_code == 200
    assert r.json()["id"] == pid

    r2 = client.get(f"{API}/products/non-existent-id-xyz")
    assert r2.status_code == 404


# Product CRUD
def test_product_create_and_delete(client):
    payload = {
        "name": "TEST_Product",
        "category": "Sarees",
        "price": 1234,
        "fabric": "Cotton",
        "description": "test",
        "images": ["https://example.com/a.jpg"],
        "featured": False,
    }
    r = client.post(f"{API}/products", json=payload)
    assert r.status_code == 200
    created = r.json()
    assert created["name"] == "TEST_Product"
    assert "id" in created
    pid = created["id"]

    # verify GET
    g = client.get(f"{API}/products/{pid}")
    assert g.status_code == 200
    assert g.json()["price"] == 1234

    # delete
    d = client.delete(f"{API}/products/{pid}")
    assert d.status_code == 200
    assert d.json().get("deleted") is True

    # confirm gone
    g2 = client.get(f"{API}/products/{pid}")
    assert g2.status_code == 404


# Journal
def test_journal_seeded(client):
    r = client.get(f"{API}/journal")
    assert r.status_code == 200
    data = r.json()
    assert len(data) >= 4
    for j in data:
        assert "_id" not in j
        assert "title" in j and "id" in j


def test_journal_detail(client):
    posts = client.get(f"{API}/journal").json()
    pid = posts[0]["id"]
    r = client.get(f"{API}/journal/{pid}")
    assert r.status_code == 200
    assert r.json()["id"] == pid


def test_journal_create_and_delete(client):
    payload = {
        "title": "TEST_Post",
        "excerpt": "ex",
        "body": "body",
        "cover_image": "https://example.com/c.jpg",
        "category": "Heritage",
    }
    r = client.post(f"{API}/journal", json=payload)
    assert r.status_code == 200
    pid = r.json()["id"]
    assert r.json()["title"] == "TEST_Post"

    d = client.delete(f"{API}/journal/{pid}")
    assert d.status_code == 200


# Contact
def test_contact_submission(client):
    payload = {"name": "TEST User", "email": "test_devasaya@example.com",
               "phone": "12345", "message": "hello"}
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["email"] == payload["email"]
    assert "id" in data


# Newsletter idempotency
def test_newsletter_idempotent(client):
    email = "test_devasaya_news@example.com"
    r1 = client.post(f"{API}/newsletter", json={"email": email})
    assert r1.status_code == 200
    id1 = r1.json()["id"]

    r2 = client.post(f"{API}/newsletter", json={"email": email})
    assert r2.status_code == 200
    assert r2.json()["id"] == id1  # idempotent — same record returned
