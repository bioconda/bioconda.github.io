:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylobayes-mpi'
.. highlight: bash

phylobayes-mpi
==============

.. conda:recipe:: phylobayes-mpi
   :replaces_section_title:
   :noindex:

   A Bayesian software for phylogentic reconstrunction using mixture models

   :homepage: https://github.com/bayesiancook/pbmpi
   :license: GPL2
   :recipe: /`phylobayes-mpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylobayes-mpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylobayes-mpi/meta.yaml>`_

   


.. conda:package:: phylobayes-mpi

   |downloads_phylobayes-mpi| |docker_phylobayes-mpi|

   :versions:
      
      

      ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8c-2``,  ``1.8c-1``,  ``1.8c-0``,  ``1.8b-0``

      

   
   :depends libcxx: ``>=18``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phylobayes-mpi

   and update with::

      mamba update phylobayes-mpi

  To create a new environment, run::

      mamba create --name myenvname phylobayes-mpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylobayes-mpi:<tag>

   (see `phylobayes-mpi/tags`_ for valid values for ``<tag>``)


.. |downloads_phylobayes-mpi| image:: https://img.shields.io/conda/dn/bioconda/phylobayes-mpi.svg?style=flat
   :target: https://anaconda.org/bioconda/phylobayes-mpi
   :alt:   (downloads)
.. |docker_phylobayes-mpi| image:: https://quay.io/repository/biocontainers/phylobayes-mpi/status
   :target: https://quay.io/repository/biocontainers/phylobayes-mpi
.. _`phylobayes-mpi/tags`: https://quay.io/repository/biocontainers/phylobayes-mpi?tab=tags


.. raw:: html

    <script>
        var package = "phylobayes-mpi";
        var versions = ["1.9","1.9","1.9","1.9","1.8c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylobayes-mpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylobayes-mpi/README.html