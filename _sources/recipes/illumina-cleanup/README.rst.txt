:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-cleanup'
.. highlight: bash

illumina-cleanup
================

.. conda:recipe:: illumina-cleanup
   :replaces_section_title:
   :noindex:

   Nextflow pipeline for pre\-processing Illumina FASTQ files

   :homepage: https://github.com/rpetit3/illumina-cleanup
   :license: MIT
   :recipe: /`illumina-cleanup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-cleanup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-cleanup/meta.yaml>`_

   


.. conda:package:: illumina-cleanup

   |downloads_illumina-cleanup| |docker_illumina-cleanup|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bbmap: 
   :depends fastq-scan: 
   :depends fastqc: 
   :depends lighter: 
   :depends nextflow: 
   :depends pigz: 
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

      mamba install illumina-cleanup

   and update with::

      mamba update illumina-cleanup

  To create a new environment, run::

      mamba create --name myenvname illumina-cleanup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/illumina-cleanup:<tag>

   (see `illumina-cleanup/tags`_ for valid values for ``<tag>``)


.. |downloads_illumina-cleanup| image:: https://img.shields.io/conda/dn/bioconda/illumina-cleanup.svg?style=flat
   :target: https://anaconda.org/bioconda/illumina-cleanup
   :alt:   (downloads)
.. |docker_illumina-cleanup| image:: https://quay.io/repository/biocontainers/illumina-cleanup/status
   :target: https://quay.io/repository/biocontainers/illumina-cleanup
.. _`illumina-cleanup/tags`: https://quay.io/repository/biocontainers/illumina-cleanup?tab=tags


.. raw:: html

    <script>
        var package = "illumina-cleanup";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-cleanup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-cleanup/README.html