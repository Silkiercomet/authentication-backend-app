import { Router } from 'express';
import { signup, login, getHiddenContent } from '../controllers/authControllers';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/hidden",authenticateToken, getHiddenContent)

export default router