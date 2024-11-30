:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxbreast'
.. highlight: bash

bioconductor-metagxbreast
=========================

.. conda:recipe:: bioconductor-metagxbreast
   :replaces_section_title:
   :noindex:

   Transcriptomic Breast Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MetaGxBreast.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-metagxbreast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxbreast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxbreast/meta.yaml>`_

   A collection of Breast Cancer Transcriptomic Datasets that are part of the MetaGxData package compendium.


.. conda:package:: bioconductor-metagxbreast

   |downloads_bioconductor-metagxbreast| |docker_bioconductor-metagxbreast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-metagxbreast

   and update with::

      mamba update bioconductor-metagxbreast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metagxbreast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxbreast:<tag>

   (see `bioconductor-metagxbreast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxbreast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxbreast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxbreast
   :alt:   (downloads)
.. |docker_bioconductor-metagxbreast| image:: https://quay.io/repository/biocontainers/bioconductor-metagxbreast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxbreast
.. _`bioconductor-metagxbreast/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxbreast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxbreast";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxbreast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxbreast/README.html