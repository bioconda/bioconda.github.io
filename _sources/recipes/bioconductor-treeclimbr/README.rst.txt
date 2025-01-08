:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treeclimbr'
.. highlight: bash

bioconductor-treeclimbr
=======================

.. conda:recipe:: bioconductor-treeclimbr
   :replaces_section_title:
   :noindex:

   An algorithm to find optimal signal levels in a tree

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/treeclimbR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treeclimbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeclimbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeclimbr/meta.yaml>`_

   The arrangement of hypotheses in a hierarchical structure appears in many research fields and often indicates different resolutions at which data can be viewed. This raises the question of which resolution level the signal should best be interpreted on. treeclimbR provides a flexible method to select optimal resolution levels \(potentially different levels in different parts of the tree\)\, rather than cutting the tree at an arbitrary level. treeclimbR uses a tuning parameter to generate candidate resolutions and from these selects the optimal one.


.. conda:package:: bioconductor-treeclimbr

   |downloads_bioconductor-treeclimbr| |docker_bioconductor-treeclimbr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-diffcyt: ``>=1.26.0,<1.27.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dirmult: 
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-viridis: 
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

      mamba install bioconductor-treeclimbr

   and update with::

      mamba update bioconductor-treeclimbr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-treeclimbr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treeclimbr:<tag>

   (see `bioconductor-treeclimbr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treeclimbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treeclimbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treeclimbr
   :alt:   (downloads)
.. |docker_bioconductor-treeclimbr| image:: https://quay.io/repository/biocontainers/bioconductor-treeclimbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treeclimbr
.. _`bioconductor-treeclimbr/tags`: https://quay.io/repository/biocontainers/bioconductor-treeclimbr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treeclimbr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treeclimbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treeclimbr/README.html