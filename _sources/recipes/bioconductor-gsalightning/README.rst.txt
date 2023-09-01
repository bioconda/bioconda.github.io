:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsalightning'
.. highlight: bash

bioconductor-gsalightning
=========================

.. conda:recipe:: bioconductor-gsalightning
   :replaces_section_title:
   :noindex:

   Fast Permutation\-based Gene Set Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GSALightning.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-gsalightning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsalightning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsalightning/meta.yaml>`_
   :links: biotools: :biotools:`gsalightning`, doi: :doi:`10.1093/bioinformatics/btw349`

   GSALightning provides a fast implementation of permutation\-based gene set analysis for two\-sample problem. This package is particularly useful when testing simultaneously a large number of gene sets\, or when a large number of permutations is necessary for more accurate p\-values estimation.


.. conda:package:: bioconductor-gsalightning

   |downloads_bioconductor-gsalightning| |docker_bioconductor-gsalightning|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
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

      mamba install bioconductor-gsalightning

   and update with::

      mamba update bioconductor-gsalightning

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsalightning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsalightning:<tag>

   (see `bioconductor-gsalightning/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsalightning| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsalightning.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsalightning
   :alt:   (downloads)
.. |docker_bioconductor-gsalightning| image:: https://quay.io/repository/biocontainers/bioconductor-gsalightning/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsalightning
.. _`bioconductor-gsalightning/tags`: https://quay.io/repository/biocontainers/bioconductor-gsalightning?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsalightning";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsalightning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsalightning/README.html