import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="topmost-header">
        <div>
          <h6 className="typo-topmost-header">
            Sign up and get 20% off to your first order.<span>Sign Up Now</span>{" "}
          </h6>
        </div>
      </div>
      <div className="container">
        <div className="nav-bar">
          <div className="Logo">SHOP.CO</div>
          <ul className="nav-bar-center" type="none">
            <li>
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <div className="nav-bar-right">
            <svg className="search-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
            <input
              type="search"
              className="search-bar"
              placeholder="Search for products..."
            ></input>

            <svg className="nav-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              
            >
              <path
                d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
                fill="black"
              />
            </svg>
            <svg className="nav-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
