:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmox'
.. highlight: bash

dmox
====

.. conda:recipe:: dmox
   :replaces_section_title:
   :noindex:

   Rust\-based demultiplexing of haplotagging linked\-read data.

   :homepage: https://gitlab.mbb.cnrs.fr/ibonnici/dmox
   :documentation: https://gitlab.mbb.cnrs.fr/ibonnici/dmox/-/blob/v0.1.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dmox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmox/meta.yaml>`_

   dmox is a drop\-in replacement for the haplotagging linked\-read demultiplexing module implemented in Harpy.
   It\'s used within Harpy itself\, but also functions as a standalone\, efficient demultiplexing software.



.. conda:package:: dmox

   |downloads_dmox| |docker_dmox|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install dmox

   and update with::

      mamba update dmox

  To create a new environment, run::

      mamba create --name myenvname dmox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dmox:<tag>

   (see `dmox/tags`_ for valid values for ``<tag>``)


.. |downloads_dmox| image:: https://img.shields.io/conda/dn/bioconda/dmox.svg?style=flat
   :target: https://anaconda.org/bioconda/dmox
   :alt:   (downloads)
.. |docker_dmox| image:: https://quay.io/repository/biocontainers/dmox/status
   :target: https://quay.io/repository/biocontainers/dmox
.. _`dmox/tags`: https://quay.io/repository/biocontainers/dmox?tab=tags


.. raw:: html

    <script>
        var package = "dmox";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmox/README.html