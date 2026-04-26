import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export const fetchProducts = (params = {}) => api.get("/products", { params }).then((r) => r.data);
export const fetchProduct = (id) => api.get(`/products/${id}`).then((r) => r.data);
export const createProduct = (data) => api.post("/products", data).then((r) => r.data);
export const deleteProduct = (id) => api.delete(`/products/${id}`).then((r) => r.data);

export const fetchJournal = () => api.get("/journal").then((r) => r.data);
export const fetchJournalPost = (id) => api.get(`/journal/${id}`).then((r) => r.data);
export const createJournal = (data) => api.post("/journal", data).then((r) => r.data);
export const deleteJournal = (id) => api.delete(`/journal/${id}`).then((r) => r.data);

export const submitContact = (data) => api.post("/contact", data).then((r) => r.data);
export const subscribeNewsletter = (email) => api.post("/newsletter", { email }).then((r) => r.data);

export const WHATSAPP_NUMBER = "919340853746";
export const buildWhatsAppLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
