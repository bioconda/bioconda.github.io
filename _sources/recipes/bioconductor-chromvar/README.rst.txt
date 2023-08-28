:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromvar'
.. highlight: bash

bioconductor-chromvar
=====================

.. conda:recipe:: bioconductor-chromvar
   :replaces_section_title:
   :noindex:

   Chromatin Variation Across Regions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/chromVAR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-chromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar/meta.yaml>`_
   :links: biotools: :biotools:`chromvar`

   Determine variation in chromatin accessibility across sets of annotations or peaks. Designed primarily for single\-cell or sparse chromatin accessibility data\, e.g. from scATAC\-seq or sparse bulk ATAC or DNAse\-seq experiments.


.. conda:package:: bioconductor-chromvar

   |downloads_bioconductor-chromvar| |docker_bioconductor-chromvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tfbstools: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
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
        var versions = ["1.22.1","1.20.0","1.20.0","1.16.0","1.16.0"];
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