:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afterqc'
.. highlight: bash

afterqc
=======

.. conda:recipe:: afterqc
   :replaces_section_title:
   :noindex:

   Automatic Filtering\, Trimming\, Error Removing and Quality Control for fastq data. AfterQC can simply go through all fastq files in a folder and then output three folders\: good\, bad and QC folders\, which contains good reads\, bad reads and the QC results of each fastq file\/pair. Currently it supports processing data from HiSeq 2000\/2500\/3000\/4000\, Nextseq 500\/550\, MiniSeq...and other Illumina 1.8 or newer formats.

   :homepage: https://github.com/OpenGene/AfterQC
   :license: MIT / MIT
   :recipe: /`afterqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afterqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afterqc/meta.yaml>`_

   


.. conda:package:: afterqc

   |downloads_afterqc| |docker_afterqc|

   :versions:
      
      

      ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-0``,  ``0.9.6-0``

      

   
   :depends python: ``>=2.7,<3.0a0``
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

      mamba install afterqc

   and update with::

      mamba update afterqc

  To create a new environment, run::

      mamba create --name myenvname afterqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/afterqc:<tag>

   (see `afterqc/tags`_ for valid values for ``<tag>``)


.. |downloads_afterqc| image:: https://img.shields.io/conda/dn/bioconda/afterqc.svg?style=flat
   :target: https://anaconda.org/bioconda/afterqc
   :alt:   (downloads)
.. |docker_afterqc| image:: https://quay.io/repository/biocontainers/afterqc/status
   :target: https://quay.io/repository/biocontainers/afterqc
.. _`afterqc/tags`: https://quay.io/repository/biocontainers/afterqc?tab=tags


.. raw:: html

    <script>
        var package = "afterqc";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afterqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afterqc/README.html