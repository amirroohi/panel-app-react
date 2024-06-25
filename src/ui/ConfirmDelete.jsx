function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold mb-4">آیا از حذف {resourceName} مطمئن هستید؟</h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--danger flex-1 py-2"
          onClick={onConfirm}
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </div>
  );
}
export default ConfirmDelete;
