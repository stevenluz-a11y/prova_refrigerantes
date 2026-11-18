import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const refrigerantes = await refrigeranteService.getAll();
    return res.json(refrigerantes);
}
);

router.post("/", async (req, res) => {
    const newRefrigerante = req.body;
    try {
        const createdRefrigerante = await refrigeranteService.create(newRefrigerante);
        return res.status(201).json(createdRefrigerante);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
);

export { router as refrigerantesRouter };