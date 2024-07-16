:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtdb_to_taxdump'
.. highlight: bash

gtdb_to_taxdump
===============

.. conda:recipe:: gtdb_to_taxdump
   :replaces_section_title:
   :noindex:

   GTDB database utility scripts

   :homepage: https://github.com/nick-youngblut/gtdb_to_taxdump
   :license: MIT / MIT
   :recipe: /`gtdb_to_taxdump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdb_to_taxdump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdb_to_taxdump/meta.yaml>`_

   


.. conda:package:: gtdb_to_taxdump

   |downloads_gtdb_to_taxdump| |docker_gtdb_to_taxdump|

   :versions:
      
      

      ``0.1.9-0``

      

   
   :depends networkx: 
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends python: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gtdb_to_taxdump

   and update with::

      mamba update gtdb_to_taxdump

  To create a new environment, run::

      mamba create --name myenvname gtdb_to_taxdump

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtdb_to_taxdump:<tag>

   (see `gtdb_to_taxdump/tags`_ for valid values for ``<tag>``)


.. |downloads_gtdb_to_taxdump| image:: https://img.shields.io/conda/dn/bioconda/gtdb_to_taxdump.svg?style=flat
   :target: https://anaconda.org/bioconda/gtdb_to_taxdump
   :alt:   (downloads)
.. |docker_gtdb_to_taxdump| image:: https://quay.io/repository/biocontainers/gtdb_to_taxdump/status
   :target: https://quay.io/repository/biocontainers/gtdb_to_taxdump
.. _`gtdb_to_taxdump/tags`: https://quay.io/repository/biocontainers/gtdb_to_taxdump?tab=tags


.. raw:: html

    <script>
        var package = "gtdb_to_taxdump";
        var versions = ["0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtdb_to_taxdump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtdb_to_taxdump/README.html