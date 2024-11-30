:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reduce'
.. highlight: bash

reduce
======

.. conda:recipe:: reduce
   :replaces_section_title:
   :noindex:

   Reduce \- tool for adding and correcting hydrogens in PDB files

   :homepage: https://github.com/rlabduke/reduce
   :documentation: https://github.com/rlabduke/reduce#readme
   
   :license: BSD / BSD-4-Clause-UC
   :recipe: /`reduce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reduce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reduce/meta.yaml>`_

   Reduce is a tool for adding and correcting hydrogens in PDB files.
   It is often used in computational biology and molecular modeling to
   prepare protein structures for further analysis or simulations.



.. conda:package:: reduce

   |downloads_reduce| |docker_reduce|

   :versions:
      
      

      ``4.14-2``,  ``4.14-1``,  ``4.14-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install reduce

   and update with::

      mamba update reduce

  To create a new environment, run::

      mamba create --name myenvname reduce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reduce:<tag>

   (see `reduce/tags`_ for valid values for ``<tag>``)


.. |downloads_reduce| image:: https://img.shields.io/conda/dn/bioconda/reduce.svg?style=flat
   :target: https://anaconda.org/bioconda/reduce
   :alt:   (downloads)
.. |docker_reduce| image:: https://quay.io/repository/biocontainers/reduce/status
   :target: https://quay.io/repository/biocontainers/reduce
.. _`reduce/tags`: https://quay.io/repository/biocontainers/reduce?tab=tags


.. raw:: html

    <script>
        var package = "reduce";
        var versions = ["4.14","4.14","4.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reduce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reduce/README.html