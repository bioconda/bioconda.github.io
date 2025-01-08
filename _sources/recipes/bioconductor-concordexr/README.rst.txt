:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-concordexr'
.. highlight: bash

bioconductor-concordexr
=======================

.. conda:recipe:: bioconductor-concordexr
   :replaces_section_title:
   :noindex:

   Identify Spatial Homogeneous Regions with concordex

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/concordexR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-concordexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr/meta.yaml>`_

   Spatial homogeneous regions \(SHRs\) in tissues are domains that are homogenous with respect to cell type composition. We present a method for identifying SHRs using spatial transcriptomics data\, and demonstrate that it is efficient and effective at finding SHRs for a wide variety of tissue types. concordex relies on analysis of k\-nearest\-neighbor \(kNN\) graphs. The tool is also useful for analysis of non\-spatial transcriptomics data\, and can elucidate the extent of concordance between partitions of cells derived from clustering algorithms\, and transcriptomic similarity as represented in kNN graphs.


.. conda:package:: bioconductor-concordexr

   |downloads_bioconductor-concordexr| |docker_bioconductor-concordexr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rlang: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-concordexr

   and update with::

      mamba update bioconductor-concordexr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-concordexr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-concordexr:<tag>

   (see `bioconductor-concordexr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-concordexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-concordexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-concordexr
   :alt:   (downloads)
.. |docker_bioconductor-concordexr| image:: https://quay.io/repository/biocontainers/bioconductor-concordexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-concordexr
.. _`bioconductor-concordexr/tags`: https://quay.io/repository/biocontainers/bioconductor-concordexr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-concordexr";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-concordexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-concordexr/README.html