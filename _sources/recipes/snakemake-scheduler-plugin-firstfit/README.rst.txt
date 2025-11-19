:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-scheduler-plugin-firstfit'
.. highlight: bash

snakemake-scheduler-plugin-firstfit
===================================

.. conda:recipe:: snakemake-scheduler-plugin-firstfit
   :replaces_section_title:
   :noindex:

   A Snakemake scheduler plugin that selects the first jobs that fit available resources.

   :homepage: https://github.com/snakemake/snakemake-scheduler-plugin-firstfit
   :license: MIT / MIT
   :recipe: /`snakemake-scheduler-plugin-firstfit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-firstfit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-firstfit/meta.yaml>`_

   


.. conda:package:: snakemake-scheduler-plugin-firstfit

   |downloads_snakemake-scheduler-plugin-firstfit| |docker_snakemake-scheduler-plugin-firstfit|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends python: 
   :depends snakemake-interface-scheduler-plugins: ``>=2.0.2,<3.0.0``
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

      mamba install snakemake-scheduler-plugin-firstfit

   and update with::

      mamba update snakemake-scheduler-plugin-firstfit

  To create a new environment, run::

      mamba create --name myenvname snakemake-scheduler-plugin-firstfit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-scheduler-plugin-firstfit:<tag>

   (see `snakemake-scheduler-plugin-firstfit/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-scheduler-plugin-firstfit| image:: https://img.shields.io/conda/dn/bioconda/snakemake-scheduler-plugin-firstfit.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-scheduler-plugin-firstfit
   :alt:   (downloads)
.. |docker_snakemake-scheduler-plugin-firstfit| image:: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-firstfit/status
   :target: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-firstfit
.. _`snakemake-scheduler-plugin-firstfit/tags`: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-firstfit?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-scheduler-plugin-firstfit";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-scheduler-plugin-firstfit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-scheduler-plugin-firstfit/README.html