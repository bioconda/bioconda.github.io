:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmeth'
.. highlight: bash

bioconductor-scmeth
===================

.. conda:recipe:: bioconductor-scmeth
   :replaces_section_title:
   :noindex:

   Functions to conduct quality control analysis in methylation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scmeth.html
   :license: GPL-2
   :recipe: /`bioconductor-scmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth/meta.yaml>`_

   Functions to analyze methylation data can be found here. Some functions are relevant for single cell methylation data but most other functions can be used for any methylation data. Highlight of this workflow is the comprehensive quality control report.


.. conda:package:: bioconductor-scmeth

   |downloads_bioconductor-scmeth| |docker_bioconductor-scmeth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends bioconductor-annotatr: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-bsseq: ``>=1.46.0,<1.47.0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dt: 
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

      mamba install bioconductor-scmeth

   and update with::

      mamba update bioconductor-scmeth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmeth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmeth:<tag>

   (see `bioconductor-scmeth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmeth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmeth
   :alt:   (downloads)
.. |docker_bioconductor-scmeth| image:: https://quay.io/repository/biocontainers/bioconductor-scmeth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmeth
.. _`bioconductor-scmeth/tags`: https://quay.io/repository/biocontainers/bioconductor-scmeth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmeth";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmeth/README.html