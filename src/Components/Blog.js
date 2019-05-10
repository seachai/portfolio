import React, { Component } from "react";

export default class Blog extends Component {
  loopedPost = () => {
    const blogPost = [1, 2, 3];
    return blogPost.map(item => {
      return (
        <div key={item} className="post">
          <div className="read-more">
            <a href="#readmore">Read More</a>
          </div>
          <div className="post-img" />
          <div className="details">
            <h4>The Man In The Arena</h4>
            <p>
              “It is not the critic who counts; not the man who points out how
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
              neither know victory nor defeat.”
              <em>― Theodore Roosevelt</em>
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
