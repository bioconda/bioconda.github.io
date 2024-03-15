:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocamlib'
.. highlight: bash

biocamlib
=========

.. conda:recipe:: biocamlib
   :replaces_section_title:
   :noindex:

   An OCaml foundation upon which a number of the bioinformatics tools are built.

   :homepage: https://github.com/PaoloRibeca/BiOCamLib
   :license: GPL-3.0-only
   :recipe: /`biocamlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocamlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocamlib/meta.yaml>`_

   BiOCamLib is an OCaml foundation upon which a number of the bioinformatics tools are built\,
   including KPop \<https\:\/\/github.com\/PaoloRibeca\/KPop\>. It consists of four tools\:
   1. RC\, which can efficiently compute the reverse complement of sequences.
   2. Octopus\, which is a high\-throughput program to compute the transitive closure of strings.
   3. Parallel\, which allows the splits and processes an input file chunk\-wise using a reader\/workers\/writer model.
   4. FASTools\, which is a Swiss\-knife tool for the manipulation of FASTA\/FASTQ files.



.. conda:package:: biocamlib

   |downloads_biocamlib| |docker_biocamlib|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install biocamlib

   and update with::

      mamba update biocamlib

  To create a new environment, run::

      mamba create --name myenvname biocamlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biocamlib:<tag>

   (see `biocamlib/tags`_ for valid values for ``<tag>``)


.. |downloads_biocamlib| image:: https://img.shields.io/conda/dn/bioconda/biocamlib.svg?style=flat
   :target: https://anaconda.org/bioconda/biocamlib
   :alt:   (downloads)
.. |docker_biocamlib| image:: https://quay.io/repository/biocontainers/biocamlib/status
   :target: https://quay.io/repository/biocontainers/biocamlib
.. _`biocamlib/tags`: https://quay.io/repository/biocontainers/biocamlib?tab=tags


.. raw:: html

    <script>
        var package = "biocamlib";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocamlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocamlib/README.html