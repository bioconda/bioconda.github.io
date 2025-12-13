:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emu-pca'
.. highlight: bash

emu-pca
=======

.. conda:recipe:: emu-pca
   :replaces_section_title:
   :noindex:

   EM\-PCA for Ultra\-low Coverage Sequencing Data.

   :homepage: https://github.com/Rosemeis/emu
   :license: GPL-3.0-only
   :recipe: /`emu-pca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu-pca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu-pca/meta.yaml>`_

   


.. conda:package:: emu-pca

   |downloads_emu-pca| |docker_emu-pca|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install emu-pca

   and update with::

      mamba update emu-pca

  To create a new environment, run::

      mamba create --name myenvname emu-pca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emu-pca:<tag>

   (see `emu-pca/tags`_ for valid values for ``<tag>``)


.. |downloads_emu-pca| image:: https://img.shields.io/conda/dn/bioconda/emu-pca.svg?style=flat
   :target: https://anaconda.org/bioconda/emu-pca
   :alt:   (downloads)
.. |docker_emu-pca| image:: https://quay.io/repository/biocontainers/emu-pca/status
   :target: https://quay.io/repository/biocontainers/emu-pca
.. _`emu-pca/tags`: https://quay.io/repository/biocontainers/emu-pca?tab=tags


.. raw:: html

    <script>
        var package = "emu-pca";
        var versions = ["1.5.0","1.4.1","1.4.0","1.3.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emu-pca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emu-pca/README.html