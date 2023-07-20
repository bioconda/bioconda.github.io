:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbfa'
.. highlight: bash

bioconductor-scbfa
==================

.. conda:recipe:: bioconductor-scbfa
   :replaces_section_title:
   :noindex:

   A dimensionality reduction tool using gene detection pattern to mitigate noisy expression profile of scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scBFA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scbfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbfa/meta.yaml>`_

   This package is designed to model gene detection pattern of scRNA\-seq through a binary factor analysis model. This model allows user to pass into a cell level covariate matrix X and gene level covariate matrix Q to account for nuisance variance\(e.g batch effect\)\, and it will output a low dimensional embedding matrix for downstream analysis.


.. conda:package:: bioconductor-scbfa

   |downloads_bioconductor-scbfa| |docker_bioconductor-scbfa|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-zinbwave: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-copula: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scbfa

   and update with::

      conda update bioconductor-scbfa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scbfa:<tag>

   (see `bioconductor-scbfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scbfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scbfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scbfa
   :alt:   (downloads)
.. |docker_bioconductor-scbfa| image:: https://quay.io/repository/biocontainers/bioconductor-scbfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scbfa
.. _`bioconductor-scbfa/tags`: https://quay.io/repository/biocontainers/bioconductor-scbfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scbfa";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scbfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scbfa/README.html