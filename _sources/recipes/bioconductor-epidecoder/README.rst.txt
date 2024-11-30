:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epidecoder'
.. highlight: bash

bioconductor-epidecoder
=======================

.. conda:recipe:: bioconductor-epidecoder
   :replaces_section_title:
   :noindex:

   epidecodeR\: a functional exploration tool for epigenetic and epitranscriptomic regulation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/epidecodeR.html
   :license: GPL-3
   :recipe: /`bioconductor-epidecoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epidecoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epidecoder/meta.yaml>`_

   epidecodeR is a package capable of analysing impact of degree of DNA\/RNA epigenetic chemical modifications on dysregulation of genes or proteins. This package integrates chemical modification data generated from a host of epigenomic or epitranscriptomic techniques such as ChIP\-seq\, ATAC\-seq\, m6A\-seq\, etc. and dysregulated gene lists in the form of differential gene expression\, ribosome occupancy or differential protein translation and identify impact of dysregulation of genes caused due to varying degrees of chemical modifications associated with the genes. epidecodeR generates cumulative distribution function \(CDF\) plots showing shifts in trend of overall log2FC between genes divided into groups based on the degree of modification associated with the genes. The tool also tests for significance of difference in log2FC between groups of genes.


.. conda:package:: bioconductor-epidecoder

   |downloads_bioconductor-epidecoder| |docker_bioconductor-epidecoder|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-envstats: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-rstatix: 
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

      mamba install bioconductor-epidecoder

   and update with::

      mamba update bioconductor-epidecoder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epidecoder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epidecoder:<tag>

   (see `bioconductor-epidecoder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epidecoder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epidecoder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epidecoder
   :alt:   (downloads)
.. |docker_bioconductor-epidecoder| image:: https://quay.io/repository/biocontainers/bioconductor-epidecoder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epidecoder
.. _`bioconductor-epidecoder/tags`: https://quay.io/repository/biocontainers/bioconductor-epidecoder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epidecoder";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epidecoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epidecoder/README.html