:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbarcode'
.. highlight: bash

bioconductor-cellbarcode
========================

.. conda:recipe:: bioconductor-cellbarcode
   :replaces_section_title:
   :noindex:

   Cellular DNA Barcode Analysis toolkit

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CellBarcode.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellbarcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbarcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbarcode/meta.yaml>`_

   The package CellBarcode performs Cellular DNA Barcode analysis. It can handle all kinds of DNA barcodes\, as long as the barcode is within a single sequencing read and has a pattern that can be matched by a regular expression. \\code\{CellBarcode\} can handle barcodes with flexible lengths\, with or without UMI \(unique molecular identifier\). This tool also can be used for pre\-processing some amplicon data such as CRISPR gRNA screening\, immune repertoire sequencing\, and metagenome data.


.. conda:package:: bioconductor-cellbarcode

   |downloads_bioconductor-cellbarcode| |docker_bioconductor-cellbarcode|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-shortread: ``>=1.64.0,<1.65.0``
   :depends bioconductor-shortread: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-ckmeans.1d.dp: 
   :depends r-data.table: ``>=1.12.6``
   :depends r-egg: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-seqinr: 
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

      mamba install bioconductor-cellbarcode

   and update with::

      mamba update bioconductor-cellbarcode

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellbarcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbarcode:<tag>

   (see `bioconductor-cellbarcode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbarcode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbarcode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbarcode
   :alt:   (downloads)
.. |docker_bioconductor-cellbarcode| image:: https://quay.io/repository/biocontainers/bioconductor-cellbarcode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbarcode
.. _`bioconductor-cellbarcode/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbarcode?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbarcode";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbarcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbarcode/README.html