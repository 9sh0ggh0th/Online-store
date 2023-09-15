import { $authHost, $host } from "./index.js";

// Type manipulation

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteType = async (type) => {
    const {data} = await $authHost.delete('api/type', type)
    return data
}

// Brand manipulation

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const deleteBrand = async (brand) => {
    const {data} = await $authHost.delete('api/brand', brand)
    return data

}

// Device manipulation

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (brandId, typeId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const deleteDevice = async (device) => {
    const {data} = await $authHost.delete('api/device', device)
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}