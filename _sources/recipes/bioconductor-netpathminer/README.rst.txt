:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netpathminer'
.. highlight: bash

bioconductor-netpathminer
=========================

.. conda:recipe:: bioconductor-netpathminer
   :replaces_section_title:
   :noindex:

   NetPathMiner for Biological Network Construction\, Path Mining and Visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NetPathMiner.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-netpathminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netpathminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netpathminer/meta.yaml>`_
   :links: biotools: :biotools:`netpathminer`

   NetPathMiner is a general framework for network path mining using genome\-scale networks. It constructs networks from KGML\, SBML and BioPAX files\, providing three network representations\, metabolic\, reaction and gene representations. NetPathMiner finds active paths and applies machine learning methods to summarize found paths for easy interpretation. It also provides static and interactive visualizations of networks and paths to aid manual investigation.


.. conda:package:: bioconductor-netpathminer

   |downloads_bioconductor-netpathminer| |docker_bioconductor-netpathminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  </span></summary>
      

      ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libxml2: ``>=2.13.7,<2.14.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: ``>=1.0``
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

      mamba install bioconductor-netpathminer

   and update with::

      mamba update bioconductor-netpathminer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netpathminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netpathminer:<tag>

   (see `bioconductor-netpathminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netpathminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netpathminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netpathminer
   :alt:   (downloads)
.. |docker_bioconductor-netpathminer| image:: https://quay.io/repository/biocontainers/bioconductor-netpathminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netpathminer
.. _`bioconductor-netpathminer/tags`: https://quay.io/repository/biocontainers/bioconductor-netpathminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netpathminer";
        var versions = ["1.42.0","1.42.0","1.38.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netpathminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netpathminer/README.html