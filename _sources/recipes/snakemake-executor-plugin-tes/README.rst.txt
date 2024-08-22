:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-tes'
.. highlight: bash

snakemake-executor-plugin-tes
=============================

.. conda:recipe:: snakemake-executor-plugin-tes
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to a GA4GH TES cluster.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-tes
   :license: MIT
   :recipe: /`snakemake-executor-plugin-tes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-tes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-tes/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-tes

   |downloads_snakemake-executor-plugin-tes| |docker_snakemake-executor-plugin-tes|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends py-tes: ``>=0.4.2,<0.5.0``
   :depends python: ``>=3.11.0,<3.13``
   :depends snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``
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

      mamba install snakemake-executor-plugin-tes

   and update with::

      mamba update snakemake-executor-plugin-tes

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-tes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-tes:<tag>

   (see `snakemake-executor-plugin-tes/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-tes| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-tes.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-tes
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-tes| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-tes/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-tes
.. _`snakemake-executor-plugin-tes/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-tes?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-tes";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-tes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-tes/README.html