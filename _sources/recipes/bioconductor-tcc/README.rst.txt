:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcc'
.. highlight: bash

bioconductor-tcc
================

.. conda:recipe:: bioconductor-tcc
   :replaces_section_title:
   :noindex:

   TCC\: Differential expression analysis for tag count data with robust normalization strategies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TCC.html
   :license: GPL-2
   :recipe: /`bioconductor-tcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcc/meta.yaml>`_

   This package provides a series of functions for performing differential expression analysis from RNA\-seq count data using robust normalization strategy \(called DEGES\). The basic idea of DEGES is that potential differentially expressed genes or transcripts \(DEGs\) among compared samples should be removed before data normalization to obtain a well\-ranked gene list where true DEGs are top\-ranked and non\-DEGs are bottom ranked. This can be done by performing a multi\-step normalization strategy \(called DEGES for DEG elimination strategy\). A major characteristic of TCC is to provide the robust normalization methods for several kinds of count data \(two\-group with or without replicates\, multi\-group\/multi\-factor\, and so on\) by virtue of the use of combinations of functions in depended packages.


.. conda:package:: bioconductor-tcc

   |downloads_bioconductor-tcc| |docker_bioconductor-tcc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.36.0,<2.37.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-roc: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-tcc

   and update with::

      mamba update bioconductor-tcc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcc:<tag>

   (see `bioconductor-tcc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcc
   :alt:   (downloads)
.. |docker_bioconductor-tcc| image:: https://quay.io/repository/biocontainers/bioconductor-tcc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcc
.. _`bioconductor-tcc/tags`: https://quay.io/repository/biocontainers/bioconductor-tcc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcc";
        var versions = ["1.42.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcc/README.html