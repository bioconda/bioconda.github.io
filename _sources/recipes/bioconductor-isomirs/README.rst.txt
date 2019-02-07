.. title:: Package Recipe 'bioconductor-isomirs'
.. highlight: bash


bioconductor-isomirs
====================

.. conda:recipe:: bioconductor-isomirs
   :replaces_section_title:

   Characterization of miRNAs and isomiRs\, clustering and differential expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/isomiRs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isomirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs/meta.yaml>`_
   :links: biotools: :biotools:`isomirs`, doi: :doi:`10.1093/bioinformatics/btv632`

   


.. conda:package:: bioconductor-isomirs

   |downloads_bioconductor-isomirs| |docker_bioconductor-isomirs|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0, 1.0.3, 1.0.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-degreport` >=1.18.0,<1.19.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-assertive.sets`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-cowplot`  :conda:package:`r-discriminer`  :conda:package:`r-dplyr`  :conda:package:`r-ggally`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-gtools`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-readr`  :conda:package:`r-reshape`  :conda:package:`r-rlang`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-isomirs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isomirs

   and update with::

      conda update bioconductor-isomirs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-isomirs


.. |required_by_bioconductor-isomirs| conda:required_by:: bioconductor-isomirs
.. |downloads_bioconductor-isomirs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isomirs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isomirs| image:: https://quay.io/repository/biocontainers/bioconductor-isomirs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isomirs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isomirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isomirs/README.html

