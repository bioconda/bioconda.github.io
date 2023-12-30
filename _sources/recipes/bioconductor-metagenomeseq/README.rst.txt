:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagenomeseq'
.. highlight: bash

bioconductor-metagenomeseq
==========================

.. conda:recipe:: bioconductor-metagenomeseq
   :replaces_section_title:
   :noindex:

   Statistical analysis for sparse high\-throughput sequencing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/metagenomeSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagenomeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomeseq/meta.yaml>`_
   :links: biotools: :biotools:`metagenomeseq`, doi: :doi:`10.1038/nmeth.2658`

   metagenomeSeq is designed to determine features \(be it Operational Taxanomic Unit \(OTU\)\, species\, etc.\) that are differentially abundant between two or more groups of multiple samples. metagenomeSeq is designed to address the effects of both normalization and under\-sampling of microbial communities on disease association detection and the testing of feature correlations.


.. conda:package:: bioconductor-metagenomeseq

   |downloads_bioconductor-metagenomeseq| |docker_bioconductor-metagenomeseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.43.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.43.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.2-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-wrench: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-foreach: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-metagenomeseq

   and update with::

      mamba update bioconductor-metagenomeseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metagenomeseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagenomeseq:<tag>

   (see `bioconductor-metagenomeseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagenomeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagenomeseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagenomeseq
   :alt:   (downloads)
.. |docker_bioconductor-metagenomeseq| image:: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq
.. _`bioconductor-metagenomeseq/tags`: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagenomeseq";
        var versions = ["1.43.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagenomeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagenomeseq/README.html