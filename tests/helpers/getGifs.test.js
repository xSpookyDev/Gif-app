import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba en <GifsItems/>', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/cualquier/cosa.jpg';

    test('Debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
    })
})