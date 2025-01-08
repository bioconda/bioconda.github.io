:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr'
.. highlight: bash

bioconductor-rnamodr
====================

.. conda:recipe:: bioconductor-rnamodr
   :replaces_section_title:
   :noindex:

   Detection of post\-transcriptional modifications in high throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAmodR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr/meta.yaml>`_

   RNAmodR provides classes and workflows for loading\/aggregation data from high througput sequencing aimed at detecting post\-transcriptional modifications through analysis of specific patterns. In addition\, utilities are provided to validate and visualize the results. The RNAmodR package provides a core functionality from which specific analysis strategies can be easily implemented as a seperate package.


.. conda:package:: bioconductor-rnamodr

   |downloads_bioconductor-rnamodr| |docker_bioconductor-rnamodr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-modstrings: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorramps: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rocr: 
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

      mamba install bioconductor-rnamodr

   and update with::

      mamba update bioconductor-rnamodr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnamodr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr:<tag>

   (see `bioconductor-rnamodr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr
.. _`bioconductor-rnamodr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html