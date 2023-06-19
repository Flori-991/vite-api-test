import { z } from 'zod';

export const ApiResponseSchema = z.array(z.object({
    phonetics: z.array(z.object({
        text: z.string().optional(),
        audio: z.string().optional()
    })),
    meanings: z.array(z.object({
        definitions: z.array(z.object({
            definition: z.string().optional()
        }))
    }))
}))

export type ApiResponse = z.infer<typeof ApiResponseSchema>;