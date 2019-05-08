:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgsea'
.. highlight: bash

bioconductor-fgsea
==================

.. conda:recipe:: bioconductor-fgsea
   :replaces_section_title:

   The package implements an algorithm for fast gene set enrichment analysis. Using the fast algorithm allows to make more permutations and get more fine grained p\-values\, which allows to use accurate stantard approaches to multiple hypothesis correction.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/fgsea.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-fgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea/meta.yaml>`_
   :links: biotools: :biotools:`fgsea`, doi: :doi:`10.1101/060012`

   


.. conda:package:: bioconductor-fgsea

   |downloads_bioconductor-fgsea| |docker_bioconductor-fgsea|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.1-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: 
   :depends r-data.table: 
   :depends r-fastmatch: 
   :depends r-ggplot2: >=2.2.0
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fgsea

   and update with::

      conda update bioconductor-fgsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgsea:<tag>

   (see `bioconductor-fgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fgsea| image:: https://quay.io/repository/biocontainers/bioconductor-fgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgsea
.. _`bioconductor-fgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-fgsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgsea/README.html