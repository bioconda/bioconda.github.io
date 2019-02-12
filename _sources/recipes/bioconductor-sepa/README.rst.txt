:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sepa'
.. highlight: bash

bioconductor-sepa
=================

.. conda:recipe:: bioconductor-sepa
   :replaces_section_title:

   Given single\-cell RNA\-seq data and true experiment time of cells or pseudo\-time cell ordering\, SEPA provides convenient functions for users to assign genes into different gene expression patterns such as constant\, monotone increasing and increasing then decreasing. SEPA then performs GO enrichment analysis to analysis the functional roles of genes with same or similar patterns.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SEPA.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-sepa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepa/meta.yaml>`_
   :links: biotools: :biotools:`sepa`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-sepa

   |downloads_bioconductor-sepa| |docker_bioconductor-sepa|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-reshape2: 
   
   :depends r-segmented: 
   
   :depends r-shiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sepa

   and update with::

      conda update bioconductor-sepa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sepa:<tag>

   (see `bioconductor-sepa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sepa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sepa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sepa| image:: https://quay.io/repository/biocontainers/bioconductor-sepa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sepa
.. _`bioconductor-sepa/tags`: https://quay.io/repository/biocontainers/bioconductor-sepa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sepa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sepa/README.html