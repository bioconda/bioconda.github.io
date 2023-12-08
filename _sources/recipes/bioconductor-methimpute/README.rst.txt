:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methimpute'
.. highlight: bash

bioconductor-methimpute
=======================

.. conda:recipe:: bioconductor-methimpute
   :replaces_section_title:
   :noindex:

   Imputation\-guided re\-construction of complete methylomes from WGBS data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/methimpute.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute/meta.yaml>`_

   This package implements functions for calling methylation for all cytosines in the genome.


.. conda:package:: bioconductor-methimpute

   |downloads_bioconductor-methimpute| |docker_bioconductor-methimpute|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-minpack.lm: 
   :depends r-rcpp: ``>=0.12.4.5``
   :depends r-reshape2: 
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

      mamba install bioconductor-methimpute

   and update with::

      mamba update bioconductor-methimpute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methimpute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methimpute:<tag>

   (see `bioconductor-methimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methimpute
   :alt:   (downloads)
.. |docker_bioconductor-methimpute| image:: https://quay.io/repository/biocontainers/bioconductor-methimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methimpute
.. _`bioconductor-methimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-methimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methimpute";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methimpute/README.html