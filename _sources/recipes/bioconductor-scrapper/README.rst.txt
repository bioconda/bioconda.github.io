:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrapper'
.. highlight: bash

bioconductor-scrapper
=====================

.. conda:recipe:: bioconductor-scrapper
   :replaces_section_title:
   :noindex:

   Bindings to C\+\+ Libraries for Single\-Cell Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scrapper.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrapper/meta.yaml>`_

   Implements R bindings to C\+\+ code for analyzing single\-cell \(expression\) data\, mostly from various libscran libraries. Each function performs an individual step in the single\-cell analysis workflow\, ranging from quality control to clustering and marker detection. It is mostly intended for other Bioconductor package developers to build more user\-friendly end\-to\-end workflows.


.. conda:package:: bioconductor-scrapper

   |downloads_bioconductor-scrapper| |docker_bioconductor-scrapper|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0``
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-rcpp: 
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

      mamba install bioconductor-scrapper

   and update with::

      mamba update bioconductor-scrapper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scrapper:<tag>

   (see `bioconductor-scrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scrapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrapper
   :alt:   (downloads)
.. |docker_bioconductor-scrapper| image:: https://quay.io/repository/biocontainers/bioconductor-scrapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrapper
.. _`bioconductor-scrapper/tags`: https://quay.io/repository/biocontainers/bioconductor-scrapper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scrapper";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrapper/README.html