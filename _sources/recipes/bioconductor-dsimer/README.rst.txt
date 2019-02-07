.. title:: Package Recipe 'bioconductor-dsimer'
.. highlight: bash


bioconductor-dsimer
===================

.. conda:recipe:: bioconductor-dsimer
   :replaces_section_title:

   dSimer is an R package which provides computation of nine methods for measuring disease\-disease similarity\, including a standard cosine similarity measure and eight function\-based methods. The disease similarity matrix obtained from these nine methods can be visualized through heatmap and network. Biological data widely used in disease\-disease associations study are also provided by dSimer.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/dSimer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dsimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsimer/meta.yaml>`_
   :links: biotools: :biotools:`dsimer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-dsimer

   |downloads_bioconductor-dsimer| |docker_bioconductor-dsimer|

   :versions: 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-igraph` >=1.0.1 :conda:package:`r-rcpp` >=0.11.3 :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-dsimer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dsimer

   and update with::

      conda update bioconductor-dsimer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dsimer


.. |required_by_bioconductor-dsimer| conda:required_by:: bioconductor-dsimer
.. |downloads_bioconductor-dsimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dsimer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dsimer| image:: https://quay.io/repository/biocontainers/bioconductor-dsimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dsimer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dsimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dsimer/README.html

