:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvpanelizer'
.. highlight: bash

bioconductor-cnvpanelizer
=========================

.. conda:recipe:: bioconductor-cnvpanelizer
   :replaces_section_title:
   :noindex:

   Reliable CNV detection in targeted sequencing applications

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNVPanelizer.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvpanelizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer/meta.yaml>`_
   :links: biotools: :biotools:`cnvpanelizer`, doi: :doi:`10.1038/nmeth.3252`

   A method that allows for the use of a collection of non\-matched normal tissue samples. Our approach uses a non\-parametric bootstrap subsampling of the available reference samples to estimate the distribution of read counts from targeted sequencing. As inspired by random forest\, this is combined with a procedure that subsamples the amplicons associated with each of the targeted genes. The obtained information allows us to reliably classify the copy number aberrations on the gene level.


.. conda:package:: bioconductor-cnvpanelizer

   |downloads_bioconductor-cnvpanelizer| |docker_bioconductor-cnvpanelizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-exomecopy: ``>=1.48.0,<1.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-noiseq: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-openxlsx: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-stringr: 
   :depends r-testthat: 
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

      mamba install bioconductor-cnvpanelizer

   and update with::

      mamba update bioconductor-cnvpanelizer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnvpanelizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvpanelizer:<tag>

   (see `bioconductor-cnvpanelizer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvpanelizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvpanelizer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvpanelizer
   :alt:   (downloads)
.. |docker_bioconductor-cnvpanelizer| image:: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer
.. _`bioconductor-cnvpanelizer/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvpanelizer";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html