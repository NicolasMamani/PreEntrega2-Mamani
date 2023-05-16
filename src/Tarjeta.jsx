/* Si quiero usar el archivo en otro lado exporto */

export function Tarjeta() {
  let texto = "hola como estas";
  let edad = 22;

  return (
    <div>
      <img src="" alt="" />
      {/* template string es diferente a inyección */}
      <h3>{texto}</h3>
      <h4>{edad}</h4>
    </div>
  );
}
