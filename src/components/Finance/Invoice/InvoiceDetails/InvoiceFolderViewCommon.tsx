import { Tooltip } from "antd";
import FolderIcon from "../../../../assets/icons/finance-setup/folder.png";
import PdfIcon from "../../../../assets/icons/finance-setup/pdfIcon.png";
import Download from "../../../../assets/icons/finance-setup/download.png";
import SheetIcon from "../../../../assets/icons/finance-setup/sheetIcon.png";
import dayjs from "dayjs";

const InvoiceFolderViewCommon = (props: any) => {
  const { type, size, dateModified, name, dateCreated, onClick } = props;

  return (
    <div onClick={onClick}>
      <Tooltip
        placement="bottomLeft"
        title={
          <div style={{ padding: "6px 8px 0px 8px" }}>
            <p className="m-0">File Type: {type}</p>
            <p className="m-0">Size: {size}</p>
            <p className="m-0">Date modified: {dayjs(dateModified).format("DD-MM-YYYY")}</p>
          </div>
        }
        color="#42BCE5"
      >
        <div
          className="cursor-pointer"
          style={{
            backgroundColor: "#FCFCFC",
            borderRadius: "10px",
            padding: type === "File" ? "2rem 1rem" : (name.toString().includes(name) && typeof name ==="number") ? "2.5rem 1rem .5rem 1rem" : "3rem 2rem",
            textAlign: "center",
          }}
        >
          {type === "File" && (
            <div className="d-flex justify-end">
              <img className="cursor-pointer" src={Download} height={24} width={25} alt="cloud" />
            </div>
          )}
          <img src={type === "File" ? (name.includes(".Pdf") ? PdfIcon : SheetIcon) : FolderIcon} alt="Folder" />
          <p className="fs-14 fw-500 m-0">{(name.toString().includes(name) && typeof name ==="number") && "week 0"}{name}</p>
          {(name.toString().includes(name)&& typeof name ==="number") && (
            <p className="fs-14">
              {dayjs(dateCreated).format("DD/MM/YYYY")}  - {dayjs(dateModified).format("DD/MM/YYYY")}
            </p>
          )}
        </div>
      </Tooltip>
    </div>
  );
};

export default InvoiceFolderViewCommon;
