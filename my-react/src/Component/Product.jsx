import Productbutton from './button'

const Productcard=()=>{
    const ProductImage="https://imgs.search.brave.com/Vsx20vXnO4GwJD8UoZiOTo27rN4GtNvSimSlTZsPQe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/MV9hMDM5NzJlMi1j/NzgxLTRmOWYtYjdm/ZC0xZGI1OTZhMDBh/NzAuanBnP3Y9MTcx/MjI0MDU1MyZ3aWR0/aD0xODAw"
    const ProductName="Moisturizer"
    const Price="550"
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center border border-gray-200">
          <img
            src={ProductImage}
            alt="Product"
            className="w-40 h-40 mx-auto mb-4 rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800">{ProductName}</h2>
          <p className="text-gray-600 text-md font-bold">{Price}</p>
          <div className="mt-4">
            <Productbutton />
          </div>
        </div>
      );
    };
    
    export default Productcard;


    