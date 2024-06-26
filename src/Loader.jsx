import { useState, React, useEffect } from 'react';
import './loading.css'
// import './loading2.css'

export default function LoaderPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [latency] = useState('high'); // Pre-defined latency value

    useEffect(() => {
        let timeout = 1500; // Base timeout for low latency
        switch (latency) {
            case 'low':
                timeout = 1000;
                break;
            case 'medium':
                timeout = 1500;
                break;
            case 'high':
                timeout = 3000;
                break;
            default:
                break;
        }
        setTimeout(() => setIsLoading(false), timeout);
    }, []);

    return (
        <div className='loadingAll'>
            {isLoading && (

                <>
                    <div className="loader-background">
                        <div class="loader">
                            <div class="square" id="sq1"></div>
                            <div class="square" id="sq2"></div>
                            <div class="square" id="sq3"></div>
                            <div class="square" id="sq4"></div>
                            <div class="square" id="sq5"></div>
                            <div class="square" id="sq6"></div>
                            <div class="square" id="sq7"></div>
                            <div class="square" id="sq8"></div>
                            <div class="square" id="sq9"></div>
                        </div>
                    </div>
                    <div className='loader-background'>
                        {/* <div class="spinner center">
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                    </div> */}
                    </div>
                </>


            )}
        </div>
    );
}


