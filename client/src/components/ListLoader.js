import React from 'react';
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import SemanticLoadError from "./SemanticLoadError";
import SemanticLoader from "./SemanticLoader";
import { primaryColor } from './Colors';
import styled from 'styled-components';

export default function ListLoader({url, renderData, header, errorMessage}) {
  const { data, loading, error } = useAxiosOnMount(url);

  const renderList = () => {
    if (loading) return <SemanticLoader />;
    if (error) return (
      <SemanticLoadError
        header={errorMessage ? errorMessage : "Error Occurred"}
        error={error.message}
        />
      )
    return data.map(renderData);
  };

  return (
    <div>
      <h1>{header}</h1>
      <CardWrapper fluid>
      {renderList()}
      </CardWrapper>
    </div>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${primaryColor};
  `