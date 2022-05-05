import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies = espiões
//serve para testar uma função que não é a mesma que está sendo testada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


describe('Submit feedback',  () => {
    const submitFeedback = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy }, //feedbacksRepository mock (fakes) 
        { sendMail: sendMailSpy },
    );

    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,1872498214612hfeiw',
        })).resolves.not.toThrow(); // Espera que não ocorra erro na função execute 

        expect(createFeedbackSpy).toHaveBeenCalled(); // Espera que a função createFeedbackSpy tenha sido chamada
        expect(sendMailSpy).toHaveBeenCalled(); // Espera que a função sendMailSpy tenha sido chamada
    });

    it('Should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,1872498214612hfeiw',
        })).rejects.toThrow(); // Espera que ocorra erro na função execute
    });

    it('Should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,1872498214612hfeiw',
        })).rejects.toThrow(); // Espera que ocorra erro na função execute
    });

    it('Should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow(); // Espera que ocorra erro na função execute
    });
})


//Para testar uso o comando: npm run test
//Exemplo de teste:
// test('sum 2 + 2', () =>{
//     expect(2 + 2).toBe(4);
// });
