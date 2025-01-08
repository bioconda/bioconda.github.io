:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabinr'
.. highlight: bash

bioconductor-metabinr
=====================

.. conda:recipe:: bioconductor-metabinr
   :replaces_section_title:
   :noindex:

   Abundance and Compositional Based Binning of Metagenomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metabinR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabinr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr/meta.yaml>`_

   Provide functions for performing abundance and compositional based binning on metagenomic samples\, directly from FASTA or FASTQ files. Functions are implemented in Java and called via rJava. Parallel implementation that operates directly on input FASTA\/FASTQ files for fast execution.


.. conda:package:: bioconductor-metabinr

   |downloads_bioconductor-metabinr| |docker_bioconductor-metabinr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends openjdk: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rjava: 
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

      mamba install bioconductor-metabinr

   and update with::

      mamba update bioconductor-metabinr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metabinr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabinr:<tag>

   (see `bioconductor-metabinr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabinr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabinr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabinr
   :alt:   (downloads)
.. |docker_bioconductor-metabinr| image:: https://quay.io/repository/biocontainers/bioconductor-metabinr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabinr
.. _`bioconductor-metabinr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabinr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabinr";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabinr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabinr/README.html