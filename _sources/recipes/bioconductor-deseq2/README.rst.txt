:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deseq2'
.. highlight: bash

bioconductor-deseq2
===================

.. conda:recipe:: bioconductor-deseq2
   :replaces_section_title:
   :noindex:

   Differential gene expression analysis based on the negative binomial distribution

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DESeq2.html
   :license: LGPL-3.0-or-later
   :recipe: /`bioconductor-deseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2/meta.yaml>`_
   :links: biotools: :biotools:`deseq2`, doi: :doi:`10.1186/s13059-014-0550-8`, usegalaxy-eu: :usegalaxy-eu:`deseq2`

   Estimate variance\-mean dependence in count data from high\-throughput sequencing assays and test for differential expression based on a model using the negative binomial distribution.


.. conda:package:: bioconductor-deseq2

   |downloads_bioconductor-deseq2| |docker_bioconductor-deseq2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.2-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-3</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.2-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-3``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.1-1``,  ``1.18.0-0``,  ``1.16.1-3``,  ``1.16.1-2``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.12.4-5``,  ``1.12.4-4``,  ``1.12.4-3``,  ``1.12.4-2``,  ``1.12.4-1``,  ``1.10.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ashr: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-locfit: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-deseq2

   and update with::

      mamba update bioconductor-deseq2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deseq2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deseq2:<tag>

   (see `bioconductor-deseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deseq2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deseq2
   :alt:   (downloads)
.. |docker_bioconductor-deseq2| image:: https://quay.io/repository/biocontainers/bioconductor-deseq2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deseq2
.. _`bioconductor-deseq2/tags`: https://quay.io/repository/biocontainers/bioconductor-deseq2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deseq2";
        var versions = ["1.42.0","1.42.0","1.42.0","1.40.2","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deseq2/README.html