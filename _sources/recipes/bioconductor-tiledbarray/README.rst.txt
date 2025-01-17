:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tiledbarray'
.. highlight: bash

bioconductor-tiledbarray
========================

.. conda:recipe:: bioconductor-tiledbarray
   :replaces_section_title:
   :noindex:

   Using TileDB as a DelayedArray Backend

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TileDBArray.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tiledbarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tiledbarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tiledbarray/meta.yaml>`_

   Implements a DelayedArray backend for reading and writing dense or sparse arrays in the TileDB format. The resulting TileDBArrays are compatible with all Bioconductor pipelines that can accept DelayedArray instances.


.. conda:package:: bioconductor-tiledbarray

   |downloads_bioconductor-tiledbarray| |docker_bioconductor-tiledbarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-tiledb: 
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

      mamba install bioconductor-tiledbarray

   and update with::

      mamba update bioconductor-tiledbarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tiledbarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tiledbarray:<tag>

   (see `bioconductor-tiledbarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tiledbarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tiledbarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tiledbarray
   :alt:   (downloads)
.. |docker_bioconductor-tiledbarray| image:: https://quay.io/repository/biocontainers/bioconductor-tiledbarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tiledbarray
.. _`bioconductor-tiledbarray/tags`: https://quay.io/repository/biocontainers/bioconductor-tiledbarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tiledbarray";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tiledbarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tiledbarray/README.html