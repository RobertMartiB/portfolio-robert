import { getAllTutorials } from '../../lib/tutorials';

export default function DebugPage() {
    const tutorials = getAllTutorials();

    return (
        <div className="p-10 bg-black text-white">
            <h1>Debug Tutorials</h1>
            <pre>{JSON.stringify(tutorials, null, 2)}</pre>
            <hr className="my-4" />
            <p>CWD: {process.cwd()}</p>
        </div>
    );
}
