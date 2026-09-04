import React from 'react';

const SlugPage = async ({ params }) => {
    // console.log(params.slug);
    const { slug } = await params;
    console.log(slug);
    const [technology, topic, , pageNo, subject] = slug;
    return (
        <div>
            <h1>Slug page</h1>
            <div>
                <h1>Technology: {technology}</h1>
                <h1>Topic: {topic}</h1>
                <h1>Page: {pageNo}</h1>
                <h1>Subject: {decodeURIComponent(subject)}</h1>
            </div>
        </div>
    );
};

export default SlugPage;