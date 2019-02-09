.. title:: Package Recipe 'bioconductor-mimosa'
.. highlight: bash


bioconductor-mimosa
===================

.. conda:recipe:: bioconductor-mimosa
   :replaces_section_title:

   Modeling count data using Dirichlet\-multinomial and beta\-binomial mixtures with applications to single\-cell assays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MIMOSA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mimosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa/meta.yaml>`_

   


.. conda:package:: bioconductor-mimosa

   |downloads_bioconductor-mimosa| |docker_bioconductor-mimosa|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coda`  :conda:package:`r-data.table`  :conda:package:`r-formula`  :conda:package:`r-ggplot2`  :conda:package:`r-mass`  :conda:package:`r-mcmcpack`  :conda:package:`r-modeest`  :conda:package:`r-plyr`  :conda:package:`r-pracma`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  :conda:package:`r-reshape`  :conda:package:`r-scales`  :conda:package:`r-testthat`  

   :required~by: |required_by_bioconductor-mimosa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mimosa

   and update with::

      conda update bioconductor-mimosa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mimosa


.. |required_by_bioconductor-mimosa| conda:required_by:: bioconductor-mimosa
.. |downloads_bioconductor-mimosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mimosa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mimosa| image:: https://quay.io/repository/biocontainers/bioconductor-mimosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mimosa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mimosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mimosa/README.html

