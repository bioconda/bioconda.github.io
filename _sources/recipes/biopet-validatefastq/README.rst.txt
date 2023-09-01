:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validatefastq'
.. highlight: bash

biopet-validatefastq
====================

.. conda:recipe:: biopet-validatefastq
   :replaces_section_title:
   :noindex:

   This tool validates a FASTQ file.

   :homepage: https://github.com/biopet/validatefastq
   :license: MIT
   :recipe: /`biopet-validatefastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatefastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatefastq/meta.yaml>`_

   This tool validates a FASTQ file. When data is paired it can
   also validate a pair of FASTQ files.
   ValidateFastq will check if the FASTQ is in valid FASTQ format.
   This includes checking for duplicate reads and checking whether
   a pair of FASTQ files contains the same amount of reads and headers match.
   It also check whether the quality encodings are correct and outputs
   the most likely encoding format \(Sanger\, Solexa etc.\).

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatefastq


.. conda:package:: biopet-validatefastq

   |downloads_biopet-validatefastq| |docker_biopet-validatefastq|

   :versions:
      
      

      ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
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

      mamba install biopet-validatefastq

   and update with::

      mamba update biopet-validatefastq

  To create a new environment, run::

      mamba create --name myenvname biopet-validatefastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-validatefastq:<tag>

   (see `biopet-validatefastq/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-validatefastq| image:: https://img.shields.io/conda/dn/bioconda/biopet-validatefastq.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validatefastq
   :alt:   (downloads)
.. |docker_biopet-validatefastq| image:: https://quay.io/repository/biocontainers/biopet-validatefastq/status
   :target: https://quay.io/repository/biocontainers/biopet-validatefastq
.. _`biopet-validatefastq/tags`: https://quay.io/repository/biocontainers/biopet-validatefastq?tab=tags


.. raw:: html

    <script>
        var package = "biopet-validatefastq";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>





Notes
-----
biopet\-validatefastq is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatefastq\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatefastq \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validatefastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validatefastq/README.html