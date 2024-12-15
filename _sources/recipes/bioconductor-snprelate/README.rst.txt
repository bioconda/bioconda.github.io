:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snprelate'
.. highlight: bash

bioconductor-snprelate
======================

.. conda:recipe:: bioconductor-snprelate
   :replaces_section_title:
   :noindex:

   Parallel Computing Toolset for Relatedness and Principal Component Analysis of SNP Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SNPRelate.html
   :license: GPL-3-only
   :recipe: /`bioconductor-snprelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate/meta.yaml>`_
   :links: biotools: :biotools:`snprelate`

   Genome\-wide association studies \(GWAS\) are widely used to investigate the genetic basis of diseases and traits\, but they pose many computational challenges. We developed an R package SNPRelate to provide a binary format for single\-nucleotide polymorphism \(SNP\) data in GWAS utilizing CoreArray Genomic Data Structure \(GDS\) data files. The GDS format offers the efficient operations specifically designed for integers with two bits\, since a SNP could occupy only two bits. SNPRelate is also designed to accelerate two key computations on SNP data using parallel computing for multi\-core symmetric multiprocessing computer architectures\: Principal Component Analysis \(PCA\) and relatedness analysis using Identity\-By\-Descent measures. The SNP GDS format is also used by the GWASTools package with the support of S4 classes and generic functions. The extended GDS format is implemented in the SeqArray package to support the storage of single nucleotide variations \(SNVs\)\, insertion\/deletion polymorphism \(indel\) and structural variation calls in whole\-genome and whole\-exome variant data.


.. conda:package:: bioconductor-snprelate

   |downloads_bioconductor-snprelate| |docker_bioconductor-snprelate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-snprelate

   and update with::

      mamba update bioconductor-snprelate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snprelate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snprelate:<tag>

   (see `bioconductor-snprelate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snprelate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snprelate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snprelate
   :alt:   (downloads)
.. |docker_bioconductor-snprelate| image:: https://quay.io/repository/biocontainers/bioconductor-snprelate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snprelate
.. _`bioconductor-snprelate/tags`: https://quay.io/repository/biocontainers/bioconductor-snprelate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snprelate";
        var versions = ["1.40.0","1.36.0","1.36.0","1.34.1","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snprelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snprelate/README.html