:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svdb'
.. highlight: bash

svdb
====

.. conda:recipe:: svdb
   :replaces_section_title:
   :noindex:

   Structural variant database software.

   :homepage: https://github.com/J35P312/SVDB
   :documentation: https://github.com/J35P312/SVDB/blob/2.8.3/README.md
   
   :license: MIT / MIT
   :recipe: /`svdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb/meta.yaml>`_

   


.. conda:package:: svdb

   |downloads_svdb| |docker_svdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.3-0</code>,  <code>2.8.2-5</code>,  <code>2.8.2-4</code>,  <code>2.8.2-3</code>,  <code>2.8.2-2</code>,  <code>2.8.2-1</code>,  <code>2.8.2-0</code>,  <code>2.8.1-1</code>,  <code>2.8.1-0</code>,  </span></summary>
      

      ``2.8.3-0``,  ``2.8.2-5``,  ``2.8.2-4``,  ``2.8.2-3``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.2-0``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install svdb

   and update with::

      mamba update svdb

  To create a new environment, run::

      mamba create --name myenvname svdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svdb:<tag>

   (see `svdb/tags`_ for valid values for ``<tag>``)


.. |downloads_svdb| image:: https://img.shields.io/conda/dn/bioconda/svdb.svg?style=flat
   :target: https://anaconda.org/bioconda/svdb
   :alt:   (downloads)
.. |docker_svdb| image:: https://quay.io/repository/biocontainers/svdb/status
   :target: https://quay.io/repository/biocontainers/svdb
.. _`svdb/tags`: https://quay.io/repository/biocontainers/svdb?tab=tags


.. raw:: html

    <script>
        var package = "svdb";
        var versions = ["2.8.3","2.8.2","2.8.2","2.8.2","2.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdb/README.html