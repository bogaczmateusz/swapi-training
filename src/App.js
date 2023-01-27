import Planet from './Components/Planet';

function App() {
    const Tatooine = '/planets/1/';
    const Alderaan = '/planets/2/';

    return (
        <div className="App">
            <Planet endpoint={Tatooine} />
            <Planet endpoint={Alderaan} />
        </div>
    );
}

export default App;
