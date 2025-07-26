import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components"

const title = 'Un titulo';
const url = 'https://localhost/cualquier/cosa.jpg';

describe('Prueba en <GifsItems/>', () => {

   
    test('Debe de hacer match con el snapshot', ()=>{
       
        const {container}=  render(<GiftItem title={title} url={url}/>);
       expect(container).toMatchSnapshot();
    })
  test('Debe de mostrar el titulo en el componente', () => {
                render(<GiftItem title={title} url={url}/>);
                expect( screen.getByText(title)).toBeTruthy();
            })   

})


     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

            render(<GiftItem title={title} url={url}/>);
            //screen.debug()
            //expect(screen.getByRole('img').src).toBe(url);
          //  expect(screen.getByRole('img').alt).toBe(title);
            const {src, alt} = screen.getByRole('img');
            expect(src).toBe(url);
            expect(alt).toBe(title);


          
     })