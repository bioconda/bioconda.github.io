:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snkmt'
.. highlight: bash

snkmt
=====

.. conda:recipe:: snkmt
   :replaces_section_title:
   :noindex:

   A TUI for monitoring Snakemake workflows in real\-time.

   :homepage: https://github.com/cademirch/snkmt
   :license: MIT / MIT
   :recipe: /`snkmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snkmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snkmt/meta.yaml>`_

   


.. conda:package:: snkmt

   |downloads_snkmt| |docker_snkmt|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends aiosqlite: ``>=0.21.0,<0.22.0``
   :depends alembic: ``>=1.16.1,<2.0.0``
   :depends beaupy: ``>=3.0.0,<4.0.0``
   :depends loguru: ``>=0.7.3,<0.8.0``
   :depends platformdirs: ``>=4.3.8,<5.0.0``
   :depends python: 
   :depends sqlalchemy: ``>=2.0.38``
   :depends textual: ``>=3.1.1``
   :depends typer: ``>=0.15.3``
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

      mamba install snkmt

   and update with::

      mamba update snkmt

  To create a new environment, run::

      mamba create --name myenvname snkmt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snkmt:<tag>

   (see `snkmt/tags`_ for valid values for ``<tag>``)


.. |downloads_snkmt| image:: https://img.shields.io/conda/dn/bioconda/snkmt.svg?style=flat
   :target: https://anaconda.org/bioconda/snkmt
   :alt:   (downloads)
.. |docker_snkmt| image:: https://quay.io/repository/biocontainers/snkmt/status
   :target: https://quay.io/repository/biocontainers/snkmt
.. _`snkmt/tags`: https://quay.io/repository/biocontainers/snkmt?tab=tags


.. raw:: html

    <script>
        var package = "snkmt";
        var versions = ["0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snkmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snkmt/README.html