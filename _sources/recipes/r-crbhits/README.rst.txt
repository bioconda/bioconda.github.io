:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crbhits'
.. highlight: bash

r-crbhits
=========

.. conda:recipe:: r-crbhits
   :replaces_section_title:
   :noindex:

   CRBHits\: From Conditional Reciprocal Best Hits to Codon Alignments and Ka\/Ks in R.

   :homepage: https://github.com/kullrich/CRBHits
   :license: MIT / MIT
   :recipe: /`r-crbhits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crbhits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crbhits/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02424`

   CRBHits is a reimplementation of the Conditional Reciprocal Best Hit \(CRBH\) algorithm crb\-blast in R. It covers all necessary steps from CRBHit pair calculation to Codon Alignments and Ka\/Ks. \(see \[Ullrich \(2020\) \<https\:\/\/doi.org\/10.21105\/joss.02424\>\]\)


.. conda:package:: r-crbhits

   |downloads_r-crbhits| |docker_r-crbhits|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-msa2dist: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-seqinr: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install r-crbhits

   and update with::

      mamba update r-crbhits

  To create a new environment, run::

      mamba create --name myenvname r-crbhits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-crbhits:<tag>

   (see `r-crbhits/tags`_ for valid values for ``<tag>``)


.. |downloads_r-crbhits| image:: https://img.shields.io/conda/dn/bioconda/r-crbhits.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crbhits
   :alt:   (downloads)
.. |docker_r-crbhits| image:: https://quay.io/repository/biocontainers/r-crbhits/status
   :target: https://quay.io/repository/biocontainers/r-crbhits
.. _`r-crbhits/tags`: https://quay.io/repository/biocontainers/r-crbhits?tab=tags


.. raw:: html

    <script>
        var package = "r-crbhits";
        var versions = ["0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crbhits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crbhits/README.html