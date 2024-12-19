:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5filters'
.. highlight: bash

bioconductor-rhdf5filters
=========================

.. conda:recipe:: bioconductor-rhdf5filters
   :replaces_section_title:
   :noindex:

   HDF5 Compression Filters

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rhdf5filters.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-rhdf5filters <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5filters>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5filters/meta.yaml>`_
   :links: biotools: :biotools:`rhdf5filters`

   Provides a collection of additional compression filters for HDF5 datasets. The package is intended to provide seemless integration with rhdf5\, however the compiled filters can also be used with external applications.


.. conda:package:: bioconductor-rhdf5filters

   |downloads_bioconductor-rhdf5filters| |docker_bioconductor-rhdf5filters|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.1-1</code>,  <code>1.14.1-0</code>,  <code>1.12.1-1</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bioconductor-rhdf5filters

   and update with::

      mamba update bioconductor-rhdf5filters

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rhdf5filters

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5filters:<tag>

   (see `bioconductor-rhdf5filters/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5filters| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5filters.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5filters
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5filters| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters
.. _`bioconductor-rhdf5filters/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5filters";
        var versions = ["1.18.0","1.14.1","1.14.1","1.12.1","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5filters/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5filters/README.html