:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinteractions'
.. highlight: bash

bioconductor-genomicinteractions
================================

.. conda:recipe:: bioconductor-genomicinteractions
   :replaces_section_title:

   R package for handling Genomic interaction data\, such as ChIA\-PET\/Hi\-C\, annotating genomic features with interaction information and producing various plots \/ statistics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomicInteractions.html
   :license: GPL-3
   :recipe: /`bioconductor-genomicinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractions/meta.yaml>`_
   :links: biotools: :biotools:`genomicinteractions`, doi: :doi:`10.1186/s12864-015-2140-x`

   


.. conda:package:: bioconductor-genomicinteractions

   |downloads_bioconductor-genomicinteractions| |docker_bioconductor-genomicinteractions|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   
   :depends bioconductor-interactionset: >=1.10.0,<1.11.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-dplyr: 
   
   :depends r-ggplot2: 
   
   :depends r-gridextra: 
   
   :depends r-igraph: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicinteractions

   and update with::

      conda update bioconductor-genomicinteractions

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomicinteractions:<tag>

   (see `bioconductor-genomicinteractions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinteractions.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomicinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinteractions
.. _`bioconductor-genomicinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinteractions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinteractions/README.html