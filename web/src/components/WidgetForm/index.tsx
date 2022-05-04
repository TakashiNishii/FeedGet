import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";	
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensagemento'
        }
    },
};


export type FeedbackType = keyof typeof feedbackTypes; //keyof typeof feedbackTypes é um tipo que é uma chave de um objeto

//Object.entries(feedbackTypes) => 
/**
 * [
 *  ["BUG", {title: "Problema", image: {source: 'bugImageUrl', alt: 'Imagem de um inseto'}}],
 *  ["IDEA", {title: "Ideia", image: {source: 'ideaImageUrl', alt: 'Imagem de uma lâmpada'}}],
 *  ["OTHER", {title: "Outro", image: {source: 'thoughtImageUrl', alt: 'Imagem de um balão de pensamento'}}]
 * ]
 */

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    //w-[calc(100vw-2rem)] vai funcionar em celulares e o md:w-auto é para telas medias e grandes
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ):(
                <>
                    {!feedbackType ?(
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> //FeedbackTypeStep é um componente que recebe um método como propriedade
                    )
                    :(
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}


            <footer className="text-xs text-neutral-400">
                Feito com <span className="text-brand-500">❤</span> por <a className="underline underline-offset-1" href="https://takashinishii.github.io/">Takashi</a> e <a className="underline underline-offset-1" href="https://www.rocketseat.com.br/">Rocketseat</a> 
            </footer>
        </div>
    );
}
