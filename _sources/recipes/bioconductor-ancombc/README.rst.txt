:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ancombc'
.. highlight: bash

bioconductor-ancombc
====================

.. conda:recipe:: bioconductor-ancombc
   :replaces_section_title:
   :noindex:

   Analysis of compositions of microbiomes with bias correction

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ANCOMBC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ancombc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc/meta.yaml>`_

   ANCOMBC is a package for normalizing the microbial absolute abundance data due to unequal sampling fractions across samples\, and identifying taxa \(e.g. phyla\, families\, genera\, species\, etc.\) that are differentially abundant with respect to the covariate of interest \(e.g. study groups\) between two or more groups of multiple samples.


.. conda:package:: bioconductor-ancombc

   |downloads_bioconductor-ancombc| |docker_bioconductor-ancombc|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.0-2``

      

   
   :depends bioconductor-microbiome: ``>=1.12.0,<1.13.0``
   :depends bioconductor-phyloseq: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mass: 
   :depends r-nloptr: 
   :depends r-rdpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ancombc

   and update with::

      conda update bioconductor-ancombc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ancombc:<tag>

   (see `bioconductor-ancombc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ancombc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ancombc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ancombc
   :alt:   (downloads)
.. |docker_bioconductor-ancombc| image:: https://quay.io/repository/biocontainers/bioconductor-ancombc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ancombc
.. _`bioconductor-ancombc/tags`: https://quay.io/repository/biocontainers/bioconductor-ancombc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ancombc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ancombc/README.html