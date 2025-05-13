:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rad'
.. highlight: bash

rad
===

.. conda:recipe:: rad
   :replaces_section_title:
   :noindex:

   Read\-structure Agnostic Demultiplexer for long\-read single\-cell RNA\-seq.

   :homepage: https://github.com/indianewok/rad
   :documentation: https://github.com/indianewok/rad/blob/v0.6.0/README.md
   
   :license: MIT / MIT
   :recipe: /`rad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad/meta.yaml>`_

   \*\*rad\*\* implements an alignment\-based demultiplexer and
   whitelist\/barcode\-correction suite for Nanopore and PacBio single\-cell
   long\-read experiments. It bundles edlib and csv\-parser in\-tree\,
   and depends only on Boost\, zlib\, and some flavor of openMP.



.. conda:package:: rad

   |downloads_rad| |docker_rad|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rad

   and update with::

      mamba update rad

  To create a new environment, run::

      mamba create --name myenvname rad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rad:<tag>

   (see `rad/tags`_ for valid values for ``<tag>``)


.. |downloads_rad| image:: https://img.shields.io/conda/dn/bioconda/rad.svg?style=flat
   :target: https://anaconda.org/bioconda/rad
   :alt:   (downloads)
.. |docker_rad| image:: https://quay.io/repository/biocontainers/rad/status
   :target: https://quay.io/repository/biocontainers/rad
.. _`rad/tags`: https://quay.io/repository/biocontainers/rad?tab=tags


.. raw:: html

    <script>
        var package = "rad";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad/README.html