import React from 'react';
import PracticeCard from './PracticeCard';

const PracticeSection = () => {
    const practices = [
        {
            icon: 'landing/icons-practiceAdvance/logo1.svg',
            title: 'Frauds or Mislead',
            items: [
                'The best products start with Figma',
                'Design with real data',
                'Lightning fast prototyping',
                'Fastest way to organize',
                'Work at the speed of thought.'
            ],
        },
        {
            icon: 'landing/icons-practiceAdvance/logo2.svg',
            title: 'Bailes & Warrants',
            items: [
                'The best products start with Figma',
                'Design with real data',
                'Lightning fast prototyping',
                'Fastest way to organize',
                'Work at the speed of thought.'
            ],
        },
        {
            icon: 'landing/icons-practiceAdvance/logo3.svg',
            title: 'Federal Drug Crimes',
            items: [
                'The best products start with Figma',
                'Design with real data',
                'Lightning fast prototyping',
                'Fastest way to organize',
                'Work at the speed of thought.'
            ],
        }
    ];

    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">Practice Advice</h2>
                <p className="text-gray-600 mt-4 px-8">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
                    mechanics
                </p>
                <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                    {practices.map((practice, index) => (
                        <PracticeCard key={index} icon={practice.icon} title={practice.title} items={practice.items}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeSection;
