:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfdnapro'
.. highlight: bash

bioconductor-cfdnapro
=====================

.. conda:recipe:: bioconductor-cfdnapro
   :replaces_section_title:
   :noindex:

   cfDNAPro extracts and Visualises biological features from whole genome sequencing data of cell\-free DNA

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cfDNAPro.html
   :license: GPL-3
   :recipe: /`bioconductor-cfdnapro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro/meta.yaml>`_

   cfDNA fragments carry important features for building cancer sample classification ML models\, such as fragment size\, and fragment end motif etc. Analyzing and visualizing fragment size metrics\, as well as other biological features in a curated\, standardized\, scalable\, well\-documented\, and reproducible way might be time intensive. This package intends to resolve these problems and simplify the process. It offers two sets of functions for cfDNA feature characterization and visualization.


.. conda:package:: bioconductor-cfdnapro

   |downloads_bioconductor-cfdnapro| |docker_bioconductor-cfdnapro|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-bsgenome.hsapiens.ncbi.grch38: ``>=1.3.0,<1.4.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-magrittr: ``>=1.5.0``
   :depends r-quantmod: ``>=0.4``
   :depends r-rlang: ``>=0.4.0``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: 
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

      mamba install bioconductor-cfdnapro

   and update with::

      mamba update bioconductor-cfdnapro

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cfdnapro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cfdnapro:<tag>

   (see `bioconductor-cfdnapro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cfdnapro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfdnapro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfdnapro
   :alt:   (downloads)
.. |docker_bioconductor-cfdnapro| image:: https://quay.io/repository/biocontainers/bioconductor-cfdnapro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfdnapro
.. _`bioconductor-cfdnapro/tags`: https://quay.io/repository/biocontainers/bioconductor-cfdnapro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfdnapro";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html