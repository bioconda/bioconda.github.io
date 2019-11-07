:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singler'
.. highlight: bash

bioconductor-singler
====================

.. conda:recipe:: bioconductor-singler
   :replaces_section_title:

   Reference\-Based Single\-Cell RNA\-Seq Annotation

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SingleR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-singler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singler/meta.yaml>`_

   Performs unbiased cell type recognition from single\-cell RNA sequencing data\, by leveraging reference transcriptomic datasets of pure cell types to infer the cell of origin of each single cell independently.


.. conda:package:: bioconductor-singler

   |downloads_bioconductor-singler| |docker_bioconductor-singler|

   :versions: 1.0.0-0
   
   :depends bioconductor-beachmat: >=2.2.0,<2.3.0
   :depends bioconductor-biocneighbors: >=1.4.0,<1.5.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends bioconductor-delayedmatrixstats: >=1.8.0,<1.9.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singler

   and update with::

      conda update bioconductor-singler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singler:<tag>

   (see `bioconductor-singler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singler
   :alt:   (downloads)
.. |docker_bioconductor-singler| image:: https://quay.io/repository/biocontainers/bioconductor-singler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singler
.. _`bioconductor-singler/tags`: https://quay.io/repository/biocontainers/bioconductor-singler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singler/README.html