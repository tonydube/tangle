// checks if slugs are still valid links to quotes

const slugs = require('./slugs.js');

slugs.forEach(slug => {
    fetch(`https://api.quotable.io/quotes/${slug}`)
        .then(response => response.json())
        .then(data => {
            if (data.statusCode === 404) {
                console.log(`Slug ${slug} not found`);
            } else {
                console.log(`Found slug.`);
            }
        })
        .catch(error => console.error(error));
});