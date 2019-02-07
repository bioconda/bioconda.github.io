.. title:: Package Recipe 'bioconductor-phantasus'
.. highlight: bash


bioconductor-phantasus
======================

.. conda:recipe:: bioconductor-phantasus
   :replaces_section_title:

   Phantasus is a web\-application for visual and interactive gene expression analysis. Phantasus is based on Morpheus – a web\-based software for heatmap visualisation and analysis\, which was integrated with an R environment via OpenCPU API. Aside from basic visualization and filtering methods\, R\-based methods such as k\-means clustering\, principal component analysis or differential expression analysis with limma package are supported.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/phantasus.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phantasus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasus/meta.yaml>`_

   


.. conda:package:: bioconductor-phantasus

   |downloads_bioconductor-phantasus| |docker_bioconductor-phantasus|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-fgsea` >=1.8.0,<1.9.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-assertthat`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ccapp`  :conda:package:`r-ggplot2`  :conda:package:`r-gtable`  :conda:package:`r-htmltools`  :conda:package:`r-httpuv`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-matrix`  :conda:package:`r-matrix.utils`  :conda:package:`r-opencpu`  :conda:package:`r-pheatmap`  :conda:package:`r-protolite`  :conda:package:`r-rook`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-svglite`  

   :required~by: |required_by_bioconductor-phantasus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phantasus

   and update with::

      conda update bioconductor-phantasus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phantasus


.. |required_by_bioconductor-phantasus| conda:required_by:: bioconductor-phantasus
.. |downloads_bioconductor-phantasus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phantasus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phantasus| image:: https://quay.io/repository/biocontainers/bioconductor-phantasus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phantasus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phantasus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phantasus/README.html

