:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'djinn'
.. highlight: bash

djinn
=====

.. conda:recipe:: djinn
   :replaces_section_title:
   :noindex:

   Convert your linked\-read data between formats\, almost like magic.

   :homepage: https://github.com/pdimens/djinn
   :documentation: https://pdimens.github.io/djinn
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`djinn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/djinn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/djinn/meta.yaml>`_

   There are disagreements between formats for linked\-read data. Haplotagging thinks
   linked\-read barcodes and FASTQ files should look one way\, stLFR a different way\, and
   TELLseq yet another. Djinn lets you convert to a standard format\, convert between these
   FASTQ formats\, barcode styles\, etc. It also provides a convenient method to upload linked\-read
   data to NCBI that preserves barcode information.



.. conda:package:: djinn

   |downloads_djinn| |docker_djinn|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-0``

      

   
   :depends click: ``>=8.2``
   :depends pysam: ``>=0.23``
   :depends python: ``>=3.11``
   :depends rich-click: ``1.9.*``
   :depends samtools: ``>=1.22``
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

      mamba install djinn

   and update with::

      mamba update djinn

  To create a new environment, run::

      mamba create --name myenvname djinn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/djinn:<tag>

   (see `djinn/tags`_ for valid values for ``<tag>``)


.. |downloads_djinn| image:: https://img.shields.io/conda/dn/bioconda/djinn.svg?style=flat
   :target: https://anaconda.org/bioconda/djinn
   :alt:   (downloads)
.. |docker_djinn| image:: https://quay.io/repository/biocontainers/djinn/status
   :target: https://quay.io/repository/biocontainers/djinn
.. _`djinn/tags`: https://quay.io/repository/biocontainers/djinn?tab=tags


.. raw:: html

    <script>
        var package = "djinn";
        var versions = ["1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/djinn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/djinn/README.html