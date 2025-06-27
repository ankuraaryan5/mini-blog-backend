import { getPosts, createPost, getPostById, updatePost, deletePost } from "../controllers/postController.js";
import {  loginUser } from "../controllers/userController.js";
import express from "express";

const router = express.Router();
// User routes
router.post("/login", loginUser);
// Post routes
router.post("/posts", createPost); // Create a new post
router.get("/posts", getPosts); // Get all posts
router.get("/posts/:id", getPostById); // Get a single post by ID
router.put("/posts/:id", updatePost); // Update a post by ID
router.delete("/posts/:id", deletePost); // Delete a post by ID

export default router;