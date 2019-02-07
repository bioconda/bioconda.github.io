.. title:: Package Recipe 'bioconductor-genvisr'
.. highlight: bash


bioconductor-genvisr
====================

.. conda:recipe:: bioconductor-genvisr
   :replaces_section_title:

   Produce highly customizable publication quality graphics for genomic data primarily at the cohort level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenVisR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-genvisr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr/meta.yaml>`_
   :links: biotools: :biotools:`genvisr`

   


.. conda:package:: bioconductor-genvisr

   |downloads_bioconductor-genvisr| |docker_bioconductor-genvisr|

   :versions: 1.14.1, 1.12.1, 1.8.0, 1.6.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dbi`  :conda:package:`r-ffield`  :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-gridextra` >=2.0.0 :conda:package:`r-gtable`  :conda:package:`r-gtools`  :conda:package:`r-plyr` >=1.8.3 :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-viridis`  

   :required~by: |required_by_bioconductor-genvisr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genvisr

   and update with::

      conda update bioconductor-genvisr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genvisr


.. |required_by_bioconductor-genvisr| conda:required_by:: bioconductor-genvisr
.. |downloads_bioconductor-genvisr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genvisr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genvisr| image:: https://quay.io/repository/biocontainers/bioconductor-genvisr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genvisr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genvisr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genvisr/README.html

