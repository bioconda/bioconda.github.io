:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guideseq'
.. highlight: bash

bioconductor-guideseq
=====================

.. conda:recipe:: bioconductor-guideseq
   :replaces_section_title:
   :noindex:

   GUIDE\-seq and PEtag\-seq analysis pipeline

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GUIDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-guideseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq/meta.yaml>`_
   :links: biotools: :biotools:`guideseq`, doi: :doi:`10.1186/s12864-017-3746-y`

   The package implements GUIDE\-seq and PEtag\-seq analysis workflow including functions for filtering UMI and reads with low coverage\, obtaining unique insertion sites \(proxy of cleavage sites\)\, estimating the locations of the insertion sites\, aka\, peaks\, merging estimated insertion sites from plus and minus strand\, and performing off target search of the extended regions around insertion sites with mismatches and indels.


.. conda:package:: bioconductor-guideseq

   |downloads_bioconductor-guideseq| |docker_bioconductor-guideseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-chippeakanno: ``>=3.40.0,<3.41.0``
   :depends bioconductor-crisprseek: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-rio: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-guideseq

   and update with::

      mamba update bioconductor-guideseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-guideseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guideseq:<tag>

   (see `bioconductor-guideseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guideseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guideseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-guideseq
   :alt:   (downloads)
.. |docker_bioconductor-guideseq| image:: https://quay.io/repository/biocontainers/bioconductor-guideseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guideseq
.. _`bioconductor-guideseq/tags`: https://quay.io/repository/biocontainers/bioconductor-guideseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-guideseq";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guideseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guideseq/README.html