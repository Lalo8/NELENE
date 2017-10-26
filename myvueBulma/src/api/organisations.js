import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/api/organisations',
});

export function getOrganisations() {
    return service.get('/').then(res => res.data)
}

export function getOrganisation(id) {
  return service.get(id).then(res => res.data)
}
export function removeOrganisation(id) {
  return service.delete(id).then(res => res.data)
}
export function addNewOrganisation(organisation) {
  return service.post('/', organisation).then(res => res.data)
}
export function editOrganisation(id,organisation){
  return service.patch(id,organisation).then(res => res.data)
}

