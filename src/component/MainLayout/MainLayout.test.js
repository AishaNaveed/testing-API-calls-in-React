import MainLayout from "./MainLayout";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
        return (res(ctx.json([{}])))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close());

describe('Main layout component', () => {
    test('should render error when API return status 500', async () => {
        server.use(
            rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        render(<MainLayout />);

        await waitFor(() => screen.getByText('Oops… something went wrong, try again'));
        expect(screen.getByText('Oops… something went wrong, try again')).toBeInTheDocument();
    });

    // test('should render error when API return status 418', async () => {
    //     server.use(
    //         rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    //             return res(ctx.status(418));
    //         })
    //     );
    //     render(<MainLayout />);

    //     await waitFor(() => screen.getByText('418: I am a tea pot 🫖, silly'));
    //     expect(screen.getByText('418: I am a tea pot 🫖, silly')).toBeInTheDocument();
    // });
});