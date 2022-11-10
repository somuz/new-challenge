import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { index_articles } from "../../article_services";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

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
  gap: 1rem;
`;
const SkuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
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

const DepaInput = styled.select`
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

export function InterfaceAlta() {
  const [dataArticle, setDataArticle] = useState([]);
  const [dataFilter, setDataFilter] = useState({
    sku: "",
    articulo: "",
    marca: "",
    modelo: "",
    alta: "",
    stock: "",
    cantidad: "",
    descontinuado: "",
    baja: "",
  });
  const [dataInput, setDataInput] = useState("");

  const [valorEncontrado, setValorEncontrado] = useState(false);

  useEffect(() => {
    index_articles()
      .then((data) => setDataArticle(data))
      .catch((errors) => console.log(errors));
  }, []);

  function handle_change(event) {
    const exist = event.target.value;
    setDataInput(exist);
    debounceInput(exist, 1000);
  }

  function handle_change_on_sku(event) {
    const exist = event.target.value;
    setDataInput(exist);
    debounceInput(exist, 1000);
  }
  const debounceInput = debounce((input) => {
    const dataEncontrada = dataArticle.filter((e) => e.sku === parseInt(input));
    if (dataEncontrada.length === 0) {
      setValorEncontrado(false);
    } else {
      setDataFilter({
        sku: dataEncontrada[0].sku,
        articulo: dataEncontrada[0].articulo,
        marca: dataEncontrada[0].marca,
        modelo: dataEncontrada[0].modelo,
        alta: dataEncontrada[0].alta,
        stock: dataEncontrada[0].stock,
        cantidad: dataEncontrada[0].cantidad,
        descontinuado: dataEncontrada[0].descontinuado,
        baja: dataEncontrada[0].baja,
      });

      setValorEncontrado(true);
    }
  }, 1000);

  return (
    <DivContainer>
      <FirstLineDiv>
        <SkuContainer>
          Sku:
          <SmallInput
            id="sku"
            onChange={handle_change}
            placeholder="Only Numbers"
          />
          {valorEncontrado ? (
            <AiFillCheckCircle
              style={{ color: "green", width: "24px", height: "24px" }}
            />
          ) : (
            <AiFillCloseCircle
              style={{ color: "red", width: "24px", height: "24px" }}
            />
          )}
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
          onChange={handle_change_on_sku}
          value={dataFilter.articulo}
          placeholder="Ingresa el nombre del Artículo"
        />
      </AmDiv>
      <MDiv>
        Marca:
        <LargeInput
          id="Marca"
          type="text"
          placeholder="Ingresa la Marca"
          value={dataFilter.marca}
        />
      </MDiv>
      <AmDiv>
        Modelo:
        <LargeInput
          id="Modelo"
          type="text"
          placeholder="Ingresa el Modelo"
          value={dataFilter.modelo}
        />
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
          Stock:{" "}
          <SmallInput
            id="Stock"
            placeholder="En stock"
            value={dataFilter.stock}
          />{" "}
        </StockContainer>
        <QuantityContainer>
          Cantidad:{" "}
          <SmallInput
            id="Cantidad"
            placeholder="Cantidad"
            value={dataFilter.cantidad}
          />
        </QuantityContainer>
      </StockQuantityContainer>
      <DateContaier>
        <FechaAltaDiv>
          Fecha Alta{" "}
          <SmallInput id="FechaDeAlta" type="date" value={dataFilter.alta} />
        </FechaAltaDiv>
        <FechaBajaDiv>
          Fecha Baja{" "}
          <SmallInput id="FechaDeBaja" type="date" value={dataFilter.baja} />
        </FechaBajaDiv>
      </DateContaier>

      <SubmitButtonDiv>
        Alta
        <SubmitButton>Create</SubmitButton>
      </SubmitButtonDiv>
    </DivContainer>
  );
}

export default InterfaceAlta;
