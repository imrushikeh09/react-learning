function Content() {
    return (
        <main style={{
            padding: '40px 20px',
            minHeight: '400px',
            backgroundColor: '#f1f5f9',
            color: '#334155',
            lineHeight: '1.6'
        }}>
            <h2>Main Content Section</h2>
            <p>
                This is the Content component. In React, we break the user interface
                into independent, reusable components like this one.
            </p>
            <p>
                Each component manages its own markup, styles, and logic.
            </p>
        </main>
    );
}

export default Content;
