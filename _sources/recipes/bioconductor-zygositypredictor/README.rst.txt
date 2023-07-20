:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zygositypredictor'
.. highlight: bash

bioconductor-zygositypredictor
==============================

.. conda:recipe:: bioconductor-zygositypredictor
   :replaces_section_title:
   :noindex:

   Package for prediction of zygosity for variants\/genes in NGS data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ZygosityPredictor.html
   :license: GPL-2
   :recipe: /`bioconductor-zygositypredictor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zygositypredictor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zygositypredictor/meta.yaml>`_

   The ZygosityPredictor allows to predict how many copies of a gene are affected by small variants. In addition to the basic calculations of the affected copy number of a variant\, the Zygosity\-Predictor can integrate the influence of several variants on a gene and ultimately make a statement if and how many wild\-type copies of the gene are left. This information proves to be of particular use in the context of translational medicine. For example\, in cancer genomes\, the Zygosity\-Predictor can address whether unmutated copies of tumor\-suppressor genes are present. Beyond this\, it is possible to make this statement for all genes of an organism. The Zygosity\-Predictor was primarily developed to handle SNVs and INDELs \(later addressed as small\-variants\) of somatic and germline origin. In order not to overlook severe effects outside of the small\-variant context\, it has been extended with the assessment of large scale deletions\, which cause losses of whole genes or parts of them.


.. conda:package:: bioconductor-zygositypredictor

   |downloads_bioconductor-zygositypredictor| |docker_bioconductor-zygositypredictor|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zygositypredictor

   and update with::

      conda update bioconductor-zygositypredictor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zygositypredictor:<tag>

   (see `bioconductor-zygositypredictor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zygositypredictor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zygositypredictor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zygositypredictor
   :alt:   (downloads)
.. |docker_bioconductor-zygositypredictor| image:: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor
.. _`bioconductor-zygositypredictor/tags`: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zygositypredictor";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zygositypredictor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zygositypredictor/README.html