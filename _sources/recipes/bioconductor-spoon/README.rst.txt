:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spoon'
.. highlight: bash

bioconductor-spoon
==================

.. conda:recipe:: bioconductor-spoon
   :replaces_section_title:
   :noindex:

   Address the Mean\-variance Relationship in Spatial Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spoon.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spoon/meta.yaml>`_

   This package addresses the mean\-variance relationship in spatially resolved transcriptomics data. Precision weights are generated for individual observations using Empirical Bayes techniques. These weights are used to rescale the data and covariates\, which are then used as input in spatially variable gene detection tools.


.. conda:package:: bioconductor-spoon

   |downloads_bioconductor-spoon| |docker_bioconductor-spoon|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-nnsvg: ``>=1.10.0,<1.11.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-brisc: 
   :depends r-matrix: 
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

      mamba install bioconductor-spoon

   and update with::

      mamba update bioconductor-spoon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spoon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spoon:<tag>

   (see `bioconductor-spoon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spoon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spoon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spoon
   :alt:   (downloads)
.. |docker_bioconductor-spoon| image:: https://quay.io/repository/biocontainers/bioconductor-spoon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spoon
.. _`bioconductor-spoon/tags`: https://quay.io/repository/biocontainers/bioconductor-spoon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spoon";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spoon/README.html