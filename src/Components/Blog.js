import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  loopedPost = () => {
    const blogPost = [1, 2, 3];
    const blogPapers = [
      "https://i2.wp.com/linxsupply.com/wp-content/uploads/2015/11/hustle-mock.jpg?resize=680%2C850&ssl=1",
      "https://i0.wp.com/linxsupply.com/wp-content/uploads/2015/12/discipline-mock.jpg?resize=595%2C744&ssl=1",
      "https://i2.wp.com/linxsupply.com/wp-content/uploads/2015/10/work-hard-thumb-3.jpg?resize=595%2C744&ssl=1"
    ];
    const blogInfo = [
      {
        title: "The Man In The Arena",
        body: `“It is not the critic who counts; not the man who points out how
        the strong man stumbles, or where the doer of deeds could have
        done them better. The credit belongs to the man who is actually in
        the arena, whose face is marred by dust and sweat and blood; who
        strives valiantly; who errs, who comes short again and again,
        because there is no effort without error and shortcoming; but who
        does actually strive to do the deeds; who knows great enthusiasms,
        the great devotions; who spends himself in a worthy cause; who at
        the best knows in the end the triumph of high achievement, and who
        at the worst, if he fails, at least fails while daring greatly, so
        that his place shall never be with those cold and timid souls who
        neither know victory nor defeat.”`,
        author: "Theodore Roosevelt"
      },
      {
        title: "Sailing",
        body: `“Twenty years from now you you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails.”`,
        author: "Mark Twain"
      },
      {
        title: "Explanation",
        body: `“If you can't explain it to a six year old, you don't understand it yourself.”`,
        author: "Albert Einstein"
      }
    ];
    return blogPost.map(item => {
      return (
        <div key={item} className="post">
          <div className="read-more">
            <Link to="/blog">Read More</Link>
          </div>
          <div
            className="post-img"
            style={{ background: `url('${blogPapers[item - 1]}')` }}
          />
          <div className="details">
            <h4>{blogInfo[item - 1].title}</h4>
            <p>
              {blogInfo[item - 1].body}
              <br />
              <br />
              <em>― {blogInfo[item - 1].author}</em>
            </p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section id="blog">
        <div className="title">
          <h1>Blog</h1>
        </div>
        <div className="blog-container">{this.loopedPost()}</div>
      </section>
    );
  }
}
