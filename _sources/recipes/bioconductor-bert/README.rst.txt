:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bert'
.. highlight: bash

bioconductor-bert
=================

.. conda:recipe:: bioconductor-bert
   :replaces_section_title:
   :noindex:

   High Performance Data Integration for Large\-Scale Analyses of Incomplete Omic Profiles Using Batch\-Effect Reduction Trees \(BERT\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BERT.html
   :license: GPL-3
   :recipe: /`bioconductor-bert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bert/meta.yaml>`_

   Provides efficient batch\-effect adjustment of data with missing values. BERT orders all batch effect correction to a tree of pairwise computations. BERT allows parallelization over sub\-trees.


.. conda:package:: bioconductor-bert

   |downloads_bioconductor-bert| |docker_bioconductor-bert|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-bert

   and update with::

      mamba update bioconductor-bert

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bert:<tag>

   (see `bioconductor-bert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bert| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bert
   :alt:   (downloads)
.. |docker_bioconductor-bert| image:: https://quay.io/repository/biocontainers/bioconductor-bert/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bert
.. _`bioconductor-bert/tags`: https://quay.io/repository/biocontainers/bioconductor-bert?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bert";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bert/README.html