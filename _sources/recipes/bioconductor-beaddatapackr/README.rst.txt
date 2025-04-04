:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beaddatapackr'
.. highlight: bash

bioconductor-beaddatapackr
==========================

.. conda:recipe:: bioconductor-beaddatapackr
   :replaces_section_title:
   :noindex:

   Compression of Illumina BeadArray data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BeadDataPackR.html
   :license: GPL-2
   :recipe: /`bioconductor-beaddatapackr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beaddatapackr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beaddatapackr/meta.yaml>`_
   :links: biotools: :biotools:`beaddatapackr`

   Provides functionality for the compression and decompression of raw bead\-level data from the Illumina BeadArray platform.


.. conda:package:: bioconductor-beaddatapackr

   |downloads_bioconductor-beaddatapackr| |docker_bioconductor-beaddatapackr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  </span></summary>
      

      ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-beaddatapackr

   and update with::

      mamba update bioconductor-beaddatapackr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beaddatapackr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beaddatapackr:<tag>

   (see `bioconductor-beaddatapackr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beaddatapackr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beaddatapackr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beaddatapackr
   :alt:   (downloads)
.. |docker_bioconductor-beaddatapackr| image:: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr
.. _`bioconductor-beaddatapackr/tags`: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beaddatapackr";
        var versions = ["1.58.0","1.58.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beaddatapackr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beaddatapackr/README.html