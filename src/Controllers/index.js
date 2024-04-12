import { BubbleSort } from '../Models/BubbleSort.js';
import { contactosLinkedList } from './dependencias.js';

const enqueueBtn = document.getElementById('agregarBtn');
const inputNombre = document.getElementById('inputNombre');
const inputNumeroTelefono = document.getElementById('inputNumero');
const listaContactos = document.getElementById('listaContactos');

enqueueBtn.addEventListener('click', () => {
  const nombre = inputNombre.value;
  const numeroTelefono = inputNumeroTelefono.value;
  if (nombre && numeroTelefono) {
    contactosLinkedList.insert(nombre, numeroTelefono);
    actualizarListaContactos();
    inputNombre.value = '';
    inputNumeroTelefono.value = '';
  } else {
    alert('Por favor, introduce un nombre y un número de teléfono.');
  }
});

listaContactos.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const nombreContactoEliminar = event.target.dataset.nombre;
    contactosLinkedList.remove(nombreContactoEliminar);
    actualizarListaContactos();
  }
});

function actualizarListaContactos() {
  let contactosArray = contactosLinkedList.toArray();
  contactosArray = BubbleSort.sort(contactosArray);
  listaContactos.innerHTML = '';
  contactosArray.forEach(contacto => {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = `${contacto.nombre}: ${contacto.numeroTelefono}`;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.dataset.nombre = contacto.nombre;
    elementoLista.appendChild(botonEliminar);
    listaContactos.appendChild(elementoLista);
  });
}
