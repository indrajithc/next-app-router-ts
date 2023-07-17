import { FC, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: FC<SearchManufacturerProps> = (props) => {
  const { manufacturer, setManufacturer } = props;

  const [query, setQuery] = useState("");

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Volkswagen..."
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
