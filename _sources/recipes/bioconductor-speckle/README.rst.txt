:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-speckle'
.. highlight: bash

bioconductor-speckle
====================

.. conda:recipe:: bioconductor-speckle
   :replaces_section_title:
   :noindex:

   Statistical methods for analysing single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/speckle.html
   :license: GPL-3
   :recipe: /`bioconductor-speckle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-speckle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-speckle/meta.yaml>`_

   The speckle package contains functions for the analysis of single cell RNA\-seq data. The speckle package currently contains functions to analyse differences in cell type proportions. There are also functions to estimate the parameters of the Beta distribution based on a given counts matrix\, and a function to normalise a counts matrix to the median library size. There are plotting functions to visualise cell type proportions and the mean\-variance relationship in cell type proportions and counts. As our research into specialised analyses of single cell data continues we anticipate that the package will be updated with new functions.


.. conda:package:: bioconductor-speckle

   |downloads_bioconductor-speckle| |docker_bioconductor-speckle|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-speckle

   and update with::

      conda update bioconductor-speckle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-speckle:<tag>

   (see `bioconductor-speckle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-speckle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-speckle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-speckle
   :alt:   (downloads)
.. |docker_bioconductor-speckle| image:: https://quay.io/repository/biocontainers/bioconductor-speckle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-speckle
.. _`bioconductor-speckle/tags`: https://quay.io/repository/biocontainers/bioconductor-speckle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-speckle";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-speckle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-speckle/README.html