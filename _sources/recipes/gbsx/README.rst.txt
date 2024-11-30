:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbsx'
.. highlight: bash

gbsx
====

.. conda:recipe:: gbsx
   :replaces_section_title:
   :noindex:

   Toolkit for experimental design and demultiplexing genotyping by sequencing experiments

   :homepage: https://github.com/GenomicsCoreLeuven/GBSX
   :license: GPL / GPL-3.0
   :recipe: /`gbsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0514-3`

   Genotyping By Sequencing demultipleXing toolkit \(GBSX\) is a toolkit with an
   inline barcode demultiplexer for usage in the analysis of single read or
   paired\-end genotyping by sequence \(GBS\) data\, a barcode generator\, a barcode
   discovery tool\, and a restriction enzyme predictor. GBSX can easily be
   incorperated as a preceding analysis step for already deployed SNP pipelines.



.. conda:package:: gbsx

   |downloads_gbsx| |docker_gbsx|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: 
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

      mamba install gbsx

   and update with::

      mamba update gbsx

  To create a new environment, run::

      mamba create --name myenvname gbsx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gbsx:<tag>

   (see `gbsx/tags`_ for valid values for ``<tag>``)


.. |downloads_gbsx| image:: https://img.shields.io/conda/dn/bioconda/gbsx.svg?style=flat
   :target: https://anaconda.org/bioconda/gbsx
   :alt:   (downloads)
.. |docker_gbsx| image:: https://quay.io/repository/biocontainers/gbsx/status
   :target: https://quay.io/repository/biocontainers/gbsx
.. _`gbsx/tags`: https://quay.io/repository/biocontainers/gbsx?tab=tags


.. raw:: html

    <script>
        var package = "gbsx";
        var versions = ["1.3","1.3"];
    </script>





Notes
-----
GBSX is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"gbsx\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"gbsx \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbsx/README.html