:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'validate-fasta-database'
.. highlight: bash

validate-fasta-database
=======================

.. conda:recipe:: validate-fasta-database
   :replaces_section_title:
   :noindex:

   Code for Galaxy tool for quality control on FASTA database

   :homepage: https://github.com/caleb-easterly/validate_fasta_database
   :license: GPL-3.0
   :recipe: /`validate-fasta-database <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database/meta.yaml>`_

   


.. conda:package:: validate-fasta-database

   |downloads_validate-fasta-database| |docker_validate-fasta-database|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends openjdk: ``>=7``
   :depends python: 
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

      mamba install validate-fasta-database

   and update with::

      mamba update validate-fasta-database

  To create a new environment, run::

      mamba create --name myenvname validate-fasta-database

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/validate-fasta-database:<tag>

   (see `validate-fasta-database/tags`_ for valid values for ``<tag>``)


.. |downloads_validate-fasta-database| image:: https://img.shields.io/conda/dn/bioconda/validate-fasta-database.svg?style=flat
   :target: https://anaconda.org/bioconda/validate-fasta-database
   :alt:   (downloads)
.. |docker_validate-fasta-database| image:: https://quay.io/repository/biocontainers/validate-fasta-database/status
   :target: https://quay.io/repository/biocontainers/validate-fasta-database
.. _`validate-fasta-database/tags`: https://quay.io/repository/biocontainers/validate-fasta-database?tab=tags


.. raw:: html

    <script>
        var package = "validate-fasta-database";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/validate-fasta-database/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/validate-fasta-database/README.html