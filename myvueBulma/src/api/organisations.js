import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api/organisations",
});

export function getOrganisations() {
    return service.get('/').then(res => res.data)
}
export function getOrganisation(id) {
  return service.get(id).then(res => res.data)
}
export function removeOrganisation(id) {
  return service.delete(id).then(() => {})
}
export function getOrganisationsByOwner(id){
  return service.get('/',{
    params: {
      ownerId: id
    }
  }).then(res => res.data)
}
export function addNewOrganisation(organisation) {
  return service.post('/', organisation).then(res => res.data)
}
export function editOrganisation(id,organisationChanges){
  return service.patch(id,organisationChanges).then(res => res.data)
}

