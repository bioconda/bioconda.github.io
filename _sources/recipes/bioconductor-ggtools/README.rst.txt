.. title:: Package Recipe 'bioconductor-ggtools'
.. highlight: bash


bioconductor-ggtools
====================

.. conda:recipe:: bioconductor-ggtools
   :replaces_section_title:

   software and data for analyses in genetics of gene expression and\/or DNA methylation

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GGtools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtools/meta.yaml>`_
   :links: biotools: :biotools:`ggtools`

   


.. conda:package:: bioconductor-ggtools

   |downloads_bioconductor-ggtools| |docker_bioconductor-ggtools|

   :versions: 5.18.0, 5.16.0, 5.14.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbase` >=3.44.0,<3.45.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biglm`  :conda:package:`r-bit`  :conda:package:`r-data.table`  :conda:package:`r-ff`  :conda:package:`r-ggplot2`  :conda:package:`r-hexbin`  :conda:package:`r-iterators`  :conda:package:`r-reshape2`  :conda:package:`r-rocr`  

   :required~by: |required_by_bioconductor-ggtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggtools

   and update with::

      conda update bioconductor-ggtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ggtools


.. |required_by_bioconductor-ggtools| conda:required_by:: bioconductor-ggtools
.. |downloads_bioconductor-ggtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ggtools| image:: https://quay.io/repository/biocontainers/bioconductor-ggtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtools/README.html

