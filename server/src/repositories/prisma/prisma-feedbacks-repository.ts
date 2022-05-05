import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type, //type: type, caso não tivesse desestruturado no inicio teriamos algo como 'type: req.body.type'.
                comment,
                screenshot,
            }
        })
    }
}