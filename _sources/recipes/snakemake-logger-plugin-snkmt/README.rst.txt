:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-logger-plugin-snkmt'
.. highlight: bash

snakemake-logger-plugin-snkmt
=============================

.. conda:recipe:: snakemake-logger-plugin-snkmt
   :replaces_section_title:
   :noindex:

   Snakemake logger plugin that writes logs to SQLite database.

   :homepage: https://github.com/cademirch/snakemake-logger-plugin-snkmt
   :license: MIT / MIT
   :recipe: /`snakemake-logger-plugin-snkmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-snkmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-snkmt/meta.yaml>`_

   


.. conda:package:: snakemake-logger-plugin-snkmt

   |downloads_snakemake-logger-plugin-snkmt| |docker_snakemake-logger-plugin-snkmt|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends python: 
   :depends snakemake-interface-logger-plugins: ``>=2.0.0,<3.0.0``
   :depends snkmt: ``>=0.2.3,<1.0.0``
   :depends sqlalchemy: ``>=2.0.38,<3.0.0``
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

      mamba install snakemake-logger-plugin-snkmt

   and update with::

      mamba update snakemake-logger-plugin-snkmt

  To create a new environment, run::

      mamba create --name myenvname snakemake-logger-plugin-snkmt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-logger-plugin-snkmt:<tag>

   (see `snakemake-logger-plugin-snkmt/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-logger-plugin-snkmt| image:: https://img.shields.io/conda/dn/bioconda/snakemake-logger-plugin-snkmt.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-logger-plugin-snkmt
   :alt:   (downloads)
.. |docker_snakemake-logger-plugin-snkmt| image:: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt/status
   :target: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt
.. _`snakemake-logger-plugin-snkmt/tags`: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-logger-plugin-snkmt";
        var versions = ["0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-logger-plugin-snkmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-logger-plugin-snkmt/README.html