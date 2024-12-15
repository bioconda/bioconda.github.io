:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5'
.. highlight: bash

bioconductor-rhdf5
==================

.. conda:recipe:: bioconductor-rhdf5
   :replaces_section_title:
   :noindex:

   R Interface to HDF5

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rhdf5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5/meta.yaml>`_
   :links: biotools: :biotools:`rhdf5`

   This package provides an interface between HDF5 and R. HDF5\'s main features are the ability to store and access very large and\/or complex datasets and a wide variety of metadata on mass storage \(disk\) through a completely portable file format. The rhdf5 package is thus suited for the exchange of large and\/or complex datasets between R and other software package\, and for letting R applications work on datasets that are larger than the available RAM.


.. conda:package:: bioconductor-rhdf5

   |downloads_bioconductor-rhdf5| |docker_bioconductor-rhdf5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.46.1-1</code>,  <code>2.46.1-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.38.1-0</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.46.1-1``,  ``2.46.1-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.1-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.36.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.2-2``,  ``2.26.2-1``,  ``2.26.2-0``,  ``2.26.1-0``,  ``2.26.0-2``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5filters: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rhdf5filters: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
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

      mamba install bioconductor-rhdf5

   and update with::

      mamba update bioconductor-rhdf5

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rhdf5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5:<tag>

   (see `bioconductor-rhdf5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5
.. _`bioconductor-rhdf5/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5";
        var versions = ["2.50.0","2.46.1","2.46.1","2.44.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html