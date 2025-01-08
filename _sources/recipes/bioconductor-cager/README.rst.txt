:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cager'
.. highlight: bash

bioconductor-cager
==================

.. conda:recipe:: bioconductor-cager
   :replaces_section_title:
   :noindex:

   Analysis of CAGE \(Cap Analysis of Gene Expression\) sequencing data for precise mapping of transcription start sites and promoterome mining

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CAGEr.html
   :license: GPL-3
   :recipe: /`bioconductor-cager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cager/meta.yaml>`_
   :links: biotools: :biotools:`cager`

   The \_CAGEr\_ package identifies transcription start sites \(TSS\) and their usage frequency from CAGE \(Cap Analysis Gene Expression\) sequencing data. It normalises raw CAGE tag count\, clusters TSSs into tag clusters \(TC\) and aggregates them across multiple CAGE experiments to construct consensus clusters \(CC\) representing the promoterome.  CAGEr provides functions to profile expression levels of these clusters by cumulative expression and rarefaction analysis\, and outputs the plots in ggplot2 format for further facetting and customisation.  After clustering\, CAGEr performs analyses of promoter width and detects differential usage of TSSs \(promoter shifting\) between samples.  CAGEr also exports its data as genome browser tracks\, and as R objects for downsteam expression analysis by other Bioconductor packages such as DESeq2\, CAGEfightR\, or seqArchR.


.. conda:package:: bioconductor-cager

   |downloads_bioconductor-cager| |docker_bioconductor-cager|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.0.1-0</code>,  <code>1.34.0-0</code>,  <code>1.32.1-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.1-0``,  ``1.34.0-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.3-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-cagefightr: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-formula.tools: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-memoise: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-som: 
   :depends r-stringdist: 
   :depends r-stringi: 
   :depends r-vegan: 
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

      mamba install bioconductor-cager

   and update with::

      mamba update bioconductor-cager

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cager:<tag>

   (see `bioconductor-cager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cager
   :alt:   (downloads)
.. |docker_bioconductor-cager| image:: https://quay.io/repository/biocontainers/bioconductor-cager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cager
.. _`bioconductor-cager/tags`: https://quay.io/repository/biocontainers/bioconductor-cager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cager";
        var versions = ["2.12.0","2.8.0","2.6.0","2.4.0","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cager/README.html