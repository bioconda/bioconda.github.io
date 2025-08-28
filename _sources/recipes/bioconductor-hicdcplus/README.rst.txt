:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdcplus'
.. highlight: bash

bioconductor-hicdcplus
======================

.. conda:recipe:: bioconductor-hicdcplus
   :replaces_section_title:
   :noindex:

   Hi\-C Direct Caller Plus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiCDCPlus.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdcplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus/meta.yaml>`_

   Systematic 3D interaction calls and differential analysis for Hi\-C and HiChIP. The HiC\-DC\+ \(Hi\-C\/HiChIP direct caller plus\) package enables principled statistical analysis of Hi\-C and HiChIP data sets – including calling significant interactions within a single experiment and performing differential analysis between conditions given replicate experiments – to facilitate global integrative studies. HiC\-DC\+ estimates significant interactions in a Hi\-C or HiChIP experiment directly from the raw contact matrix for each chromosome up to a specified genomic distance\, binned by uniform genomic intervals or restriction enzyme fragments\, by training a background model to account for random polymer ligation and systematic sources of read count variation.


.. conda:package:: bioconductor-hicdcplus

   |downloads_bioconductor-hicdcplus| |docker_bioconductor-hicdcplus|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicinteractions: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicinteractions: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bbmle: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-mass: 
   :depends r-pscl: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-hicdcplus

   and update with::

      mamba update bioconductor-hicdcplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicdcplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdcplus:<tag>

   (see `bioconductor-hicdcplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdcplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdcplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdcplus
   :alt:   (downloads)
.. |docker_bioconductor-hicdcplus| image:: https://quay.io/repository/biocontainers/bioconductor-hicdcplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdcplus
.. _`bioconductor-hicdcplus/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdcplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicdcplus";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html