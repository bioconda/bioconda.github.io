:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raids'
.. highlight: bash

bioconductor-raids
==================

.. conda:recipe:: bioconductor-raids
   :replaces_section_title:
   :noindex:

   Accurate Inference of Genetic Ancestry from Cancer Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RAIDS.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-raids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raids/meta.yaml>`_

   This package implements specialized algorithms that enable genetic ancestry inference from various cancer sequences sources \(RNA\, Exome and Whole\-Genome sequences\). This package also implements a simulation algorithm that generates synthetic cancer\-derived data. This code and analysis pipeline was designed and developed for the following publication\: Belleau\, P et al. Genetic Ancestry Inference from Cancer\-Derived Molecular Data across Genomic and Transcriptomic Platforms. Cancer Res 1 January 2023\; 83 \(1\)\: 49–58.


.. conda:package:: bioconductor-raids

   |downloads_bioconductor-raids| |docker_bioconductor-raids|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genesis: ``>=2.40.0,<2.41.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-snprelate: ``>=1.44.0,<1.45.0``
   :depends bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-class: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-proc: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-raids

   and update with::

      mamba update bioconductor-raids

  To create a new environment, run::

      mamba create --name myenvname bioconductor-raids

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-raids:<tag>

   (see `bioconductor-raids/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-raids| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raids.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raids
   :alt:   (downloads)
.. |docker_bioconductor-raids| image:: https://quay.io/repository/biocontainers/bioconductor-raids/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raids
.. _`bioconductor-raids/tags`: https://quay.io/repository/biocontainers/bioconductor-raids?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raids";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raids/README.html