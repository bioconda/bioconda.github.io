:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cicero'
.. highlight: bash

bioconductor-cicero
===================

.. conda:recipe:: bioconductor-cicero
   :replaces_section_title:
   :noindex:

   Predict cis\-co\-accessibility from single\-cell chromatin accessibility data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cicero.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cicero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero/meta.yaml>`_

   Cicero computes putative cis\-regulatory maps from single\-cell chromatin accessibility data. It also extends monocle 2 for use in chromatin accessibility data.


.. conda:package:: bioconductor-cicero

   |downloads_bioconductor-cicero| |docker_bioconductor-cicero|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-monocle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-fnn: ``>=1.1``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-glasso: ``>=1.8``
   :depends r-igraph: ``>=1.1.0``
   :depends r-matrix: ``>=1.2-12``
   :depends r-plyr: ``>=1.8.4``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-stringi: 
   :depends r-stringr: ``>=1.2.0``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: 
   :depends r-vgam: ``>=1.0-5``
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

      mamba install bioconductor-cicero

   and update with::

      mamba update bioconductor-cicero

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cicero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cicero:<tag>

   (see `bioconductor-cicero/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cicero| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cicero.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cicero
   :alt:   (downloads)
.. |docker_bioconductor-cicero| image:: https://quay.io/repository/biocontainers/bioconductor-cicero/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cicero
.. _`bioconductor-cicero/tags`: https://quay.io/repository/biocontainers/bioconductor-cicero?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cicero";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cicero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cicero/README.html