'use client'

import { useState, useEffect } from 'react'
import Header from './Components/Header'

export default function Home() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const dotsElement = document.getElementById("dots");
        let dotCount = 3;

        const interval = setInterval(() => {
            dotCount = dotCount < 6 ? dotCount + 1 : 3;
            if (dotsElement) dotsElement.textContent = ".".repeat(dotCount);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <h1>Next.js + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>app/page.tsx</code> and save to test HMR
                </p>
            </div>
            <p id="status">Building in Progress<span id="dots">...</span></p>
            <p className="read-the-docs">
                Click on the Next.js and React logos to learn more
            </p>
            <footer>
                <p>&copy; 2024. All rights may or may not be reserved depending on my competency.</p>
            </footer>
        </main>
    )
}

