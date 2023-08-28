:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sff2fastq'
.. highlight: bash

sff2fastq
=========

.. conda:recipe:: sff2fastq
   :replaces_section_title:
   :noindex:

   Extract 454 Genome Sequencer reads from a SFF file and convert them into a FASTQ formatted output

   :homepage: https://github.com/indraniel/sff2fastq
   :license: GPL / GPL-3
   :recipe: /`sff2fastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sff2fastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sff2fastq/meta.yaml>`_
   :links: biotools: :biotools:`sff2fastq`

   The program sff2fastq extracts read information from a SFF file\, produced by
   the 454 genome sequencer\, and outputs the sequences and quality scores in a
   FASTQ format.



.. conda:package:: sff2fastq

   |downloads_sff2fastq| |docker_sff2fastq|

   :versions:
      
      

      ``0.9.2-1``,  ``0.9.2-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install sff2fastq

   and update with::

      mamba update sff2fastq

  To create a new environment, run::

      mamba create --name myenvname sff2fastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sff2fastq:<tag>

   (see `sff2fastq/tags`_ for valid values for ``<tag>``)


.. |downloads_sff2fastq| image:: https://img.shields.io/conda/dn/bioconda/sff2fastq.svg?style=flat
   :target: https://anaconda.org/bioconda/sff2fastq
   :alt:   (downloads)
.. |docker_sff2fastq| image:: https://quay.io/repository/biocontainers/sff2fastq/status
   :target: https://quay.io/repository/biocontainers/sff2fastq
.. _`sff2fastq/tags`: https://quay.io/repository/biocontainers/sff2fastq?tab=tags


.. raw:: html

    <script>
        var package = "sff2fastq";
        var versions = ["0.9.2","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sff2fastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sff2fastq/README.html