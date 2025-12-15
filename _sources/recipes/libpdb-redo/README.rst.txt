:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libpdb-redo'
.. highlight: bash

libpdb-redo
===========

.. conda:recipe:: libpdb-redo
   :replaces_section_title:
   :noindex:

   Library containing shared code for various PDB\-REDO programs.

   :homepage: https://pdb-redo.eu
   :developer docs: https://github.com/PDB-REDO/libpdb-redo
   :license: BSD / BSD-2-Clause
   :recipe: /`libpdb-redo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libpdb-redo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libpdb-redo/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444911054515`

   This library contains code shared by the various tools we develop at the NKI for the \[PDB\-REDO\]\(https\:\/\/pdb\-redo.eu\/\) project.



.. conda:package:: libpdb-redo

   |downloads_libpdb-redo| |docker_libpdb-redo|

   :versions:
      
      

      ``3.3.1-0``,  ``3.3.0-0``

      

   
   :depends clipper: ``>=2.1.20180802,<3.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcifpp: ``>=9.0.4,<10.0a0``
   :depends libgcc: ``>=13``
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

      mamba install libpdb-redo

   and update with::

      mamba update libpdb-redo

  To create a new environment, run::

      mamba create --name myenvname libpdb-redo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libpdb-redo:<tag>

   (see `libpdb-redo/tags`_ for valid values for ``<tag>``)


.. |downloads_libpdb-redo| image:: https://img.shields.io/conda/dn/bioconda/libpdb-redo.svg?style=flat
   :target: https://anaconda.org/bioconda/libpdb-redo
   :alt:   (downloads)
.. |docker_libpdb-redo| image:: https://quay.io/repository/biocontainers/libpdb-redo/status
   :target: https://quay.io/repository/biocontainers/libpdb-redo
.. _`libpdb-redo/tags`: https://quay.io/repository/biocontainers/libpdb-redo?tab=tags


.. raw:: html

    <script>
        var package = "libpdb-redo";
        var versions = ["3.3.1","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libpdb-redo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libpdb-redo/README.html