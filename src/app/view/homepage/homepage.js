import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Homepage = (props) => {

    const localization = useSelector((state) => state.localization.localization)

    const title = {
        TR : "Ana Sayfa",
        US : "Home Page",
        GB : "Home Page"
    }

    const text = {
        TR : `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris ac neque ullamcorper, quis viverra tellus vestibulum. Maecenas id odio eu massa fringilla varius eu eu nulla. Maecenas sed suscipit ante. Sed a sagittis urna. Donec eget rhoncus mi, pretium ultrices sem. Integer ligula tortor, pulvinar a mollis vel, sodales at est. Etiam orci velit, tincidunt sit amet est elementum, dictum ultricies tellus. Nulla facilisi. Nullam lobortis semper iaculis. Phasellus nec lacus at enim varius porttitor. Cras aliquet faucibus nisl, vitae tincidunt massa aliquam ultrices.

        Nam ultricies purus ut pretium tempus. Aenean ut lacus nunc. Fusce pellentesque urna tellus, et porta lacus dictum id. In vulputate enim ut aliquet viverra. Nunc non sapien in tellus fringilla maximus. Nunc lorem dolor, rutrum id commodo condimentum, accumsan ut arcu. Nunc ullamcorper, sem at ornare fermentum, dui nisi mollis sapien, eget tempor arcu metus a neque. Phasellus nec mi non tortor volutpat elementum. Vestibulum non turpis sit amet elit semper dapibus. Donec dolor velit, scelerisque eget pharetra a, mattis vitae tortor.
        
        Quisque sit amet elementum tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet ligula et est sodales imperdiet eu vitae ex. Nunc non ipsum nec magna accumsan tincidunt. Donec non libero est. Curabitur vehicula id mauris nec bibendum. Aenean non nulla et metus egestas iaculis. Suspendisse dictum volutpat odio. Mauris nec posuere justo. Aliquam eget lacus eget metus interdum bibendum pellentesque nec ex.
        
        In hac habitasse platea dictumst. Nam sodales gravida nibh in elementum. Vestibulum luctus urna erat, non fringilla metus congue nec. Nulla vel sem ac metus interdum pharetra non a erat. Fusce rutrum interdum velit, nec porttitor lorem luctus elementum. Etiam dictum vulputate accumsan. Maecenas consequat consectetur velit, a rutrum leo tempor vitae. Morbi orci arcu, faucibus a faucibus sed, condimentum eget est. Sed vitae nulla tempus, vulputate lectus nec, finibus diam.
        
        Morbi semper est tellus. Nam viverra ullamcorper tortor, a accumsan mi varius eget. Vivamus lacinia lobortis quam, viverra malesuada felis condimentum ut. Fusce luctus, dui sed molestie tincidunt, risus nibh lacinia mi, et rhoncus erat augue vel augue. In hac habitasse platea dictumst. Donec gravida ut leo non sodales. Quisque lobortis risus in erat gravida aliquet elementum eu odio. Nulla quis rutrum mi, ac faucibus quam. Suspendisse vulputate, neque ut malesuada mollis, sem risus porttitor nisi, sed pellentesque tortor urna nec metus. Nulla viverra elementum rhoncus. Nullam aliquam velit eu neque fermentum, ac tincidunt sem suscipit. Sed consequat, ipsum quis bibendum volutpat, ligula mauris malesuada purus, non lacinia nunc dui sed elit.
        `,
        US : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dictum orci. Etiam tempor cursus orci, et ullamcorper lectus. Cras ullamcorper lorem sit amet varius porttitor. In in maximus massa. Duis viverra tincidunt ipsum, non fringilla nulla efficitur vel. Donec consequat eu nisi at faucibus. Duis id sapien facilisis, cursus sapien nec, egestas diam. Aliquam vitae odio arcu. Phasellus tristique dignissim risus id commodo. Pellentesque ullamcorper, arcu sit amet aliquam condimentum, sem metus venenatis urna, a feugiat eros erat ut ante. Proin vitae posuere nisl. Aliquam erat volutpat. Donec id mi euismod, viverra dui sit amet, lobortis velit.

        Duis sollicitudin tortor massa, ac ultricies elit auctor porta. Mauris vel congue quam. In dapibus posuere metus, semper sodales libero posuere quis. Sed in posuere dui, id semper ipsum. Donec facilisis massa dapibus, egestas velit at, varius orci. Duis aliquam varius purus, in interdum felis. Nam tempus est vitae lacus ultricies, ut mattis justo sollicitudin. Ut mattis massa a facilisis scelerisque.
        
        Etiam nisl elit, feugiat id lectus non, tempor convallis lorem. Proin porta sem purus, quis vehicula magna tincidunt ac. Etiam porttitor ex quis neque malesuada pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a metus et dolor vehicula suscipit. Morbi aliquet vehicula ex, in venenatis libero laoreet nec. Etiam ut nisl ac ex aliquet vehicula. Curabitur turpis dolor, tincidunt quis nisl maximus, facilisis auctor dui. Sed quis sagittis sapien. Cras et velit molestie, semper urna quis, posuere lacus. Donec ut risus purus. Nullam condimentum ex porttitor arcu condimentum lobortis. Nunc tristique sem sit amet ipsum rutrum molestie. Vivamus eu facilisis magna, eget suscipit massa. Mauris vehicula, sem imperdiet laoreet pretium, enim lorem laoreet nisl, id feugiat nibh ex ut neque. Nulla cursus pharetra efficitur.
        
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vel dui at dolor laoreet consequat. Praesent sit amet tincidunt nunc, ut pretium nisi. Sed nec odio bibendum, pharetra elit ut, laoreet mauris. Suspendisse eleifend ac purus ut tempor. Duis ultricies nunc vel eleifend porta. Quisque ac quam in ipsum ultricies congue sed in lacus. Nullam risus risus, efficitur vitae posuere et, commodo in purus. Integer vestibulum vulputate nulla lobortis ullamcorper. Proin luctus malesuada ultrices. Nam vulputate quis leo at malesuada. Proin sodales libero in odio imperdiet, a fringilla justo imperdiet. Vivamus tristique nulla lectus, et tincidunt arcu consectetur ut. Donec interdum condimentum nisi in tincidunt. Suspendisse potenti.
        
        In eu scelerisque sapien, non posuere velit. Vestibulum vestibulum nisi id congue commodo. Nunc eget tincidunt orci. Nunc feugiat magna in odio posuere, sed varius mi semper. Aliquam sem erat, ultricies quis ullamcorper eu, efficitur id odio. Donec suscipit nisi eros, a commodo ex pretium in. Nulla lacinia porttitor urna, at molestie arcu ornare nec. Phasellus condimentum ex non nunc laoreet tincidunt. Aenean nec lobortis diam. Integer eleifend vestibulum fringilla. Aliquam ut consequat odio. Nullam justo leo, fermentum id sagittis sit amet, ultricies ac dui. Integer id orci facilisis, accumsan odio nec, imperdiet ante. Integer nec quam cursus, fringilla purus quis, cursus orci.`,
        GB : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit diam, pretium sit amet efficitur eu, sollicitudin a libero. Donec vel imperdiet ex. Sed dictum volutpat dolor in ultrices. Ut mollis gravida ultrices. Aenean pretium in arcu a sollicitudin. Ut et nulla id eros posuere fermentum. Morbi in egestas arcu. In condimentum tortor nulla. Quisque interdum et dolor et ultrices. Praesent vehicula augue quis lorem tincidunt, at venenatis lacus tempus. Duis pulvinar laoreet purus, molestie placerat libero. Maecenas vehicula nibh consectetur luctus pellentesque.

        Nulla non arcu in urna iaculis interdum vel eget est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit turpis at magna elementum facilisis at at est. Integer a urna magna. Sed tempor est ac risus tristique placerat. Suspendisse sed lobortis neque. Aliquam scelerisque eget mauris quis bibendum. Integer ut finibus sapien.
        
        Duis mollis velit a diam varius, nec vulputate ipsum mattis. Integer a eleifend arcu. Praesent lobortis feugiat ex, efficitur vehicula enim cursus ac. Morbi pulvinar velit id ultricies commodo. Sed orci magna, ultricies quis egestas sed, volutpat a sem. Duis vel posuere purus, vel commodo augue. In justo eros, varius id lobortis tempor, congue vel neque. Nulla vulputate elementum placerat. Phasellus facilisis convallis turpis in gravida. Fusce ut nisl orci. Fusce sapien urna, elementum non mi et, commodo elementum quam. Vestibulum finibus dolor at felis venenatis, sit amet pulvinar purus ultrices. Vivamus mollis odio et leo porta, at ornare lacus tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel dapibus lectus. Pellentesque sed leo mi.
        
        Nullam magna ligula, gravida vitae molestie aliquet, lacinia ac dolor. Pellentesque dolor elit, ullamcorper vitae enim sit amet, tincidunt feugiat sapien. Curabitur sagittis risus in suscipit fermentum. Nulla dui justo, suscipit eget metus eget, posuere bibendum erat. Maecenas sagittis imperdiet magna nec feugiat. Aliquam mattis justo tellus, eget rutrum est accumsan volutpat. Sed rutrum sapien neque. Proin interdum ornare porta. Quisque tincidunt tempus enim, ut tincidunt lectus elementum eu. Etiam et pretium quam. Etiam ultricies tempor felis, nec luctus augue efficitur in. Nullam tortor turpis, viverra quis vehicula eget, accumsan id felis. Nunc eu nisi velit. Aliquam sit amet mauris elementum odio pellentesque pellentesque.
        
        Vestibulum at gravida ex, eget vestibulum dui. Praesent sollicitudin velit a leo consequat, ut blandit risus elementum. Praesent leo purus, aliquam sed dignissim eget, euismod vel nisl. Etiam lacinia, erat quis consequat sodales, velit erat consectetur leo, id euismod eros neque id nisi. Cras metus metus, congue vitae lectus pellentesque, aliquet malesuada sapien. Suspendisse potenti. Praesent eget lectus malesuada, congue justo interdum, pretium tellus. Donec iaculis quam ac orci tristique, ut ornare lacus feugiat. Nulla a ornare lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nibh augue, pretium vel ante vel, imperdiet convallis est. Maecenas in aliquam lacus. Nulla convallis tincidunt bibendum. Phasellus aliquet porta libero, nec ultrices massa viverra vel.`
    }

    return (
        <div className="homepage">
            <h2>{title[localization]}</h2>
            <p>{text[localization]}</p>
            <p>{text[localization]}</p>
        </div>
    )
}

export default Homepage