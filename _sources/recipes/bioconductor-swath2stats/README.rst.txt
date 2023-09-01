:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swath2stats'
.. highlight: bash

bioconductor-swath2stats
========================

.. conda:recipe:: bioconductor-swath2stats
   :replaces_section_title:
   :noindex:

   Transform and Filter SWATH Data for Statistical Packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SWATH2stats.html
   :license: GPL-3
   :recipe: /`bioconductor-swath2stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats/meta.yaml>`_
   :links: biotools: :biotools:`swath2stats`

   This package is intended to transform SWATH data from the OpenSWATH software into a format readable by other statistics packages while performing filtering\, annotation and FDR estimation.


.. conda:package:: bioconductor-swath2stats

   |downloads_bioconductor-swath2stats| |docker_bioconductor-swath2stats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.1-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.1-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.1-0``,  ``1.10.2-0``,  ``1.8.1-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-swath2stats

   and update with::

      mamba update bioconductor-swath2stats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-swath2stats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swath2stats:<tag>

   (see `bioconductor-swath2stats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swath2stats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swath2stats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swath2stats
   :alt:   (downloads)
.. |docker_bioconductor-swath2stats| image:: https://quay.io/repository/biocontainers/bioconductor-swath2stats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swath2stats
.. _`bioconductor-swath2stats/tags`: https://quay.io/repository/biocontainers/bioconductor-swath2stats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-swath2stats";
        var versions = ["1.30.1","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html