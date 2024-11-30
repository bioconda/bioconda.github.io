:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qtlexperiment'
.. highlight: bash

bioconductor-qtlexperiment
==========================

.. conda:recipe:: bioconductor-qtlexperiment
   :replaces_section_title:
   :noindex:

   S4 classes for QTL summary statistics and metadata

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/QTLExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-qtlexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlexperiment/meta.yaml>`_

   QLTExperiment defines an S4 class for storing and manipulating summary statistics from QTL mapping experiments in one or more states. It is based on the \'SummarizedExperiment\' class and contains functions for creating\, merging\, and subsetting objects. \'QTLExperiment\' also stores experiment metadata and has checks in place to ensure that transformations apply correctly.


.. conda:package:: bioconductor-qtlexperiment

   |downloads_bioconductor-qtlexperiment| |docker_bioconductor-qtlexperiment|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-ashr: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-collapse: 
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vroom: 
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

      mamba install bioconductor-qtlexperiment

   and update with::

      mamba update bioconductor-qtlexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qtlexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qtlexperiment:<tag>

   (see `bioconductor-qtlexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qtlexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qtlexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qtlexperiment
   :alt:   (downloads)
.. |docker_bioconductor-qtlexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment
.. _`bioconductor-qtlexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qtlexperiment";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qtlexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qtlexperiment/README.html