:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutscan'
.. highlight: bash

mutscan
=======

.. conda:recipe:: mutscan
   :replaces_section_title:
   :noindex:

   Detect and visualize target mutations by scanning FastQ files directly.

   :homepage: https://github.com/OpenGene/MutScan
   :documentation: https://github.com/OpenGene/MutScan/blob/v1.14.1/README.md
   
   :license: MIT / MIT
   :recipe: /`mutscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutscan/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2024-6`

   


.. conda:package:: mutscan

   |downloads_mutscan| |docker_mutscan|

   :versions:
      
      

      ``1.14.1-0``,  ``1.14.0-5``,  ``1.14.0-4``,  ``1.14.0-3``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``

      

   
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

      mamba install mutscan

   and update with::

      mamba update mutscan

  To create a new environment, run::

      mamba create --name myenvname mutscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutscan:<tag>

   (see `mutscan/tags`_ for valid values for ``<tag>``)


.. |downloads_mutscan| image:: https://img.shields.io/conda/dn/bioconda/mutscan.svg?style=flat
   :target: https://anaconda.org/bioconda/mutscan
   :alt:   (downloads)
.. |docker_mutscan| image:: https://quay.io/repository/biocontainers/mutscan/status
   :target: https://quay.io/repository/biocontainers/mutscan
.. _`mutscan/tags`: https://quay.io/repository/biocontainers/mutscan?tab=tags


.. raw:: html

    <script>
        var package = "mutscan";
        var versions = ["1.14.1","1.14.0","1.14.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutscan/README.html