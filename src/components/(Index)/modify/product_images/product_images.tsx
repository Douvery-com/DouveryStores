import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Grid4_img } from '~/components/(Center)/products/generate-product/upload_img/grid4_img/grid4_img';
import { Horizontal_img } from '~/components/(Center)/products/generate-product/upload_img/horizontal_img/horizontal_img';
import { Vertical_img } from '~/components/(Center)/products/generate-product/upload_img/vertical_img/vertical_img';
import style from './product_images.css?inline';
import { TitleSubtitleComponent } from '~/components/use/title component/TitleSubtitleComponent/title-subtitle-component';
export const Product_images = component$(
  ({
    productStore,
    productProductDetailsHandlers,
    previewIMG,

    previewIMGs,
  }: any) => {
    useStylesScoped$(style);
    const {
      onProductOrientationChange,
      onHandleFileChange,
      onHandlePreviewImg1Change,
      onHandlePreviewImgChange,
    } = productProductDetailsHandlers;
    function selectComponent() {
      switch (productStore.pd_deatilImgBox) {
        case 'horizontal_view':
          return (
            <>
              <Horizontal_img
                preview={previewIMG}
                onChange={onHandleFileChange}
                onHandlePreviewImg1Change={onHandlePreviewImg1Change}
                previewIMGs={previewIMGs}
                onHandlePreviewImgChange={onHandlePreviewImgChange}
              />
            </>
          );

        case 'vertical_view':
          return (
            <>
              <Vertical_img
                preview={previewIMG}
                onChange={onHandleFileChange}
                onHandlePreviewImg1Change={onHandlePreviewImg1Change}
                previewIMGs={previewIMGs}
                onHandlePreviewImgChange={onHandlePreviewImgChange}
              />
            </>
          );

        case 'grid4_view':
          return (
            <>
              <Grid4_img
                preview={previewIMG}
                onChange={onHandleFileChange}
                onHandlePreviewImg1Change={onHandlePreviewImg1Change}
                previewIMGs={previewIMGs}
                onHandlePreviewImgChange={onHandlePreviewImgChange}
              />
            </>
          );
        default:
          return (
            <>
              <Vertical_img
                preview={previewIMG}
                onChange={onHandleFileChange}
                onHandlePreviewImg1Change={onHandlePreviewImg1Change}
                previewIMGs={previewIMGs}
                onHandlePreviewImgChange={onHandlePreviewImgChange}
              />
            </>
          );
      }
    }

    return (
      <div class="Form__IMAGESPRODUCTS">
        <br />
        <div class="detailImages">
          <TitleSubtitleComponent
            title=""
            subtitle="Modifica las imagenes del producto."
          />
          <br />
          <div class="content_img">{selectComponent()}</div>
        </div>
        <br />
        <div class="conten_form_IMAGES">
          <div class="content_select_orientation">
            <label for="orientation">Orientación del producto:</label>
            <select
              id="orientation"
              value={productStore.pd_deatilImgBox}
              onChange$={onProductOrientationChange}
            >
              <option value="vertical_view">Vertical</option>
              <option value="horizontal_view">Horizontal</option>
              <option value="grid4_view">Grid 4 Images</option>
            </select>
          </div>
        </div>
        <br />
      </div>
    );
  }
);
