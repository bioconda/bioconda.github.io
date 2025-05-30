:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vidjil-algo'
.. highlight: bash

vidjil-algo
===========

.. conda:recipe:: vidjil-algo
   :replaces_section_title:
   :noindex:

   Vidjil is an open\-source platform for the analysis of high\-throughput sequencing data from lymphocytes.

   :homepage: https://gitlab.inria.fr/vidjil/vidjil
   :documentation: https://www.vidjil.org/doc
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`vidjil-algo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vidjil-algo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vidjil-algo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2164-15-409`, doi: :doi:`10.1371/journal.pone.0166126`

   


.. conda:package:: vidjil-algo

   |downloads_vidjil-algo| |docker_vidjil-algo|

   :versions:
      
      

      ``2025.02-0``

      

   
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

      mamba install vidjil-algo

   and update with::

      mamba update vidjil-algo

  To create a new environment, run::

      mamba create --name myenvname vidjil-algo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vidjil-algo:<tag>

   (see `vidjil-algo/tags`_ for valid values for ``<tag>``)


.. |downloads_vidjil-algo| image:: https://img.shields.io/conda/dn/bioconda/vidjil-algo.svg?style=flat
   :target: https://anaconda.org/bioconda/vidjil-algo
   :alt:   (downloads)
.. |docker_vidjil-algo| image:: https://quay.io/repository/biocontainers/vidjil-algo/status
   :target: https://quay.io/repository/biocontainers/vidjil-algo
.. _`vidjil-algo/tags`: https://quay.io/repository/biocontainers/vidjil-algo?tab=tags


.. raw:: html

    <script>
        var package = "vidjil-algo";
        var versions = ["2025.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vidjil-algo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vidjil-algo/README.html