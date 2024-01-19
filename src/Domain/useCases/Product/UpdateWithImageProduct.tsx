import { AdminProductRepositoryImpl } from "../../../Data/repositories/AdminProductRepository";
import { Product } from "../../entities/Product";
import * as ImagePicker from 'expo-image-picker';
const { updateWhitImage } = new AdminProductRepositoryImpl()

export const UpdateProductWithImageUseCase = async (product: Product, file: ImagePicker.ImagePickerAsset) => {
    return await updateWhitImage(product, file)
}
