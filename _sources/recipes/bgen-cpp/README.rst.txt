:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgen-cpp'
.. highlight: bash

bgen-cpp
========

.. conda:recipe:: bgen-cpp
   :replaces_section_title:
   :noindex:

   Reference implementation of the BGEN format\, written in C\+\+

   :homepage: https://enkre.net/cgi-bin/code/bgen/
   :license: Boost Software License
   :recipe: /`bgen-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgen-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgen-cpp/meta.yaml>`_

   Reference implementation of the BGEN format\, written in C\+\+.
   The library can be used as the basis for BGEN support
   in other software\, or as a reference for developers
   writing their own implementations of the BGEN format.
   Includes applications for working with BGEN files\: bgenix\,
   cat\-bgen\, and edit\-bgen.



.. conda:package:: bgen-cpp

   |downloads_bgen-cpp| |docker_bgen-cpp|

   :versions:
      
      

      ``1.1.7-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bgen-cpp

   and update with::

      mamba update bgen-cpp

  To create a new environment, run::

      mamba create --name myenvname bgen-cpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bgen-cpp:<tag>

   (see `bgen-cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_bgen-cpp| image:: https://img.shields.io/conda/dn/bioconda/bgen-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/bgen-cpp
   :alt:   (downloads)
.. |docker_bgen-cpp| image:: https://quay.io/repository/biocontainers/bgen-cpp/status
   :target: https://quay.io/repository/biocontainers/bgen-cpp
.. _`bgen-cpp/tags`: https://quay.io/repository/biocontainers/bgen-cpp?tab=tags


.. raw:: html

    <script>
        var package = "bgen-cpp";
        var versions = ["1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgen-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgen-cpp/README.html