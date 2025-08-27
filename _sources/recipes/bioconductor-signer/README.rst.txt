:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signer'
.. highlight: bash

bioconductor-signer
===================

.. conda:recipe:: bioconductor-signer
   :replaces_section_title:
   :noindex:

   Empirical Bayesian approach to mutational signature discovery

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/signeR.html
   :license: GPL-3
   :recipe: /`bioconductor-signer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer/meta.yaml>`_
   :links: biotools: :biotools:`signer`

   The signeR package provides an empirical Bayesian approach to mutational signature discovery. It is designed to analyze single nucleotide variation \(SNV\) counts in cancer genomes\, but can also be applied to other features as well. Functionalities to characterize signatures or genome samples according to exposure patterns are also provided.


.. conda:package:: bioconductor-signer

   |downloads_bioconductor-signer| |docker_bioconductor-signer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ada: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bsplus: 
   :depends r-class: 
   :depends r-clue: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-e1071: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-glmnet: 
   :depends r-kknn: 
   :depends r-listenv: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-maxstat: 
   :depends r-nloptr: 
   :depends r-nmf: 
   :depends r-pheatmap: 
   :depends r-pmcmrplus: 
   :depends r-ppclust: 
   :depends r-proc: 
   :depends r-proxy: 
   :depends r-pvclust: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: ``>=0.7.100``
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinywidgets: 
   :depends r-survival: 
   :depends r-survivalanalysis: 
   :depends r-survminer: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vgam: 
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

      mamba install bioconductor-signer

   and update with::

      mamba update bioconductor-signer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-signer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signer:<tag>

   (see `bioconductor-signer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signer
   :alt:   (downloads)
.. |docker_bioconductor-signer| image:: https://quay.io/repository/biocontainers/bioconductor-signer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signer
.. _`bioconductor-signer/tags`: https://quay.io/repository/biocontainers/bioconductor-signer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signer";
        var versions = ["2.8.0","2.4.0","2.2.1","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signer/README.html