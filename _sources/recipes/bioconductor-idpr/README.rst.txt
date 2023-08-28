:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idpr'
.. highlight: bash

bioconductor-idpr
=================

.. conda:recipe:: bioconductor-idpr
   :replaces_section_title:
   :noindex:

   Profiling and Analyzing Intrinsically Disordered Proteins in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/idpr.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-idpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr/meta.yaml>`_

   ‘idpr’ aims to integrate tools for the computational analysis of intrinsically disordered proteins \(IDPs\) within R. This package is used to identify known characteristics of IDPs for a sequence of interest with easily reported and dynamic results. Additionally\, this package includes tools for IDP\-based sequence analysis to be used in conjunction with other R packages. Described in McFadden WM \& Yanowitz JL \(2022\). \"idpr\: A package for profiling and analyzing Intrinsically Disordered Proteins in R.\" PloS one\, 17\(4\)\, e0266929. \<https\:\/\/doi.org\/10.1371\/journal.pone.0266929\>.


.. conda:package:: bioconductor-idpr

   |downloads_bioconductor-idpr| |docker_bioconductor-idpr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.007-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.8.5``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-jsonlite: ``>=1.6.1``
   :depends r-magrittr: ``>=1.5``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rlang: ``>=0.4.6``
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

      mamba install bioconductor-idpr

   and update with::

      mamba update bioconductor-idpr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-idpr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idpr:<tag>

   (see `bioconductor-idpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idpr
   :alt:   (downloads)
.. |docker_bioconductor-idpr| image:: https://quay.io/repository/biocontainers/bioconductor-idpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idpr
.. _`bioconductor-idpr/tags`: https://quay.io/repository/biocontainers/bioconductor-idpr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-idpr";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.007"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idpr/README.html