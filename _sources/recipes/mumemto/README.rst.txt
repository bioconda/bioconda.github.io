:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mumemto'
.. highlight: bash

mumemto
=======

.. conda:recipe:: mumemto
   :replaces_section_title:
   :noindex:

   Finding maximal unique matches across pangenomes

   :homepage: https://github.com/vikshiv/mumemto
   :license: GPL-3.0-only
   :recipe: /`mumemto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mumemto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mumemto/meta.yaml>`_

   Mumemto is a tool for finding a variety of matches across collections of sequences like a pangenome.
   It includes a visualization tool for visualizing pangenome synteny.



.. conda:package:: mumemto

   |downloads_mumemto| |docker_mumemto|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends plotly: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tqdm: 
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

      mamba install mumemto

   and update with::

      mamba update mumemto

  To create a new environment, run::

      mamba create --name myenvname mumemto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mumemto:<tag>

   (see `mumemto/tags`_ for valid values for ``<tag>``)


.. |downloads_mumemto| image:: https://img.shields.io/conda/dn/bioconda/mumemto.svg?style=flat
   :target: https://anaconda.org/bioconda/mumemto
   :alt:   (downloads)
.. |docker_mumemto| image:: https://quay.io/repository/biocontainers/mumemto/status
   :target: https://quay.io/repository/biocontainers/mumemto
.. _`mumemto/tags`: https://quay.io/repository/biocontainers/mumemto?tab=tags


.. raw:: html

    <script>
        var package = "mumemto";
        var versions = ["1.3.0","1.2.2","1.2.1","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mumemto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mumemto/README.html