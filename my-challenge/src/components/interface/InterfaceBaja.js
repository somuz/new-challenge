import styled from "@emotion/styled";
import colors from "../../styles/colors";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  gap: 1rem;
  padding: 10px 10px;
  background-color: ${colors.backgroundDark};
  border: 1px solid ${colors.black};
`;
const FirstLineDiv = styled.div`
  display: flex;
  gap: 4rem;
`;
const SkuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.5rem;
  font-size: 12px;
  align-items: center;
`;
const SmallInput = styled.input`
  border-color: 2px solid ${colors.black};
  border-width: 1px;
  width: 6rem;
  padding-left: 0.5rem;
`;
const DescontinuadoDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${colors.gray};
  font-size: 12px;
  align-items: center;
`;

const AmDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  font-size: 12px;
  align-items: center;
`;

const LargeInput = styled.input`
  border-color: 2px solid ${colors.black};
  border-width: 1px;
  width: 16rem;
  padding-left: 0.5rem;
`;
const MDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  font-size: 12px;
  align-items: center;
`;
const DepaDiv = styled.div`
  display: flex;
  flex: row;
  gap: 0.75rem;
  font-size: 12px;
  align-items: center;
`;

const DepaInput = styled.input`
  border-color: 2px solid ${colors.black};
  border-width: 1px;
  width: 16rem;
  padding-left: 0.5rem;
`;
const StockQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const StockContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  font-size: 12px;
  align-items: center;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 12px;
  align-items: center;
`;

const DateContaier = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const FechaAltaDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 2rem;
`;
const FechaBajaDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 0.5rem;
`;
const SubmitButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16rem;
  align-items: center;
  font-size: 18px;
`;
const SubmitButton = styled.button`
  width: 5rem;
  height: 2rem;
`;

export function InterfaceBaja() {
  return (
    <DivContainer>
      <FirstLineDiv>
        <SkuContainer>
          Sku:
          <SmallInput id="sku" placeholder="Only Numbers" />
        </SkuContainer>
        <DescontinuadoDivContainer>
          <input type="checkbox" name="Descontinuado" />
          Descontinuado
        </DescontinuadoDivContainer>
      </FirstLineDiv>
      <AmDiv>
        Artículo:
        <LargeInput
          id="Articulo"
          type="text"
          placeholder="Ingresa el nombre del Artículo"
        />
      </AmDiv>
      <MDiv>
        Marca:
        <LargeInput id="Marca" type="text" placeholder="Ingresa la Marca" />
      </MDiv>
      <AmDiv>
        Modelo:
        <LargeInput id="Modelo" type="text" placeholder="Ingresa el Modelo" />
      </AmDiv>
      <DepaDiv>
        Departamento:
        <DepaInput
          id="Departamento"
          type="number"
          placeholder="Ingresa el Departamento"
        />
      </DepaDiv>
      <MDiv>
        Clase :{" "}
        <LargeInput id="Clase" type="number" placeholder="Ingresa la Clase" />
      </MDiv>
      <AmDiv>
        Familia:{" "}
        <LargeInput
          id="Familia"
          type="number"
          placeholder="Ingresa la Familia"
        />
      </AmDiv>
      <StockQuantityContainer>
        <StockContainer>
          Stock: <SmallInput id="Stock" placeholder="En stock" />{" "}
        </StockContainer>
        <QuantityContainer>
          Cantidad: <SmallInput id="Cantidad" placeholder="Cantidad" />
        </QuantityContainer>
      </StockQuantityContainer>
      <DateContaier>
        <FechaAltaDiv>
          Fecha Alta <SmallInput id="FechaDeAlta" type="date" />
        </FechaAltaDiv>
        <FechaBajaDiv>
          Fecha Baja <SmallInput id="FechaDeBaja" type="date" />
        </FechaBajaDiv>
      </DateContaier>
      <SubmitButtonDiv>
        Baja
        <SubmitButton>Search</SubmitButton>
      </SubmitButtonDiv>
    </DivContainer>
  );
}

export default InterfaceBaja;
