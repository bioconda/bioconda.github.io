:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqsqc'
.. highlight: bash

bioconductor-seqsqc
===================

.. conda:recipe:: bioconductor-seqsqc
   :replaces_section_title:
   :noindex:

   A bioconductor package for sample quality check with next generation sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SeqSQC.html
   :license: GPL-3
   :recipe: /`bioconductor-seqsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc/meta.yaml>`_

   The SeqSQC is designed to identify problematic samples in NGS data\, including samples with gender mismatch\, contamination\, cryptic relatedness\, and population outlier.


.. conda:package:: bioconductor-seqsqc

   |downloads_bioconductor-seqsqc| |docker_bioconductor-seqsqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-snprelate: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-seqsqc

   and update with::

      mamba update bioconductor-seqsqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqsqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqsqc:<tag>

   (see `bioconductor-seqsqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqsqc
   :alt:   (downloads)
.. |docker_bioconductor-seqsqc| image:: https://quay.io/repository/biocontainers/bioconductor-seqsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsqc
.. _`bioconductor-seqsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-seqsqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqsqc";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html