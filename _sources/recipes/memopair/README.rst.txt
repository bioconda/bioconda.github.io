:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'memopair'
.. highlight: bash

memopair
========

.. conda:recipe:: memopair
   :replaces_section_title:
   :noindex:

   A package for identifying methylated motif pairs

   :homepage: https://github.com/SorenHeidelbach/memopair
   :license: MIT
   :recipe: /`memopair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memopair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memopair/meta.yaml>`_

   


.. conda:package:: memopair

   |downloads_memopair| |docker_memopair|

   :versions:
      
      

      ``0.1.4-0``

      

   
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

      mamba install memopair

   and update with::

      mamba update memopair

  To create a new environment, run::

      mamba create --name myenvname memopair

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/memopair:<tag>

   (see `memopair/tags`_ for valid values for ``<tag>``)


.. |downloads_memopair| image:: https://img.shields.io/conda/dn/bioconda/memopair.svg?style=flat
   :target: https://anaconda.org/bioconda/memopair
   :alt:   (downloads)
.. |docker_memopair| image:: https://quay.io/repository/biocontainers/memopair/status
   :target: https://quay.io/repository/biocontainers/memopair
.. _`memopair/tags`: https://quay.io/repository/biocontainers/memopair?tab=tags


.. raw:: html

    <script>
        var package = "memopair";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/memopair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/memopair/README.html