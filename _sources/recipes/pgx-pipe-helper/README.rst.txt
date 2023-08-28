:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgx-pipe-helper'
.. highlight: bash

pgx-pipe-helper
===============

.. conda:recipe:: pgx-pipe-helper
   :replaces_section_title:
   :noindex:

   A helper module for wrapping functionality which is common to all pipeline stages.

   :homepage: https://github.com/lumc/pgx-pipe-helper
   :license: MIT / MIT
   :recipe: /`pgx-pipe-helper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-pipe-helper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-pipe-helper/meta.yaml>`_

   


.. conda:package:: pgx-pipe-helper

   |downloads_pgx-pipe-helper| |docker_pgx-pipe-helper|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends locus_processing: 
   :depends python: 
   :depends pyyaml: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pgx-pipe-helper

   and update with::

      mamba update pgx-pipe-helper

  To create a new environment, run::

      mamba create --name myenvname pgx-pipe-helper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgx-pipe-helper:<tag>

   (see `pgx-pipe-helper/tags`_ for valid values for ``<tag>``)


.. |downloads_pgx-pipe-helper| image:: https://img.shields.io/conda/dn/bioconda/pgx-pipe-helper.svg?style=flat
   :target: https://anaconda.org/bioconda/pgx-pipe-helper
   :alt:   (downloads)
.. |docker_pgx-pipe-helper| image:: https://quay.io/repository/biocontainers/pgx-pipe-helper/status
   :target: https://quay.io/repository/biocontainers/pgx-pipe-helper
.. _`pgx-pipe-helper/tags`: https://quay.io/repository/biocontainers/pgx-pipe-helper?tab=tags


.. raw:: html

    <script>
        var package = "pgx-pipe-helper";
        var versions = ["0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgx-pipe-helper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgx-pipe-helper/README.html