:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgx-variant-tools'
.. highlight: bash

pgx-variant-tools
=================

.. conda:recipe:: pgx-variant-tools
   :replaces_section_title:
   :noindex:

   This library contains various methods and utilities for the calling and manipulation of normalized variants.

   :homepage: https://github.com/LUMC/pgx-variant-tools
   :license: MIT / MIT
   :recipe: /`pgx-variant-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools/meta.yaml>`_

   


.. conda:package:: pgx-variant-tools

   |downloads_pgx-variant-tools| |docker_pgx-variant-tools|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends cyvcf2: 
   :depends numpy: 
   :depends pyinterval: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends requests: 
   :depends suds-jurko: 
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

      mamba install pgx-variant-tools

   and update with::

      mamba update pgx-variant-tools

  To create a new environment, run::

      mamba create --name myenvname pgx-variant-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgx-variant-tools:<tag>

   (see `pgx-variant-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_pgx-variant-tools| image:: https://img.shields.io/conda/dn/bioconda/pgx-variant-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pgx-variant-tools
   :alt:   (downloads)
.. |docker_pgx-variant-tools| image:: https://quay.io/repository/biocontainers/pgx-variant-tools/status
   :target: https://quay.io/repository/biocontainers/pgx-variant-tools
.. _`pgx-variant-tools/tags`: https://quay.io/repository/biocontainers/pgx-variant-tools?tab=tags


.. raw:: html

    <script>
        var package = "pgx-variant-tools";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgx-variant-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgx-variant-tools/README.html