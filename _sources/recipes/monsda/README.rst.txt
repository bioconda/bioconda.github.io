:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monsda'
.. highlight: bash

monsda
======

.. conda:recipe:: monsda
   :replaces_section_title:
   :noindex:

   MONSDA\, Modular Organizer of Nextflow and Snakemake driven HTS Data Analysis

   :homepage: https://github.com/jfallmann/MONSDA
   :documentation: https://monsda.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`monsda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda/meta.yaml>`_

   


.. conda:package:: monsda

   |downloads_monsda| |docker_monsda|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.83``
   :depends black: ``>=21.5b2``
   :depends flake8: ``>=3.8.3``
   :depends natsort: ``>=8.4.0``
   :depends nextflow: ``>=23.10.1``
   :depends numpy: ``>=1.26.4``
   :depends pandas: ``>=2.2.1``
   :depends perl: ``>=5.32.0``
   :depends python: ``>=3.12``
   :depends pyyaml: ``>=6.0.1``
   :depends scipy: ``>=1.12.0``
   :depends snakemake: ``>=8.10.0``
   :depends snakemake-executor-plugin-cluster-generic: ``1.0.9.*``
   :depends snakemake-executor-plugin-slurm: ``0.4.2.*``
   :depends snakemake-interface-common: ``1.17.1.*``
   :depends snakemake-interface-executor-plugins: ``9.0.2.*``
   :depends snakemake-interface-report-plugins: ``1.0.0.*``
   :depends snakemake-interface-storage-plugins: ``3.1.1.*``
   :depends snakemake-storage-plugin-s3: ``0.2.10.*``
   :depends versioneer: ``>=0.20``
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

      mamba install monsda

   and update with::

      mamba update monsda

  To create a new environment, run::

      mamba create --name myenvname monsda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/monsda:<tag>

   (see `monsda/tags`_ for valid values for ``<tag>``)


.. |downloads_monsda| image:: https://img.shields.io/conda/dn/bioconda/monsda.svg?style=flat
   :target: https://anaconda.org/bioconda/monsda
   :alt:   (downloads)
.. |docker_monsda| image:: https://quay.io/repository/biocontainers/monsda/status
   :target: https://quay.io/repository/biocontainers/monsda
.. _`monsda/tags`: https://quay.io/repository/biocontainers/monsda?tab=tags


.. raw:: html

    <script>
        var package = "monsda";
        var versions = ["1.2.4","1.2.2","1.2.2","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monsda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monsda/README.html