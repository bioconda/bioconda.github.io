:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cactus-gfa-tools'
.. highlight: bash

cactus-gfa-tools
================

.. conda:recipe:: cactus-gfa-tools
   :replaces_section_title:
   :noindex:

   Command\-line utilitites required for the Cactus Pangenome Pipeline.

   :homepage: https://github.com/ComparativeGenomicsToolkit/cactus-gfa-tools
   :documentation: https://github.com/ComparativeGenomicsToolkit/cactus-gfa-tools/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`cactus-gfa-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus-gfa-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus-gfa-tools/meta.yaml>`_

   


.. conda:package:: cactus-gfa-tools

   |downloads_cactus-gfa-tools| |docker_cactus-gfa-tools|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
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

      mamba install cactus-gfa-tools

   and update with::

      mamba update cactus-gfa-tools

  To create a new environment, run::

      mamba create --name myenvname cactus-gfa-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cactus-gfa-tools:<tag>

   (see `cactus-gfa-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_cactus-gfa-tools| image:: https://img.shields.io/conda/dn/bioconda/cactus-gfa-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cactus-gfa-tools
   :alt:   (downloads)
.. |docker_cactus-gfa-tools| image:: https://quay.io/repository/biocontainers/cactus-gfa-tools/status
   :target: https://quay.io/repository/biocontainers/cactus-gfa-tools
.. _`cactus-gfa-tools/tags`: https://quay.io/repository/biocontainers/cactus-gfa-tools?tab=tags


.. raw:: html

    <script>
        var package = "cactus-gfa-tools";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cactus-gfa-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cactus-gfa-tools/README.html