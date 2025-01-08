:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spanorm'
.. highlight: bash

bioconductor-spanorm
====================

.. conda:recipe:: bioconductor-spanorm
   :replaces_section_title:
   :noindex:

   Spatially\-aware normalisation for spatial transcriptomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpaNorm.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-spanorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spanorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spanorm/meta.yaml>`_

   This package implements the spatially aware library size normalisation algorithm\, SpaNorm. SpaNorm normalises out library size effects while retaining biology through the modelling of smooth functions for each effect. Normalisation is performed in a gene\- and cell\-\/spot\- specific manner\, yielding library size adjusted data.


.. conda:package:: bioconductor-spanorm

   |downloads_bioconductor-spanorm| |docker_bioconductor-spanorm|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rlang: 
   :depends r-seuratobject: 
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

      mamba install bioconductor-spanorm

   and update with::

      mamba update bioconductor-spanorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spanorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spanorm:<tag>

   (see `bioconductor-spanorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spanorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spanorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spanorm
   :alt:   (downloads)
.. |docker_bioconductor-spanorm| image:: https://quay.io/repository/biocontainers/bioconductor-spanorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spanorm
.. _`bioconductor-spanorm/tags`: https://quay.io/repository/biocontainers/bioconductor-spanorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spanorm";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spanorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spanorm/README.html