import { Container, Header, SearchForm, Section, TodoList } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          {/* <SearchForm onSubmit={this.handleSubmit} /> */}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
