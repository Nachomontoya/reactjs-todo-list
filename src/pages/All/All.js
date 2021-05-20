import React from "react";
import Main from "../../components/Main";
import mountainImg from "../../img/mountain.jpg";
import TodosContainer from "../../components/TodosContainer";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

function All() {
  return (
    <Main>
      <div className="fullcontent">
        <div className="container-fluid, h40">
          <div className="gradient" />
          <img src={mountainImg} alt="Mountain background" />
        </div>
        <div className="container-fluid h60 bg-light" />
      </div>
      <section className="container-sm position-absolute d-flex flex-column p-0 mainContent">
        <AppHeader />
        <aside className="bg-light d-flex flex-row shadow rounded p-3 mb-4">
          Input
        </aside>
        <article className="bg-light d-flex flex-column shadow rounded toContent">
          <div className="todoRender">
            <TodosContainer />
            <TodosContainer />
          </div>
          <AppFooter />
        </article>
      </section>
    </Main>
  );
}

export default All;
