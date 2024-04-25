import React, { useState } from 'react';


function FileDownloadProgress({ fileUrl }) {
    const [progress, setProgress] = useState(0);
    const [downloading, setDownloading] = useState(false);    
    const [error, setError] = useState('');

    const startDownload = async () => {
        setDownloading(true);
        setError('');
        const response = await fetch(fileUrl);

        if (!response.ok) {
            switch (response.status) {
                case 404:
                    setError(`Error: The requested file was not found.`);
                    break;
                default:
                    setError(`Download failed: ${response.status}`);
                    break;
            }
            setProgress(100);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const reader = response.body.getReader();
        const contentLength = +response.headers.get('Content-Length');
        let receivedLength = 0;
        let chunks = [];

        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                setProgress(100);
                break;
            }
            chunks.push(value);
            receivedLength += value.length;
            setProgress(Math.floor((receivedLength / contentLength) * 100));
        }
        
        
        const blob = new Blob(chunks);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        // setDownloading(false);
    };

    const progressBarStyle = {
        height: '28px',
        width: `${progress}%`,
        backgroundColor: error ? 'rgba(232, 17, 35, 1)' : 'rgba(0, 120, 212, 0.95)', // Niebieski kolor Fluent
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        transition: 'width 0.5s ease-in-out',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    };

    const containerStyle = {
        width: '100%',
        backgroundColor: '#ddd',
        padding: '3px',
        borderRadius: '5px',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
    };

    const buttonStyle = {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        background: downloading ? 'rgba(0, 120, 212, 0.5)' : 'rgba(0, 120, 212, 1)',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    }

    return (
        <div>
            <button onClick={startDownload} disabled={downloading} style={buttonStyle}>
                {downloading ? 'Downloading...' : 'Download File'}
            </button>
            {downloading && (
                <div style={containerStyle}>
                    <div style={progressBarStyle}>
                        {error || (progress + '%')}
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default FileDownloadProgress;
