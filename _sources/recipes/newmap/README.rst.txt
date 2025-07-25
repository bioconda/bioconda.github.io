:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'newmap'
.. highlight: bash

newmap
======

.. conda:recipe:: newmap
   :replaces_section_title:
   :noindex:

   Tool for creating mappability data for reference sequences.

   :homepage: https://github.com/hoffmangroup/newmap
   :documentation: https://newmap.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`newmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newmap/meta.yaml>`_

   


.. conda:package:: newmap

   |downloads_newmap| |docker_newmap|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends numpy: 
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

      mamba install newmap

   and update with::

      mamba update newmap

  To create a new environment, run::

      mamba create --name myenvname newmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/newmap:<tag>

   (see `newmap/tags`_ for valid values for ``<tag>``)


.. |downloads_newmap| image:: https://img.shields.io/conda/dn/bioconda/newmap.svg?style=flat
   :target: https://anaconda.org/bioconda/newmap
   :alt:   (downloads)
.. |docker_newmap| image:: https://quay.io/repository/biocontainers/newmap/status
   :target: https://quay.io/repository/biocontainers/newmap
.. _`newmap/tags`: https://quay.io/repository/biocontainers/newmap?tab=tags


.. raw:: html

    <script>
        var package = "newmap";
        var versions = ["0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/newmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/newmap/README.html