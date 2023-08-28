:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbench'
.. highlight: bash

bioconductor-cellbench
======================

.. conda:recipe:: bioconductor-cellbench
   :replaces_section_title:
   :noindex:

   Construct Benchmarks for Single Cell Analysis Methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CellBench.html
   :license: GPL-3
   :recipe: /`bioconductor-cellbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench/meta.yaml>`_

   This package contains infrastructure for benchmarking analysis methods and access to single cell mixture benchmarking data. It provides a framework for organising analysis methods and testing combinations of methods in a pipeline without explicitly laying out each combination. It also provides utilities for sampling and filtering SingleCellExperiment objects\, constructing lists of functions with varying parameters\, and multithreaded evaluation of analysis methods.


.. conda:package:: bioconductor-cellbench

   |downloads_bioconductor-cellbench| |docker_bioconductor-cellbench|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-glue: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-memoise: 
   :depends r-purrr: ``>=0.3.0``
   :depends r-rappdirs: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cellbench

   and update with::

      mamba update bioconductor-cellbench

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellbench

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbench:<tag>

   (see `bioconductor-cellbench/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbench.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbench
   :alt:   (downloads)
.. |docker_bioconductor-cellbench| image:: https://quay.io/repository/biocontainers/bioconductor-cellbench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbench
.. _`bioconductor-cellbench/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbench?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbench";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbench/README.html