:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-suprahex'
.. highlight: bash

bioconductor-suprahex
=====================

.. conda:recipe:: bioconductor-suprahex
   :replaces_section_title:
   :noindex:

   supraHex\: a supra\-hexagonal map for analysing tabular omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/supraHex.html
   :license: GPL-2
   :recipe: /`bioconductor-suprahex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex/meta.yaml>`_
   :links: biotools: :biotools:`suprahex`

   A supra\-hexagonal map is a giant hexagon on a 2\-dimensional grid seamlessly consisting of smaller hexagons. It is supposed to train\, analyse and visualise a high\-dimensional omics input data. The supraHex is able to carry out gene clustering\/meta\-clustering and sample correlation\, plus intuitive visualisations to facilitate exploratory analysis. More importantly\, it allows for overlaying additional data onto the trained map to explore relations between input and additional data. So with supraHex\, it is also possible to carry out multilayer omics data comparisons. Newly added utilities are advanced heatmap visualisation and tree\-based analysis of sample relationships. Uniquely to this package\, users can ultrafastly understand any tabular omics data\, both scientifically and artistically\, especially in a sample\-specific fashion but without loss of information on large genes.


.. conda:package:: bioconductor-suprahex

   |downloads_bioconductor-suprahex| |docker_bioconductor-suprahex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-hexbin: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-suprahex

   and update with::

      mamba update bioconductor-suprahex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-suprahex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-suprahex:<tag>

   (see `bioconductor-suprahex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-suprahex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-suprahex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-suprahex
   :alt:   (downloads)
.. |docker_bioconductor-suprahex| image:: https://quay.io/repository/biocontainers/bioconductor-suprahex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-suprahex
.. _`bioconductor-suprahex/tags`: https://quay.io/repository/biocontainers/bioconductor-suprahex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-suprahex";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-suprahex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-suprahex/README.html