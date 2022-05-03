import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react'; //Ajuda na acessibilidade e automatiza as funções para navegação pelo teclado 


export function Widget() {
    

    return (
        <Popover className='absolute bottom-5 right-5'>
            <Popover.Panel>Hello World</Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback</span>
            </Popover.Button>
        </Popover>
    )
}

/*Estado serve para guardar informações que podem ser alteradas pelo componente
    Exemplo:
    
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    //isWidgetOpen é o estado que será alterado pelo componente e o set é o método que altera o estado

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen); // !isWidgetOpen inverte o valor do estado
    }
*/