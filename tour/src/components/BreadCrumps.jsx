import React from 'react'

function BreadCrumps(props) {
  return (
    <div>
        {/* inner banner */}
        <section class="inner-banner py-sm-5 py-4">
            <div class="w3l-breadcrumb pt-5 pb-4">
                <div class="container py-xl-5 py-lg-4">
                    <h4 class="inner-text-title font-weight-bold pt-5"> {props.title} </h4>
                    <ul class="breadcrumbs-custom-path">
                        <li class="active"><i class="fas fa-angle-right mx-2"></i> / {props.pages} </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* //inner banner */}
    </div>
  )
}

export default BreadCrumps