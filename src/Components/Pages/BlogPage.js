import React from "react";

function BlogPage() {
  return (
    <section className="blogpage">
      <div className="outter-box">
        <div className="inner-box">
          <img className="blog-img" src="https://i2.wp.com/linxsupply.com/wp-content/uploads/2015/11/hustle-mock.jpg?resize=680%2C850&ssl=1" />
          <h1>The Man in the Arena</h1>
          <p>
            “It is not the critic who counts; not the man who points out how the
            strong man stumbles, or where the doer of deeds could have done them
            better. The credit belongs to the man who is actually in the arena,
            whose face is marred by dust and sweat and blood; who strives
            valiantly; who errs, who comes short again and again, because there
            is no effort without error and shortcoming; but who does actually
            strive to do the deeds; who knows great enthusiasms, the great
            devotions; who spends himself in a worthy cause; who at the best
            knows in the end the triumph of high achievement, and who at the
            worst, if he fails, at least fails while daring greatly, so that his
            place shall never be with those cold and timid souls who neither
            know victory nor defeat.”
          </p>
          <h3>- Theodore Roosevelt</h3>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
