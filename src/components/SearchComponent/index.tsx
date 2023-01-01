import "./styles.css";
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDock } from "../../context/Dock";
import { documentService } from "../../services/DocumentService";
import { Document } from "../../types";

export const SearchComponent = () => {
    const { isSearchOpen, setIsSearchOpen } = useDock();
    const [searchItem, setSearchItem] = useState("");
    const [isShowingResults, setIsShowingResults] = useState(false);
    const [searchResult, setSearchResult] = useState<Document[]>([]);

    useEffect(() => {
        if (searchItem.length > 0) {
            search();
            setIsShowingResults(true);
        } else {
            setIsShowingResults(false);
        }
    }, [searchItem]);

    async function search() {
        const result = await documentService.search(searchItem);
        setSearchResult(result.data);
    }

    function closeModal() {
        setIsSearchOpen(false);
        setSearchItem("");
    }

    return (
        <Modal
            isOpen={isSearchOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    backgroundColor: 'transparent',
                },
                content: {
                    height: 'fit-content',
                    width: '35%',
                    padding: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    top: '20%',
                    left: '30%'
                }
            }}
        >
            <div className="search-container">
                <div className={`search-form ${isShowingResults ? '' : 'serach-full-rounded'}`}>
                    <FiSearch />
                    <input placeholder="Buscar pelo documento..." type="text" onChange={(event) => setSearchItem(event.target.value)} autoFocus />
                </div>
                {isShowingResults &&
                    <div className="search-results">
                        <ul>
                            {
                                searchResult.map(doc => (
                                    <li key={doc.id}>{doc.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </Modal>
    )
}