import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: none;
    color: var(--base-text);

    background: var(--background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--placeholder);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--white);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean,
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#015f43',
    red: '#aa2834'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: none;
  border-radius: 0.25rem;

  background-color: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : 'var(--secondary-shape)'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s, background-color 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
