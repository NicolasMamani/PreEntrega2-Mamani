import { SvgShopping } from '../../layouts/SvgShopping';

const Checkout = ({ handleChange, handleSubmit, errors }) => {
    return (
        <div className="flex space-x-36">
            <form onSubmit={handleSubmit} className=" bg-white p-5">
                <div className="form-floating mb-3">
                    <label className="block text-gray-700 font-bold mb-2 text-2xl">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className={`border rounded-lg text-xl py-2 px-2`}
                        name="name"
                        onChange={handleChange}
                    />
                    {/* Si hay algún error en el nombre hago que aparezca un texto en color rojo con el mensaje de error */}
                    {errors.name && (
                        <p style={{ color: 'red' }}>{errors.name}</p>
                    )}
                </div>
                <div className="">
                    <label
                        htmlFor="floatingInput"
                        className="block text-gray-700 text-2xl font-bold"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        /* Si el email tiene algun error, le agrego la clase is-invalid de boostrap */
                        className="border rounded-lg px-2 py-2 text-xl"
                        id="floatingInput"
                        name="email"
                        onChange={handleChange}
                    />
                    {/* Si el mail tiene algun error, se mostraran en un texto rojos los errores */}
                    {errors.email && (
                        <p style={{ color: 'red' }}>{errors.email}</p>
                    )}
                </div>
                <div className="">
                    <label className="block text-gray-700 text-2xl font-bold">
                        Numero
                    </label>
                    <input
                        type="text"
                        /* Si el phone tiene algun error, le agrego la clase is-invalid de boostrap */
                        className={`border rounded-lg px-2 py-2 text-xl`}
                        name="phone"
                        onChange={handleChange}
                    />
                    {/* Si el phone tiene algun error se mostrara un texto en rojo que indique los errores */}
                    {errors.phone && (
                        <p style={{ color: 'red' }}>{errors.phone}</p>
                    )}
                </div>

                <button
                    className="text-center text-2xl hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 mt-3 rounded"
                    type="submit"
                >
                    Comprar
                </button>
            </form>
            <div className="animate-shopping">
                <SvgShopping />
            </div>
        </div>
    );
};

export default Checkout;
