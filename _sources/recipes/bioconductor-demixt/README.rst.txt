:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demixt'
.. highlight: bash

bioconductor-demixt
===================

.. conda:recipe:: bioconductor-demixt
   :replaces_section_title:
   :noindex:

   Cell type\-specific deconvolution of heterogeneous tumor samples with two or three components using expression data from RNAseq or microarray platforms

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DeMixT.html
   :license: GPL-3
   :recipe: /`bioconductor-demixt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demixt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demixt/meta.yaml>`_

   DeMixT is a software package that performs deconvolution on transcriptome data from a mixture of two or three components.


.. conda:package:: bioconductor-demixt

   |downloads_bioconductor-demixt| |docker_bioconductor-demixt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dss: ``>=2.48.0,<2.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-base64enc: 
   :depends r-dendextend: 
   :depends r-ggplot2: 
   :depends r-kernsmooth: 
   :depends r-knitr: 
   :depends r-matrixcalc: 
   :depends r-matrixstats: 
   :depends r-psych: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rmarkdown: 
   :depends r-truncdist: 
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

      mamba install bioconductor-demixt

   and update with::

      mamba update bioconductor-demixt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-demixt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-demixt:<tag>

   (see `bioconductor-demixt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-demixt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demixt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demixt
   :alt:   (downloads)
.. |docker_bioconductor-demixt| image:: https://quay.io/repository/biocontainers/bioconductor-demixt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demixt
.. _`bioconductor-demixt/tags`: https://quay.io/repository/biocontainers/bioconductor-demixt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demixt";
        var versions = ["1.16.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demixt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demixt/README.html