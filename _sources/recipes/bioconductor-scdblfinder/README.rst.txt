:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdblfinder'
.. highlight: bash

bioconductor-scdblfinder
========================

.. conda:recipe:: bioconductor-scdblfinder
   :replaces_section_title:
   :noindex:

   scDblFinder

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scDblFinder.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scdblfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder/meta.yaml>`_

   The scDblFinder package gathers various methods for the detection and handling of doublets\/multiplets in single\-cell sequencing data \(i.e. multiple cells captured within the same droplet or reaction volume\). It includes methods formerly found in the scran package\, the new fast and comprehensive scDblFinder method\, and a reimplementation of the Amulet detection method for single\-cell ATAC\-seq.


.. conda:package:: bioconductor-scdblfinder

   |downloads_bioconductor-scdblfinder| |docker_bioconductor-scdblfinder|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-bluster: ``>=1.12.0,<1.13.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-xgboost: 
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

      mamba install bioconductor-scdblfinder

   and update with::

      mamba update bioconductor-scdblfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdblfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdblfinder:<tag>

   (see `bioconductor-scdblfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdblfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdblfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdblfinder
   :alt:   (downloads)
.. |docker_bioconductor-scdblfinder| image:: https://quay.io/repository/biocontainers/bioconductor-scdblfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdblfinder
.. _`bioconductor-scdblfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-scdblfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdblfinder";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html