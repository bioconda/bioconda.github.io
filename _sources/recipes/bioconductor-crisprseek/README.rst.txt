:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprseek'
.. highlight: bash

bioconductor-crisprseek
=======================

.. conda:recipe:: bioconductor-crisprseek
   :replaces_section_title:
   :noindex:

   Design of target\-specific guide RNAs in CRISPR\-Cas9\, genome\-editing systems

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CRISPRseek.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-crisprseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek/meta.yaml>`_
   :links: biotools: :biotools:`crisprseek`

   The package includes functions to find potential guide RNAs for the CRISPR editing system including Base Editors and the Prime Editor for input target sequences\, optionally filter guide RNAs without restriction enzyme cut site\, or without paired guide RNAs\, genome\-wide search for off\-targets\, score\, rank\, fetch flank sequence and indicate whether the target and off\-targets are located in exon region or not. Potential guide RNAs are annotated with total score of the top5 and topN off\-targets\, detailed topN mismatch sites\, restriction enzyme cut sites\, and paired guide RNAs. The package also output indels and their frequencies for Cas9 targeted sites.


.. conda:package:: bioconductor-crisprseek

   |downloads_bioconductor-crisprseek| |docker_bioconductor-crisprseek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-hash: 
   :depends r-keras: 
   :depends r-mltools: 
   :depends r-reticulate: 
   :depends r-seqinr: 
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

      mamba install bioconductor-crisprseek

   and update with::

      mamba update bioconductor-crisprseek

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprseek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprseek:<tag>

   (see `bioconductor-crisprseek/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprseek| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprseek.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprseek
   :alt:   (downloads)
.. |docker_bioconductor-crisprseek| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseek/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprseek
.. _`bioconductor-crisprseek/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprseek?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprseek";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html