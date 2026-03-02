:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isoformswitchanalyzer'
.. highlight: bash

bioconductor-isoformswitchanalyzer
==================================

.. conda:recipe:: bioconductor-isoformswitchanalyzer
   :replaces_section_title:
   :noindex:

   Identify\, Annotate and Visualize Isoform Switches with Functional Consequences from both short\- and long\-read RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IsoformSwitchAnalyzeR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-isoformswitchanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer/meta.yaml>`_
   :links: biotools: :biotools:`IsoformSwitchAnalyzeR`, doi: :doi:`10.1158/1541-7786.MCR-16-0459`

   Analysis of alternative splicing and isoform switches with predicted functional consequences \(e.g. gain\/loss of protein domains etc.\) from quantification of all types of RNASeq by tools such as Kallisto\, Salmon\, StringTie\, Cufflinks\/Cuffdiff etc.


.. conda:package:: bioconductor-isoformswitchanalyzer

   |downloads_bioconductor-isoformswitchanalyzer| |docker_bioconductor-isoformswitchanalyzer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-dexseq: ``>=1.56.0,<1.57.0``
   :depends bioconductor-dexseq: ``>=1.56.0,<1.57.0a0``
   :depends bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends bioconductor-pfamanalyzer: ``>=1.10.0,<1.11.0``
   :depends bioconductor-pfamanalyzer: ``>=1.10.0,<1.11.0a0``
   :depends bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends bioconductor-pwalign: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-saturn: ``>=1.18.0,<1.19.0``
   :depends bioconductor-saturn: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends bioconductor-sva: ``>=3.58.0,<3.59.0a0``
   :depends bioconductor-tximeta: ``>=1.28.0,<1.29.0``
   :depends bioconductor-tximeta: ``>=1.28.2,<1.29.0a0``
   :depends bioconductor-tximport: ``>=1.38.0,<1.39.0``
   :depends bioconductor-tximport: ``>=1.38.2,<1.39.0a0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-isoformswitchanalyzer

   and update with::

      mamba update bioconductor-isoformswitchanalyzer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isoformswitchanalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isoformswitchanalyzer:<tag>

   (see `bioconductor-isoformswitchanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isoformswitchanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isoformswitchanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isoformswitchanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-isoformswitchanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer
.. _`bioconductor-isoformswitchanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isoformswitchanalyzer";
        var versions = ["2.10.0","2.6.0","2.2.0","2.0.1","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html