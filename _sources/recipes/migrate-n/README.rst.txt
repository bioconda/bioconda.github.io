:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migrate-n'
.. highlight: bash

migrate-n
=========

.. conda:recipe:: migrate-n
   :replaces_section_title:
   :noindex:

   Population Genetics \- Panmixia and Migration detection

   :homepage: http://popgen.sc.fsu.edu/Migrate/Migrate-n.html
   :license: MIT
   :recipe: /`migrate-n <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migrate-n>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migrate-n/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu033`

   


.. conda:package:: migrate-n

   |downloads_migrate-n| |docker_migrate-n|

   :versions:
      
      

      ``3.6.11-6``,  ``3.6.11-5``,  ``3.6.11-4``,  ``3.6.11-3``,  ``3.6.11-2``,  ``3.6.11-1``,  ``3.6.11-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmpi: ``>=4.1.5,<5.0a0``
   :depends zlib: 
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

      mamba install migrate-n

   and update with::

      mamba update migrate-n

  To create a new environment, run::

      mamba create --name myenvname migrate-n

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/migrate-n:<tag>

   (see `migrate-n/tags`_ for valid values for ``<tag>``)


.. |downloads_migrate-n| image:: https://img.shields.io/conda/dn/bioconda/migrate-n.svg?style=flat
   :target: https://anaconda.org/bioconda/migrate-n
   :alt:   (downloads)
.. |docker_migrate-n| image:: https://quay.io/repository/biocontainers/migrate-n/status
   :target: https://quay.io/repository/biocontainers/migrate-n
.. _`migrate-n/tags`: https://quay.io/repository/biocontainers/migrate-n?tab=tags


.. raw:: html

    <script>
        var package = "migrate-n";
        var versions = ["3.6.11","3.6.11","3.6.11","3.6.11","3.6.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migrate-n/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migrate-n/README.html