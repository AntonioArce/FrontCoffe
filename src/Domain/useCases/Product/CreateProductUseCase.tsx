import { AdminProductRepositoryImpl } from "../../../Data/repositories/AdminProductRepository";
import { Product } from "../../entities/Product";
import * as ImagePicker from 'expo-image-picker';
const { createWithImage } = new AdminProductRepositoryImpl()

export const CreateWithImageUseCase = async (product: Product, file: ImagePicker.ImagePickerAsset) => {
    return await createWithImage(product, file)
}