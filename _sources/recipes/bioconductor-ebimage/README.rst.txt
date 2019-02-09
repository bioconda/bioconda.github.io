.. title:: Package Recipe 'bioconductor-ebimage'
.. highlight: bash


bioconductor-ebimage
====================

.. conda:recipe:: bioconductor-ebimage
   :replaces_section_title:

   EBImage provides general purpose functionality for image processing and analysis. In the context of \(high\-throughput\) microscopy\-based cellular assays\, EBImage offers tools to segment cells and extract quantitative cellular descriptors. This allows the automation of such tasks using the R programming language and facilitates the use of other tools in the R environment for signal processing\, statistical modeling\, machine learning and visualization with image data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EBImage.html
   :license: LGPL
   :recipe: /`bioconductor-ebimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebimage/meta.yaml>`_
   :links: biotools: :biotools:`ebimage`

   


.. conda:package:: bioconductor-ebimage

   |downloads_bioconductor-ebimage| |docker_bioconductor-ebimage|

   :versions: 4.24.0, 4.22.1, 4.20.0, 4.18.3, 4.13.0, 4.12.2

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fftwtools` >=0.9-7 :conda:package:`r-htmltools`  :conda:package:`r-htmlwidgets`  :conda:package:`r-jpeg`  :conda:package:`r-locfit`  :conda:package:`r-png`  :conda:package:`r-rcurl`  :conda:package:`r-tiff`  

   :required~by: |required_by_bioconductor-ebimage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebimage

   and update with::

      conda update bioconductor-ebimage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ebimage


.. |required_by_bioconductor-ebimage| conda:required_by:: bioconductor-ebimage
.. |downloads_bioconductor-ebimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebimage.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ebimage| image:: https://quay.io/repository/biocontainers/bioconductor-ebimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebimage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebimage/README.html

