:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-katdetectr'
.. highlight: bash

bioconductor-katdetectr
=======================

.. conda:recipe:: bioconductor-katdetectr
   :replaces_section_title:
   :noindex:

   Detection\, Characterization and Visualization of Kataegis in Sequencing Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/katdetectr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-katdetectr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr/meta.yaml>`_

   Kataegis refers to the occurrence of regional hypermutation and is a phenomenon observed in a wide range of malignancies. Using changepoint detection katdetectr aims to identify putative kataegis foci from common data\-formats housing genomic variants. Katdetectr has shown to be a robust package for the detection\, characterization and visualization of kataegis.


.. conda:package:: bioconductor-katdetectr

   |downloads_bioconductor-katdetectr| |docker_bioconductor-katdetectr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-maftools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-changepoint: ``>=2.2.3``
   :depends r-changepoint.np: ``>=1.0.3``
   :depends r-checkmate: ``>=2.0.0``
   :depends r-dplyr: ``>=1.0.8``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggtext: ``>=0.1.1``
   :depends r-rdpack: ``>=2.3.1``
   :depends r-rlang: ``>=1.0.2``
   :depends r-tibble: ``>=3.1.6``
   :depends r-tidyr: ``>=1.2.0``
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

      mamba install bioconductor-katdetectr

   and update with::

      mamba update bioconductor-katdetectr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-katdetectr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-katdetectr:<tag>

   (see `bioconductor-katdetectr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-katdetectr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-katdetectr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-katdetectr
   :alt:   (downloads)
.. |docker_bioconductor-katdetectr| image:: https://quay.io/repository/biocontainers/bioconductor-katdetectr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-katdetectr
.. _`bioconductor-katdetectr/tags`: https://quay.io/repository/biocontainers/bioconductor-katdetectr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-katdetectr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html