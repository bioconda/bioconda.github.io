:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagene'
.. highlight: bash

bioconductor-metagene
=====================

.. conda:recipe:: bioconductor-metagene
   :replaces_section_title:
   :noindex:

   A package to produce metagene plots

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/metagene.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-metagene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene/meta.yaml>`_

   This package produces metagene plots to compare the behavior of DNA\-interacting proteins at selected groups of genes\/features. Bam files are used to increase the resolution. Multiple combination of group of bam files and\/or group of genomic regions can be compared in a single analysis. Bootstraping analysis is used to compare the groups and locate regions with statistically different enrichment profiles.


.. conda:package:: bioconductor-metagene

   |downloads_bioconductor-metagene| |docker_bioconductor-metagene|

   :versions:
      
      

      ``2.31.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-r6: ``>=2.0``
   :depends r-stringr: 
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

      mamba install bioconductor-metagene

   and update with::

      mamba update bioconductor-metagene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metagene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagene:<tag>

   (see `bioconductor-metagene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagene
   :alt:   (downloads)
.. |docker_bioconductor-metagene| image:: https://quay.io/repository/biocontainers/bioconductor-metagene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagene
.. _`bioconductor-metagene/tags`: https://quay.io/repository/biocontainers/bioconductor-metagene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagene";
        var versions = ["2.31.0","2.30.0","2.26.0","2.24.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagene/README.html