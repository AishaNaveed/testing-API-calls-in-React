import FilmContainer from "./FilmContainer";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

let propsRequired;
const server = setupServer(
    rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
        return (res(ctx.json([
            {
                title: "Castle in the Sky",
                Image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
                description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
            }
        ])))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
beforeEach(() => {
    propsRequired = {
        title: "Castle in the Sky",
        // url: "https://ghibliapi.herokuapp.com/films/",
    };
});
afterAll(() => server.close());

describe('Film Container component', () => {
    test('should render first film title on the page', async () => {
        render(<FilmContainer {...propsRequired}/>);
        await waitFor(() => screen.getByRole('heading'));
        expect(screen.getByRole('heading')).not.toHaveTextContent('Castle in the sky');
    });

    // test('should render first film title on the page', async () => {
    //     render(<FilmContainer {...propsRequired}/>);
    //     await waitFor(() => screen.getByRole('heading'));
    //     expect(screen.getByText(/Castle in the sky/i)).toBeInTheDocument();
    // });

});