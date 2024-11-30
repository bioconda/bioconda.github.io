:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lola'
.. highlight: bash

bioconductor-lola
=================

.. conda:recipe:: bioconductor-lola
   :replaces_section_title:
   :noindex:

   Locus overlap analysis for enrichment of genomic ranges

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/LOLA.html
   :license: GPL-3
   :recipe: /`bioconductor-lola <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lola>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lola/meta.yaml>`_
   :links: biotools: :biotools:`lola`, doi: :doi:`10.1093/bioinformatics/btv612`

   Provides functions for testing overlap of sets of genomic regions with public and custom region set \(genomic ranges\) databases. This makes it possible to do automated enrichment analysis for genomic region sets\, thus facilitating interpretation of functional genomics and epigenomics data.


.. conda:package:: bioconductor-lola

   |downloads_bioconductor-lola| |docker_bioconductor-lola|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-reshape2: 
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

      mamba install bioconductor-lola

   and update with::

      mamba update bioconductor-lola

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lola

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lola:<tag>

   (see `bioconductor-lola/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lola| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lola.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lola
   :alt:   (downloads)
.. |docker_bioconductor-lola| image:: https://quay.io/repository/biocontainers/bioconductor-lola/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lola
.. _`bioconductor-lola/tags`: https://quay.io/repository/biocontainers/bioconductor-lola?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lola";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lola/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lola/README.html