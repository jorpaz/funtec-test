import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="relative py-16 bg-gray-50 text-center">
            <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundColor: '#053653' }}></div>
            <div className="relative z-10 container mx-auto">
                <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
                <p className="text-gray-600 mt-4 mb-12">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <div className="relative max-w-4xl mx-auto">
                    <img
                        src="landing/whoweare/logo-video.svg"
                        alt="Team Image"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
