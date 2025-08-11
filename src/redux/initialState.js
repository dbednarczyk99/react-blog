const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            originDate: '03-01-2022',
            lastEditDate: '02-02-2022',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Another article title',
            shortDescription: 'Short description of another article...',
            content: 'Main content of another article',
            publishedDate: new Date('03-03-2022'),
            author: 'John Malkovich',
            originDate: '15-01-2022',
            lastEditDate: '03-03-2022',
            category: 'Movies'
        },
        {
            id: '3',
            title: 'Third article title',
            shortDescription: 'Short description of the third article...',
            content: 'Main content of the third article',
            publishedDate: new Date('04-04-2022'),
            author: 'Malkolm Johnovich',
            originDate: '01-03-2022',
            lastEditDate: '04-04-2022',
            category: 'News'
        },
        {
            id: '4',
            title: 'Fourth article title',
            shortDescription: 'Short description of the fourth article...',
            content: 'Main content of the fourth article',
            publishedDate: new Date('05-05-2022'),
            author: 'Dohn Joe',
            originDate: '03-01-2022',
            lastEditDate: '05-05-2022',
            category: 'Sport'
        },
    ],
    categories: [
        {
            id: '1',
            name: 'Sport',
        },
        {
            id: '2',
            name: 'Movies',
        },
        {
            id: '3',
            name: 'News',
        }
        
    ]
};

export default initialState;