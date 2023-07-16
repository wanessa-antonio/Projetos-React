import React from 'react';
import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {
  return (
    <ButtonBS {...buttonProps}>
      {loading && (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Carregando...</span>
        </>
      )}
      {loading ? loadingLabel : label}
    </ButtonBS>
  );
};
