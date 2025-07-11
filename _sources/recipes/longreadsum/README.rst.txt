:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longreadsum'
.. highlight: bash

longreadsum
===========

.. conda:recipe:: longreadsum
   :replaces_section_title:
   :noindex:

   Long read sequencing data quality control tool

   :homepage: https://github.com/WGLab/LongReadSum
   :documentation: https://github.com/WGLab/LongReadSum#readme
   
   :license: MIT
   :recipe: /`longreadsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum/meta.yaml>`_

   A fast and flexible QC tool for long read sequencing data.



.. conda:package:: longreadsum

   |downloads_longreadsum| |docker_longreadsum|

   :versions:
      
      

      ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends numpy: 
   :depends plotly: 
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

      mamba install longreadsum

   and update with::

      mamba update longreadsum

  To create a new environment, run::

      mamba create --name myenvname longreadsum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longreadsum:<tag>

   (see `longreadsum/tags`_ for valid values for ``<tag>``)


.. |downloads_longreadsum| image:: https://img.shields.io/conda/dn/bioconda/longreadsum.svg?style=flat
   :target: https://anaconda.org/bioconda/longreadsum
   :alt:   (downloads)
.. |docker_longreadsum| image:: https://quay.io/repository/biocontainers/longreadsum/status
   :target: https://quay.io/repository/biocontainers/longreadsum
.. _`longreadsum/tags`: https://quay.io/repository/biocontainers/longreadsum?tab=tags


.. raw:: html

    <script>
        var package = "longreadsum";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longreadsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longreadsum/README.html