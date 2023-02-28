:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nnsvg'
.. highlight: bash

bioconductor-nnsvg
==================

.. conda:recipe:: bioconductor-nnsvg
   :replaces_section_title:
   :noindex:

   Scalable identification of spatially variable genes in spatially\-resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/nnSVG.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-nnsvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnsvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnsvg/meta.yaml>`_

   Method for scalable identification of spatially variable genes \(SVGs\) in spatially\-resolved transcriptomics data. The method is based on nearest\-neighbor Gaussian processes and uses the BRISC algorithm for model fitting and parameter estimation. Allows identification and ranking of SVGs with flexible length scales across a tissue slide or within spatial domains defined by covariates. Scales linearly with the number of spatial locations and can be applied to datasets containing thousands or more spatial locations.


.. conda:package:: bioconductor-nnsvg

   |downloads_bioconductor-nnsvg| |docker_bioconductor-nnsvg|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-brisc: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nnsvg

   and update with::

      conda update bioconductor-nnsvg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nnsvg:<tag>

   (see `bioconductor-nnsvg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nnsvg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nnsvg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nnsvg
   :alt:   (downloads)
.. |docker_bioconductor-nnsvg| image:: https://quay.io/repository/biocontainers/bioconductor-nnsvg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nnsvg
.. _`bioconductor-nnsvg/tags`: https://quay.io/repository/biocontainers/bioconductor-nnsvg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nnsvg";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nnsvg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nnsvg/README.html