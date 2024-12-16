// Drag-and-Drop Interop
window.dragDropInterop = {
    onDragStart: (ev, data) => {
        ev.dataTransfer.setData("text/plain", data);
    },
    onDrop: (ev) => {
        const data = ev.dataTransfer.getData("text/plain");
        return data; // Return the dragged item
    },
    allowDrop: (ev) => {
        ev.preventDefault(); // Allow dropping
    }
};
