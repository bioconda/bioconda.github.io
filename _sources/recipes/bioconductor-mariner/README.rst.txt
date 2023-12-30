:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mariner'
.. highlight: bash

bioconductor-mariner
====================

.. conda:recipe:: bioconductor-mariner
   :replaces_section_title:
   :noindex:

   Mariner\: Explore the Hi\-Cs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mariner.html
   :license: GPL-3
   :recipe: /`bioconductor-mariner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mariner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mariner/meta.yaml>`_

   Tools for manipulating paired ranges and working with Hi\-C data in R. Functionality includes manipulating\/merging paired regions\, generating paired ranges\, extracting\/aggregating interactions from \`.hic\` files\, and visualizing the results. Designed for compatibility with plotgardener for visualization.


.. conda:package:: bioconductor-mariner

   |downloads_bioconductor-mariner| |docker_bioconductor-mariner|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-plotgardener: ``>=1.8.0,<1.9.0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-abind: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-colourvalues: 
   :depends r-data.table: 
   :depends r-dbscan: 
   :depends r-glue: 
   :depends r-magrittr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-strawr: ``>=0.0.91``
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

      mamba install bioconductor-mariner

   and update with::

      mamba update bioconductor-mariner

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mariner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mariner:<tag>

   (see `bioconductor-mariner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mariner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mariner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mariner
   :alt:   (downloads)
.. |docker_bioconductor-mariner| image:: https://quay.io/repository/biocontainers/bioconductor-mariner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mariner
.. _`bioconductor-mariner/tags`: https://quay.io/repository/biocontainers/bioconductor-mariner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mariner";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mariner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mariner/README.html