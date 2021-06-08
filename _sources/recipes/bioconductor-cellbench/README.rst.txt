:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbench'
.. highlight: bash

bioconductor-cellbench
======================

.. conda:recipe:: bioconductor-cellbench
   :replaces_section_title:
   :noindex:

   Construct Benchmarks for Single Cell Analysis Methods

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CellBench.html
   :license: GPL-3
   :recipe: /`bioconductor-cellbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench/meta.yaml>`_

   This package contains infrastructure for benchmarking analysis methods and access to single cell mixture benchmarking data. It provides a framework for organising analysis methods and testing combinations of methods in a pipeline without explicitly laying out each combination. It also provides utilities for sampling and filtering SingleCellExperiment objects\, constructing lists of functions with varying parameters\, and multithreaded evaluation of analysis methods.


.. conda:package:: bioconductor-cellbench

   |downloads_bioconductor-cellbench| |docker_bioconductor-cellbench|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellbench

   and update with::

      conda update bioconductor-cellbench

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbench:<tag>

   (see `bioconductor-cellbench/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbench.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbench
   :alt:   (downloads)
.. |docker_bioconductor-cellbench| image:: https://quay.io/repository/biocontainers/bioconductor-cellbench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbench
.. _`bioconductor-cellbench/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbench?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbench/README.html