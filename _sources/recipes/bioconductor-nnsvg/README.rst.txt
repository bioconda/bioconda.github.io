:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nnsvg'
.. highlight: bash

bioconductor-nnsvg
==================

.. conda:recipe:: bioconductor-nnsvg
   :replaces_section_title:
   :noindex:

   Scalable identification of spatially variable genes in spatially\-resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/nnSVG.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-nnsvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnsvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnsvg/meta.yaml>`_

   Method for scalable identification of spatially variable genes \(SVGs\) in spatially\-resolved transcriptomics data. The method is based on nearest\-neighbor Gaussian processes and uses the BRISC algorithm for model fitting and parameter estimation. Allows identification and ranking of SVGs with flexible length scales across a tissue slide or within spatial domains defined by covariates. Scales linearly with the number of spatial locations and can be applied to datasets containing thousands or more spatial locations.


.. conda:package:: bioconductor-nnsvg

   |downloads_bioconductor-nnsvg| |docker_bioconductor-nnsvg|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-brisc: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-nnsvg

   and update with::

      mamba update bioconductor-nnsvg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nnsvg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.4.1","1.2.0"];
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