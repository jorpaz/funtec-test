import React from 'react';

interface PracticeCardProps {
    icon: string;
    title: string;
    items: string[];
}

const PracticeCard: React.FC<PracticeCardProps> = ({ icon, title, items }) => {
    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg max-w-xs text-center min-w-80 self-center flex flex-col">
            <div className="rounded-t-lg p-4 flex flex-row items-center justify-center gap-3" style={{ backgroundColor: '#F6E4D7' }}>
                <img src={icon} alt={`${title} icon`}/>
                <h3 className="text-lg font-semibold text-[#2b2d42]">{title}</h3>
            </div>
            <div className="p-4">
                <ul className="text-gray-600 text-left mb-4">
                    {items.map((item, index) => (
                        <li key={index} className="mb-2">- {item}</li>
                    ))}
                </ul>
                <a href="#" className="text-orange-600 font-bold mt-4 inline-block hover:underline">Learn More</a>
            </div>
        </div>
    );
};

export default PracticeCard;
