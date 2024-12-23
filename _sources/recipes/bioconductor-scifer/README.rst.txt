:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scifer'
.. highlight: bash

bioconductor-scifer
===================

.. conda:recipe:: bioconductor-scifer
   :replaces_section_title:
   :noindex:

   Scifer\: Single\-Cell Immunoglobulin Filtering of Sanger Sequences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scifer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer/meta.yaml>`_

   Have you ever index sorted cells in a 96 or 384\-well plate and then sequenced using Sanger sequencing\? If so\, you probably had some struggles to either check the electropherogram of each cell sequenced manually\, or when you tried to identify which cell was sorted where after sequencing the plate. Scifer was developed to solve this issue by performing basic quality control of Sanger sequences and merging flow cytometry data from probed single\-cell sorted B cells with sequencing data. scifer can export summary tables\, \'fasta\' files\, electropherograms for visual inspection\, and generate reports.


.. conda:package:: bioconductor-scifer

   |downloads_bioconductor-scifer| |docker_bioconductor-scifer|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-basilisk.utils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-decipher: ``>=3.2.0,<3.3.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-sangerseqr: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-here: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-plyr: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-scifer

   and update with::

      mamba update bioconductor-scifer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scifer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scifer:<tag>

   (see `bioconductor-scifer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scifer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scifer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scifer
   :alt:   (downloads)
.. |docker_bioconductor-scifer| image:: https://quay.io/repository/biocontainers/bioconductor-scifer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scifer
.. _`bioconductor-scifer/tags`: https://quay.io/repository/biocontainers/bioconductor-scifer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scifer";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scifer/README.html