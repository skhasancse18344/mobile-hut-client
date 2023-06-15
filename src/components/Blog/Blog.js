import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-5xl font-bold text-center mb-10 ">
          {" "}
          <span className="text-lime-400"> BL</span>OG
        </h1>
        <div>
          <h1 className="text-3xl text-lime-400 font-bold">
            {" "}
            <span className="text-black mr-4">Question : 1</span> What are the
            different ways to manage a state in a React application?
          </h1>
          <p className=" mt-6 text-justify">
            Use these thumb rules for clear state management Avoid derived
            state. It means that you should never set values passed as props to
            the state. Every value should be either fully controlled (through
            props) or fully uncontrolled (in the local state). Avoid making
            truly local state global. Ask yourself: If this component was
            rendered twice, should this interaction reflect in the other parts
            of the app? If the answer is no, then keep state local only. To
            perform expensive calculations from props with performance, use the
            `useMemo` hook and pass those props in the list of dependencies. Do
            not store all or unrelated states together in single object. It will
            make them difficult to manage. Prefer using compound components when
            you need to share some common states in a tree of related
            components. Check out this guide to build components like a pro.
          </p>
        </div>
        <div className="mt-20">
          <h1 className="text-3xl text-lime-400 font-bold">
            {" "}
            <span className="text-black mr-4">Question : 2</span>How does
            prototypical inheritance work?
          </h1>
          <p className=" mt-6 text-justify">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
        <div className="mt-20">
          <h1 className="text-3xl text-lime-400 font-bold">
            {" "}
            <span className="text-black mr-4">Question : 3</span>What is a unit
            test? Why should we write unit tests?
          </h1>
          <p className=" mt-6 text-justify">
            <span className="mb-4">
              {" "}
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important. In
              his book "Working Effectively with Legacy Code", author Michael
              Feathers states that such tests are not unit tests when they rely
              on external systems: “If it talks to the database, it talks across
              the network, it touches the file system, it requires system
              configuration, or it can't be run at the same time as any other
              test."
            </span>
            <br />
            <br />
            <br />
            To justify any effort in business, there must be a positive impact
            on the bottom line. Here are a few benefits to writing unit tests:
            Unit tests save time and money. Usually, we tend to test the happy
            path more than the unhappy path. If you release such an app without
            thorough testing, you would have to keep fixing issues raised by
            your potential users. The time to fix these issues could’ve been
            used to build new features or optimize the existing system. Bear in
            mind that fixing bugs without running tests could also introduce new
            bugs into the system. Well-written unit tests act as documentation
            for your code. Any developer can quickly look at your tests and know
            the purpose of your functions. It simplifies the debugging process.
            Unit testing is an integral part of extreme programming. Extreme
            programming is basically a “test-everything-that-can-possibly-break”
            programming strategy. Unit tests make code reuse easier. If you want
            to reuse existing code in a new project, you can simply migrate both
            the code and tests to your new project, then run your tests to make
            sure you have the desired results. Unit testing improves code
            coverage. A debatable topic is to have 100% code coverage across
            your application. In the testing pyramid, unit tests are faster than
            integration and end-to-end. They are more assertive and return quick
            feedback. 
          </p>
        </div>
        <div className="mt-20">
          <h1 className="text-3xl text-lime-400 font-bold">
            {" "}
            <span className="text-black mr-4">Question : 4</span> React vs.
            Angular vs. Vue?
          </h1>
          <p className=" mt-6 text-justify">
            <h1 className="text-xl font-bold">AngularJS</h1>
            <p>
              AngularJS was developed in 2009 by Google. The first version was
              Angular.JS. Angular is currently known as a JavaScript framework.
              Obviously, all significant Google projects have been developed
              with Angular. Angular.js is an MVC framework. A major disadvantage
              of Angular is that it uses a regular DOM, and thus, the entire
              tree structure of the HTML tags is updated, which massively
              impacts the loading time. Angular.js has its Ionic framework for
              mobile applications.
            </p>
            <h1 className="text-xl mt-4 font-bold">React</h1>
            <p>
              Facebook released React.js in March 2013 as a JavaScript library.
              Because React just provides one view, it is not appropriate for
              building an MVC architecture: you must solve the model and
              controller yourself. Besides this, there are only advantages and
              lots of advantages. One of the biggest of them is that React.js
              uses a virtual DOM that only compares the previous HTML code
              differences and only loads the different parts. This significantly
              impacts the loading times. In a positive way, of course. With
              React.js, you handle the markup and the logic in the same file,
              which means you can output variables in a view component (JSX).
              React offers a type of mobile solutions for applications called
              React-Native.
            </p>
            <h1 className="text-xl mt-4 font-bold">Vue.js</h1>
            <p>
              Vue.js is a JavaScript-based progressive framework for creating
              single-page applications. It was created with scalability and
              incrementality in mind, as well as ease of integration with other
              view layer frameworks. Vue is built from the bottom up to be
              progressively adaptable, unlike other monolithic frameworks. The
              core library focuses solely on the view layer, and it’s simple to
              use and connect with other libraries or applications. This
              framework’s fast learning angle is almost a trademark. It’s a
              flexible framework that may be used as a library or a full-fledged
              framework for developing large web applications
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
