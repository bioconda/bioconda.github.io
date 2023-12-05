:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cmap2data'
.. highlight: bash

bioconductor-cmap2data
======================

.. conda:recipe:: bioconductor-cmap2data
   :replaces_section_title:
   :noindex:

   Connectivity Map \(version 2\) Data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/cMap2data.html
   :license: GPL-3
   :recipe: /`bioconductor-cmap2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap2data/meta.yaml>`_

   Data package which provides default drug profiles for the DrugVsDisease package as well as associated gene lists and data clusters used by the DrugVsDisease package.


.. conda:package:: bioconductor-cmap2data

   |downloads_bioconductor-cmap2data| |docker_bioconductor-cmap2data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-cmap2data

   and update with::

      mamba update bioconductor-cmap2data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cmap2data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cmap2data:<tag>

   (see `bioconductor-cmap2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cmap2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmap2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cmap2data
   :alt:   (downloads)
.. |docker_bioconductor-cmap2data| image:: https://quay.io/repository/biocontainers/bioconductor-cmap2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmap2data
.. _`bioconductor-cmap2data/tags`: https://quay.io/repository/biocontainers/bioconductor-cmap2data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cmap2data";
        var versions = ["1.38.0","1.36.0","1.34.0","1.33.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmap2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmap2data/README.html