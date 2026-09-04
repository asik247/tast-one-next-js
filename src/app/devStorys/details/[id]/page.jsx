"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Details = () => {
    const stories = [
        {
            id: 1,
            name: "John Smith",
            age: 28,
            image: "https://i.pravatar.cc/300?img=1",
            studies: "Computer Science",
            personality: "Creative",
            profession: "Frontend Developer",
            location: "New York, USA",
            hobby: "Photography",
            bio: "John is a passionate frontend developer who loves building modern web applications."
        },
        {
            id: 2,
            name: "Emma Wilson",
            age: 24,
            image: "https://i.pravatar.cc/300?img=2",
            studies: "Software Engineering",
            personality: "Friendly",
            profession: "UI/UX Designer",
            location: "London, UK",
            hobby: "Traveling",
            bio: "Emma enjoys designing beautiful and user-friendly digital experiences."
        },
        {
            id: 3,
            name: "Michael Brown",
            age: 30,
            image: "https://i.pravatar.cc/300?img=3",
            studies: "Information Technology",
            personality: "Analytical",
            profession: "Backend Developer",
            location: "Toronto, Canada",
            hobby: "Gaming",
            bio: "Michael specializes in APIs and scalable server-side applications."
        },
        {
            id: 4,
            name: "Sophia Davis",
            age: 22,
            image: "https://i.pravatar.cc/300?img=4",
            studies: "Data Science",
            personality: "Curious",
            profession: "Data Analyst",
            location: "Sydney, Australia",
            hobby: "Reading",
            bio: "Sophia loves turning complex data into meaningful insights."
        },
        {
            id: 5,
            name: "David Miller",
            age: 35,
            image: "https://i.pravatar.cc/300?img=5",
            studies: "Cyber Security",
            personality: "Disciplined",
            profession: "Security Engineer",
            location: "Berlin, Germany",
            hobby: "Cycling",
            bio: "David focuses on securing systems and protecting user data."
        },
        {
            id: 6,
            name: "Olivia Taylor",
            age: 27,
            image: "https://i.pravatar.cc/300?img=6",
            studies: "Business Administration",
            personality: "Leadership",
            profession: "Project Manager",
            location: "Paris, France",
            hobby: "Cooking",
            bio: "Olivia leads development teams and ensures successful project delivery."
        },
        {
            id: 7,
            name: "James Anderson",
            age: 29,
            image: "https://i.pravatar.cc/300?img=7",
            studies: "Artificial Intelligence",
            personality: "Innovative",
            profession: "AI Engineer",
            location: "Tokyo, Japan",
            hobby: "Robotics",
            bio: "James builds AI-powered solutions and machine learning models."
        },
        {
            id: 8,
            name: "Ava Thomas",
            age: 26,
            image: "https://i.pravatar.cc/300?img=8",
            studies: "Marketing",
            personality: "Energetic",
            profession: "Digital Marketer",
            location: "Singapore",
            hobby: "Blogging",
            bio: "Ava helps brands grow through digital marketing strategies."
        },
        {
            id: 9,
            name: "William Garcia",
            age: 31,
            image: "https://i.pravatar.cc/300?img=9",
            studies: "Mechanical Engineering",
            personality: "Practical",
            profession: "Engineer",
            location: "Madrid, Spain",
            hobby: "Football",
            bio: "William enjoys solving engineering problems and designing systems."
        },
        {
            id: 10,
            name: "Mia Rodriguez",
            age: 23,
            image: "https://i.pravatar.cc/300?img=10",
            studies: "Graphic Design",
            personality: "Artistic",
            profession: "Graphic Designer",
            location: "Rome, Italy",
            hobby: "Drawing",
            bio: "Mia creates visual designs and branding materials for companies."
        }
    ];
    const { id } = useParams();
    // console.log(id);
    const card = stories.find(singleCard => singleCard.id == id);
    console.log(card);
    return (
        <div>
            <h1>Details</h1>

            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-96 object-cover"
                    />

                    <div className="p-8">
                        <h1 className="text-4xl font-bold mb-4">
                            {card.name}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <span className="font-semibold">🎂 Age:</span> {card.age}
                            </p>

                            <p>
                                <span className="font-semibold">🎓 Studies:</span>{" "}
                                {card.studies}
                            </p>

                            <p>
                                <span className="font-semibold">💼 Profession:</span>{" "}
                                {card.profession}
                            </p>

                            <p>
                                <span className="font-semibold">✨ Personality:</span>{" "}
                                {card.personality}
                            </p>

                            <p>
                                <span className="font-semibold">📍 Location:</span>{" "}
                                {card.location}
                            </p>

                            <p>
                                <span className="font-semibold">🎯 Hobby:</span>{" "}
                                {card.hobby}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                About
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {card.bio}
                            </p>
                        </div>

                        <button className="mt-6 btn btn-primary">
                            Contact Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;