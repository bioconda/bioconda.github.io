:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphabeta'
.. highlight: bash

bioconductor-alphabeta
======================

.. conda:recipe:: bioconductor-alphabeta
   :replaces_section_title:
   :noindex:

   Computational inference of epimutation rates and spectra from high\-throughput DNA methylation data in plants

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/AlphaBeta.html
   :license: GPL-3
   :recipe: /`bioconductor-alphabeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphabeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphabeta/meta.yaml>`_

   AlphaBeta is a computational method for estimating epimutation rates and spectra from high\-throughput DNA methylation data in plants. The method has been specifically designed to\: 1. analyze \'germline\' epimutations in the context of multi\-generational mutation accumulation lines \(MA\-lines\). 2. analyze \'somatic\' epimutations in the context of plant development and aging.


.. conda:package:: bioconductor-alphabeta

   |downloads_bioconductor-alphabeta| |docker_bioconductor-alphabeta|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.10``
   :depends r-dplyr: ``>=0.7``
   :depends r-expm: ``>=0.999-4``
   :depends r-ggplot2: ``>=3.2``
   :depends r-gtools: ``>=3.8.0``
   :depends r-igraph: ``>=1.2.4``
   :depends r-optimx: ``>=2018-7.10``
   :depends r-plotly: ``>=4.9``
   :depends r-stringr: ``>=1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alphabeta

   and update with::

      conda update bioconductor-alphabeta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alphabeta:<tag>

   (see `bioconductor-alphabeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alphabeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphabeta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphabeta
   :alt:   (downloads)
.. |docker_bioconductor-alphabeta| image:: https://quay.io/repository/biocontainers/bioconductor-alphabeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphabeta
.. _`bioconductor-alphabeta/tags`: https://quay.io/repository/biocontainers/bioconductor-alphabeta?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphabeta";
        var versions = ["1.6.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphabeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphabeta/README.html