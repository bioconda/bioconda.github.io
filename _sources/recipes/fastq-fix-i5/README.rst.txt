:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-fix-i5'
.. highlight: bash

fastq-fix-i5
============

.. conda:recipe:: fastq-fix-i5
   :replaces_section_title:
   :noindex:

   Rewrite FASTQ headers by reverse\-complementing the i5 \(Index2\/P5\) barcode in \:i7\+i5

   :homepage: https://github.com/ssciwr/fastq-fix-i5
   :license: MIT
   :recipe: /`fastq-fix-i5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-fix-i5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-fix-i5/meta.yaml>`_

   A fast\, streaming tool to rewrite FASTQ headers by reverse\-complementing the i5 \(Index2 \/ P5\)
   barcode\, without modifying read sequences or quality scores. Headers are expected to end with the
   standard Illumina \`\:\<i7\>\+\<i5\>\` format.



.. conda:package:: fastq-fix-i5

   |downloads_fastq-fix-i5| |docker_fastq-fix-i5|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install fastq-fix-i5

   and update with::

      mamba update fastq-fix-i5

  To create a new environment, run::

      mamba create --name myenvname fastq-fix-i5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-fix-i5:<tag>

   (see `fastq-fix-i5/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-fix-i5| image:: https://img.shields.io/conda/dn/bioconda/fastq-fix-i5.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-fix-i5
   :alt:   (downloads)
.. |docker_fastq-fix-i5| image:: https://quay.io/repository/biocontainers/fastq-fix-i5/status
   :target: https://quay.io/repository/biocontainers/fastq-fix-i5
.. _`fastq-fix-i5/tags`: https://quay.io/repository/biocontainers/fastq-fix-i5?tab=tags


.. raw:: html

    <script>
        var package = "fastq-fix-i5";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-fix-i5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-fix-i5/README.html