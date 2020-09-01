'use strict';

///task  - 03
const containerRef = document.querySelector('.container');
containerRef.addEventListener('click', event => {
  console.dir(event.target.textContent);
});

///task - 04
/* <article>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedit
          aspernatur!
        </p>
        <span>Date</span>
          <ul class="coments">
            <li>coment1</li>
            <li>coment2</li>
            <li>coment3</li>
          </ul>
      </article> */
const articles = [
  {
    title: '123',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!',
    date: '321',
    comments: ['comment: coment', 'comment: coment'],
  },
  {
    title: '123',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!',
    date: '321',
    comments: [
      { comment: 'coment' },
      { comment: 'coment' },
      { comment: 'coment' },
    ],
  },
];

const container = document.querySelector('.js-container');

const doneTreeArray = articles.map(art => {
  const tags = {
    article: document.createElement('article'),
    h2: document.createElement('h2'),
    p: document.createElement('p'),
    span: document.createElement('span'),
    ul: document.createElement('ul'),
    li: document.createElement('li'),
  };

  tags.h2.textContent = art.title;
  tags.p.textContent = art.article;
  tags.p.style.display = 'block';
  tags.span.textContent = art.date;

  tags.ul.setAttribute('class', 'coments');

  tags.ul = art.comments.map(coment => {
    tags.li.textContent = coment.comment;

    return tags.li;
  });

  tags.article.appendChild(tags.h2);
  tags.article.appendChild(tags.p);
  tags.article.appendChild(tags.span);
  //   tags.article.appendChild(tags.ul);
  console.dir(tags.ul);

  container.appendChild(tags.article);
});

// container.appendChild(...doneTreeArray);
