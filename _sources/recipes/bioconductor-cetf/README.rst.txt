:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cetf'
.. highlight: bash

bioconductor-cetf
=================

.. conda:recipe:: bioconductor-cetf
   :replaces_section_title:
   :noindex:

   Coexpression for Transcription Factors using Regulatory Impact Factors and Partial Correlation and Information Theory analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CeTF.html
   :license: GPL-3
   :recipe: /`bioconductor-cetf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf/meta.yaml>`_

   This package provides the necessary functions for performing the Partial Correlation coefficient with Information Theory \(PCIT\) \(Reverter and Chan 2008\) and Regulatory Impact Factors \(RIF\) \(Reverter et al. 2010\) algorithm. The PCIT algorithm identifies meaningful correlations to define edges in a weighted network and can be applied to any correlation\-based network including but not limited to gene co\-expression networks\, while the RIF algorithm identify critical Transcription Factors \(TF\) from gene expression data. These two algorithms when combined provide a very relevant layer of information for gene expression studies \(Microarray\, RNA\-seq and single\-cell RNA\-seq data\).


.. conda:package:: bioconductor-cetf

   |downloads_bioconductor-cetf| |docker_bioconductor-cetf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.4-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0a0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rcy3: ``>=2.22.1,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-genomictools.filehandler: 
   :depends r-ggally: 
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-network: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-cetf

   and update with::

      mamba update bioconductor-cetf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cetf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cetf:<tag>

   (see `bioconductor-cetf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cetf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cetf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cetf
   :alt:   (downloads)
.. |docker_bioconductor-cetf| image:: https://quay.io/repository/biocontainers/bioconductor-cetf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cetf
.. _`bioconductor-cetf/tags`: https://quay.io/repository/biocontainers/bioconductor-cetf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cetf";
        var versions = ["1.14.0","1.12.0","1.9.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cetf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cetf/README.html