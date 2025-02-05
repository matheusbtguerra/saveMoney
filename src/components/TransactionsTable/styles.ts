import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
      color: var(--base-text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--principal-shape);
      color: var(--text-title);

      &:first-child {
        color: var(--base-text);
        border-radius: 0.25rem 0 0 0.25rem ;
      }

      &.deposit {
        color: var(--light-green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:last-child {
          border-radius: 0 0.25rem 0.25rem 0;
        }
    }

    @media (max-width: 768px) {
      th, td {
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
      }

      th {
        display: none;
      }

      td {
        display: block;
        text-align: right;
        padding-left: 50%;

        &::before {
          content: attr(data-label);
          float: left;
          font-weight: 600;
          color: var(--base-text);
        }

        &:first-child {
          border-radius: 0.25rem 0.25rem 0 0;
        }

        &:last-child {
          border-radius: 0 0 0.25rem 0.25rem;
        }
      }
    }
  }
`;