:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromvar'
.. highlight: bash

bioconductor-chromvar
=====================

.. conda:recipe:: bioconductor-chromvar
   :replaces_section_title:
   :noindex:

   Chromatin Variation Across Regions.

   :homepage: https://bioconductor.org/packages/3.21/bioc/html/chromVAR.html
   :developer docs: https://bioconductor.org/packages/devel/bioc/html/chromVAR.html
   :license: MIT / MIT
   :recipe: /`bioconductor-chromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar/meta.yaml>`_
   :links: biotools: :biotools:`chromvar`, doi: :doi:`10.1038/nmeth.4401`

   Determine variation in chromatin accessibility across sets of annotations or peaks. Designed primarily for single\-cell or sparse chromatin accessibility data\, e.g. from scATAC\-seq or sparse bulk ATAC or DNAse\-seq experiments.


.. conda:package:: bioconductor-chromvar

   |downloads_bioconductor-chromvar| |docker_bioconductor-chromvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.1-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.30.1-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
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
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-tfbstools: ``>=1.44.0,<1.45.0``
   :depends bioconductor-tfbstools: ``>=1.44.0,<1.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-miniui: 
   :depends r-nabor: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-chromvar

   and update with::

      mamba update bioconductor-chromvar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromvar:<tag>

   (see `bioconductor-chromvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromvar
   :alt:   (downloads)
.. |docker_bioconductor-chromvar| image:: https://quay.io/repository/biocontainers/bioconductor-chromvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromvar
.. _`bioconductor-chromvar/tags`: https://quay.io/repository/biocontainers/bioconductor-chromvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromvar";
        var versions = ["1.30.1","1.28.0","1.28.0","1.24.0","1.22.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromvar/README.html