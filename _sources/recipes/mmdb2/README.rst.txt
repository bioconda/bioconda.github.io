:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmdb2'
.. highlight: bash

mmdb2
=====

.. conda:recipe:: mmdb2
   :replaces_section_title:
   :noindex:

   C\+\+ toolkit for working with macromolecular coordinate files.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`mmdb2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmdb2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmdb2/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444904027167`

   MMDB2 is a C\+\+ toolkit for working with macromolecular coordinate files.
   It provides functionality for reading\, writing\, and manipulating PDB and mmCIF files\,
   including support for crystallographic symmetry operations and molecular geometry calculations.



.. conda:package:: mmdb2

   |downloads_mmdb2| |docker_mmdb2|

   :versions:
      
      

      ``2.0.22-2``,  ``2.0.22-1``,  ``2.0.22-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pkg-config: 
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

      mamba install mmdb2

   and update with::

      mamba update mmdb2

  To create a new environment, run::

      mamba create --name myenvname mmdb2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmdb2:<tag>

   (see `mmdb2/tags`_ for valid values for ``<tag>``)


.. |downloads_mmdb2| image:: https://img.shields.io/conda/dn/bioconda/mmdb2.svg?style=flat
   :target: https://anaconda.org/bioconda/mmdb2
   :alt:   (downloads)
.. |docker_mmdb2| image:: https://quay.io/repository/biocontainers/mmdb2/status
   :target: https://quay.io/repository/biocontainers/mmdb2
.. _`mmdb2/tags`: https://quay.io/repository/biocontainers/mmdb2?tab=tags


.. raw:: html

    <script>
        var package = "mmdb2";
        var versions = ["2.0.22","2.0.22","2.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmdb2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmdb2/README.html