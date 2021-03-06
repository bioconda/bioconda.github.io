:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mumosa'
.. highlight: bash

bioconductor-mumosa
===================

.. conda:recipe:: bioconductor-mumosa
   :replaces_section_title:
   :noindex:

   Multi\-Modal Single\-Cell Analysis Methods

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mumosa.html
   :license: GPL-3
   :recipe: /`bioconductor-mumosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mumosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mumosa/meta.yaml>`_

   Assorted utilities for multi\-modal analyses of single\-cell datasets. Includes functions to combine multiple modalities for downstream analysis\, perform MNN\-based batch correction across multiple modalities\, and to compute correlations between assay values for different modalities.


.. conda:package:: bioconductor-mumosa

   |downloads_bioconductor-mumosa| |docker_bioconductor-mumosa|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-batchelor: ``>=1.8.0,<1.9.0``
   :depends bioconductor-beachmat: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocneighbors: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.8.0,<1.9.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-metapod: ``>=1.0.0,<1.1.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scaledmatrix: ``>=1.0.0,<1.1.0``
   :depends bioconductor-scran: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scuttle: ``>=1.2.0,<1.3.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-uwot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mumosa

   and update with::

      conda update bioconductor-mumosa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mumosa:<tag>

   (see `bioconductor-mumosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mumosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mumosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mumosa
   :alt:   (downloads)
.. |docker_bioconductor-mumosa| image:: https://quay.io/repository/biocontainers/bioconductor-mumosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mumosa
.. _`bioconductor-mumosa/tags`: https://quay.io/repository/biocontainers/bioconductor-mumosa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mumosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mumosa/README.html