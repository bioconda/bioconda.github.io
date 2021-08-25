:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-corral'
.. highlight: bash

bioconductor-corral
===================

.. conda:recipe:: bioconductor-corral
   :replaces_section_title:
   :noindex:

   Correspondence Analysis for Single Cell Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/corral.html
   :license: GPL-2
   :recipe: /`bioconductor-corral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-corral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-corral/meta.yaml>`_

   Correspondence analysis \(CA\) is a matrix factorization method\, and is similar to principal components analysis \(PCA\). Whereas PCA is designed for application to continuous\, approximately normally distributed data\, CA is appropriate for non\-negative\, count\-based data that are in the same additive scale. The corral package implements CA for dimensionality reduction of a single matrix of single\-cell data\, as well as a multi\-table adaptation of CA that leverages data\-optimized scaling to align data generated from different sequencing platforms by projecting into a shared latent space. corral utilizes sparse matrices and a fast implementation of SVD\, and can be called directly on Bioconductor objects \(e.g.\, SingleCellExperiment\) for easy pipeline integration. The package also includes the option to apply CA\-style processing to continuous data \(e.g.\, proteomic TOF intensities\) with the Hellinger distance adaptation of CA.


.. conda:package:: bioconductor-corral

   |downloads_bioconductor-corral| |docker_bioconductor-corral|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-gridextra: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-pals: 
   :depends r-transport: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-corral

   and update with::

      conda update bioconductor-corral

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-corral:<tag>

   (see `bioconductor-corral/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-corral| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-corral.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-corral
   :alt:   (downloads)
.. |docker_bioconductor-corral| image:: https://quay.io/repository/biocontainers/bioconductor-corral/status
   :target: https://quay.io/repository/biocontainers/bioconductor-corral
.. _`bioconductor-corral/tags`: https://quay.io/repository/biocontainers/bioconductor-corral?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-corral";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-corral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-corral/README.html