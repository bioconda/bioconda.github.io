:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmcif'
.. highlight: bash

mmcif
=====

.. conda:recipe:: mmcif
   :replaces_section_title:
   :noindex:

   mmCIF Core Access Library

   :homepage: https://rcsb.github.io/py-mmcif
   :developer docs: https://github.com/rcsb/py-mmcif
   :license: BSD-3-Clause AND Apache-2.0
   :recipe: /`mmcif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmcif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmcif/meta.yaml>`_

   This module includes a native Python mmCIF API for data files
   and dictionaries along with pybind11 wrappers for the PDB C\+\+ Core mmCIF Library.



.. conda:package:: mmcif

   |downloads_mmcif| |docker_mmcif|

   :versions:
      
      

      ``1.0.0-0``,  ``0.92.0-1``,  ``0.92.0-0``,  ``0.91.0-0``

      

   
   :depends future: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends msgpack-python: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: ``>=2.25``
   :depends six: 
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

      mamba install mmcif

   and update with::

      mamba update mmcif

  To create a new environment, run::

      mamba create --name myenvname mmcif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmcif:<tag>

   (see `mmcif/tags`_ for valid values for ``<tag>``)


.. |downloads_mmcif| image:: https://img.shields.io/conda/dn/bioconda/mmcif.svg?style=flat
   :target: https://anaconda.org/bioconda/mmcif
   :alt:   (downloads)
.. |docker_mmcif| image:: https://quay.io/repository/biocontainers/mmcif/status
   :target: https://quay.io/repository/biocontainers/mmcif
.. _`mmcif/tags`: https://quay.io/repository/biocontainers/mmcif?tab=tags


.. raw:: html

    <script>
        var package = "mmcif";
        var versions = ["1.0.0","0.92.0","0.92.0","0.91.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmcif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmcif/README.html