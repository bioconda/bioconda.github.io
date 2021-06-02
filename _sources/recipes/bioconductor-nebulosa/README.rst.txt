:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nebulosa'
.. highlight: bash

bioconductor-nebulosa
=====================

.. conda:recipe:: bioconductor-nebulosa
   :replaces_section_title:
   :noindex:

   Single\-Cell Data Visualisation Using Kernel Gene\-Weighted Density Estimation

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Nebulosa.html
   :license: GPL-3
   :recipe: /`bioconductor-nebulosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nebulosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nebulosa/meta.yaml>`_

   This package provides a enhanced visualization of single\-cell data based on gene\-weighted density estimation. Nebulosa recovers the signal from dropped\-out features and allows the inspection of the joint expression from multiple features \(e.g. genes\). Seurat and SingleCellExperiment objects can be used within Nebulosa.


.. conda:package:: bioconductor-nebulosa

   |downloads_bioconductor-nebulosa| |docker_bioconductor-nebulosa|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ks: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nebulosa

   and update with::

      conda update bioconductor-nebulosa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nebulosa:<tag>

   (see `bioconductor-nebulosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nebulosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nebulosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nebulosa
   :alt:   (downloads)
.. |docker_bioconductor-nebulosa| image:: https://quay.io/repository/biocontainers/bioconductor-nebulosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nebulosa
.. _`bioconductor-nebulosa/tags`: https://quay.io/repository/biocontainers/bioconductor-nebulosa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nebulosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nebulosa/README.html